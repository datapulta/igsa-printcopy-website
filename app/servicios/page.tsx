import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd, ServicePageJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: 'Servicios de Impresión — Digital, Gran Formato, Rotulación y Más',
  description:
    'Descubre todos los servicios de IGSA Print & Copy: impresión digital, gran formato, sublimación, letreros 3D, rotulación vehicular, señalética, corte láser y diseño gráfico en Huixquilucan.',
  alternates: { canonical: '/servicios' },
}

const categories = [
  { title: "Prototipos rápidos", description: "Materializa tus ideas al instante. Ve, toca y prueba tus diseños antes de la producción.", icon: "🚀" },
  { title: "Impresión 2D", description: "Colores vibrantes y acabados de alta calidad para materiales publicitarios personalizados.", icon: "🎨" },
  { title: "Servicios de diseño", description: "Convertimos tus ideas en propuestas visuales atractivas y listas para impresión.", icon: "✨" },
  { title: "Posprocesamiento", description: "Acabados que marcan la diferencia: pulido, pintado, ensamblado y protección final.", icon: "💎" },
]

const services = [
  { title: "Impresiones Digitales", description: "Tarjetas de presentación, folletos y documentos con acabados profesionales.", image: "/images/printing-services.jpg" },
  { title: "Gran Formato", description: "Pósters, banners, lonas y gráficos de gran tamaño con máxima calidad.", image: "/images/large-format.jpg" },
  { title: "Materiales Rígidos", description: "Impresión en PVC, acrílico, Dibond y coroplast para exhibidores y señalética.", image: "/images/printing-services.jpg", href: "/servicios/rigidos" },
  { title: "Personalizables", description: "Sublimación para personalizar textiles, merchandising y artículos promocionales.", image: "/images/hero-printing.jpg" },
  { title: "Letreros 3D", description: "Letras corpóreas de diversos materiales con o sin iluminación.", image: "/images/3d-letters.jpg" },
  { title: "Rotulación", description: "Vinilos de alta resistencia para vehículos, escaparates y cualquier superficie.", image: "/images/vehicle-wrap.jpg" },
  { title: "Señalética", description: "Letreros y directorios funcionales para corporativos y espacios públicos.", image: "/images/signage.jpg" },
]

export default function ServiciosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Inicio", href: "/" }, { name: "Servicios", href: "/servicios" }]} />
      <ServicePageJsonLd />
      <Header />
      <main className="min-h-screen pt-20">
        
        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <AnimateOnScroll>
                <p className="text-sm font-medium text-primary mb-4">Nuestros servicios</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8">
                  Qué podemos
                  <br />
                  <span className="text-gray-400">hacer por ti</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                  Desde prototipos rápidos hasta impresión a gran formato, te ofrecemos soluciones integrales para tu marca.
                </p>
              </AnimateOnScroll>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
              {categories.map((category, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <div className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl mt-1">{category.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll direction="scale">
              <div className="relative overflow-hidden rounded-3xl aspect-[3/1]">
                <Image src="/images/laser-cutting.jpg" alt="Corte láser" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
                <div className="absolute inset-0 flex items-center p-8 md:p-14">
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    CORTE LÁSER,<br />VOLANTES,<br />FOLLETOS.
                  </h2>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Nuestros servicios
              </h2>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <AnimateOnScroll key={index} delay={index * 0.08}>
                  <article className="group flex flex-col md:flex-row rounded-3xl bg-white border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-500">
                    <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0 overflow-hidden">
                      <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-center p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-5">{service.description}</p>
                      <Link href={service.href || "/contacto"} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-primary transition-colors">
                        {service.href ? "Ver detalles" : "Cotizar"}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll direction="scale">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-900 p-12 md:p-20 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(143,184,46,0.1),transparent_50%)]" />
                <div className="relative">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    ¿Tienes un proyecto <span className="text-gray-400">en mente</span>?
                  </h2>
                  <p className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Contáctanos y te ayudaremos a encontrar la mejor solución para tus necesidades.
                  </p>
                  <Link href="/contacto" className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300">
                    Contáctanos ahora
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
