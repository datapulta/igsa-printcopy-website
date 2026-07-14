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
import { faqs } from "@/lib/faqs"
import { captureEvent } from "@/lib/posthog"

export function FAQSection() {
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Header + CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <p className="text-sm font-medium text-primary mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Preguntas frecuentes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              ¿No encuentras tu respuesta? Contáctanos directamente.
            </p>
            
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20tengo%20una%20pregunta`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
              onClick={() => captureEvent("faq_whatsapp_clicked", {
                cta_location: "homepage_faq",
                faq_count: faqs.length,
              })}
            >
              <MessageCircle className="h-4 w-4" />
              Preguntar por WhatsApp
            </a>
          </div>

          {/* Right: FAQ List */}
          <div className="lg:col-span-8">
            <AnimateOnScroll direction="right">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 last:border-0"
                  >
                    <AccordionTrigger className="text-left text-gray-900 hover:text-primary text-base font-medium py-6 [&[data-state=open]]:text-primary transition-colors duration-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
