import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-printing.jpg"
          alt="Impresión profesional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Mejora la imagen de tu empresa
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Aumenta tu presencia y la conexión con tus clientes
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ver catálogo de servicios
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-border text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
