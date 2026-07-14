"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Play, Sparkles } from "lucide-react"
import { captureEvent } from "@/lib/posthog"

const proof = ["Calidad de taller", "Atención personalizada", "Entregas puntuales"]

export function HeroSection() {
  return (
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
  )
}
