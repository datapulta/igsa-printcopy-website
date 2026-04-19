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
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios | IGSA Print & Copy',
    description: 'Impresión digital, gran formato, rotulación, señalética, letreros 3D y más. Servicio 24 horas.',
    url: '/servicios',
    images: [{ url: '/images/printing-services.jpg', width: 1200, height: 630, alt: 'Servicios de impresión IGSA Print & Copy' }],
  },
}

const categories = [
  { title: "Prototipos rápidos", description: "¡Materializa tus ideas al instante! Ve, toca y prueba tus diseños antes de la producción. Optimiza tiempo, reduce costos y acelera el lanzamiento de tus productos.", icon: "🚀" },
  { title: "Impresión 2D", description: "Colores vibrantes y acabados de alta calidad. Imprimimos desde planos y pósters hasta materiales publicitarios personalizados. ¡Máximo impacto!", icon: "🎨" },
  { title: "Servicios de diseño", description: "Diseños que comunican y venden. Convertimos tus ideas en propuestas visuales atractivas, funcionales y listas para impresión.", icon: "✨" },
  { title: "Posprocesamiento", description: "Acabados que marcan la diferencia. Ofrecemos pulido, pintado, ensamblado y protección final para una presentación impecable.", icon: "💎" },
]

const services = [
  { title: "Impresiones Digitales", description: "Ideal para tiradas cortas y medianas. Imprimimos tarjetas de presentación, folletos y documentos con acabados profesionales al momento.", image: "/images/printing-services.jpg" },
  { title: "Impresiones a Gran Formato", description: "Imprimimos pósters, banners, lonas y gráficos de gran tamaño con la máxima calidad y colores vibrantes para publicidad exterior.", image: "/images/large-format.jpg" },
  { title: "Personalizables", description: "Técnica de impresión versátil y resistente ideal para personalizar textiles, merchandising y artículos promocionales.", image: "/images/hero-printing.jpg" },
  { title: "Letreros 3D", description: "Fabricamos letras corpóreas de diversos materiales con o sin iluminación para una presencia sofisticada y memorable.", image: "/images/3d-letters.jpg" },
  { title: "Rotulación", description: "Aplicación profesional de vinilos de alta resistencia para decorar o marcar vehículos, escaparates, paredes y cualquier superficie.", image: "/images/vehicle-wrap.jpg" },
  { title: "Señalética", description: "Guiamos, informamos y regulamos con letreros y directorios funcionales y estéticos para corporativos y espacios públicos.", image: "/images/signage.jpg" },
]

export default function ServiciosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Inicio", href: "/" }, { name: "Servicios", href: "/servicios" }]} />
      <ServicePageJsonLd />
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
          <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[150px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-6">Nuestros servicios</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Qué podemos hacer <span className="gradient-text">por ti</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Desde prototipos rápidos hasta impresión a gran formato, te ofrecemos soluciones integrales para tu marca.
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
              {categories.map((category, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <div className="group p-7 rounded-2xl glass-card premium-card h-full">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl mt-1 group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-16 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll direction="scale">
              <div className="relative overflow-hidden rounded-3xl">
                <Image src="/images/laser-cutting.jpg" alt="Servicio de corte láser, volantes y folletos en IGSA Print" width={1200} height={400} className="w-full h-64 md:h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30 flex items-center">
                  <div className="p-8 md:p-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                      <span className="gradient-text">CORTE LÁSER,</span><br />VOLANTES,<br />FOLLETOS.
                    </h2>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-transparent" />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestros <span className="gradient-text">servicios</span></h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <AnimateOnScroll key={index} delay={index * 0.08}>
                  <article className="group flex flex-col md:flex-row gap-0 rounded-2xl glass-card premium-card overflow-hidden h-full">
                    <div className="relative w-full md:w-52 h-52 md:h-auto shrink-0 overflow-hidden">
                      <Image src={service.image} alt={`${service.title} — servicio de impresión IGSA`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30 hidden md:block" />
                    </div>
                    <div className="flex flex-col justify-center p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                      <Link href="/contacto" className="group/btn inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-foreground rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 w-fit">
                        Solicitar cotización
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <AnimateOnScroll direction="scale">
              <div className="p-12 md:p-16 rounded-3xl glass-card">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">¿Tienes un proyecto <span className="gradient-text">en mente</span>?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">Contáctanos y te ayudaremos a encontrar la mejor solución para tus necesidades de impresión.</p>
                <Link href="/contacto" className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.03]">
                  Contáctanos ahora
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
