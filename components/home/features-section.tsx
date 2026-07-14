"use client"

import { Award, Clock3, Layers3, WandSparkles } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"


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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Card 1: Agilidad que sí cumple (Bento Destacada - Ancho Completo) */}
          <AnimateOnScroll className="md:col-span-2 h-full" delay={0}>
            <article className="group h-full rounded-2xl border border-slate-800 bg-[#08213c] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#08213c]/10 text-white relative overflow-hidden">
              {/* Decorative subtle background light */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#9ac33c]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full relative z-10">
                <div className="lg:col-span-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a8d341]/10 text-[#b6df55] border border-[#a8d341]/20">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">Agilidad que sí cumple</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Coordinamos cada detalle y optimizamos los tiempos de producción para que tu proyecto esté impreso y listo exactamente cuando lo necesitas, sin contratiempos.
                  </p>
                </div>
                
                {/* Process Steps Graphic (Right side on desktop) */}
                <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
                  <div className="relative flex items-center justify-between w-full max-w-[280px] p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl">
                    <div className="absolute left-6 right-6 top-[2.25rem] h-0.5 bg-gradient-to-r from-[#a8d341] via-[#a8d341]/30 to-white/10" />
                    
                    {/* Step 1: Archivo */}
                    <div className="relative flex flex-col items-center gap-1.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#a8d341] text-[#08213c] shadow-lg shadow-[#a8d341]/20">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-bold tracking-wider text-[#a8d341]">ARCHIVO</span>
                    </div>

                    {/* Step 2: Producción */}
                    <div className="relative flex flex-col items-center gap-1.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0c2e56] text-[#b6df55] border border-white/10">
                        <svg className="h-4 w-4 animate-[spin_8s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-bold tracking-wider text-slate-300">TALLER</span>
                    </div>

                    {/* Step 3: Entrega */}
                    <div className="relative flex flex-col items-center gap-1.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0c2e56] text-slate-400 border border-white/10">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-bold tracking-wider text-slate-500">LISTO</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </AnimateOnScroll>

          {/* Card 2: Detalles que se notan (Bento Estándar - 1/2 de ancho) */}
          <AnimateOnScroll className="md:col-span-1 h-full" delay={0.1}>
            <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center h-full">
                <div className="sm:col-span-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6effa] text-[#16457d]">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#08213c]">Detalles que se notan</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    Materiales y acabados elegidos para elevar la percepción de tu marca, garantizando alta precisión en colores y texturas.
                  </p>
                </div>
                
                {/* Slanted Materials Preview Graphic */}
                <div className="sm:col-span-4 flex items-center justify-center">
                  <div className="relative w-[130px] h-[90px]">
                    {/* Slanted Card 1: base */}
                    <div className="absolute left-0 bottom-0 w-24 h-15 rounded-lg bg-slate-100 border border-slate-200 rotate-[-8deg] flex items-center justify-center shadow-sm">
                      <span className="text-[7.5px] font-bold text-slate-400">PAPEL</span>
                    </div>
                    {/* Slanted Card 2: middle */}
                    <div className="absolute left-4 bottom-2.5 w-24 h-15 rounded-lg bg-[#e6effa]/85 border border-[#b6d2f5] rotate-[-4deg] flex items-center justify-center shadow-md backdrop-blur-xs">
                      <span className="text-[7.5px] font-bold text-[#16457d]">ACRÍLICO</span>
                    </div>
                    {/* Slanted Card 3: top */}
                    <div className="absolute left-8 bottom-5 w-24 h-15 rounded-lg bg-white border border-slate-200 rotate-[4deg] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:rotate-[6deg]">
                      <span className="text-[7.5px] font-bold text-slate-600">ACABADO</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </AnimateOnScroll>

          {/* Card 3: Acompañamiento de principio a fin (Bento Estándar - 1/2 de ancho) */}
          <AnimateOnScroll className="md:col-span-1 h-full" delay={0.2}>
            <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center h-full">
                <div className="sm:col-span-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7ecdc] text-[#8a4a14]">
                    <WandSparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#08213c]">Acompañamiento de principio a fin</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    Te ayudamos a convertir una buena idea en una pieza impecable, guiándote en la elección de materiales y formatos.
                  </p>
                </div>
                
                {/* Blueprint Canvas Graphic */}
                <div className="sm:col-span-4 flex items-center justify-center">
                  <div className="relative w-[130px] h-[95px] flex items-center justify-center">
                    <div className="w-[110px] h-[80px] bg-[#fafaf9] border border-slate-200 rounded-lg p-2.5 relative shadow-md [background-image:radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:8px_8px] transition-all duration-300 group-hover:shadow-lg group-hover:border-slate-300">
                      {/* Crop mark lines */}
                      <div className="absolute left-1 top-1 w-2.5 h-2.5 border-t border-l border-slate-400" />
                      <div className="absolute right-1 top-1 w-2.5 h-2.5 border-t border-r border-slate-400" />
                      <div className="absolute left-1 bottom-1 w-2.5 h-2.5 border-b border-l border-slate-400" />
                      <div className="absolute right-1 bottom-1 w-2.5 h-2.5 border-b border-r border-slate-400" />
                      
                      {/* Geometric shape / blueprint */}
                      <div className="w-full h-full border border-dashed border-[#8a4a14]/30 rounded flex items-center justify-center bg-[#f7ecdc]/20 transition-colors duration-300 group-hover:bg-[#f7ecdc]/40">
                        <span className="text-[7.5px] font-bold tracking-wider text-[#8a4a14] text-center leading-none">IDEA ➔ FÍSICO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </AnimateOnScroll>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#08213c] px-6 py-5 text-sm text-slate-200 md:px-8">
          <Layers3 className="h-5 w-5 shrink-0 text-[#b6df55]" />
          <span><strong className="font-semibold text-white">Una sola solución, múltiples posibilidades.</strong> Desde piezas de venta hasta señalética que transforma espacios.</span>
        </div>
      </div>
    </section>
  )
}
