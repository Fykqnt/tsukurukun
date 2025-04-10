import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "ホームページつくるくん | LINEで簡単ホームページ作成サービス",
  description:
    "【最短即日】LINEでチャットするだけで簡単にホームページが作れる！初心者でも安心、低価格で高品質なホームページ制作サービス。スマホ対応、SEO対策済み、デザイン豊富。",
  keywords:
    "ホームページ作成, LINE, ウェブサイト制作, 格安ホームページ, 初心者向け, スマホ対応, SEO対策, 最短即日, ホームページつくるくん",
  openGraph: {
    title: "ホームページつくるくん | LINEで簡単ホームページ作成サービス",
    description:
      "【最短即日】LINEでチャットするだけで簡単にホームページが作れる！初心者でも安心、低価格で高品質なホームページ制作サービス。",
    images: [
      {
        url: "/images/ogp-image.jpg",
        width: 1200,
        height: 630,
        alt: "ホームページつくるくん",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={`${notoSansJP.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'