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
            LINEアカウントを友だち追加いただくことで早速お試しいただけます。
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Mobile button - fixed animation */}
          <div className="md:hidden w-full flex justify-center mb-6">
            <a href="https://line.me/R/ti/p/@647ahkhs" target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "loop" 
                  }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#06C755] to-[#05b24e] hover:from-[#05a648] hover:to-[#049440] text-white rounded-full px-10 py-7 text-xl font-bold shadow-lg transition-all duration-300"
                  >
                    LINEで友だち追加
                    <span className="ml-2">👉</span>
                  </Button>
                </motion.div>
              </motion.div>
            </a>
          </div>

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
                  <a href="https://line.me/R/ti/p/@647ahkhs" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/line-qr.png"
                      alt="LINE QRコード"
                      width={250}
                      height={250}
                      className="object-contain cursor-pointer"
                    />
                  </a>
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
                  今だけのお得な限定価格
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
                  つくるくんによる人生相談
                </motion.li>
              </ul>
              {/* Desktop button - fixed animation */}
              <div className="hidden md:block mt-4">
                <a href="https://line.me/R/ti/p/@647ahkhs" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#06C755] to-[#05b24e] hover:from-[#05a648] hover:to-[#049440] text-white rounded-full px-8 text-lg font-bold shadow-lg transition-all duration-300"
                      >
                        LINEで友だち追加
                        <span className="ml-2">👉</span>
                      </Button>
                    </motion.div>
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
