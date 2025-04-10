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
  
  // New animation controls for the saisoku and kanketsu images
  const saisokuControls = useAnimation()
  const kanketsuControls = useAnimation()

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

  // Add a new useEffect for animating the saisoku and kanketsu images
  useEffect(() => {
    // Initial animation when the component mounts
    const animateSideImages = async () => {
      // Make sure images start invisible
      await saisokuControls.start({ opacity: 0, scale: 0 });
      await kanketsuControls.start({ opacity: 0, scale: 0 });
      
      // Delay before starting animations
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      
      // Sequence for saisoku image (left side)
      await saisokuControls.start({
        opacity: 1,
        scale: [0, 1.2, 0.9, 1.1, 1],
        rotate: [-10, 5, -3, 2, 0],
        transition: { duration:0.7, ease: "easeOut" }
      });
      
      // Start a continuous subtle animation
      saisokuControls.start({
        scale: [1, 1.05, 1, 1.05, 1],
        rotate: [0, 2, 0, -2, 0],
        transition: { 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "easeInOut" 
        }
      });
      
      // Sequence for kanketsu image (right side)
      await kanketsuControls.start({
        opacity: 1,
        scale: [0, 1.2, 0.9, 1.1, 1],
        rotate: [10, -5, 3, -2, 0],
        transition: { duration: 0.7, ease: "easeOut", delay: 0.3 }
      });
      
      // Start a continuous subtle animation (slightly different timing)
      kanketsuControls.start({
        scale: [1, 1.05, 1, 1.05, 1],
        rotate: [0, -2, 0, 2, 0],
        transition: { 
          duration: 2.5, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "easeInOut" 
        }
      });
    };
    
    animateSideImages();
  }, [saisokuControls, kanketsuControls]);

  return (
    <section className="w-full min-h-[95vh] flex flex-col items-center justify-center bg-gradient-to-b from-green-50 via-green-100 to-white relative pb-12 overflow-hidden">
      {/* Lava lamp bubbles with improved animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large bubbles with lava lamp movement */}
        <motion.div
          className="absolute rounded-full bg-green-300 opacity-30"
          style={{ top: '10%', left: '15%', width: '140px', height: '140px', filter: 'blur(12px)' }}
          animate={{
            y: [0, 50, 120, 70, 0],
            x: [0, 30, 10, -20, 0],
            scale: [1, 1.1, 1.05, 1.2, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-300 opacity-25"
          style={{ top: '30%', left: '75%', width: '120px', height: '120px', filter: 'blur(10px)' }}
          animate={{
            y: [0, -40, -90, -30, 0],
            x: [0, -20, -40, -10, 0],
            scale: [1, 1.15, 1, 1.1, 1],
          }}
          transition={{ 
            duration: 28, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-400 opacity-20"
          style={{ top: '65%', left: '20%', width: '160px', height: '160px', filter: 'blur(15px)' }}
          animate={{
            y: [0, -60, -30, -80, 0],
            x: [0, 40, 80, 30, 0],
            scale: [1, 1.05, 1.2, 1.1, 1],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-300 opacity-25"
          style={{ top: '70%', left: '75%', width: '130px', height: '130px', filter: 'blur(12px)' }}
          animate={{
            y: [0, -30, -70, -20, 0],
            x: [0, -30, -10, -50, 0],
            scale: [1, 1.1, 1.15, 1.05, 1],
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-300 opacity-20"
          style={{ top: '15%', left: '60%', width: '100px', height: '100px', filter: 'blur(10px)' }}
          animate={{
            y: [0, 40, 80, 20, 0],
            x: [0, -20, -50, -10, 0],
            scale: [1, 1.15, 1.2, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.3, 0.5, 0.8, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-400 opacity-20"
          style={{ top: '40%', left: '10%', width: '90px', height: '90px', filter: 'blur(8px)' }}
          animate={{
            y: [0, 50, 30, 70, 0],
            x: [0, 30, 60, 20, 0],
            scale: [1, 1.2, 1.1, 1.15, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.2, 0.6, 0.8, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-300 opacity-30"
          style={{ top: '45%', left: '40%', width: '180px', height: '180px', filter: 'blur(15px)' }}
          animate={{
            y: [0, -40, -20, -60, 0],
            x: [0, 20, 50, 10, 0],
            scale: [1, 1.05, 1.1, 1.02, 1],
          }}
          transition={{ 
            duration: 32, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.3, 0.5, 0.7, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-200 opacity-25"
          style={{ top: '55%', left: '55%', width: '150px', height: '150px', filter: 'blur(12px)' }}
          animate={{
            y: [0, 30, 60, 20, 0],
            x: [0, -20, -40, -10, 0],
            scale: [1, 1.1, 1.05, 1.15, 1],
          }}
          transition={{ 
            duration: 26, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-400 opacity-15"
          style={{ top: '75%', left: '45%', width: '110px', height: '110px', filter: 'blur(10px)' }}
          animate={{
            y: [0, -50, -20, -60, 0],
            x: [0, 10, 30, 5, 0],
            scale: [1, 1.15, 1.05, 1.1, 1],
          }}
          transition={{ 
            duration: 24, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-300 opacity-20"
          style={{ top: '25%', left: '35%', width: '120px', height: '120px', filter: 'blur(10px)' }}
          animate={{
            y: [0, 40, 20, 60, 0],
            x: [0, 30, 50, 15, 0],
            scale: [1, 1.1, 1.15, 1.05, 1],
          }}
          transition={{ 
            duration: 27, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.9, 1]
          }}
        />
        
        {/* Medium sized bubbles with improved lava lamp flow */}
        <motion.div
          className="absolute rounded-full bg-green-200 opacity-25"
          style={{ top: '20%', left: '85%', width: '80px', height: '80px', filter: 'blur(8px)' }}
          animate={{
            y: [0, 60, 40, 70, 0],
            x: [0, -30, -50, -15, 0],
            scale: [1, 1.2, 1.15, 1.1, 1],
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-400 opacity-20"
          style={{ top: '85%', left: '15%', width: '70px', height: '70px', filter: 'blur(7px)' }}
          animate={{
            y: [0, -40, -20, -50, 0],
            x: [0, 20, 40, 10, 0],
            scale: [1, 1.15, 1.1, 1.2, 1],
          }}
          transition={{ 
            duration: 17, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-300 opacity-25"
          style={{ top: '5%', left: '45%', width: '65px', height: '65px', filter: 'blur(6px)' }}
          animate={{
            y: [0, 30, 60, 20, 0],
            x: [0, 40, 20, 50, 0],
            scale: [1, 1.25, 1.1, 1.2, 1],
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-300 opacity-20"
          style={{ top: '60%', left: '85%', width: '75px', height: '75px', filter: 'blur(7px)' }}
          animate={{
            y: [0, -35, -70, -20, 0],
            x: [0, -25, -10, -40, 0],
            scale: [1, 1.1, 1.2, 1.05, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.2, 0.6, 0.8, 1]
          }}
        />
        
        <motion.div
          className="absolute rounded-full bg-green-400 opacity-15"
          style={{ top: '40%', left: '75%', width: '60px', height: '60px', filter: 'blur(6px)' }}
          animate={{
            y: [0, 45, 20, 55, 0],
            x: [0, -15, -30, -10, 0],
            scale: [1, 1.2, 1.1, 1.15, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut",
            times: [0, 0.3, 0.5, 0.7, 1]
          }}
        />
      </div>
      
      {/* Static geometric decorations that won't move or overflow */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-green-200 rounded-full opacity-20 hidden md:block" />
      <div className="absolute bottom-40 right-10 w-48 h-48 border-4 border-green-200 rounded-full opacity-20 hidden md:block" />
      <div className="absolute top-40 right-20 w-24 h-24 border-4 border-green-300 rounded-full opacity-20 hidden md:block" />
      <div className="absolute bottom-80 left-20 w-16 h-16 border-4 border-green-300 rounded-full opacity-20 hidden md:block" />

      {/* Hard boundary at bottom to prevent any leakage */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ zIndex: 5 }}></div>

      {/* Main content container */}
      <div className="container px-4 py-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Title section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-black text-black mb-4 drop-shadow-sm font-sans">
              <span className="md:hidden">
                ホームページ<br />つくるくん
              </span>
              <span className="hidden md:inline">
                ホームページつくるくん
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              【業界最速】LINEで完結するホームページ作成サービス
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              初心者でも安心！チャットするだけで高品質なウェブサイトが最短即日完成
            </p>
          </motion.div>

          {/* Character animation with "saisoku" and "kanketsu" images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-72 h-72 md:w-96 md:h-96 mb-6"
          >
            {/* "Saisoku" image on the left */}
            <motion.div 
              className="absolute left-[-115px] top-[-10px] md:left-[-290px] md:top-[-30px] z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={saisokuControls}
            >
              <Image
                src="/images/saisoku.png"
                alt="最速"
                width={150}
                height={150}
                className="object-contain md:hidden"
              />
              <Image
                src="/images/saisoku.png"
                alt="最速"
                width={300}
                height={300}
                className="object-contain hidden md:block"
              />
            </motion.div>
            
            {/* "Kanketsu" image on the right */}
            <motion.div 
              className="absolute right-[-95px] top-[-21px] md:right-[-250px] md:top-[-52px] z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={kanketsuControls}
            >
              <Image
                src="/images/kanketsu.png"
                alt="完結"
                width={150}
                height={150}
                className="object-contain md:hidden"
              />
              <Image
                src="/images/kanketsu.png"
                alt="完結"
                width={300}
                height={300}
                className="object-contain hidden md:block"
              />
            </motion.div>
            
            {/* Tsukurukun character (existing code) */}
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

          {/* Button with adjusted margin */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 mb-8 relative z-50" // Added margin-top and margin-bottom
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => {
                const addFriendSection = document.getElementById("add-friend-section")
                if (addFriendSection) {
                  addFriendSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              LINEで友だち追加する <ArrowDownIcon className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          {/* SEO content */}
          <div className="hidden">
            <h2>格安ホームページ制作 スマホ対応 レスポンシブデザイン SEO対策 WordPress ランディングページ 集客</h2>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom with higher z-index to ensure bubble separation */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-16 md:h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  )
}
