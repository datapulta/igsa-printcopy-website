import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden noise-overlay">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-printing.jpg"
          alt="Impresión profesional"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-accent/[0.05] rounded-full blur-[100px] animate-float delay-300" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in-down">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Imprenta Líder · Más de 20 años
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight animate-fade-in-up">
            Mejora la{" "}
            <span className="gradient-text-hero">imagen</span>
            <br />
            de tu empresa
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up delay-200" style={{ animationFillMode: "backwards" }}>
            Aumenta tu presencia y la conexión con tus clientes con soluciones de impresión profesional de alto impacto.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400" style={{ animationFillMode: "backwards" }}>
            <Link
              href="/servicios"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Ver catálogo de servicios
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-foreground rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/[0.2] transition-all duration-300"
            >
              Contáctanos
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8 md:gap-12 animate-fade-in delay-600" style={{ animationFillMode: "backwards" }}>
            {[
              { value: "20+", label: "Años de experiencia" },
              { value: "Garantía", label: "De satisfacción" },
              { value: "2", label: "Sucursales" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
