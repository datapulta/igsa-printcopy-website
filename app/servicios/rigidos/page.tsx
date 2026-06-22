import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, FileText, Layers, Expand, Sparkles, MessageCircle, HelpCircle } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: 'Impresión en Materiales Rígidos — Trovicel, Acrílico, Dibond y Más',
  description:
    'Impresión profesional en materiales rígidos (Trovicel, Acrílico, Dibond, Coroplast) con tintas látex y vinil aplicado en Huixquilucan. Guía de preparación y medidas.',
  alternates: {
    canonical: '/servicios/rigidos',
  },
  openGraph: {
    title: 'Impresión en Materiales Rígidos | IGSA Print & Copy',
    description: 'Impresión de alta calidad en PVC, acrílico, Dibond y coroplast. Servicio rápido y profesional.',
    url: '/servicios/rigidos',
    images: [{ url: '/images/printing-services.jpg', width: 1200, height: 630, alt: 'Impresión en rígidos IGSA' }],
  },
}

const materials = [
  {
    name: "PVC Expandido (Trovicel)",
    desc: "Policloruro de vinilo de alta densidad. Muy ligero, flexible y autoextinguible. Ideal para señalética interior, displays y exhibidores de corta y mediana duración.",
    properties: ["Ligero", "Económico", "Fácil de cortar"]
  },
  {
    name: "Poliestireno de Alto Impacto (PAI)",
    desc: "Plástico de gran rigidez y resistencia al impacto. Es termoformable e ideal para displays de punto de venta, cartelería de mediana duración y empaques.",
    properties: ["Moldeable", "Resistente a golpes", "Superficie lisa"]
  },
  {
    name: "Acrílico (PMMA)",
    desc: "Polimetilmetacrilato de alta calidad. Ofrece una transparencia excepcional similar al vidrio con gran brillo. Ideal para letreros luminosos, decoración y displays premium.",
    properties: ["Brillo premium", "Alta transparencia", "Resistente a intemperie"]
  },
  {
    name: "Coroplast (Polipropileno Corrugado)",
    desc: "Polímero celular ligero e impermeable. Muy económico y resistente a la humedad. Es la opción preferida para señalamientos temporales, inmobiliarios y campañas.",
    properties: ["Impermeable", "Ultra ligero", "Bajo costo"]
  },
  {
    name: "Madera / MDF Prensado",
    desc: "Fibras de madera prensada con resinas de alta densidad. Aporta un acabado ecológico, orgánico y rústico. Perfecto para decoración de interiores y stands sostenibles.",
    properties: ["Ecológico", "Estética rústica", "Gran rigidez"]
  },
  {
    name: "Aluminio Compuesto (Dibond)",
    desc: "Panel sándwich con dos láminas de aluminio y un núcleo de polietileno. Ofrece una planicidad perfecta y rigidez estructural extrema. Ideal para fachadas y señalética exterior.",
    properties: ["Durabilidad extrema", "100% plano", "Resistente a UV"]
  }
]

const sizes = [
  "23 x 28 cm",
  "28 x 35 cm",
  "30 x 45 cm",
  "40 x 50 cm",
  "45 x 60 cm",
  "50 x 60 cm",
  "60 x 90 cm"
]

const steps = [
  {
    num: "01",
    title: "Crea el diseño",
    desc: "Diseña a tamaño real en programas como Illustrator o Photoshop. Asegúrate de configurar una resolución de 300 dpi en modo de color CMYK para colores fieles."
  },
  {
    num: "02",
    title: "Elige tipografía clara",
    desc: "Opta por tipografías legibles y de gran tamaño si tu letrero será visto desde lejos. Mantén el mensaje de tu rígido corto, claro y directo."
  },
  {
    num: "03",
    title: "Usa imágenes de calidad",
    desc: "Inserta gráficos en alta resolución. Las imágenes pixeladas se notan más en soportes rígidos, por lo que una fuente de calidad es clave."
  },
  {
    num: "04",
    title: "Márgenes y sangrado",
    desc: "Agrega 5 mm de excedente (sangrado) en todos los lados del lienzo. Esto previene que queden bordes blancos no deseados al momento de cortar."
  },
  {
    num: "05",
    title: "Guarda tu archivo",
    desc: "Exporta el archivo final en formatos de alta calidad como PDF (ideal para impresión), AI (vectorial) o TIFF sin compresión."
  },
  {
    num: "06",
    title: "Confirma los acabados",
    desc: "Elige junto a nuestro equipo el tipo de material (PVC, Dibond, etc.), acabado (brillante o mate) y método de impresión (directa o vinil aplicado)."
  }
]

export default function RigidosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/servicios" },
        { name: "Rígidos", href: "/servicios/rigidos" }
      ]} />
      <Header />
      <main className="min-h-screen pt-20">
        
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden noise-overlay">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/printing-services.jpg"
              alt="Impresión en materiales rígidos"
              fill
              className="object-cover opacity-25 scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <Link href="/servicios" className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 hover:bg-primary/20 transition-colors">
                <ArrowLeft className="h-3 w-3" /> Volver a Servicios
              </Link>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
                Impresión en <br />
                <span className="gradient-text">Materiales Rígidos</span>
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Los materiales rígidos son sustratos sólidos, planos y resistentes perfectos para señalética, exhibidores, stands, letreros y decoración. Diseñados para ofrecer estabilidad y excelente calidad de imagen con tintas Látex de última generación o vinil adhesivo aplicado de alta adherencia.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20impresi%C3%B3n%20en%20materiales%20r%C3%ADgidos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" /> Cotizar Rígidos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-20 md:py-28 relative section-divider">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-4 animate-fade-in">
                Catálogo de Rígidos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Sustratos y <span className="gradient-text">Materiales</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
                Selecciona la base perfecta según la ubicación, uso y el acabado que requiera tu letrero publicitario o decorativo.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <AnimateOnScroll key={index} delay={index * 0.08}>
                  <div className="group p-8 rounded-2xl glass-card premium-card h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                        <Layers className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {material.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {material.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                      {material.properties.map((prop, idx) => (
                        <span key={idx} className="text-[10px] font-semibold text-foreground/70 bg-white/[0.03] border border-white/[0.08] px-2.5 py-1 rounded-full">
                          {prop}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Sizes and Finishes */}
        <section className="py-20 md:py-28 relative section-divider">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Sizes list */}
              <div className="lg:col-span-6">
                <AnimateOnScroll>
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-4">
                    Medidas Estándar
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Dimensiones <br />
                    <span className="gradient-text">Disponibles</span>
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Manejamos una amplia variedad de formatos adaptados a las necesidades típicas de cartelería, displays y señalizaciones.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {sizes.map((size, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
                        <Expand className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm font-medium text-foreground">{size}</span>
                      </div>
                    ))}
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Technologies */}
              <div className="lg:col-span-6 lg:pl-8">
                <AnimateOnScroll delay={0.2}>
                  <div className="p-8 rounded-3xl glass-card relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                    
                    <h3 className="text-xl font-bold text-foreground mb-6">Procesos de Elaboración</h3>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 border border-accent/20">
                          <Sparkles className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-foreground mb-1">Tintas Látex Premium</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Tratamiento previo del material rígido para lograr un agarre insuperable de las tintas látex ecológicas, garantizando resistencia a rayaduras y colores vibrantes.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 border border-primary/20">
                          <Layers className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-foreground mb-1">Vinil Adhesivo Aplicado</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Impresión fotográfica en vinil autoadherible calandrado, laminado para protección UV y montado milimétricamente sobre la placa rígida mediante rodillo de presión.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

            </div>
          </div>
        </section>

        {/* Preparation Guide - timeline style */}
        <section className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            
            <AnimateOnScroll className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-4">
                Preparación del Archivo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                ¿Cómo preparamos <span className="gradient-text">tu archivo?</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
                Sigue esta guía técnica para asegurar que el rígido tenga una calidad de imagen óptima y cortes milimétricos al salir del taller.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1} direction="up">
                  <div className="group relative p-8 rounded-2xl glass-card premium-card h-full flex flex-col justify-start">
                    <span className="absolute top-6 right-6 text-3xl font-black text-white/[0.04] group-hover:text-primary/10 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
                      <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <AnimateOnScroll direction="scale">
              <div className="p-12 md:p-16 rounded-3xl glass-card border border-white/[0.06]">
                <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para ordenar tus <span className="gradient-text">Rígidos</span>?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                  Envíanos tus diseños o solicita asesoría para elegir el material rígido que mejor se adapte a tu proyecto publicitario.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20quiero%20cotizar%20impresi%C3%B3n%20en%20materiales%20r%C3%ADgidos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" /> Cotizar por WhatsApp
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
