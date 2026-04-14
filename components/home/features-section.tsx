"use client"

import { Clock, Award, Sparkles, Cpu } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const features = [
  {
    icon: Clock,
    title: "Servicio las 24 horas",
    description: "Disponibilidad completa para atender tus necesidades de impresión en cualquier momento.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Award,
    title: "Más de 20 años de experiencia",
    description: "Décadas de conocimiento y experiencia garantizan resultados de la más alta calidad.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Sparkles,
    title: "Personalización ilimitada",
    description: "Adaptamos cada proyecto a tus necesidades específicas sin restricciones.",
    gradient: "from-primary/20 to-accent/5",
  },
  {
    icon: Cpu,
    title: "Equipo de última generación",
    description: "Tecnología de punta para garantizar acabados perfectos en cada impresión.",
    gradient: "from-accent/20 to-primary/5",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 relative section-divider">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Lo que nos <span className="gradient-text">distingue</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1} direction="up">
              <div className="group relative p-6 rounded-2xl glass-card premium-card h-full">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10`}>
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
