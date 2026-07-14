import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { TrackedAnchor, TrackedLink } from "@/components/tracked-link"
import { 
  ArrowRight, 
  Zap, 
  Palette, 
  PenTool, 
  Wrench, 
  Printer, 
  Maximize, 
  Box, 
  Shirt, 
  Lightbulb, 
  Car, 
  MapPin,
  CheckCircle2,
  Clock,
  Award
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd, ServicePageJsonLd } from "@/components/structured-data"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: 'Servicios de Impresión — Digital, Gran Formato, Rotulación y Más',
  description:
    'Descubre todos los servicios de IGSA Print & Copy: impresión digital, gran formato, sublimación, letreros 3D, rotulación vehicular, señalética, corte láser y diseño gráfico en Huixquilucan.',
  alternates: { canonical: '/servicios' },
}

const categories = [
  { 
    title: "Prototipos rápidos", 
    description: "Materializa tus ideas al instante. Ve, toca y prueba tus diseños antes de la producción.", 
    icon: Zap,
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600"
  },
  { 
    title: "Impresión 2D", 
    description: "Colores vibrantes y acabados de alta calidad para materiales publicitarios personalizados.", 
    icon: Palette,
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600"
  },
  { 
    title: "Servicios de diseño", 
    description: "Convertimos tus ideas en propuestas visuales atractivas y listas para impresión.", 
    icon: PenTool,
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600"
  },
  { 
    title: "Posprocesamiento", 
    description: "Acabados que marcan la diferencia: pulido, pintado, ensamblado y protección final.", 
    icon: Wrench,
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600"
  },
]

const services = [
  { 
    title: "Impresiones Digitales", 
    description: "Tarjetas de presentación, folletos, volantes y documentos con acabados profesionales de alta calidad.", 
    image: "/images/printing-services.jpg",
    icon: Printer,
    tags: ["Alta resolución", "Entrega rápida"],
    features: ["Offset y digital", "Papel premium", "Acabados mate/brillo"]
  },
  { 
    title: "Gran Formato", 
    description: "Pósters, banners, lonas y gráficos de gran tamaño con máxima calidad y colores vibrantes.", 
    image: "/images/large-format.jpg",
    icon: Maximize,
    tags: ["Hasta 1.60m ancho", "Interior/Exterior"],
    features: ["Lonas publicitarias", "Banners roll-up", "Backlight"]
  },
  { 
    title: "Materiales Rígidos", 
    description: "Impresión en PVC, acrílico, Dibond y coroplast para exhibidores y señalética profesional.", 
    image: "/images/printing-services.jpg", 
    href: "/servicios/rigidos",
    icon: Box,
    tags: ["6+ materiales", "Corte preciso"],
    features: ["Trovicel", "Acrílico", "Dibond"]
  },
  { 
    title: "Sublimación", 
    description: "Personalización de textiles, tazas, mouse pads y artículos promocionales con calidad fotográfica.", 
    image: "/images/hero-printing.jpg",
    icon: Shirt,
    tags: ["Full color", "Duradero"],
    features: ["Textiles", "Artículos", "Merchandising"]
  },
  { 
    title: "Letreros 3D", 
    description: "Letras corpóreas de diversos materiales con o sin iluminación LED para máximo impacto visual.", 
    image: "/images/3d-letters.jpg",
    icon: Lightbulb,
    tags: ["Con/sin luz", "Personalizado"],
    features: ["Acrílico", "Metal", "LED integrado"]
  },
  { 
    title: "Rotulación Vehicular", 
    description: "Vinilos de alta resistencia para vehículos, escaparates y cualquier superficie con instalación profesional.", 
    image: "/images/vehicle-wrap.jpg",
    icon: Car,
    tags: ["Vinil premium", "Instalación"],
    features: ["Full wrap", "Parcial", "Lettering"]
  },
  { 
    title: "Señalética", 
    description: "Letreros, directorios y señalización funcional para corporativos, hospitales y espacios públicos.", 
    image: "/images/signage.jpg",
    icon: MapPin,
    tags: ["Normativo", "Corporativo"],
    features: ["Directorios", "Señalización", "Wayfinding"]
  },
]

const process = [
  { 
    step: "01", 
    title: "Consulta inicial", 
    description: "Analizamos tus necesidades y te asesoramos sobre la mejor solución para tu proyecto.",
    icon: CheckCircle2
  },
  { 
    step: "02", 
    title: "Diseño y cotización", 
    description: "Creamos o ajustamos tu diseño y te enviamos una cotización detallada sin compromiso.",
    icon: PenTool
  },
  { 
    step: "03", 
    title: "Producción", 
    description: "Imprimimos con tecnología de última generación y materiales de la más alta calidad.",
    icon: Printer
  },
  { 
    step: "04", 
    title: "Entrega rápida", 
    description: "Recibe tu proyecto terminado en 24-48 horas o según el plazo acordado.",
    icon: Clock
  },
]

export default function ServiciosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Inicio", href: "/" }, { name: "Servicios", href: "/servicios" }]} />
      <ServicePageJsonLd />
      <Header />
      <main className="min-h-screen pt-20">
        
        {/* Hero - Catalog Style */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left: Content */}
              <div className="lg:col-span-5">
                <AnimateOnScroll>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium text-gray-700">7 servicios disponibles</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-6">
                    Tu proyecto,
                    <br />
                    <span className="text-gray-400">nuestro oficio</span>
                  </h1>
                  
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-md">
                    Explora nuestro catalogo completo. Selecciona el servicio que necesitas y cotiza en minutos.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <TrackedAnchor
                      href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
                      event="services_cta_clicked"
                      properties={{
                        cta_label: "cotizar_ahora",
                        cta_destination: "whatsapp",
                        page_name: "servicios",
                      }}
                    >
                      Cotizar ahora
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </TrackedAnchor>
                    <TrackedLink
                      href="#servicios"
                      className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-gray-700 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                      event="services_cta_clicked"
                      properties={{
                        cta_label: "ver_catalogo",
                        cta_destination: "#servicios",
                        page_name: "servicios",
                      }}
                    >
                      Ver catalogo
                    </TrackedLink>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Right: Floating Service Cards */}
              <div className="lg:col-span-7 relative">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services.slice(0, 6).map((service, index) => {
                    const Icon = service.icon
                    const positions = [
                      "translate-y-0",
                      "translate-y-4",
                      "translate-y-0",
                      "translate-y-6",
                      "translate-y-2",
                      "translate-y-0",
                    ]
                    return (
                      <AnimateOnScroll key={index} delay={index * 0.08}>
                        <div className={`group relative p-5 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-500 cursor-pointer ${positions[index]}`}>
                          <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center mb-3 transition-all duration-500">
                            <Icon className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors duration-500" />
                          </div>
                          <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-tight">{service.title}</h3>
                          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{service.description}</p>
                        </div>
                      </AnimateOnScroll>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <p className="text-sm font-medium text-primary mb-4">Categorías</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Todo lo que necesitas en un solo lugar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Desde la idea hasta el producto final, cubrimos cada etapa del proceso de impresión.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon
                return (
                  <AnimateOnScroll key={index} delay={index * 0.1}>
                    <div className="group relative p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                      <div className="relative">
                        <div className={`w-14 h-14 rounded-2xl bg-gray-100 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-500`}>
                          <Icon className={`h-7 w-7 ${category.iconColor} transition-transform duration-500 group-hover:scale-110`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <p className="text-sm font-medium text-primary mb-4">Nuestro proceso</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Así trabajamos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un proceso simple y transparente para que tu proyecto sea un éxito.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => {
                const Icon = item.icon
                return (
                  <AnimateOnScroll key={index} delay={index * 0.15}>
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">
                            {item.step}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      
                      {index < process.length - 1 && (
                        <div className="hidden lg:block absolute top-8 -right-4 w-8">
                          <ArrowRight className="h-6 w-6 text-gray-300" />
                        </div>
                      )}
                    </div>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section id="servicios" className="py-20 md:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <p className="text-sm font-medium text-primary mb-4">Servicios</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explora nuestros servicios
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cada servicio está diseñado para ofrecer resultados excepcionales con la mejor relación calidad-precio.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <AnimateOnScroll key={index} delay={index * 0.08}>
                    <article className="group relative flex flex-col rounded-3xl bg-white border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image 
                          src={service.image} 
                          alt={service.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                        
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                            <Icon className="h-6 w-6 text-gray-900" />
                          </div>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                          {service.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-900 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col flex-1 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{service.description}</p>
                        
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                              <span className="text-xs text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <TrackedLink 
                          href={service.href || "/contacto"} 
                          className="group/btn inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
                          event="services_cta_clicked"
                          properties={{
                            cta_label: service.href ? "ver_detalles" : "cotizar",
                            cta_destination: service.href || "/contacto",
                            service_name: service.title,
                            page_name: "servicios",
                          }}
                        >
                          {service.href ? "Ver detalles" : "Cotizar"}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </TrackedLink>
                      </div>
                    </article>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll direction="scale">
              <div className="relative overflow-hidden rounded-[2rem] aspect-[3/1]">
                <Image src="/images/laser-cutting.jpg" alt="Corte láser" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
                <div className="absolute inset-0 flex items-center p-8 md:p-14">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                      CORTE LÁSER,<br />VOLANTES,<br />FOLLETOS.
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base max-w-md">
                      Tecnología de precisión para acabados perfectos en cada proyecto.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll direction="scale">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-900 p-12 md:p-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(143,184,46,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,63,127,0.1),transparent_50%)]" />
                
                <div className="relative text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-white">Calidad garantizada</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    ¿Tienes un proyecto
                    <br />
                    <span className="text-gray-400">en mente?</span>
                  </h2>
                  <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Contáctanos hoy y recibe una cotización personalizada. Estamos listos para hacer realidad tu idea.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <TrackedLink 
                      href="/contacto" 
                      className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300"
                      event="services_cta_clicked"
                      properties={{
                        cta_label: "solicitar_cotizacion",
                        cta_destination: "/contacto",
                        page_name: "servicios",
                      }}
                    >
                      Solicitar cotización
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </TrackedLink>
                    <TrackedAnchor
                      href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-full border border-gray-700 hover:border-gray-600 hover:bg-white/5 transition-all duration-300"
                      event="services_cta_clicked"
                      properties={{
                        cta_label: "whatsapp_directo",
                        cta_destination: "whatsapp",
                        page_name: "servicios",
                      }}
                    >
                      <svg className="h-4 w-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp directo
                    </TrackedAnchor>
                  </div>
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
