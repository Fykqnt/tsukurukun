"use client";

import { motion } from 'framer-motion';

const CustomersSection = () => {
  const testimonials = [
    {
      category: "医療・クリニック",
      comment: "LINEで簡単にやり取りできて、わずか2日でホームページが完成！患者さんからの予約も増えて大満足です。",
      features: ["オンライン予約", "診療案内", "アクセスマップ"],
      rating: 5,
      completionTime: "2日"
    },
    {
      category: "ITスタートアップ",
      comment: "頭の中で思い描いていた通りのWebサイトがすぐに出来上がっていて感動しました！",
      features: ["事業紹介", "アクセスマップ", "お問い合わせフォーム"],
      rating: 5,
      completionTime: "1日"
    },
    {
      category: "法律事務所",
      comment: "法律事務所らしい信頼感のあるデザインに仕上げていただき、クライアント獲得に繋がっています。",
      features: ["業務案内", "弁護士紹介", "相談予約フォーム"],
      rating: 5,
      completionTime: "1日"
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full bg-green-100 opacity-40"
          style={{ top: '20%', left: '10%', width: '100px', height: '100px', filter: 'blur(8px)' }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full bg-green-200 opacity-30"
          style={{ top: '60%', right: '15%', width: '120px', height: '120px', filter: 'blur(10px)' }}
          animate={{
            y: [0, -40, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">お客様の声</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            実際にご利用いただいたお客様からの嬉しいお言葉と制作実績
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                </div>

                {/* Project Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">制作内容</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {testimonial.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    納品までの時間: {testimonial.completionTime}
                  </div>
                </div>
                
                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-4">
        
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const PricingSection = () => {
  return (
    <>
      <CustomersSection />
      <section className="PricingSection w-full py-24 bg-gradient-to-b from-green-50 via-green-100 to-white relative">
        {/* Lava lamp bubbles with animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        </div>
        
        {/* Static geometric decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-green-200 rounded-full opacity-20 hidden md:block" />
        <div className="absolute bottom-40 right-10 w-48 h-48 border-4 border-green-200 rounded-full opacity-20 hidden md:block" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">
            料金
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            期間限定でお得な価格！
          </p>

          {/* Single Plan Card */}
          <div className="max-w-lg mx-auto mb-16">
            <motion.div 
              className="rounded-2xl bg-gradient-to-br from-green-600 to-green-400 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-0 right-0 bg-yellow-400 text-green-800 px-4 py-1 rounded-bl-lg rounded-tr-lg font-bold">
                期間限定
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">ホームページ制作プラン</h3>
                
                <div className="mb-8">
                  <div className="mb-4">
                    <p className="text-green-200 text-lg">初期費用</p>
                    <p className="text-4xl font-bold">¥9,800</p>
                  </div>
                  <div className="text-2xl text-green-200">+</div>
                  <div className="mt-4">
                    <p className="text-green-200 text-lg">月額料金</p>
                    <p className="text-4xl font-bold">¥2,980<span className="text-xl">/月</span></p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold mb-4">プランに含まれる内容</h4>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      最大5ページのホームページ制作
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      独自ドメイン対応(別途料金がかかる場合があります)
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      SSL証明書付き
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      モバイル対応デザイン
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      LINE上での制作・修正
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      月2回まで修正対応
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      基本的なSEO対策
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      LINEチャットサポート
                    </li>
                  </ul>
                </div>

                <div className="text-green-200 text-sm">
                  ※最短即日でホームページが完成します
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg className="w-full h-16 md:h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </section>
    </>
  );
};
