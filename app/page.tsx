import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"
import { LocalBusinessJsonLd, FAQPageJsonLd, WebSiteJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const faqs = [
  { question: "¿Cuál es el ancho del rollo que manejan en impresión de alta resolución?", answer: "Manejamos rollos de hasta 1.60 metros de ancho para impresión de alta resolución, permitiéndonos realizar trabajos de gran formato con excelente calidad." },
  { question: "¿Vendemos o rentamos estructuras para lona?", answer: "Sí, ofrecemos tanto venta como renta de estructuras metálicas para lonas. Contamos con diferentes tamaños y diseños según tus necesidades." },
  { question: "¿Cuentan con impresión en un ancho más grande que el rollo?", answer: "Sí, podemos realizar impresiones más grandes mediante la técnica de unión de paneles, garantizando un acabado profesional y sin costuras visibles." },
  { question: "¿Mi lona incluye ojillos?", answer: "Sí, todas nuestras lonas incluyen ojillos en las esquinas sin costo adicional. Si requieres ojillos adicionales, con gusto los agregamos." },
  { question: "¿Cuánto tardamos en entregar una lona impresa con acabados?", answer: "El tiempo de entrega estándar es de 24 a 48 horas hábiles dependiendo del tamaño y acabados requeridos. Para urgencias, consulta disponibilidad." },
  { question: "¿Trabajan pedidos urgentes?", answer: "Sí, realizamos trabajos urgentes y entregas express según la disponibilidad de nuestra agenda. Te recomendamos contactarnos directamente por WhatsApp para darte prioridad." },
  { question: "¿Qué me recomiendan para una lona que va al exterior?", answer: "Recomendamos lona vinílica con acabado mate o brillante, resistente a UV y agua. También ofrecemos lona mesh para zonas con mucho viento." },
  { question: "¿IGSA Print ofrece el servicio de instalación de lonas?", answer: "Sí, contamos con equipo especializado para la instalación de lonas en diferentes superficies y alturas. Solicita tu cotización." },
]

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
