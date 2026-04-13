import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Lightbulb, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Transformamos tus ideas en realidad con tecnología de vanguardia y soluciones creativas que destacan."
  },
  {
    icon: Shield,
    title: "Transparencia",
    description: "Presupuestos claros, comunicación honesta y procesos visibles: así trabajamos contigo."
  },
  {
    icon: Users,
    title: "Accesibilidad",
    description: "Tus archivos y proyectos están protegidos en cada paso, garantizando confidencialidad y confianza."
  }
]

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Nosotros</h1>
            
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
                    Con más de 20 años de experiencia nos llenamos de orgullo al contar con la confianza y preferencia del público en los diversos servicios de imprenta que ofrecemos
                  </h2>
                </div>
                <div className="relative aspect-video lg:aspect-auto rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-printing.jpg"
                    alt="Instalaciones IGSA Print"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="px-8 lg:px-12 pb-12">
                <div className="space-y-4 text-muted-foreground max-w-3xl">
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
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary text-foreground rounded-lg mb-6">
                Nuestra misión
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                Ofrecer soluciones de la más alta calidad y creatividad, brindando a nuestros clientes productos personalizados que fortalezcan su identidad visual y alcance.
              </h2>
              <p className="text-lg text-muted-foreground">
                Nos comprometemos a utilizar tecnología de la más alta calidad, materiales de excelencia y un personal altamente capacitado para garantizar resultados que superen las expectativas del público objetivo.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/vision-printing.jpg"
              alt="Visión IGSA Print"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl ml-auto">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary text-foreground rounded-lg mb-6">
                Nuestra visión
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Ser líderes en soluciones de impresión a nivel regional, ofreciendo disponibilidad 24 horas para responder con rapidez y eficacia a las necesidades más estrictas del mercado.
              </h2>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary text-foreground rounded-lg mb-4">
                Nuestros valores clave
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-primary rounded-full" />
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
