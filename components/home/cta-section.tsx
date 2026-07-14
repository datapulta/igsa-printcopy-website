"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { siteConfig } from "@/lib/seo-config"

export function CTASection() {
  return (
    <section className="bg-[#f7f8f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8"><AnimateOnScroll direction="scale"><div className="relative overflow-hidden rounded-[2rem] bg-[#a8d341] px-7 py-14 md:px-14 md:py-20"><div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border-[56px] border-white/20" /><div className="absolute bottom-0 left-1/3 h-40 w-96 rounded-full bg-[#d6f58b]/60 blur-3xl" /><div className="relative grid gap-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#31520c]">Hablemos de tu siguiente idea</p><h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-.05em] text-[#08213c] md:text-6xl">Un gran proyecto empieza con una conversación.</h2></div><div className="lg:col-span-4"><p className="mb-7 max-w-sm text-base leading-relaxed text-[#264315]">Cuéntanos qué tienes en mente. Nuestro equipo te ayudará a elegir la mejor solución.</p><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/contacto" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#08213c] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#10335a]">Solicitar cotización <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link><a href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#355b10]/25 px-6 py-4 text-sm font-bold text-[#17320a] transition hover:bg-white/25"><MessageCircle className="h-4 w-4" />WhatsApp</a></div></div></div></div></AnimateOnScroll></div>
    </section>
  )
}
