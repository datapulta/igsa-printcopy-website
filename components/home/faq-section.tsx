"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/seo-config"

const faqs = [
  {
    question: "¿Cuál es el ancho del rollo que manejan en impresión de alta resolución?",
    answer: "Manejamos rollos de hasta 1.60 metros de ancho para impresión de alta resolución, permitiéndonos realizar trabajos de gran formato con excelente calidad."
  },
  {
    question: "¿Vendemos o rentamos estructuras para lona?",
    answer: "Sí, ofrecemos tanto venta como renta de estructuras metálicas para lonas. Contamos con diferentes tamaños y diseños según tus necesidades."
  },
  {
    question: "¿Cuentan con impresión en un ancho más grande que el rollo?",
    answer: "Sí, podemos realizar impresiones más grandes mediante la técnica de unión de paneles, garantizando un acabado profesional y sin costuras visibles."
  },
  {
    question: "¿Mi lona incluye ojillos?",
    answer: "Sí, todas nuestras lonas incluyen ojillos en las esquinas sin costo adicional. Si requieres ojillos adicionales, con gusto los agregamos."
  },
  {
    question: "¿Cuánto tardamos en entregar una lona impresa con acabados?",
    answer: "El tiempo de entrega estándar es de 24 a 48 horas hábiles dependiendo del tamaño y acabados requeridos. Para urgencias, consulta disponibilidad."
  },
  {
    question: "¿Trabajan urgencias?",
    answer: "Sí, contamos con servicio de urgencias las 24 horas. El costo puede variar dependiendo del trabajo requerido y la hora de solicitud."
  },
  {
    question: "¿Qué me recomiendan para una lona que va al exterior?",
    answer: "Recomendamos lona vinílica con acabado mate o brillante, resistente a UV y agua. También ofrecemos lona mesh para zonas con mucho viento."
  },
  {
    question: "¿IGSA Print ofrece el servicio de instalación de lonas?",
    answer: "Sí, contamos con equipo especializado para la instalación de lonas en diferentes superficies y alturas. Solicita tu cotización."
  }
]

export function FAQSection() {
  return (
    <section className="py-24 relative section-divider">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* FAQ Column */}
          <AnimateOnScroll direction="left">
            <div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
                Preguntas{" "}
                <span className="gradient-text">frecuentes</span>
              </h2>

              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/[0.06] rounded-xl px-5 data-[state=open]:bg-white/[0.02] data-[state=open]:border-primary/20 transition-colors duration-300"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary text-sm font-medium py-4 [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimateOnScroll>

          {/* Decorative Side Panel */}
          <AnimateOnScroll direction="right" className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              {/* 24/7 Card */}
              <div className="relative p-10 rounded-3xl glass-card overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-[60px]" />

                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mb-6 animate-pulse-glow">
                    <span className="text-3xl font-black gradient-text">24/7</span>
                  </div>
                  <p className="text-xl font-bold text-foreground mb-2">
                    Servicio disponible
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Estamos aquí para resolver todas tus dudas y atender proyectos urgentes
                  </p>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="p-6 rounded-2xl glass-card">
                <p className="text-sm font-medium text-foreground mb-3">
                  ¿No encuentras tu respuesta?
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20tengo%20una%20pregunta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pregúntanos directo
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
