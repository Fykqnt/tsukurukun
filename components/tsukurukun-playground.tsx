"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// つくるくんの初期位置と動きを定義するインターフェース
interface TsukurukunProps {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
}

export function TsukurukunPlayground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tsukurukuns, setTsukurukuns] = useState<TsukurukunProps[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const tsukurukunSize = 120 // つくるくんの基本サイズ

  // コンテナのサイズを取得
  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        setContainerSize({
          width: containerRef.current?.offsetWidth || 0,
          height: containerRef.current?.offsetHeight || 0,
        })
      }

      updateSize()
      window.addEventListener("resize", updateSize)

      return () => window.removeEventListener("resize", updateSize)
    }
  }, [])

  // コンテナサイズが変更されたら、つくるくんを配置
  useEffect(() => {
    if (containerSize.width > 0 && containerSize.height > 0) {
      generateTsukurukuns()
    }
  }, [containerSize])

  // つくるくんをランダムに配置する関数
  const generateTsukurukuns = () => {
    const count = Math.min(5, Math.floor(containerSize.width / 200)) // 画面幅に応じて数を調整
    const newTsukurukuns: TsukurukunProps[] = []

    // 安全マージンを設定
    const safeMargin = tsukurukunSize * 1.2

    for (let i = 0; i < count; i++) {
      let isOverlapping = true
      let attempts = 0
      let newTsukurukun: TsukurukunProps

      // 重ならない位置を見つけるまで試行
      while (isOverlapping && attempts < 50) {
        newTsukurukun = {
          id: i,
          x: Math.random() * (containerSize.width - safeMargin * 2) + safeMargin,
          y: Math.random() * (containerSize.height - safeMargin * 2) + safeMargin,
          rotation: Math.random() * 20 - 10,
          scale: 0.8 + Math.random() * 0.4,
        }

        isOverlapping = false

        // 既存のつくるくんと重なっていないか確認
        for (const existing of newTsukurukuns) {
          const distance = Math.sqrt(
            Math.pow(existing.x - newTsukurukun.x, 2) + Math.pow(existing.y - newTsukurukun.y, 2),
          )

          if (distance < safeMargin * 1.5) {
            isOverlapping = true
            break
          }
        }

        attempts++
      }

      if (!isOverlapping) {
        newTsukurukuns.push(newTsukurukun)
      }
    }

    setTsukurukuns(newTsukurukuns)
  }

  // ランダムなアニメーションを生成する関数
  const getRandomAnimation = () => {
    const animations = [
      {
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, 10, -10, 5, 0],
        transition: { duration: 0.7 },
      },
      {
        y: [0, -20, 0],
        x: [0, 15, 0],
        rotate: [0, 15, 0],
        transition: { duration: 0.5 },
      },
      {
        scale: [1, 1.3, 1],
        rotate: [0, -15, 0],
        transition: { duration: 0.6 },
      },
      {
        scale: [1, 0.8, 1.1, 1],
        y: [0, 15, -10, 0],
        transition: { duration: 0.8 },
      },
      {
        rotate: [0, 20, -20, 10, -10, 0],
        transition: { duration: 0.9 },
      },
    ]

    return animations[Math.floor(Math.random() * animations.length)]
  }

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">つくるくんと遊ぼう！</h2>
        <p className="text-center text-gray-600 mb-8">
          つくるくんにマウスを乗せると、不思議な動きをします。全部見つけられるかな？
        </p>

        <div
          ref={containerRef}
          className="relative w-full h-[400px] md:h-[500px] bg-white rounded-xl shadow-md overflow-hidden border border-green-100"
        >
          {tsukurukuns.map((tsukurukun) => (
            <motion.div
              key={tsukurukun.id}
              className="absolute cursor-pointer"
              style={{
                left: tsukurukun.x - (tsukurukunSize * tsukurukun.scale) / 2,
                top: tsukurukun.y - (tsukurukunSize * tsukurukun.scale) / 2,
                width: tsukurukunSize * tsukurukun.scale,
                height: tsukurukunSize * tsukurukun.scale,
              }}
              initial={{
                rotate: tsukurukun.rotation,
                scale: tsukurukun.scale,
              }}
              animate={{
                rotate: [tsukurukun.rotation, tsukurukun.rotation + 5, tsukurukun.rotation - 5, tsukurukun.rotation],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 2 + Math.random() * 2,
              }}
              whileHover={getRandomAnimation()}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              onDragEnd={() => {
                // ドラッグ後に位置を更新して重なりを防止
                setTsukurukuns((prev) => {
                  const updated = [...prev]
                  return updated
                })
              }}
            >
              <Image
                src="/images/tsukurukun-transparent.png"
                alt={`つくるくん ${tsukurukun.id + 1}`}
                width={tsukurukunSize * 2}
                height={tsukurukunSize * 2}
                className="w-full h-full object-contain pointer-events-none"
              />
            </motion.div>
          ))}

          {tsukurukuns.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">読み込み中...</p>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={generateTsukurukuns}
            className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            つくるくんをシャッフル
          </button>
        </div>
      </div>
    </section>
  )
}
