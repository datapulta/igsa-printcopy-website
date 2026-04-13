import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Prototipos rápidos",
    description: "¡Materializa tus ideas al instante! Ve, toca y prueba tus diseños antes de la producción. Optimiza tiempo, reduce costos y acelera el lanzamiento de tus productos con nuestro servicio."
  },
  {
    title: "Impresión 2D",
    description: "Colores vibrantes y acabados de alta calidad. Imprimimos desde planos y pósters hasta materiales publicitarios personalizados. ¡Comunica tu mensaje con el máximo impacto!"
  },
  {
    title: "Servicios de diseño",
    description: "Diseños que comunican y venden. Convertimos tus ideas en propuestas visuales atractivas, funcionales y listas para impresión. ¡Hacemos que tu marca sea profesional y memorable!"
  },
  {
    title: "Posprocesamiento",
    description: "Acabados que marcan la diferencia. Ofrecemos pulido, pintado, ensamblado y protección final. Cuidamos cada detalle para garantizar una presentación impecable que refleje la máxima calidad."
  }
]

const services = [
  {
    title: "Impresiones Digitales",
    description: "Ideal para tiradas cortas y medianas. Imprimimos tarjetas de presentación, folletos y documentos con acabados profesionales al momento.",
    image: "/images/printing-services.jpg"
  },
  {
    title: "Impresiones a Gran Formato",
    description: "Imprimimos pósters, banners, lonas y gráficos de gran tamaño con la máxima calidad y colores vibrantes para exposiciones, publicidad exterior y decoración.",
    image: "/images/large-format.jpg"
  },
  {
    title: "Personalizables",
    description: "Técnica de impresión versátil y resistente ideal para personalizar textiles, merchandising y artículos promocionales con la mejor relación calidad-precio.",
    image: "/images/hero-printing.jpg"
  },
  {
    title: "Letreros 3D",
    description: "Fabricamos letras corpóreas de diversos materiales con o sin iluminación para una presencia sofisticada y memorable en tu fachada o recepción.",
    image: "/images/3d-letters.jpg"
  },
  {
    title: "Rotulación",
    description: "Aplicación profesional de vinilos de alta resistencia para decorar o marcar vehículos, escaparates, paredes y cualquier superficie.",
    image: "/images/vehicle-wrap.jpg"
  },
  {
    title: "Señalética",
    description: "Guiamos, informamos y regulamos con letreros y directorios funcionales y estéticos para corporativos, residenciales y espacios públicos.",
    image: "/images/signage.jpg"
  }
]

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              Qué podemos hacer por ti
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-primary rounded-full" />
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight Banner */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/laser-cutting.jpg"
                alt="Corte láser, volantes, folletos"
                width={1200}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 flex items-center">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                    CORTE LÁSER,<br />
                    VOLANTES,<br />
                    FOLLETOS.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Nuestros servicios
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="relative w-full md:w-48 h-48 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link 
                      href="/contacto"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium border border-border text-foreground rounded-lg hover:bg-secondary transition-colors w-fit"
                    >
                      Solicitar cotización
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contáctanos y te ayudaremos a encontrar la mejor solución para tus necesidades de impresión.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contáctanos ahora
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
