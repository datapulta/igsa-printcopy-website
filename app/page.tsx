import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"
import { LocalBusinessJsonLd, FAQPageJsonLd, WebSiteJsonLd } from "@/components/structured-data"
import { faqs } from "@/lib/faqs"

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <FAQPageJsonLd faqs={faqs} />
      <WebSiteJsonLd />
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <ServicesPreview />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
