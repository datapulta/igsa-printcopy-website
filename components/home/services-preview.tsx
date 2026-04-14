"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const services = [
  {
    title: "Impresiones Digitales",
    description: "Ideal para tiradas cortas y medianas. Imprimimos tarjetas de presentación, folletos y documentos con acabados profesionales al momento.",
    image: "/images/printing-services.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Personalizables",
    description: "Técnica de impresión versátil y resistente ideal para personalizar textiles, merchandising y artículos promocionales.",
    image: "/images/large-format.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Impresiones a Gran Formato",
    description: "Imprimimos pósters, banners, lonas y gráficos de gran tamaño con la máxima calidad y colores vibrantes.",
    image: "/images/hero-printing.jpg",
    span: "md:col-span-2 md:row-span-1",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-6">
              Qué ofrecemos
            </span>
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground max-w-3xl leading-relaxed font-light">
              Proyecta tu marca y tus ideas al público de tu interés,{" "}
              <span className="font-semibold text-foreground">
                moldeando la percepción
              </span>{" "}
              de tus consumidores.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Sub Header */}
        <AnimateOnScroll delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Un sinfín de{" "}
            <span className="gradient-text">posibilidades</span>
          </h2>
        </AnimateOnScroll>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={index}
              delay={index * 0.15}
              className={service.span}
            >
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-auto md:h-80 bg-card border border-white/[0.06] premium-card">
                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 max-w-md leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll delay={0.3} className="text-center mt-14">
          <Link
            href="/servicios"
            className="group inline-flex items-center gap-3 px-8 py-3.5 text-sm font-semibold text-foreground rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
