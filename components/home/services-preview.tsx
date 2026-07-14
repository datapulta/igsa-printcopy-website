"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { captureEvent } from "@/lib/posthog"

const services = [
  { number: "01", title: "Impresión digital", description: "Papelería, materiales promocionales y piezas de venta que se ven tan bien como tu marca.", image: "/images/printing-services.jpg" },
  { number: "02", title: "Gran formato", description: "Banners, lonas y gráficos de alto impacto para hacerte imposible de ignorar.", image: "/images/large-format.jpg" },
  { number: "03", title: "Materiales rígidos", description: "PVC, acrílico, Dibond y más, con acabados diseñados para durar y destacar.", image: "/images/hero-printing.jpg" },
]

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#67920f]">Soluciones a tu medida</p><h2 className="text-4xl font-semibold leading-[1.05] tracking-[-.045em] text-[#08213c] md:text-5xl">Todo lo que tu marca necesita para hacerse notar.</h2></div>
            <Link href="/servicios" className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#08213c] transition hover:text-[#67920f]" onClick={() => captureEvent("services_preview_clicked", { service_title: "all_services", cta_location: "services_header" })}>Explorar todos los servicios <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </AnimateOnScroll>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.number} delay={index * 0.12}>
              <Link href="/servicios" className="group block h-full" onClick={() => captureEvent("services_preview_clicked", { service_title: service.title, cta_location: "services_grid" })}>
                <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={service.image} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#061b35]/45 to-transparent" /><span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#08213c] backdrop-blur">{service.number}</span></div>
                  <div className="p-6"><h3 className="text-xl font-semibold tracking-tight text-[#08213c]">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#497409]">Conocer solución <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
                </article>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
