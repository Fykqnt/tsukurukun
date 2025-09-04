import { NextResponse } from "next/server"
export const runtime = "nodejs"
import { Resend } from "resend"
import { z } from "zod"

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  organization: z.string().min(1),
  message: z.string().min(1),
})

const EMAIL_TO = process.env.EMAIL_TO
const EMAIL_FROM = process.env.EMAIL_FROM // e.g. noreply@your-verified-domain.com
const RESEND_API_KEY = process.env.RESEND_API_KEY

export async function POST(request: Request) {
  try {
    if (!EMAIL_TO || !RESEND_API_KEY) {
      console.error("/api/inquiries config error", {
        hasEmailTo: Boolean(EMAIL_TO),
        hasResendKey: Boolean(RESEND_API_KEY),
      })
      return NextResponse.json(
        { error: "Server not configured. Missing EMAIL_TO or RESEND_API_KEY." },
        { status: 500 }
      )
    }

    const json = await request.json().catch(() => null)
    const parsed = bodySchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      )
    }

    const { name, email, organization, message } = parsed.data

    // Normalize recipients from env (supports comma-separated list)
    const recipients = String(EMAIL_TO)
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean)

    if (recipients.length === 0) {
      console.error("/api/inquiries config error: no recipients after parsing EMAIL_TO")
      return NextResponse.json(
        { error: "Server not configured. EMAIL_TO has no valid recipient." },
        { status: 500 }
      )
    }

    const resend = new Resend(RESEND_API_KEY)
    const subject = "【ホームページつくるくん】お問い合わせ"
    const text = `お問い合わせが届きました。\n\nお名前: ${name}\nメールアドレス: ${email}\nご所属: ${organization}\nお問い合わせ内容:\n${message}`

    const html = `
      <div>
        <p>お問い合わせが届きました。</p>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>ご所属:</strong> ${organization}</p>
        <p><strong>お問い合わせ内容:</strong></p>
        <pre style="white-space:pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
      </div>
    `

    const fromAddress = EMAIL_FROM
      ? `ホームページつくるくん <${EMAIL_FROM}>`
      : "ホームページつくるくん <onboarding@resend.dev>"

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: recipients,
      subject,
      text,
      html,
      replyTo: email,
    })

    if (error) {
      // If sending with a custom domain fails (e.g., not verified), fall back to Resend test sender
      if (EMAIL_FROM) {
        const fallbackFrom = "ホームページつくるくん <onboarding@resend.dev>"
        const fallback = await resend.emails.send({
          from: fallbackFrom,
          to: recipients,
          subject,
          text,
          html,
          replyTo: email,
        })
        if (!fallback.error) {
          if (fallback.data?.id) {
            console.log("/api/inquiries sent (fallback)", { id: fallback.data.id, to: recipients, from: fallbackFrom })
          }
          return NextResponse.json({ ok: true, id: fallback.data?.id, fallback: true })
        }
      }
      try {
        console.error("/api/inquiries send error", {
          raw: error,
          name: (error as any)?.name,
          message: (error as any)?.message,
          details: (error as any)?.details,
          serialized: JSON.stringify(error),
        })
      } catch {}
      const errName = (error as any)?.name
      const errMsg = (error as any)?.message
      const errDetails = (error as any)?.details
      return NextResponse.json(
        { error: errMsg || errName || "Failed to send email", details: errDetails ?? error },
        { status: 500 }
      )
    }

    if (data?.id) {
      console.log("/api/inquiries sent", { id: data.id, to: recipients, from: fromAddress })
    }
    return NextResponse.json({ ok: true, id: data?.id })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error"
    console.error("/api/inquiries unexpected error", { message, error: e })
    return NextResponse.json({ error: message, details: e }, { status: 500 })
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}


