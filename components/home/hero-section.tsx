import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(143,184,46,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,63,127,0.02),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-gray-700">
                Más de 20 años de experiencia
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight">
              Tu marca
              <br />
              <span className="text-gray-400">merece</span>
              <br />
              más impacto
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Soluciones de impresión profesional que transforman ideas en resultados tangibles. Calidad, rapidez y precisión en cada proyecto.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicios"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                Explorar servicios
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-gray-700 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                Hablar con nosotros
              </Link>
            </div>

            {/* Stats inline */}
            <div className="mt-16 flex items-center gap-8 pt-8 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-gray-900">20+</p>
                <p className="text-xs text-gray-500 mt-1">Años</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">2</p>
                <p className="text-xs text-gray-500 mt-1">Sucursales</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-xs text-gray-500 mt-1">Garantía</p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-printing.jpg"
                alt="Impresión profesional"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Entrega rápida</p>
                  <p className="text-xs text-gray-500">24-48 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
