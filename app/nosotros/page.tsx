import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NosotrosContent } from "./nosotros-content"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: 'Nosotros — Más de 20 Años de Experiencia en Impresión',
  description:
    'Conoce la historia de IGSA Print & Copy. Fundada en 1993, somos una imprenta profesional con más de 20 años de experiencia en Huixquilucan.',
  alternates: { canonical: '/nosotros' },
}

export default function NosotrosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Inicio", href: "/" }, { name: "Nosotros", href: "/nosotros" }]} />
      <Header />
      <main className="min-h-screen pt-20">
        <NosotrosContent />
      </main>
      <Footer />
    </>
  )
}
