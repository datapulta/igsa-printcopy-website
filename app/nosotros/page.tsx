import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Lightbulb, Shield, Users } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: 'Nosotros — Más de 20 Años de Experiencia en Impresión',
  description:
    'Conoce la historia de IGSA Print & Copy. Fundada en 1993, somos una imprenta profesional con más de 20 años de experiencia en Huixquilucan.',
  alternates: { canonical: '/nosotros' },
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Transformamos tus ideas en realidad con tecnología de vanguardia y soluciones creativas.",
  },
  {
    icon: Shield,
    title: "Transparencia",
    description: "Presupuestos claros, comunicación honesta y procesos visibles: así trabajamos.",
  },
  {
    icon: Users,
    title: "Confianza",
    description: "Tus archivos y proyectos están protegidos en cada paso, garantizando confidencialidad.",
  },
]

export default function NosotrosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Inicio", href: "/" }, { name: "Nosotros", href: "/nosotros" }]} />
      <Header />
      <main className="min-h-screen pt-20">
        
        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6">
                <AnimateOnScroll>
                  <p className="text-sm font-medium text-primary mb-4">Sobre nosotros</p>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8">
                    Nuestra
                    <br />
                    <span className="text-gray-400">historia</span>
                  </h1>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.15}>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Somos una empresa surgida en 1993 originalmente ofreciendo servicios de realización de trámites en áreas del gobierno a nivel municipal.
                    </p>
                    <p>
                      Hoy en día, acorde a las necesidades de nuestros clientes nos complace ofrecer más y mejores servicios que complementan y enriquecen nuestras actividades convirtiéndonos en <span className="text-gray-900 font-medium">IGSA Print & Copy</span>.
                    </p>
                    <p>
                      En donde seguimos ofreciendo nuestros servicios tradicionales, además de impresiones a gran formato de alta calidad y sublimación.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>

              <div className="lg:col-span-6">
                <AnimateOnScroll direction="right">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                    <Image
                      src="/images/about-printing.jpg"
                      alt="Instalaciones IGSA Print & Copy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "1993", label: "Año de fundación" },
                { value: "20+", label: "Años de trayectoria" },
                { value: "2", label: "Sucursales" },
                { value: "100%", label: "Compromiso" },
              ].map((stat, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <AnimateOnScroll direction="left">
                <div>
                  <p className="text-sm font-medium text-primary mb-4">Nuestra misión</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                    Soluciones de la más alta calidad
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Nos comprometemos a utilizar tecnología de la más alta calidad, materiales de excelencia y un personal altamente capacitado para garantizar resultados que superen las expectativas.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="right">
                <div>
                  <p className="text-sm font-medium text-primary mb-4">Nuestra visión</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                    Líderes en impresión regional
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ser líderes en soluciones de impresión a nivel regional, ofreciendo un servicio de alta calidad para responder con rapidez y eficacia a las necesidades más estrictas del mercado.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <p className="text-sm font-medium text-primary mb-4">Nuestros valores</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Lo que nos define
              </h2>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-3xl bg-white border border-gray-200 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
                      <value.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
