import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Lightbulb, Shield, Users } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd } from "@/components/structured-data"

export const metadata: Metadata = {
  title: 'Nosotros — Más de 20 Años de Experiencia en Impresión',
  description:
    'Conoce la historia de IGSA Print & Copy. Fundada en 1993, somos una imprenta profesional con más de 20 años de experiencia en Huixquilucan. Misión, visión y valores.',
  alternates: {
    canonical: '/nosotros',
  },
  openGraph: {
    title: 'Nosotros | IGSA Print & Copy',
    description: 'Más de 20 años ofreciendo soluciones de impresión de alta calidad en Huixquilucan.',
    url: '/nosotros',
    images: [{ url: '/images/about-printing.jpg', width: 1200, height: 630, alt: 'IGSA Print & Copy — Nuestra historia' }],
  },
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Transformamos tus ideas en realidad con tecnología de vanguardia y soluciones creativas que destacan.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Shield,
    title: "Transparencia",
    description: "Presupuestos claros, comunicación honesta y procesos visibles: así trabajamos contigo.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Users,
    title: "Accesibilidad",
    description: "Tus archivos y proyectos están protegidos en cada paso, garantizando confidencialidad y confianza.",
    gradient: "from-primary/15 to-accent/10",
  },
]

export default function NosotrosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Inicio", href: "/" }, { name: "Nosotros", href: "/nosotros" }]} />
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-6">
                Sobre nosotros
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-16 tracking-tight">
                Nuestra <span className="gradient-text">historia</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="rounded-3xl glass-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-8">
                      Con más de <span className="gradient-text">20 años</span> de experiencia nos llenamos de orgullo al contar con la confianza del público
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Somos una empresa surgida en 1993 originalmente ofreciendo servicios de realización de trámites en áreas del gobierno a nivel municipal.
                      </p>
                      <p>
                        Hoy en día, acorde a las necesidades de nuestros clientes nos complace ofrecer más y mejores servicios que complementan y enriquecen nuestras actividades convirtiéndonos en <span className="text-foreground font-medium">IGSA Print & Copy</span>.
                      </p>
                      <p>
                        En donde seguimos ofreciendo nuestros servicios tradicionales, además de impresiones a gran formato de alta calidad y sublimación.
                      </p>
                    </div>
                  </div>
                  <div className="relative min-h-[300px] lg:min-h-[500px]">
                    <Image
                      src="/images/about-printing.jpg"
                      alt="Instalaciones IGSA Print & Copy en Huixquilucan"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-card/50 to-transparent lg:block hidden" />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 relative section-divider">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll direction="left">
                <div>
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-6">
                    Nuestra misión
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                    Ofrecer soluciones de la más <span className="gradient-text">alta calidad</span> y creatividad
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nos comprometemos a utilizar tecnología de la más alta calidad, materiales de excelencia y un personal altamente capacitado para garantizar resultados que superen las expectativas del público objetivo.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "1993", label: "Año de fundación" },
                    { value: "20+", label: "Años de trayectoria" },
                    { value: "Rápido", label: "Servicio" },
                    { value: "2", label: "Sucursales" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-6 rounded-2xl glass-card text-center">
                      <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/vision-printing.jpg" alt="Visión de IGSA Print & Copy" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll direction="right">
              <div className="max-w-2xl ml-auto">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-6">
                  Nuestra visión
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  Ser líderes en soluciones de impresión a nivel regional, ofreciendo un servicio de{" "}
                  <span className="gradient-text">alta calidad</span>{" "}
                  para responder con rapidez y eficacia a las necesidades más estrictas del mercado.
                </h2>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-4">
                Nuestros valores clave
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Lo que nos <span className="gradient-text">define</span>
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <AnimateOnScroll key={index} delay={index * 0.12}>
                  <div className="group p-8 rounded-2xl glass-card premium-card h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10`}>
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
