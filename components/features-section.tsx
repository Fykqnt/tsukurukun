"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Zap, PaintBucket, Search, CreditCard } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-green-500" />,
      title: "最短即日納品",
      description: "急ぎのホームページ制作にも対応。LINEでのやり取りで素早く完成します。",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-green-500" />,
      title: "スマホ対応デザイン",
      description: "すべてのデバイスで美しく表示されるレスポンシブデザインを採用しています。",
    },
    {
      icon: <Search className="h-10 w-10 text-green-500" />,
      title: "SEO対策済み",
      description: "検索エンジンで上位表示されやすい構造で制作。集客効果を高めます。",
    },
    {
      icon: <PaintBucket className="h-10 w-10 text-green-500" />,
      title: "豊富なデザイン",
      description: "お客様の業種やイメージに合わせた多彩なデザインテンプレートをご用意。",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-green-500" />,
      title: "低価格プラン",
      description: "初期費用を抑えた格安プランから、本格的なサイトまで幅広く対応。",
    },
    {
      icon: <Globe className="h-10 w-10 text-green-500" />,
      title: "ドメイン・サーバー設定",
      description: "面倒なドメイン取得やサーバー設定もサポート。初心者でも安心です。",
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ホームページつくるくんの特徴</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LINEでチャットするだけで、プロ品質のホームページが完成します
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
