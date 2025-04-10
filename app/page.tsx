import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AddFriendSection } from "@/components/add-friend-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <div className="HeroSection w-full">
        <HeroSection />
      </div>
      <div className="FeaturesSection w-full">
        <FeaturesSection />
      </div>
      <div className="PricingSection w-full">
        <PricingSection />
      </div>
      <div className="AddFriendSection w-full">
        <AddFriendSection />
      </div>
      <div className="FAQSection w-full">
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
