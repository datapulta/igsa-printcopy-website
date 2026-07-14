"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  Lightbulb, 
  Shield, 
  Users, 
  ArrowRight, 
  Calendar, 
  Award, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { siteConfig } from "@/lib/seo-config"
import { useEffect, useState } from "react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Transformamos tus ideas en realidad con tecnología de vanguardia y soluciones creativas.",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600"
  },
  {
    icon: Shield,
    title: "Transparencia",
    description: "Presupuestos claros, comunicación honesta y procesos visibles: así trabajamos.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Users,
    title: "Confianza",
    description: "Tus archivos y proyectos están protegidos en cada paso, garantizando confidencialidad.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600"
  },
]

const timeline = [
  {
    year: "1993",
    title: "Fundación",
    description: "Iniciamos operaciones ofreciendo servicios de trámites gubernamentales a nivel municipal.",
  },
  {
    year: "2000s",
    title: "Expansión de servicios",
    description: "Incorporamos servicios de impresión y copiado para satisfacer las necesidades de nuestros clientes.",
  },
  {
    year: "2010s",
    title: "Tecnología de punta",
    description: "Adoptamos impresión digital de gran formato y sublimación con equipos de última generación.",
  },
  {
    year: "Hoy",
    title: "IGSA Print & Copy",
    description: "Somos líderes regionales en soluciones de impresión con 2 sucursales y servicio integral.",
  },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const interval = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function NosotrosContent() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <AnimateOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium text-gray-700">Desde 1993</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[0.95] tracking-tight mb-6">
                  Más de 20 años
                  <br />
                  <span className="text-gray-400">haciendo historia</span>
                </h1>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                  De trámites gubernamentales a líderes en impresión profesional. Conoce cómo evolucionamos para servirte mejor.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/servicios"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
                  >
                    Ver servicios
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-gray-700 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  >
                    Contáctanos
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll direction="right">
                <div 
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                  style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                >
                  <Image
                    src="/images/about-printing.jpg"
                    alt="Instalaciones IGSA Print & Copy"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                </div>

                {/* Floating badge */}
                <div 
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100"
                  style={{ animation: "float 3s ease-in-out infinite" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Calidad garantizada</p>
                      <p className="text-xs text-gray-500">+1000 proyectos</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* Stats with animated counters */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimateOnScroll delay={0}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">1993</p>
                <p className="text-sm text-gray-600">Año de fundación</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter target={20} suffix="+" />
                </p>
                <p className="text-sm text-gray-600">Años de trayectoria</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter target={2} />
                </p>
                <p className="text-sm text-gray-600">Sucursales</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter target={100} suffix="%" />
                </p>
                <p className="text-sm text-gray-600">Compromiso</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <AnimateOnScroll direction="left">
              <div className="group relative p-8 md:p-10 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Sparkles className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-primary mb-4">Nuestra misión</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                    Soluciones de la más alta calidad
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Nos comprometemos a utilizar tecnología de la más alta calidad, materiales de excelencia y un personal altamente capacitado para garantizar resultados que superen las expectativas.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div className="group relative p-8 md:p-10 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <MapPin className="h-7 w-7 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-blue-600 mb-4">Nuestra visión</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                    Líderes en impresión regional
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ser líderes en soluciones de impresión a nivel regional, ofreciendo un servicio de alta calidad para responder con rapidez y eficacia a las necesidades más estrictas del mercado.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4">Nuestra trayectoria</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cómo hemos evolucionado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De una oficina de trámites a una imprenta profesional con tecnología de punta.
            </p>
          </AnimateOnScroll>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 0.15}>
                  <div className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md md:-translate-x-1/2" />
                    
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                          <Calendar className="h-3 w-3 text-primary" />
                          <span className="text-xs font-semibold text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4">Nuestros valores</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lo que nos define
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tres pilares fundamentales que guían cada proyecto y decisión.
            </p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <div className="group relative p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gray-100 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-500">
                        <Icon className={`h-7 w-7 ${value.iconColor} transition-transform duration-500 group-hover:scale-110`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll direction="scale">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-900 p-12 md:p-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(143,184,46,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,63,127,0.1),transparent_50%)]" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-white">Listos para ayudarte</span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  ¿Quieres ser parte de
                  <br />
                  <span className="text-gray-400">nuestra historia?</span>
                </h2>
                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Únete a los cientos de clientes que confían en nosotros para sus proyectos de impresión.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    href="/contacto" 
                    className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300"
                  >
                    Iniciar proyecto
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20IGSA`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-full border border-gray-700 hover:border-gray-600 hover:bg-white/5 transition-all duration-300"
                  >
                    <svg className="h-4 w-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp directo
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}