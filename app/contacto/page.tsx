"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const locations = [
  {
    name: "Sucursal Huixquilucan",
    address: "Av. Venustiano Carranza #30, 2do Piso, San Melchor, 52760 Huixquilucan de Degollado, Mex.",
    phone: "+52 55 3587 0335",
    whatsapp: "5255358703358",
    mapUrl: "https://www.google.com/maps/place/Igsa+Print+%26+Copy/@19.3621026,-99.3491322,17z",
  },
  {
    name: "Sucursal Chichicaspa",
    address: "Carretera Huixquilucan - Naucalpan, Magdalena Chichicaspa, 52773, Edo. Mex.",
    reference: "A la altura del Tecnológico Cuicalli",
    phone: "+52 55 7138 1809",
    whatsapp: "525571381809",
    mapUrl: "https://www.google.com/maps/place/Igsa+Print+%26+Copy/@19.3621026,-99.3491322,17z",
  },
]

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Respuesta inmediata. Envíanos fotos de tu proyecto y te cotizamos al momento.",
    action: "Enviar mensaje",
    href: "https://wa.me/5255358703358?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20impresi%C3%B3n",
    color: "from-[#25D366]/20 to-[#25D366]/5",
    hoverGlow: "hover:shadow-[#25D366]/20",
    iconColor: "text-[#25D366]",
    btnClass: "bg-[#25D366] text-white hover:shadow-lg hover:shadow-[#25D366]/30",
  },
  {
    icon: Phone,
    title: "Llámanos",
    description: "Atención directa para resolver tus dudas y recibir asesoría personalizada.",
    action: "Llamar ahora",
    href: "tel:+525535870335",
    color: "from-accent/20 to-accent/5",
    hoverGlow: "hover:shadow-accent/20",
    iconColor: "text-accent",
    btnClass: "bg-accent text-white hover:shadow-lg hover:shadow-accent/30",
  },
  {
    icon: Mail,
    title: "Correo electrónico",
    description: "Para proyectos más detallados, envíanos tus archivos y especificaciones.",
    action: "Enviar correo",
    href: "mailto:igsaprintcopy2@gmail.com?subject=Cotización%20IGSA%20Print&body=Hola%2C%20me%20interesa%20cotizar%20el%20siguiente%20servicio%3A",
    color: "from-primary/20 to-primary/5",
    hoverGlow: "hover:shadow-primary/20",
    iconColor: "text-primary",
    btnClass: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30",
  },
]

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full mb-6">
                  Contacto
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                  Hablemos de tu{" "}
                  <span className="gradient-text">proyecto</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  Elige el canal que prefieras y te atendemos de inmediato. Estamos disponibles las 24 horas.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Contact Methods Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {contactMethods.map((method, index) => (
                <AnimateOnScroll key={index} delay={index * 0.12}>
                  <div className="group relative p-8 rounded-2xl glass-card premium-card h-full flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl ${method.hoverGlow}`}>
                      <method.icon className={`h-7 w-7 ${method.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                      {method.description}
                    </p>

                    {/* CTA Button */}
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`group/btn inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full justify-center ${method.btnClass}`}
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
        <section className="py-20 relative section-divider">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nuestras <span className="gradient-text">sucursales</span>
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <AnimateOnScroll key={index} delay={index * 0.15}>
                  <div className="group p-8 rounded-2xl glass-card premium-card h-full">
                    <h3 className="text-lg font-bold text-primary mb-5">
                      {location.name}
                    </h3>

                    <div className="space-y-4 mb-8">
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <MapPin className="h-4 w-4 mt-1 shrink-0 text-primary/60" />
                        <span className="text-sm leading-relaxed">{location.address}</span>
                      </a>
                      {location.reference && (
                        <p className="text-xs text-muted-foreground ml-7">
                          Ref: {location.reference}
                        </p>
                      )}
                    </div>

                    {/* Quick action buttons */}
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`https://wa.me/${location.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all duration-300"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all duration-300"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        {location.phone}
                      </a>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-white/[0.04] text-foreground/70 border border-white/[0.08] hover:bg-white/[0.08] transition-all duration-300"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        Ver mapa
                      </a>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll>
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Encuéntranos
              </h2>
              <div className="rounded-2xl overflow-hidden border border-white/[0.06] h-96 glass-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0123456789!2d-99.3491322!3d19.3621026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d207c5d125be03%3A0x5844f6fe77c39456!2sIgsa%20Print%20%26%20Copy!5e0!3m2!1ses!2smx!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación IGSA Print & Copy"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Social Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll direction="scale">
              <div className="p-10 md:p-14 rounded-3xl glass-card text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Síguenos en <span className="gradient-text">redes sociales</span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                  Mantente al día con nuestros proyectos, promociones y novedades.
                </p>
                <div className="flex items-center justify-center gap-4">
                  {[
                    {
                      label: "Facebook",
                      href: "https://facebook.com",
                      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                    },
                    {
                      label: "Instagram",
                      href: "https://instagram.com",
                      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
                      aria-label={social.label}
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
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
