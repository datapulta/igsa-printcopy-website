"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { 
  MapPin, 
  Navigation, 
  Clock, 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Cpu, 
  Award, 
  ArrowRight,
  ExternalLink,
  ChevronRight
} from "lucide-react"

export default function NuevoLocalPage() {
  const [copied, setCopied] = useState(false)
  const newAddress = "José María Morelos #51, San Juan Bautista, 52760 Huixquilucan de Degollado, Mex."
  const mapsLink = "https://maps.app.goo.gl/pdp7VVyuqPRKazUo7"
  const wazeLink = "https://waze.com/ul?ll=19.3616992,-99.3453603&navigate=yes"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(newAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (err) {
      console.error("Error al copiar al portapapeles", err)
    }
  }

  const routeSteps = [
    {
      step: "01",
      title: "Salida del local anterior",
      desc: "Inicia desde la ubicación anterior en Av. Venustiano Carranza #30 (marcada con el pin rojo)."
    },
    {
      step: "02",
      title: "Gira en Calle Emiliano Zapata",
      desc: "Camina unos metros hacia el este y gira a la derecha sobre Calle Emiliano Zapata."
    },
    {
      step: "03",
      title: "Gira a la izquierda en Morelos",
      desc: "Al llegar al cruce, gira a la izquierda para incorporarte a la Calle José María Morelos."
    },
    {
      step: "04",
      title: "Sigue derecho hacia el este",
      desc: "Avanza derecho sobre José María Morelos cruzando las calles Vicente Guerrero, Moctezuma, Sor Juana Inés de la Cruz y Cuauhtémoc."
    },
    {
      step: "05",
      title: "¡Llegaste a tu destino!",
      desc: "Nos encontramos a mano derecha en José María Morelos #51, justo después de cruzar la calle Apopocatzin."
    }
  ]

  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: "Inicio", href: "/" }, 
          { name: "Nuevo Local", href: "/nuevo" }
        ]} 
      />
      <Header />

      <main className="min-h-screen pt-20 relative overflow-hidden noise-overlay">
        {/* Background Decorative Blobs */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-accent/[0.03] rounded-full blur-[100px] animate-float delay-300" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-24">
          {/* Header Section */}
          <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="h-3 w-3 text-primary animate-pulse" />
              Estrenamos Local
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6">
              ¡Nos cambiamos <span className="gradient-text">de lugar</span>!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Nos hemos trasladado a una nueva ubicación más cerca de ti, para brindarte un servicio más cómodo, ágil y con la atención personalizada de siempre.
            </p>

            {/* GPS Navigation Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Inicia tu viaje GPS (Maps)
                  <ExternalLink className="h-4 w-4" />
                </span>
              </a>

              <a
                href={wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto py-3.5 px-8 rounded-full border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300 text-sm font-semibold text-foreground"
              >
                <span>Abrir en Waze</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
              </a>
            </div>
          </AnimateOnScroll>

          {/* Comparativa: Antes vs Ahora */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Antes */}
            <AnimateOnScroll direction="left">
              <div className="relative p-8 rounded-3xl bg-card/40 border border-white/[0.04] flex flex-col h-full opacity-60 hover:opacity-80 transition-opacity duration-300">
                <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-2">
                  Ubicación Anterior
                </span>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  Av. Venustiano Carranza #30
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  2do Piso, Barrio San Melchor, Huixquilucan de Degollado, Mex. C.P. 52760
                </p>
                <div className="mt-auto py-2.5 px-4 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-muted-foreground text-center">
                  Antes estábamos aquí
                </div>
              </div>
            </AnimateOnScroll>

            {/* Ahora */}
            <AnimateOnScroll direction="right">
              <div className="relative p-8 rounded-3xl bg-card border border-primary/20 glow-green flex flex-col h-full">
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-3xl" />
                
                <span className="inline-flex items-center w-fit px-3 py-1 bg-primary text-primary-foreground text-2xs font-extrabold uppercase rounded-full mb-3 tracking-wider">
                  ¡Ya Abiertos!
                </span>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  José María Morelos #51
                </h2>
                <p className="text-sm text-foreground/90 leading-relaxed mb-6">
                  Barrio San Juan Bautista, Huixquilucan de Degollado, Mex. C.P. 52760.
                  <span className="block text-xs text-muted-foreground mt-1">
                    (Junto al Grupo Médico Veterinario San Juan)
                  </span>
                </p>

                {/* Copiar direccion utility */}
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all text-xs font-medium text-foreground hover:scale-[1.01]"
                >
                  <span className="truncate pr-4 text-muted-foreground select-all">{newAddress}</span>
                  {copied ? (
                    <span className="flex items-center gap-1 text-primary shrink-0">
                      <Check className="h-4 w-4" />
                      Copiado
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-primary shrink-0 hover:text-primary/80">
                      <Copy className="h-3.5 w-3.5" />
                      Copiar
                    </span>
                  )}
                </button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Como llegar: Ruta y Mapa */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Steps (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <AnimateOnScroll>
                <div className="p-8 rounded-3xl glass-card relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        ¿Cómo llegar desde el local anterior?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Estamos ubicados a la vuelta de la sucursal anterior.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="py-2 px-4 rounded-xl bg-accent/10 border border-accent/20 text-center">
                        <p className="text-lg font-black text-accent leading-none">7 min</p>
                        <p className="text-[10px] text-muted-foreground uppercase mt-1">Caminando</p>
                      </div>
                    </div>
                  </div>

                  {/* Vertical Timeline */}
                  <div className="relative pl-6 border-l border-white/[0.08] ml-4 space-y-8 my-4">
                    {routeSteps.map((step, idx) => (
                      <div key={idx} className="relative group">
                        {/* Bullet */}
                        <div className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-card border border-white/[0.1] flex items-center justify-center text-xs font-bold text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Map Iframe (5 cols) */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <AnimateOnScroll delay={0.1} className="h-full min-h-[350px]">
                <div className="rounded-3xl border border-white/[0.08] overflow-hidden h-full min-h-[350px] relative glass-card shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9806497184283!2d-99.3475452!3d19.3616992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2077ac17ee2bb%3A0x637ad3286f0c608f!2sJos%C3%A9%20Mar%C3%ADa%20Morelos%2051%2C%20San%20Juan%20Bautista%2C%2052760%20Huixquilucan%20de%20Degollado%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1719876543210!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "350px" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500 rounded-3xl"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Banner de Garantias/Valores */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Award, label: "Misma calidad", sub: "De siempre" },
              { icon: Cpu, label: "Más rápido", sub: "Y cómodo" },
              { icon: Sparkles, label: "Atención", sub: "Personalizada" },
              { icon: Navigation, label: "Mejor", sub: "Ubicación" }
            ].map((item, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 0.1} direction="up">
                <div className="p-5 rounded-2xl bg-card/30 border border-white/[0.04] text-center flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">{item.label}</h4>
                  <p className="text-2xs text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Ayuda/Soporte */}
          <AnimateOnScroll className="max-w-2xl mx-auto">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-accent/5 border border-primary/10 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  ¿Tienes problemas para encontrarnos?
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Si te pierdes o tienes alguna duda, escríbenos directamente por WhatsApp o llámanos. ¡Estaremos encantados de guiarte!
                </p>
                <a
                  href={`https://wa.me/${siteConfig.phone.huixquilucan}?text=Hola%2C%20estoy%20buscando%20el%20nuevo%20local%20en%20Morelos%2051%20y%20requiero%20apoyo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#25D366]/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  Llamar o escribir al 55 3587 0335
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </>
  )
}
