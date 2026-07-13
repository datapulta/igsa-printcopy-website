import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Clock } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: 'Contacto — WhatsApp, Teléfono y Correo | IGSA Print',
  description: 'Contacta a IGSA Print & Copy por WhatsApp, teléfono o correo electrónico. 2 sucursales en Huixquilucan.',
  alternates: { canonical: '/contacto' },
}

const locations = [
  {
    name: "Sucursal Huixquilucan",
    address: "José María Morelos #51, San Juan Bautista, 52760 Huixquilucan de Degollado, Mex.",
    phone: "+52 55 3587 0335",
    whatsapp: "5535870335",
    mapUrl: "https://maps.app.goo.gl/pdp7VVyuqPRKazUo7",
    schedule: "Lunes a Viernes: 9 AM a 3 PM y 4 PM a 6 PM"
  },
  {
    name: "Sucursal Chichicaspa",
    address: "Carretera Huixquilucan - Naucalpan, Magdalena Chichicaspa, 52773, Edo. Mex.",
    reference: "A la altura del Tecnológico Cuicalli",
    phone: "+52 55 7138 1809",
    whatsapp: "5571381809",
    mapUrl: "https://www.google.com/maps/place/Igsa+Print+%26+Copy/@19.3621026,-99.3491322,17z",
    schedule: "Lunes a Viernes: 9 AM a 7 PM | Sábados: 9 AM a 2 PM"
  }
]

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Respuesta inmediata. Envíanos fotos de tu proyecto y te cotizamos al momento.",
    action: "Enviar mensaje",
    href: `https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20impresi%C3%B3n`,
    btnClass: "bg-gray-900 text-white hover:bg-gray-800",
  },
  {
    icon: Phone,
    title: "Llámanos",
    description: "Atención directa para resolver tus dudas y recibir asesoría personalizada.",
    action: "Llamar ahora",
    href: "tel:+525535870335",
    btnClass: "bg-gray-900 text-white hover:bg-gray-800",
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    description: "Para proyectos más detallados, envíanos tus archivos y especificaciones.",
    action: "Enviar correo",
    href: "mailto:cotizacion@igsaprint.com?subject=Cotización%20IGSA%20Print&body=Hola%2C%20me%20interesa%20cotizar%20el%20siguiente%20servicio%3A",
    btnClass: "bg-gray-900 text-white hover:bg-gray-800",
  },
]

export default function ContactoPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Inicio", href: "/" }, { name: "Contacto", href: "/contacto" }]} />
      <Header />
      <main className="min-h-screen pt-20">
        
        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-primary mb-4">Contacto</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8">
                  Hablemos de tu
                  <br />
                  <span className="text-gray-400">proyecto</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Elige el canal que prefieras y te atendemos a la brevedad dentro de nuestros horarios de atención.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {contactMethods.map((method, index) => (
                <AnimateOnScroll key={index} delay={index * 0.12}>
                  <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 h-full flex flex-col transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-gray-100 flex items-center justify-center mb-6 transition-all duration-500">
                      <method.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">{method.description}</p>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`group/btn inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${method.btnClass}`}
                    >
                      {method.action}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Nuestras sucursales
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <AnimateOnScroll key={index} delay={index * 0.15}>
                  <div className="p-8 rounded-3xl bg-white border border-gray-200 h-full">
                    <h3 className="text-lg font-bold text-gray-900 mb-5">{location.name}</h3>
                    <div className="space-y-4 mb-8">
                      <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                        <MapPin className="h-4 w-4 mt-1 shrink-0 text-gray-400" />
                        <span className="text-sm leading-relaxed">{location.address}</span>
                      </a>
                      {location.reference && <p className="text-xs text-gray-500 ml-7">Ref: {location.reference}</p>}
                      <div className="flex items-start gap-3 text-gray-700">
                        <Clock className="h-4 w-4 mt-1 shrink-0 text-gray-400" />
                        <span className="text-sm leading-relaxed">{location.schedule}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={`https://wa.me/${location.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300">
                        <MessageCircle className="h-3.5 w-3.5" />WhatsApp
                      </a>
                      <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all duration-300">
                        <Phone className="h-3.5 w-3.5" />{location.phone}
                      </a>
                      <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all duration-300">
                        <MapPin className="h-3.5 w-3.5" />Ver mapa
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Maps */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Encuéntranos</h2>
              <p className="text-gray-600 mt-4">Visítanos en cualquiera de nuestras dos sucursales</p>
            </AnimateOnScroll>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimateOnScroll delay={0.1}>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Sucursal Huixquilucan (Centro)</h4>
                  <div className="rounded-3xl overflow-hidden border border-gray-200 h-96 bg-white">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0123456789!2d-99.3491322!3d19.3621026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d207c5d125be03%3A0x5844f6fe77c39456!2sIgsa%20Print%20%26%20Copy!5e0!3m2!1ses!2smx!4v1234567890"
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade" title="Ubicación IGSA Print & Copy en Huixquilucan Centro"
                    />
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Sucursal Magdalena (Chichicaspa)</h4>
                  <div className="rounded-3xl overflow-hidden border border-gray-200 h-96 bg-white">
                    <iframe
                      src="https://maps.google.com/maps?q=Carretera%20Huixquilucan%20-%20Naucalpan%2C%20Magdalena%20Chichicaspa%2C%2052773%2C%20Edo.%20Mex.&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade" title="Ubicación IGSA Print & Copy en Magdalena Chichicaspa"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
