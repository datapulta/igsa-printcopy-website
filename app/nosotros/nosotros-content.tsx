"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  Lightbulb, 
  Shield, 
  Users, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  MessageCircle,
  Compass
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { TrackedAnchor } from "@/components/tracked-link"
import { siteConfig } from "@/lib/seo-config"

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

const roadmapSteps = [
  {
    step: "01",
    year: "1993",
    title: "Fundación",
    desc: "Iniciamos operaciones ofreciendo servicios de trámites gubernamentales a nivel municipal en Huixquilucan."
  },
  {
    step: "02",
    year: "2000s",
    title: "Era de Impresión",
    desc: "Incorporamos servicios de impresión y copiado básico, dando nuestros primeros pasos en la industria gráfica."
  },
  {
    step: "03",
    year: "2010s",
    title: "Modernización",
    desc: "Adoptamos equipos industriales de impresión digital de gran formato y sublimación textil."
  },
  {
    step: "04",
    year: "Hoy",
    title: "Liderazgo Regional",
    desc: "Consolidados como referentes con 2 sucursales, equipamiento de vanguardia y cobertura integral."
  }
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
      <section className="relative py-24 md:py-36 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8f8f8_1px,transparent_1px),linear-gradient(to_bottom,#f8f8f8_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <AnimateOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200/50 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#67920f] animate-pulse" />
                  <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">Trayectoria • Desde 1993</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-[#08213c] leading-[0.92] tracking-tight mb-8">
                  Diseñando el futuro,
                  <br />
                  <span className="bg-gradient-to-r from-[#67920f] to-emerald-600 bg-clip-text text-transparent">haciendo historia.</span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                  Evolucionamos de una oficina de trámites locales a convertirnos en el taller de impresión digital y gran formato líder de la región. Creamos piezas de alto impacto que impulsan tu negocio.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/servicios"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition duration-300 shadow-lg shadow-slate-950/10"
                  >
                    Explorar servicios
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-700 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition duration-300"
                  >
                    Contáctanos
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Media */}
            <div className="lg:col-span-6">
              <AnimateOnScroll direction="right">
                <div className="relative">
                  {/* Photo Frame */}
                  <div 
                    className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl"
                    style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                  >
                    <Image
                      src="/images/about-printing.jpg"
                      alt="Instalaciones IGSA Print & Copy"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>

                  {/* Floating glassmorphism badge */}
                  <div 
                    className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-100 flex items-center gap-4 max-w-xs"
                    style={{ animation: "float 4s ease-in-out infinite" }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#67920f]/10 flex items-center justify-center shrink-0">
                      <Award className="w-5.5 h-5.5 text-[#67920f]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Compromiso IGSA</p>
                      <p className="text-sm font-bold text-[#08213c] mt-0.5 leading-snug">Calidad Industrial Garantizada</p>
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
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </section>

      {/* Bento Grid Stats Section */}
      <section className="py-24 bg-[#08213c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(103,146,15,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#b6df55]">Nuestras Cifras</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2">La fuerza de la experiencia</h2>
          </AnimateOnScroll>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 (Large - 2 cols on md) */}
            <div className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-slate-900/60 border border-white/5 backdrop-blur-sm flex flex-col justify-between h-[300px]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Origen</span>
                <h3 className="text-5xl font-black text-[#b6df55] mt-4 tracking-tight">1993</h3>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
                Nacimos como un despacho local ofreciendo soluciones de gestoría. Esa misma vocación de servicio y honestidad cimentó el camino para convertirnos en la imprenta más confiable del municipio.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 backdrop-blur-sm flex flex-col justify-between h-[300px]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trayectoria</span>
                <h3 className="text-5xl font-black text-[#b6df55] mt-4 tracking-tight">
                  <AnimatedCounter target={20} suffix="+" />
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Años de experiencia constante resolviendo retos y liderando el mercado de impresión en el Estado de México.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 backdrop-blur-sm flex flex-col justify-between h-[300px]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Presencia</span>
                <h3 className="text-5xl font-black text-[#b6df55] mt-4 tracking-tight">
                  <AnimatedCounter target={2} />
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sucursales físicas en Huixquilucan y Chichicaspa equipadas con maquinaria de impresión y corte industrial.
              </p>
            </div>

            {/* Box 4 (2 cols on md) */}
            <div className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-slate-900/60 border border-white/5 backdrop-blur-sm flex flex-col justify-between h-[300px]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Eficiencia</span>
                <h3 className="text-5xl font-black text-[#b6df55] mt-4 tracking-tight">
                  <AnimatedCounter target={100} suffix="%" />
                </h3>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
                De compromiso absoluto en tiempos de entrega y calidad de resolución cromática. Respaldamos cada uno de tus proyectos.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Nuestra Misión Banner */}
      <section className="relative py-28 md:py-36 overflow-hidden flex items-center justify-center bg-gray-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/taller-plotter.png"
            alt="Nuestra Misión IGSA"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10">
          <div className="max-w-4xl">
            <AnimateOnScroll>
              {/* Badge/Label similar to screenshot */}
              <div className="inline-block bg-white text-gray-950 text-[11px] font-extrabold px-4.5 py-2.5 rounded-lg mb-8 tracking-wider uppercase shadow-md">
                Nuestra misión
              </div>
              <h2 className="text-2xl md:text-4xl font-normal leading-relaxed text-white tracking-tight mb-8">
                Ofrecer soluciones de la más alta calidad y creatividad, brindando a nuestros clientes productos personalizados que fortalezcan su identidad visual y alcance.
              </h2>
              <p className="text-gray-400 text-xs md:text-sm max-w-3xl leading-relaxed">
                Nos comprometemos a utilizar tecnología de la más alta calidad, materiales de excelencia y un personal altamente capacitado para garantizar resultados que superen las expectativas del público objetivo.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Nuestra Visión Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7">
              <AnimateOnScroll direction="left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 text-rose-600 rounded-full mb-6">
                  <Compass className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Futuro & Proyección</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#08213c] tracking-tight mb-6">
                  Nuestra Visión
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  Posicionarnos como el principal hub de soluciones integrales de impresión y publicidad en el Estado de México. Planeamos seguir incorporando maquinaria de última generación respetuosa con el medio ambiente y expandiendo nuestros canales digitales para agilizar las solicitudes del mercado.
                </p>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-500">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span>Magenta (M) • CMYK</span>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <AnimateOnScroll direction="right">
                <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl">
                  <Image
                    src="/images/vision-printing.jpg"
                    alt="Nuestra Visión IGSA"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline (Startup style) */}
      <section className="py-24 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#67920f]">Trayectoria</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#08213c] mt-2">Nuestra evolución paso a paso</h2>
          </AnimateOnScroll>

          {/* Timeline Roadmap Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Dashed connector line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-1/2 hidden lg:block z-0" />

            {roadmapSteps.map((step, index) => (
              <AnimateOnScroll key={step.step} delay={index * 0.1} className="relative z-10 h-full">
                <article className="group p-6 rounded-3xl bg-white border border-slate-200/80 h-full flex flex-col justify-between transition duration-300 hover:shadow-lg hover:border-slate-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">{step.year}</span>
                      <span className="text-3xl font-black text-slate-100 group-hover:text-[#67920f]/20 transition-colors duration-300">{step.step}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#08213c] mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#67920f]">Pilares</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#08213c] mt-2">Nuestros Valores</h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">Las bases éticas que sustentan nuestra relación con clientes y socios.</p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <div className="group relative p-8 rounded-3xl bg-slate-50/50 border border-slate-200/80 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:border-slate-300">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#67920f]/10">
                        <Icon className={`h-6 w-6 ${value.iconColor} transition-transform duration-500 group-hover:scale-110`} />
                      </div>
                      <h3 className="text-lg font-bold text-[#08213c] mb-3">{value.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll direction="scale">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#08213c] p-12 md:p-20 text-center text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(103,146,15,0.15),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,63,127,0.1),transparent_50%)]" />
              
              <div className="relative max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6 border border-white/5">
                  <CheckCircle2 className="h-4 w-4 text-[#b6df55]" />
                  <span className="text-xs font-bold text-white tracking-wide uppercase">Listos para ayudarte</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.05] tracking-tight">
                  ¿Quieres ser parte de
                  <br />
                  <span className="text-[#b6df55]">nuestra historia?</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mb-10 leading-relaxed">
                  Únete a los cientos de comercios, corporativos y particulares que confían en IGSA Print & Copy para materializar sus piezas de diseño.
                </p>

                <TrackedAnchor
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20gustar%C3%ADa%20iniciar%20un%20proyecto%20con%20ustedes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm font-bold bg-white text-slate-900 rounded-full hover:bg-slate-100 transition duration-300 shadow-md"
                  event="about_cta_clicked"
                  properties={{
                    cta_location: "about_footer",
                    page_name: "nosotros"
                  }}
                >
                  <MessageCircle className="h-4 w-4 text-[#67920f]" /> Iniciar proyecto
                </TrackedAnchor>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}