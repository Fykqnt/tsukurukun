"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: "ホームページつくるくんとは何ですか？",
      answer:
        "ホームページつくるくんは、LINEでチャットするだけで簡単にホームページを作成できるサービスです。専門知識がなくても、お客様のご要望をLINEでお伺いし、プロがホームページを制作します。",
    },
    {
      question: "料金はいくらですか？",
      answer:
        "料金プランは複数ご用意しております。シンプルなランディングページから本格的な企業サイトまで、ニーズに合わせたプランをご提案いたします。詳細は公式LINEアカウントにてお問い合わせください。",
    },
    {
      question: "おためしで料金は発生するのですか？",
      answer:
        "最初にこちらからおためしで提示させていただくウェブサイトに費用は発生いたしません。試験的に作成させていただいたウェブサイトをご確認いただいき契約をいただいた後に初めて料金が発生いたします。",
    },
    {
      question: "納期はどれくらいですか？",
      answer:
        "最短即日納品も可能です。ページ数や内容の複雑さによって納期は変動しますが、一般的なホームページであれば3〜5営業日程度でご提供可能です。急ぎの場合はご相談ください。",
    },
    {
      question: "スマートフォンにも対応していますか？",
      answer:
        "はい、すべてのホームページはスマートフォン・タブレット・PCなど、あらゆるデバイスで最適に表示されるレスポンシブデザインで制作しています。",
    },
    {
      question: "SEO対策はしていますか？",
      answer:
        "SEO対策は標準で行っています。検索エンジンに認識されやすいコーディングや、メタタグの最適化などを実施しています。さらに本格的なSEO対策も別途ご相談可能です。",
    },
    {
      question: "ドメインやサーバーの準備も必要ですか？",
      answer:
        "ドメイン取得やサーバー設定のサポートまで一気通貫で行っています(取得費用は別料金)。どなたでも安心してご利用いただけます。既にお持ちのドメインがある場合はそちらを使用することも可能です。",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-20 bg-green-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ホームページ制作に関するよくあるご質問にお答えします
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 border border-green-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-green-100 transition-colors text-left"
              >
                <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-green-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-500" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 p-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
