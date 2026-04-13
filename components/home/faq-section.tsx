"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary text-foreground rounded-lg mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Preguntas más frecuentes
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-square max-w-md ml-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
                <div className="absolute inset-0 bg-card rounded-3xl border border-border flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">24/7</span>
                    </div>
                    <p className="text-lg text-foreground font-medium">Servicio disponible</p>
                    <p className="text-sm text-muted-foreground mt-2">Estamos aquí para resolver todas tus dudas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
