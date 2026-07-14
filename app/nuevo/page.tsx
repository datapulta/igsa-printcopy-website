"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { MapPin, Navigation, MessageCircle, Copy, Check, Sparkles, Cpu, Award, ExternalLink } from "lucide-react"
import { captureEvent, captureException } from "@/lib/posthog"

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
      captureException(err, {
        error_context: "copy_new_address",
        page_name: "nuevo",
      })
      console.error("Error al copiar al portapapeles", err)
    }
  }

  const routeSteps = [
    { step: "01", title: "Salida del local anterior", desc: "Inicia desde la ubicación anterior en Av. Venustiano Carranza #30." },
    { step: "02", title: "Gira en Calle Emiliano Zapata", desc: "Camina unos metros hacia el este y gira a la derecha." },
    { step: "03", title: "Gira a la izquierda en Morelos", desc: "Al llegar al cruce, gira a la izquierda sobre José María Morelos." },
    { step: "04", title: "Sigue derecho", desc: "Avanza derecho cruzando Vicente Guerrero, Moctezuma y Cuauhtémoc." },
    { step: "05", title: "¡Llegaste!", desc: "Nos encontramos a mano derecha en José María Morelos #51." }
  ]

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Inicio", href: "/" }, { name: "Nuevo Local", href: "/nuevo" }]} />
      <Header />

      <main className="min-h-screen pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-32">
          
          {/* Header */}
          <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-8">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-gray-700">Estrenamos Local</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8">
              ¡Nos cambiamos
              <br />
              <span className="text-gray-400">de lugar</span>!
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Nos hemos trasladado a una nueva ubicación más cerca de ti, para brindarte un servicio más cómodo y ágil.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all duration-300"
                onClick={() => captureEvent("new_location_action_clicked", {
                  action_type: "open_maps",
                  destination_type: "google_maps",
                })}
              >
                Abrir en Maps
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 text-sm font-semibold text-gray-700"
                onClick={() => captureEvent("new_location_action_clicked", {
                  action_type: "open_waze",
                  destination_type: "waze",
                })}
              >
                Abrir en Waze
                <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
              </a>
            </div>
          </AnimateOnScroll>

          {/* Before/After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <AnimateOnScroll direction="left">
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 flex flex-col h-full opacity-60">
                <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">Ubicación Anterior</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  Av. Venustiano Carranza #30
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  2do Piso, Barrio San Melchor, Huixquilucan de Degollado, Mex. C.P. 52760
                </p>
                <div className="mt-auto py-2.5 px-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-500 text-center">
                  Antes estábamos aquí
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div className="p-8 rounded-3xl bg-white border-2 border-gray-900 flex flex-col h-full">
                <span className="inline-flex items-center w-fit px-3 py-1 bg-gray-900 text-white text-xs font-bold uppercase rounded-full mb-3 tracking-wider">
                  ¡Ya Abiertos!
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-900" />
                  José María Morelos #51
                </h2>
                <p className="text-sm text-gray-900 leading-relaxed mb-6">
                  Barrio San Juan Bautista, Huixquilucan de Degollado, Mex. C.P. 52760.
                  <span className="block text-xs text-gray-500 mt-1">(Junto al Grupo Médico Veterinario San Juan)</span>
                </p>

                <button
                  onClick={() => {
                    captureEvent("new_location_action_clicked", {
                      action_type: "copy_address",
                      destination_type: "clipboard",
                    })
                    handleCopy()
                  }}
                  className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all text-xs font-medium text-gray-700"
                >
                  <span className="truncate pr-4 text-gray-600 select-all">{newAddress}</span>
                  {copied ? (
                    <span className="flex items-center gap-1 text-gray-900 shrink-0">
                      <Check className="h-4 w-4" />
                      Copiado
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-900 shrink-0">
                      <Copy className="h-3.5 w-3.5" />
                      Copiar
                    </span>
                  )}
                </button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Route + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-7">
              <AnimateOnScroll>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">¿Cómo llegar?</h3>
                      <p className="text-sm text-gray-600">Desde el local anterior</p>
                    </div>
                    <div className="py-2 px-4 rounded-xl bg-white border border-gray-200 text-center">
                      <p className="text-lg font-bold text-gray-900 leading-none">7 min</p>
                      <p className="text-[10px] text-gray-500 uppercase mt-1">Caminando</p>
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-200 ml-4 space-y-8">
                    {routeSteps.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-10 top-0.5 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-gray-900 mb-1">{step.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-5">
              <AnimateOnScroll delay={0.1} className="h-full min-h-[350px]">
                <div className="rounded-3xl border border-gray-200 overflow-hidden h-full min-h-[350px] bg-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9806497184283!2d-99.3475452!3d19.3616992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2077ac17ee2bb%3A0x637ad3286f0c608f!2sJos%C3%A9%20Mar%C3%ADa%20Morelos%2051%2C%20San%20Juan%20Bautista%2C%2052760%20Huixquilucan%20de%20Degollado%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1719876543210!5m2!1ses!2smx"
                    width="100%" height="100%" style={{ border: 0, minHeight: "350px" }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { icon: Award, label: "Misma calidad", sub: "De siempre" },
              { icon: Cpu, label: "Más rápido", sub: "Y cómodo" },
              { icon: Sparkles, label: "Atención", sub: "Personalizada" },
              { icon: Navigation, label: "Mejor", sub: "Ubicación" }
            ].map((item, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 0.1}>
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-3 mx-auto">
                    <item.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">{item.label}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Help */}
          <AnimateOnScroll className="max-w-2xl mx-auto">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">¿Tienes problemas para encontrarnos?</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Escríbenos por WhatsApp o llámanos. ¡Estaremos encantados de guiarte!
              </p>
              <a
                href={`https://wa.me/${siteConfig.phone.huixquilucan}?text=Hola%2C%20estoy%20buscando%20el%20nuevo%20local%20en%20Morelos%2051%20y%20requiero%20apoyo`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
                onClick={() => captureEvent("new_location_action_clicked", {
                  action_type: "request_whatsapp_help",
                  destination_type: "whatsapp",
                })}
              >
                <MessageCircle className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </>
  )
}
