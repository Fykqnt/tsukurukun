import Link from "next/link"
import { Footer } from "@/components/footer"

export default function TransactionLawPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      <div className="container px-4 py-12 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">特定商取引法に基づく表記</h1>
        
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <table className="w-full bg-white">
            <tbody className="divide-y">
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">事業者名</th>
                <td className="px-4 py-3">Arrowheads Inc.</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">代表者氏名</th>
                <td className="px-4 py-3">松原冬樹</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">電話番号</th>
                <td className="px-4 py-3">08047299117<br /><span className="text-sm text-gray-600">注：こちらではサービスに関するお問い合わせは受け付けておりません。下記メールアドレスからお願いします）</span></td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">お問い合わせ</th>
                <td className="px-4 py-3">info@arrowheads.co.jp</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">有料プラン</th>
                <td className="px-4 py-3">料金プランに記載の通り</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">お支払い方法</th>
                <td className="px-4 py-3">クレジットカード決済</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">所在地</th>
                <td className="px-4 py-3">〒100-0005 東京都千代田区丸の内2-3-2 郵船ビルディング4階</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">サービス利用開始時期</th>
                <td className="px-4 py-3">決済後、直ちにご利用いただけます。</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">返品、キャンセルについて</th>
                <td className="px-4 py-3">本サービスの都合上、お客様のご都合による返金には対応できかねますので、ご了承ください。</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">販売価格以外でお客様に発生する金額</th>
                <td className="px-4 py-3">本サービスのへの通信料、通話代金、およびはドメイン取得費、サーバー代はお客様のご負担です。</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">解約について</th>
                <td className="px-4 py-3">お客様の都合でいつでも解約いただけます。なお、本サービスの利用可能期間の途中で解約いただいても、既にお支払いいただいた利用料金は、日割、月割精算等による返金を含めた一切の返金をおこないません。予めご了承願います。</td>
              </tr>
              <tr className="divide-x">
                <th className="px-4 py-3 text-left font-medium text-gray-700 bg-gray-50">動作環境</th>
                <td className="px-4 py-3">推奨ブラウザはSafari、Google Chrome、Mozilla Firefox、Arcです。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-green-600 hover:text-green-800 font-medium"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
} 