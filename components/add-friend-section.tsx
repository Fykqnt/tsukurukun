"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function AddFriendSection() {
  return (
    <section id="add-friend-section" className="w-full py-24 bg-white relative">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-green-50 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-green-50 to-transparent opacity-70" />

        {/* 装飾的な円形 */}
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-green-100 to-green-200 opacity-30"
          style={{ filter: "blur(40px)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-gradient-to-tr from-green-100 to-green-200 opacity-30"
          style={{ filter: "blur(40px)" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <Sparkles className="h-10 w-10 text-green-500 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
            LINE公式アカウントを友だち追加
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            最新情報やお得な情報をLINEでお届けします。QRコードを読み取って友だち追加してください。
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="w-72 h-72 md:w-80 md:h-80 flex items-center justify-center shadow-xl border-green-200 overflow-hidden bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-0 w-full h-full flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Image
                    src="/images/line-qr.png"
                    alt="LINE QRコード"
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </motion.div>
              </CardContent>

              {/* カードの光沢効果 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                animate={{
                  opacity: [0, 0.5, 0],
                  left: ["-100%", "100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 5,
                }}
              />
            </Card>

            {/* 装飾要素 */}
            <motion.div
              className="absolute -z-10 rounded-full bg-green-100 w-32 h-32 -top-10 -left-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
            <motion.div
              className="absolute -z-10 rounded-full bg-green-200 w-24 h-24 -bottom-8 -right-8"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: 1,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">友だち追加の特典</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <motion.li
                  className="flex items-center justify-center md:justify-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white mr-2">
                    1
                  </span>
                  最新のウェブデザイントレンド情報
                </motion.li>
                <motion.li
                  className="flex items-center justify-center md:justify-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white mr-2">
                    2
                  </span>
                  ホームページ作成の無料アドバイス
                </motion.li>
                <motion.li
                  className="flex items-center justify-center md:justify-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white mr-2">
                    3
                  </span>
                  今だけのお得な限定価格
                </motion.li>
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://lin.ee/FKunUwt" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#06C755] to-[#05b24e] hover:from-[#05a648] hover:to-[#049440] text-white rounded-full px-8 text-lg mt-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    LINEで友だち追加
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
