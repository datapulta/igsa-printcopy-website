import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Impresiones Digitales",
    description: "Ideal para tiradas cortas y medianas. Imprimimos tarjetas de presentación, folletos y documentos con acabados profesionales al momento.",
    image: "/images/printing-services.jpg"
  },
  {
    title: "Personalizables",
    description: "Técnica de impresión versátil y resistente ideal para personalizar textiles, merchandising y artículos promocionales.",
    image: "/images/large-format.jpg"
  },
  {
    title: "Impresiones a Gran Formato",
    description: "Imprimimos pósters, banners, lonas y gráficos de gran tamaño con la máxima calidad y colores vibrantes.",
    image: "/images/hero-printing.jpg"
  }
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary text-foreground rounded-lg mb-4">
            Qué ofrecemos
          </span>
          <p className="text-2xl md:text-3xl text-foreground max-w-2xl leading-relaxed">
            Proyecta tu marca y tus ideas al público de tu interés, así como moldear la percepción de tus consumidores sobre tu empresa y tu presencia en la comunidad.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Un sinfín de posibilidades
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-card"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              Ver todos los servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
