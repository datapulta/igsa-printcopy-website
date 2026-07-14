"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { captureEvent } from "@/lib/posthog"

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#67920f]">Soluciones a tu medida</p>
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-.045em] text-[#08213c] md:text-5xl">Todo lo que tu marca necesita para hacerse notar.</h2>
            </div>
            <Link 
              href="/servicios" 
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#08213c] transition hover:text-[#67920f]" 
              onClick={() => captureEvent("services_preview_clicked", { service_title: "all_services", cta_location: "services_header" })}
            >
              Explorar todos los servicios <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimateOnScroll>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1: Impresión digital (Bento Destacada - Ancho Completo) */}
          <AnimateOnScroll className="md:col-span-2 h-full" delay={0}>
            <Link 
              href="/servicios" 
              className="group block h-full" 
              onClick={() => captureEvent("services_preview_clicked", { service_title: "Impresión digital", cta_location: "services_grid" })}
            >
              <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 flex flex-col lg:flex-row items-stretch min-h-[300px]">
                <div className="p-8 lg:p-10 flex flex-col justify-between flex-1 lg:max-w-[55%]">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-[#67920f]/10 px-3 py-1 text-xs font-bold text-[#67920f] uppercase tracking-wider">
                      01 • Impresión Digital
                    </span>
                    <h3 className="mt-6 text-2xl lg:text-3xl font-bold tracking-tight text-[#08213c]">Impresión Digital</h3>
                    <p className="mt-3 text-sm lg:text-base leading-relaxed text-slate-600">
                      Papelería corporativa, folletos, flyers y piezas de venta promocionales que se imprimen con la más alta resolución y fidelidad de color para que tu negocio destaque con profesionalismo.
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#497409]">
                    Conocer solución <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                {/* Image side */}
                <div className="relative min-h-[220px] lg:min-h-full flex-1 overflow-hidden">
                  <Image 
                    src="/images/printing-services.jpg" 
                    alt="Impresión digital" 
                    fill 
                    className="object-cover transition duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-50 via-transparent to-transparent opacity-80" />
                </div>
              </article>
            </Link>
          </AnimateOnScroll>

          {/* Card 2: Gran formato (Bento Estándar - 1/2 de ancho) */}
          <AnimateOnScroll className="md:col-span-1 h-full" delay={0.12}>
            <Link 
              href="/servicios" 
              className="group block h-full" 
              onClick={() => captureEvent("services_preview_clicked", { service_title: "Gran formato", cta_location: "services_grid" })}
            >
              <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 flex flex-col justify-between">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src="/images/large-format.jpg" 
                    alt="Gran formato" 
                    fill 
                    className="object-cover transition duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#08213c] backdrop-blur">
                    02
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#08213c]">Gran formato</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      Banners, lonas publicitarias, vinilos vehiculares y gráficos a gran escala con tintas resistentes para hacer que tu marca sea imposible de ignorar en interiores y exteriores.
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#497409]">
                    Conocer solución <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          </AnimateOnScroll>

          {/* Card 3: Materiales rígidos (Bento Estándar - 1/2 de ancho) */}
          <AnimateOnScroll className="md:col-span-1 h-full" delay={0.24}>
            <Link 
              href="/servicios" 
              className="group block h-full" 
              onClick={() => captureEvent("services_preview_clicked", { service_title: "Materiales rígidos", cta_location: "services_grid" })}
            >
              <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 flex flex-col justify-between">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src="/images/hero-printing.jpg" 
                    alt="Materiales rígidos" 
                    fill 
                    className="object-cover transition duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#08213c] backdrop-blur">
                    03
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#08213c]">Materiales rígidos</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      Impresión directa en PVC, acrílico, aluminio Dibond y foamboard. Acabados duraderos ideales para señalización comercial, displays de eventos y cuadros.
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#497409]">
                    Conocer solución <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
