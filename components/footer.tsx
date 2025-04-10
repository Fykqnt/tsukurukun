"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-b from-white to-green-50 border-t border-green-100">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <motion.div whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5 } }}>
                <Image
                  src="/images/tsukurukun-transparent.png"
                  alt="ホームページつくるくん"
                  width={60}
                  height={60}
                  className="mr-2"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-black font-sans">ホームページつくるくん</h3>
            </div>
            <p className="text-gray-600">【最短即日】LINEで完結するホームページ作成サービス</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gray-800">リンク</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="https://arrowheads.ai"
                  className="text-gray-600 hover:text-green-600 hover:underline flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block mr-2"></span>
                  運営会社
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdKm3_Vncf5GIDX1k9ofwXvVwMtZbx-9tBWLmwxlPU21LWR2Q/viewform?usp=header"
                  className="text-gray-600 hover:text-green-600 hover:underline flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block mr-2"></span>
                  お問い合わせ
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href="/transactionlaw"
                  className="text-gray-600 hover:text-green-600 hover:underline flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block mr-2"></span>
                  特定商取引法に基づく表記
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-green-200 text-center"
        >
          <p className="text-gray-500 text-sm">© {currentYear} ホームページつくるくん All Rights Reserved.</p>
        </motion.div>
      </div>

      {/* 装飾的な要素 */}
      <div className="relative h-8 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-8 fill-green-100" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
          </svg>
        </div>
      </div>
    </footer>
  )
}
