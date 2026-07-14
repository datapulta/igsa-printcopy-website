"use client"

import { ArrowUpRight, Award, Clock3, Layers3, WandSparkles } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const features = [
  { icon: Clock3, title: "Agilidad que sí cumple", description: "Coordinamos cada detalle para que tu proyecto esté listo cuando lo necesitas.", tone: "bg-[#e8f4c9] text-[#335711]" },
  { icon: Award, title: "Detalles que se notan", description: "Materiales y acabados elegidos para elevar la percepción de tu marca.", tone: "bg-[#e6effa] text-[#16457d]" },
  { icon: WandSparkles, title: "Acompañamiento de principio a fin", description: "Te ayudamos a convertir una buena idea en una pieza impecable.", tone: "bg-[#f7ecdc] text-[#8a4a14]" },
]

export function FeaturesSection() {
  return (
    <section className="overflow-hidden bg-[#f7f8f5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#67920f]">Hecho para impulsar marcas</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] text-[#08213c] md:text-5xl">Mucho más que mandar a imprimir.</h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-600 lg:col-span-4 lg:col-start-9">Combinamos experiencia de taller, atención cercana y ejecución precisa para que cada pieza represente lo mejor de tu negocio.</p>
          </div>
        </AnimateOnScroll>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 0.1}>
              <article className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.tone}`}><feature.icon className="h-5 w-5" /></div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#08213c]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                <ArrowUpRight className="mt-7 h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#67920f]" />
              </article>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#08213c] px-6 py-5 text-sm text-slate-200 md:px-8">
          <Layers3 className="h-5 w-5 shrink-0 text-[#b6df55]" />
          <span><strong className="font-semibold text-white">Una sola solución, múltiples posibilidades.</strong> Desde piezas de venta hasta señalética que transforma espacios.</span>
        </div>
      </div>
    </section>
  )
}
