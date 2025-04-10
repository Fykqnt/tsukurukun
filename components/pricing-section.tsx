"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PlanFeature = {
  feature: string;
  light: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
};

const features: { category: string; items: PlanFeature[] }[] = [
  {
    category: "基本機能",
    items: [
      {
        feature: "ページ数上限",
        light: "5ページ",
        standard: "10ページ",
        premium: "無制限"
      },
      {
        feature: "独自ドメイン",
        light: "1つ",
        standard: "1つ",
        premium: "最大3つ"
      },
      {
        feature: "SSL証明書",
        light: true,
        standard: true,
        premium: true
      },
      {
        feature: "モバイル対応デザイン",
        light: true,
        standard: true,
        premium: true
      },
      {
        feature: "LINE上での制作・修正",
        light: true,
        standard: true,
        premium: true
      }
    ]
  },
  {
    category: "コンテンツ管理",
    items: [
      {
        feature: "月間修正回数",
        light: "2回まで",
        standard: "5回まで",
        premium: "10回まで"
      },
      {
        feature: "画像アップロード",
        light: "5枚/月",
        standard: "10枚/月",
        premium: "無制限"
      },
      {
        feature: "テキスト更新",
        light: true,
        standard: true,
        premium: true
      }
    ]
  },
  {
    category: "機能拡張",
    items: [
      {
        feature: "お問い合わせフォーム",
        light: "基本",
        standard: "カスタム",
        premium: "高度カスタム"
      },
      {
        feature: "SNS連携",
        light: "-",
        standard: "2つまで",
        premium: "無制限"
      },
      {
        feature: "ブログ機能",
        light: false,
        standard: true,
        premium: true
      },
      {
        feature: "予約システム/EC機能",
        light: false,
        standard: false,
        premium: true
      }
    ]
  },
  {
    category: "SEO対策",
    items: [
      {
        feature: "基本的なSEO対策",
        light: true,
        standard: true,
        premium: true
      },
      {
        feature: "キーワード最適化",
        light: true,
        standard: true,
        premium: true
      },
      {
        feature: "コンテンツ最適化提案",
        light: false,
        standard: true,
        premium: true
      },
      {
        feature: "サイト表示速度最適化",
        light: false,
        standard: true,
        premium: true
      }
    ]
  },
  {
    category: "解析・レポート",
    items: [
      {
        feature: "アクセス解析",
        light: "基本",
        standard: "月次レポート",
        premium: "リアルタイムダッシュボード"
      },
      {
        feature: "集客効果レポート",
        light: "-",
        standard: "四半期ごと",
        premium: "毎月"
      },
      {
        feature: "サイト改善提案",
        light: "-",
        standard: "半年ごと",
        premium: "四半期ごと"
      }
    ]
  },
  {
    category: "サポート",
    items: [
      {
        feature: "LINEチャットサポート",
        light: "平日10-17時",
        standard: "平日9-19時",
        premium: "365日対応"
      },
      {
        feature: "電話サポート",
        light: false,
        standard: false,
        premium: true
      }
    ]
  }
];

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FeatureAccordion = ({ category, items }: { category: string; items: PlanFeature[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 flex justify-between items-center bg-white hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{category}</span>
        <ChevronIcon
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-gray-50">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 py-2 text-sm"
                >
                  <div className="text-gray-700">{item.feature}</div>
                  <div className="text-center">
                    {typeof item.light === 'boolean' ? (
                      item.light ? '✓' : '-'
                    ) : (
                      item.light
                    )}
                  </div>
                  <div className="text-center">
                    {typeof item.standard === 'boolean' ? (
                      item.standard ? '✓' : '-'
                    ) : (
                      item.standard
                    )}
                  </div>
                  <div className="text-center">
                    {typeof item.premium === 'boolean' ? (
                      item.premium ? '✓' : '-'
                    ) : (
                      item.premium
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PricingSection = () => {
  return (
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
          料金プラン
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12"></p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Light Plan */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">ライト</h3>
            <div className="mb-6">
              <p className="text-gray-600">初期費用</p>
              <p className="text-3xl font-bold">¥9,800</p>
            </div>
            <div className="mb-6">
              <p className="text-gray-600">月額料金</p>
              <p className="text-3xl font-bold">¥2,980<span className="text-base">/月</span></p>
            </div>
            <div className="mb-8">
              <p className="text-gray-600">年間一括払い</p>
              <p className="text-3xl font-bold">¥24,800<span className="text-base">/年</span></p>
              <p className="text-green-600 font-semibold">約30%おトク</p>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-500 relative">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
              人気
            </div>
            <h3 className="text-2xl font-bold mb-4">スタンダード</h3>
            <div className="mb-6">
              <p className="text-gray-600">初期費用</p>
              <p className="text-3xl font-bold">¥19,800</p>
            </div>
            <div className="mb-6">
              <p className="text-gray-600">月額料金</p>
              <p className="text-3xl font-bold">¥9,800<span className="text-base">/月</span></p>
            </div>
            <div className="mb-8">
              <p className="text-gray-600">年間一括払い</p>
              <p className="text-3xl font-bold">¥58,000<span className="text-base">/年</span></p>
              <p className="text-green-600 font-semibold">約50%おトク</p>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="rounded-2xl bg-gradient-to-br from-green-600 to-green-400 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-green-800 px-4 py-1 rounded-bl-lg rounded-tr-lg font-bold">
              オススメ
            </div>
            <h3 className="text-2xl font-bold mb-4">プレミアム</h3>
            <div className="mb-6">
              <p className="text-gray-200">初期費用</p>
              <p className="text-3xl font-bold">¥49,800</p>
            </div>
            <div className="mb-6">
              <p className="text-gray-200">月額料金</p>
              <p className="text-3xl font-bold">¥19,800<span className="text-base">/月</span></p>
            </div>
            <div className="mb-8">
              <p className="text-gray-200">年間一括払い</p>
              <p className="text-3xl font-bold">¥98,000<span className="text-base">/年</span></p>
              <p className="text-green-300 font-semibold">約60%おトク</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-4 p-6 bg-gray-100 font-medium">
            <div>機能</div>
            <div className="text-center">ライト</div>
            <div className="text-center">スタンダード</div>
            <div className="text-center">プレミアム</div>
          </div>
          {features.map((category, index) => (
            <FeatureAccordion
              key={index}
              category={category.category}
              items={category.items}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-16 md:h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
};
