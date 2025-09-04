"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import { toast } from "@/hooks/use-toast"

const inquirySchema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("メールアドレスの形式が正しくありません"),
  organization: z.string().min(1, "ご所属は必須です"),
  message: z.string().min(1, "お問い合わせ内容は必須です"),
})

type InquiryValues = z.infer<typeof inquirySchema>

export default function InquiriesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
    },
  })

  async function onSubmit(values: InquiryValues) {
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || "送信に失敗しました。時間をおいて再度お試しください。")
      }
      toast({ title: "送信しました", description: "お問い合わせを受け付けました。ありがとうございました。" })
      form.reset()
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "送信に失敗しました"
      toast({ title: "送信エラー", description: message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-white to-green-50 pt-16">
      {/* Decorative light green bubbles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-green-100 opacity-60 blur-3xl" />
        <div className="absolute top-40 -right-20 h-48 w-48 rounded-full bg-green-200 opacity-50 blur-2xl" />
        <div className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-green-100 opacity-60 blur-3xl" />
      </div>
      <section className="relative z-10 w-full max-w-2xl px-4 py-10">
        <Card>
          <CardHeader>
            <CardTitle>お問い合わせ</CardTitle>
            <CardDescription>
              フォームに必要事項をご入力のうえ送信してください。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>お名前</FormLabel>
                      <FormControl>
                        <Input placeholder="山田 太郎" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>メールアドレス</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="taro@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ご所属</FormLabel>
                      <FormControl>
                        <Input placeholder="会社名・学校名など" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>お問い合わせ内容</FormLabel>
                      <FormControl>
                        <Textarea rows={6} placeholder="お問い合わせ内容をご記入ください" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
      <Toaster />
    </main>
  )
}


