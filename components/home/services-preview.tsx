"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const services = [
  {
    title: "Impresiones Digitales",
    description: "Tarjetas de presentación, folletos y documentos con acabados profesionales al momento.",
    image: "/images/printing-services.jpg",
    span: "md:col-span-1",
  },
  {
    title: "Gran Formato",
    description: "Pósters, banners, lonas y gráficos de gran tamaño con máxima calidad y colores vibrantes.",
    image: "/images/large-format.jpg",
    span: "md:col-span-1",
  },
  {
    title: "Materiales Rígidos",
    description: "Impresión en PVC, acrílico, Dibond y coroplast para exhibidores y señalética.",
    image: "/images/hero-printing.jpg",
    span: "md:col-span-2",
    featured: true,
  },
]

export function ServicesPreview() {
  return (
    <section className="py-32 relative bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <AnimateOnScroll>
          <div className="max-w-3xl mb-20">
            <p className="text-sm font-medium text-primary mb-4">Qué ofrecemos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Soluciones completas para tu marca
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde una tarjeta de presentación hasta una lona gigante, proyecta tu marca con impacto real.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={index}
              delay={index * 0.15}
              className={service.span}
            >
              <div className={`group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 ${service.featured ? 'md:aspect-[2/1]' : 'aspect-[4/5] md:aspect-[4/5]'}`}>
                
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 line-clamp-2 max-w-md leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Link 
                    href="/servicios"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary transition-colors duration-300"
                  >
                    Ver más
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll delay={0.3} className="text-center mt-16">
          <Link
            href="/servicios"
            className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold text-gray-900 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
