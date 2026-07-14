import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrackedAnchor, TrackedLink } from "@/components/tracked-link"
import { ArrowLeft, Layers, Expand, Sparkles, MessageCircle } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: 'Impresión en Materiales Rígidos — Trovicel, Acrílico, Dibond y Más',
  description: 'Impresión profesional en materiales rígidos con tintas látex y vinil aplicado en Huixquilucan.',
  alternates: { canonical: '/servicios/rigidos' },
}

const materials = [
  {
    name: "PVC Expandido (Trovicel)",
    desc: "Muy ligero, flexible y autoextinguible. Ideal para señalética interior y displays.",
    properties: ["Ligero", "Económico", "Fácil de cortar"]
  },
  {
    name: "Poliestireno de Alto Impacto",
    desc: "Gran rigidez y resistencia al impacto. Termoformable para displays de punto de venta.",
    properties: ["Moldeable", "Resistente", "Superficie lisa"]
  },
  {
    name: "Acrílico (PMMA)",
    desc: "Transparencia excepcional similar al vidrio con gran brillo. Ideal para letreros luminosos.",
    properties: ["Brillo premium", "Alta transparencia", "Resistente"]
  },
  {
    name: "Coroplast",
    desc: "Polímero celular ligero e impermeable. Perfecto para señalamientos temporales.",
    properties: ["Impermeable", "Ultra ligero", "Bajo costo"]
  },
  {
    name: "Madera / MDF",
    desc: "Fibras de madera prensada con resinas de alta densidad. Acabado ecológico y rústico.",
    properties: ["Ecológico", "Estética rústica", "Gran rigidez"]
  },
  {
    name: "Aluminio Compuesto (Dibond)",
    desc: "Panel sándwich con láminas de aluminio. Planicidad perfecta para fachadas.",
    properties: ["Durabilidad extrema", "100% plano", "Resistente a UV"]
  }
]

const sizes = ["23 x 28 cm", "28 x 35 cm", "30 x 45 cm", "40 x 50 cm", "45 x 60 cm", "50 x 60 cm", "60 x 90 cm"]

const steps = [
  { num: "01", title: "Crea el diseño", desc: "Diseña a tamaño real en Illustrator o Photoshop. Resolución 300 dpi en CMYK." },
  { num: "02", title: "Tipografía clara", desc: "Opta por tipografías legibles y de gran tamaño para visualización desde lejos." },
  { num: "03", title: "Imágenes de calidad", desc: "Inserta gráficos en alta resolución. Las imágenes pixeladas se notan más en rígidos." },
  { num: "04", title: "Márgenes y sangrado", desc: "Agrega 5 mm de excedente en todos los lados para evitar bordes blancos." },
  { num: "05", title: "Guarda tu archivo", desc: "Exporta en PDF, AI o TIFF sin compresión para máxima calidad." },
  { num: "06", title: "Confirma acabados", desc: "Elige material, acabado (brillante/mate) y método de impresión con nuestro equipo." }
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
        
        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <TrackedLink href="/servicios" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-8 transition-colors" event="services_cta_clicked" properties={{
                cta_label: "volver_a_servicios",
                cta_destination: "/servicios",
                page_name: "servicios_rigidos",
              }}>
                <ArrowLeft className="h-4 w-4" /> Volver a Servicios
              </TrackedLink>
              
              <AnimateOnScroll>
                <p className="text-sm font-medium text-primary mb-4">Materiales Rígidos</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8">
                  Impresión en
                  <br />
                  <span className="text-gray-400">Materiales Rígidos</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-10">
                  Sustratos sólidos, planos y resistentes perfectos para señalética, exhibidores, stands y decoración con tintas Látex de última generación.
                </p>
                <TrackedAnchor
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20impresi%C3%B3n%20en%20materiales%20r%C3%ADgidos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
                  event="rigid_material_quote_clicked"
                  properties={{
                    cta_location: "hero",
                    material_focus: "rigidos",
                  }}
                >
                  <MessageCircle className="h-4 w-4" /> Cotizar Rígidos
                </TrackedAnchor>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <p className="text-sm font-medium text-primary mb-4">Catálogo</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Sustratos y Materiales
              </h2>
              <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                Selecciona la base perfecta según la ubicación, uso y acabado que requiera tu proyecto.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <AnimateOnScroll key={index} delay={index * 0.08}>
                  <div className="p-8 rounded-3xl bg-white border border-gray-200 h-full hover:border-gray-300 transition-all duration-500">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                      <Layers className="h-5 w-5 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{material.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{material.desc}</p>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                      {material.properties.map((prop, idx) => (
                        <span key={idx} className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
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

        {/* Sizes & Processes */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              <AnimateOnScroll>
                <p className="text-sm font-medium text-primary mb-4">Medidas Estándar</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  Dimensiones disponibles
                </h2>
                <p className="text-gray-600 mb-10 leading-relaxed">
                  Manejamos una amplia variedad de formatos adaptados a las necesidades típicas de cartelería, displays y señalizaciones.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {sizes.map((size, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <Expand className="h-4 w-4 text-gray-400 shrink-0" />
                      <span className="text-sm font-medium text-gray-900">{size}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-8">Procesos de Elaboración</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
                        <Sparkles className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">Tintas Látex Premium</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Tratamiento previo del material para garantizar resistencia a rayaduras y colores vibrantes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
                        <Layers className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">Vinil Adhesivo Aplicado</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Impresión fotográfica en vinil autoadherible laminado para protección UV y montado milimétricamente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Preparation Guide */}
        <section className="py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <p className="text-sm font-medium text-primary mb-4">Preparación del Archivo</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                ¿Cómo preparamos tu archivo?
              </h2>
              <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                Sigue esta guía técnica para asegurar calidad de imagen óptima y cortes milimétricos.
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-3xl bg-white border border-gray-200 h-full hover:border-gray-300 transition-all duration-500">
                    <span className="text-3xl font-black text-gray-100 mb-4 block">{step.num}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll direction="scale">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-900 p-12 md:p-20 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(143,184,46,0.1),transparent_50%)]" />
                <div className="relative">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    ¿Listo para ordenar tus <span className="text-gray-400">Rígidos</span>?
                  </h2>
                  <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                    Envíanos tus diseños o solicita asesoría para elegir el material que mejor se adapte a tu proyecto.
                  </p>
                  <TrackedAnchor
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20quiero%20cotizar%20impresi%C3%B3n%20en%20materiales%20r%C3%ADgidos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300"
                    event="rigid_material_quote_clicked"
                    properties={{
                      cta_location: "footer",
                      material_focus: "rigidos",
                    }}
                  >
                    <MessageCircle className="h-4 w-4" /> Cotizar por WhatsApp
                  </TrackedAnchor>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
