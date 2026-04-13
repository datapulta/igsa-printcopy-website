import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { FAQSection } from "@/components/home/faq-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <ServicesPreview />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
