"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Play, Sparkles } from "lucide-react"
import { captureEvent } from "@/lib/posthog"

const proof = ["Calidad de taller", "Atención personalizada", "Entregas puntuales"]

const brands = [
  {
    name: "COLEGIO SIERRA",
    icon: (
      <svg className="h-4.5 w-4.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20L12 4l9 16H3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l3-5.5 3 5.5H9z" />
      </svg>
    )
  },
  {
    name: "ARCH STUDIO",
    icon: (
      <svg className="h-4.5 w-4.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h10v10H4V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 10h10v10H10V10z" />
      </svg>
    )
  },
  {
    name: "GRUPO H",
    icon: (
      <svg className="h-4.5 w-4.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11l-2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    name: "BISTRÓ LOCAL",
    icon: (
      <svg className="h-4.5 w-4.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 12m-9 0a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
    )
  },
  {
    name: "AGENCIA CLICK",
    icon: (
      <svg className="h-4.5 w-4.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    )
  }
]

export function HeroSection() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#061b35] pt-28 text-white lg:min-h-[760px] lg:pt-0">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,25,51,0.99)_0%,rgba(5,25,51,0.93)_48%,rgba(5,25,51,0.58)_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute -left-28 top-16 h-96 w-96 rounded-full bg-[#9ac33c]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
          <Image src="/images/hero-printing.jpg" alt="Proceso de impresión profesional en IGSA" fill priority className="object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061b35] via-[#061b35]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061b35]/60 via-transparent to-[#061b35]/20" />
        </div>

        <div className="relative mx-auto flex min-h-[660px] max-w-7xl items-center px-6 py-20 lg:min-h-[760px] lg:px-8">
          <div className="max-w-3xl pt-8 lg:pt-12">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9ac33c] text-[#061b35]"><Sparkles className="h-3 w-3" /></span>
              Impresión que hace que tu marca se vea increíble
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Ideas grandes.
              <span className="block text-[#b6df55]">Impacto real.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Llevamos tus ideas de la pantalla al mundo físico con impresión, gran formato y acabados hechos para destacar.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#a8d341] px-6 py-4 text-sm font-bold text-[#06203d] transition hover:bg-[#c1ea63] hover:shadow-[0_12px_30px_rgba(168,211,65,.2)]" onClick={() => captureEvent("homepage_primary_cta_clicked", { cta_label: "solicitar_cotizacion", cta_destination: "/contacto" })}>
                Cotiza tu proyecto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/servicios" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10" onClick={() => captureEvent("homepage_primary_cta_clicked", { cta_label: "explorar_servicios", cta_destination: "/servicios" })}>
                <Play className="h-3.5 w-3.5 fill-current" />
                Ver soluciones
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-7 text-sm text-slate-200">
              {proof.map((item) => <span key={item} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#b6df55]" />{item}</span>)}
            </div>
          </div>

          <div className="absolute bottom-8 right-6 hidden max-w-[250px] rounded-2xl border border-white/15 bg-[#0c294a]/90 p-5 shadow-2xl backdrop-blur-md lg:block">
            <p className="text-[11px] font-semibold uppercase tracking-[.17em] text-[#b6df55]">Desde 2004</p>
            <p className="mt-2 text-xl font-semibold leading-tight">Tu aliado para imprimir con confianza.</p>
            <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4 text-sm text-slate-300">
              <span className="text-2xl font-semibold text-white">20+</span> años creando impacto
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee Divider */}
      <div className="relative z-10 border-y border-slate-200 bg-white py-7 sm:py-9">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="shrink-0 text-center lg:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">
                Marcas que confían en nosotros
              </p>
            </div>
            <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="animate-marquee flex gap-12 py-1">
                {/* First set of brands */}
                {brands.map((brand, idx) => (
                  <div key={`brand-1-${idx}`} className="flex shrink-0 items-center gap-3.5 text-slate-400 transition-colors duration-300 hover:text-slate-700" title={brand.name}>
                    {brand.icon}
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] whitespace-nowrap">{brand.name}</span>
                  </div>
                ))}
                {/* Second set of brands for seamless looping */}
                {brands.map((brand, idx) => (
                  <div key={`brand-2-${idx}`} className="flex shrink-0 items-center gap-3.5 text-slate-400 transition-colors duration-300 hover:text-slate-700" title={brand.name}>
                    {brand.icon}
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] whitespace-nowrap">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
