"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, Sparkles } from "lucide-react"

// 表情の種類を定義
type TsukurukunExpression = "normal" | "pain" | "crying"

export function HeroSection() {
  const [isHovering, setIsHovering] = useState(false)
  const [hoverCount, setHoverCount] = useState(0)
  const [expression, setExpression] = useState<TsukurukunExpression>("normal")
  const controls = useAnimation()
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null)

  // ホバー時の不規則なアニメーションを生成
  const generateRandomAnimation = () => {
    // ランダムな拡大縮小値
    const randomScale = 0.7 + Math.random() * 0.6 // 0.7〜1.3の範囲

    // ランダムな回転値
    const randomRotate = Math.random() * 40 - 20 // -20〜20の範囲

    // ランダムな移動値
    const randomX = Math.random() * 40 - 20 // -20〜20の範囲
    const randomY = Math.random() * 40 - 20 // -20〜20の範囲

    // ランダムな持続時間
    const randomDuration = 0.3 + Math.random() * 0.5 // 0.3〜0.8秒の範囲

    return {
      scale: randomScale,
      rotate: randomRotate,
      x: randomX,
      y: randomY,
      transition: { duration: randomDuration, ease: "easeInOut" },
    }
  }

  // ホバー中の継続的なアニメーション
  useEffect(() => {
    if (isHovering && expression === "normal") {
      const animateRandomly = () => {
        controls.start(generateRandomAnimation())

        // 次のアニメーションのタイミングをランダムに設定
        const nextAnimationDelay = 0.2 + Math.random() * 0.3 // 0.2〜0.5秒の範囲

        hoverTimerRef.current = setTimeout(animateRandomly, nextAnimationDelay * 1000)
      }

      animateRandomly()

      return () => {
        if (hoverTimerRef.current) {
          clearTimeout(hoverTimerRef.current)
        }
        // ホバーが終了したら元の状態に戻す
        controls.start({ scale: 1, rotate: 0, x: 0, y: 0, transition: { duration: 0.5 } })
      }
    }
  }, [isHovering, expression, controls])

  // クリック時のアニメーション
  const handleClick = () => {
    // 確率に基づいて表情を選択（80%痛がる、20%泣く）
    const random = Math.random()
    if (random < 0.8) {
      setExpression("pain")
    } else {
      setExpression("crying")
    }

    // 0.5秒後に元の表情に戻す
    setTimeout(() => {
      setExpression("normal")
    }, 500)
  }

  // 表情に応じたアニメーション
  const getExpressionAnimation = () => {
    switch (expression) {
      case "pain":
        return {
          rotate: [0, -5, 5, -5, 0],
          scale: [1, 0.95, 1.05, 0.95, 1],
          transition: { duration: 0.3 },
        }
      case "crying":
        return {
          y: [0, -5, 0, -5, 0],
          scale: [1, 0.97, 1, 0.97, 1],
          transition: { duration: 0.3 },
        }
      default:
        return {
          rotate: [0, 5, 0, -5, 0],
          y: [0, -10, 0],
        }
    }
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 via-green-100 to-white relative overflow-hidden">
      {/* 背景アニメーション - より洗練された要素 */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-green-200 to-green-300 opacity-20"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(8px)",
            }}
            animate={{
              y: [0, Math.random() * 150 - 75],
              x: [0, Math.random() * 150 - 75],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* 装飾的な要素 - 幾何学模様 */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-green-200 rounded-full opacity-20 hidden md:block" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-green-200 rounded-full opacity-20 hidden md:block" />
      <div className="absolute top-40 right-20 w-24 h-24 border-4 border-green-300 rounded-full opacity-20 hidden md:block" />
      <div className="absolute bottom-40 left-20 w-16 h-16 border-4 border-green-300 rounded-full opacity-20 hidden md:block" />

      <div className="container px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black text-black mb-4 drop-shadow-sm font-sans">
              ホームページつくるくん
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              【最短即日】LINEで完結するホームページ作成サービス
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              初心者でも安心！チャットするだけで高品質なウェブサイトが完成
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-72 h-72 md:w-96 md:h-96 mb-8"
          >
            <motion.div
              animate={expression !== "normal" ? getExpressionAnimation() : controls}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              onHoverStart={() => {
                if (expression === "normal") {
                  setIsHovering(true)
                  setHoverCount((prev) => prev + 1)
                }
              }}
              onHoverEnd={() => {
                setIsHovering(false)
                if (hoverTimerRef.current) {
                  clearTimeout(hoverTimerRef.current)
                }
              }}
              onClick={handleClick}
              className="relative cursor-pointer"
            >
              {/* 通常の表情 */}
              <div
                className={`absolute inset-0 transition-opacity duration-0 ${expression === "normal" ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src="/images/tsukurukun-transparent.png"
                  alt="ホームページつくるくん"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>

              {/* 痛がる表情 */}
              <div
                className={`absolute inset-0 transition-opacity duration-0 ${expression === "pain" ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src="/images/tsukurukun-pain.png"
                  alt="痛がるホームページつくるくん"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />

                {/* 痛がる時のエフェクト */}
                {expression === "pain" &&
                  Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-red-500"
                      initial={{
                        opacity: 0,
                        scale: 0,
                        rotate: Math.random() * 60 - 30,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, (Math.random() - 0.5) * 150],
                        y: [0, (Math.random() - 0.5) * 150],
                      }}
                      transition={{ duration: 0.4 }}
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        fontSize: `${Math.random() * 20 + 20}px`,
                      }}
                    >
                      !
                    </motion.div>
                  ))}
              </div>

              {/* 泣いている表情 */}
              <div
                className={`absolute inset-0 transition-opacity duration-0 ${expression === "crying" ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src="/images/tsukurukun-crying.png"
                  alt="泣いているホームページつくるくん"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />

                {/* 泣いている時のエフェクト */}
                {expression === "crying" &&
                  Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-blue-400"
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                        y: [0, 50 + Math.random() * 30],
                        x: [-10 + Math.random() * 20, -10 + Math.random() * 20],
                      }}
                      transition={{ duration: 0.5, delay: Math.random() * 0.2 }}
                      style={{
                        top: `${40 + Math.random() * 20}%`,
                        left: `${30 + Math.random() * 40}%`,
                        fontSize: `${Math.random() * 10 + 10}px`,
                      }}
                    >
                      💧
                    </motion.div>
                  ))}
              </div>

              {/* ホバー時のエフェクト */}
              {isHovering && expression === "normal" && (
                <>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-6 h-6 text-yellow-400"
                      initial={{
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, (Math.random() - 0.5) * 300],
                        y: [0, (Math.random() - 0.5) * 300],
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        duration: 0.8 + Math.random() * 0.5,
                        delay: Math.random() * 0.3,
                      }}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Sparkles className="w-full h-full" />
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white rounded-full px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => {
                const addFriendSection = document.getElementById("add-friend-section")
                if (addFriendSection) {
                  addFriendSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              友だち追加する <ArrowDownIcon className="ml-2 h-5 w-5" />
            </Button>

            {/* ボタン下の装飾 */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent rounded-full"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                width: ["60%", "80%", "60%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
          {/* SEO向上のための追加コンテンツ */}
          <div className="hidden">
            <h2>格安ホームページ制作 スマホ対応 レスポンシブデザイン SEO対策 WordPress ランディングページ 集客</h2>
          </div>
        </div>
      </div>

      {/* 波形のデザイン - より洗練されたバージョン */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 md:h-32 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  )
}
