"use client"

import { Clock, Award, Sparkles, Cpu } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const features = [
  {
    icon: Clock,
    title: "Atención rápida",
    description: "Optimizamos tiempos de producción para entregarte tus proyectos lo antes posible.",
    span: "md:col-span-1",
  },
  {
    icon: Award,
    title: "20+ años de experiencia",
    description: "Décadas de conocimiento garantizan resultados de la más alta calidad.",
    span: "md:col-span-1",
  },
  {
    icon: Sparkles,
    title: "Personalización total",
    description: "Adaptamos cada proyecto a tus necesidades específicas sin restricciones.",
    span: "md:col-span-2",
  },
  {
    icon: Cpu,
    title: "Tecnología de punta",
    description: "Equipo de última generación para acabados perfectos en cada impresión.",
    span: "md:col-span-2",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="text-sm font-medium text-primary mb-4">¿Por qué elegirnos?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Lo que nos hace diferentes
            </h2>
          </div>

          {/* Right: Bento Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <AnimateOnScroll 
                  key={index} 
                  delay={index * 0.1} 
                  direction="up"
                  className={feature.span}
                >
                  <div className="group relative p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 h-full transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-primary/10 flex items-center justify-center mb-6 transition-all duration-500">
                      <feature.icon className="h-6 w-6 text-gray-400 group-hover:text-primary transition-colors duration-500" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
