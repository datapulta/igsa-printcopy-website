import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { 
  Trophy, Medal, CalendarDays, ShieldCheck, AlertTriangle, 
  Camera, Share2, Heart, MessageCircle, MapPin, CheckCircle2, XCircle, Disc, Phone, Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/seo-config"

const SITE_URL = siteConfig.url

export const metadata: Metadata = {
  title: 'Sorteo 2026: Gana $6,000 en Bonos | IGSA Print Huixquilucan',
  description: 'Participa en La Copa de los Campeones. Gana hasta $3,000 MXN en bonos de impresión. Sorteo en vivo el 23 de Junio 2026 con la Ruleta IGSA.',
  keywords: [
    'sorteo huixquilucan',
    'concurso impresión 2026',
    'bonos igsa print',
    'sorteo igsa print',
    'ruleta igsa',
    'imprenta huixquilucan sorteo'
  ],
  alternates: {
    canonical: `${SITE_URL}/sorteo`,
  },
  openGraph: {
    title: 'Sorteo 2026: Gana $6,000 en Bonos | IGSA Print',
    description: 'Participa y gana hasta $3,000 MXN en bonos de impresión para tu negocio o proyecto en Huixquilucan. ¡El gran sorteo llegó a IGSA Print!',
    url: `${SITE_URL}/sorteo`,
    siteName: siteConfig.name,
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/logo-igsa.jpg',
        width: 1200,
        height: 630,
        alt: 'Sorteo IGSA Print & Copy 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sorteo 2026: Gana $6,000 en Bonos | IGSA Print',
    description: 'Participa y gana hasta $3,000 MXN en bonos de impresión para tu negocio o proyecto en Huixquilucan.',
    images: ['/images/logo-igsa.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const giveawayJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Sorteo La Copa de los Campeones - IGSA Print 2026',
  description: 'Concurso para ganar hasta $3,000 MXN en bonos de impresión para negocios o proyectos en Huixquilucan.',
  startDate: '2026-06-01T00:00:00-06:00',
  endDate: '2026-06-23T12:00:00-06:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'IGSA Print & Copy',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Huixquilucan',
      addressRegion: 'Estado de México',
      addressCountry: 'MX'
    }
  },
  organizer: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: SITE_URL
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'MXN',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-06-01T00:00:00-06:00'
  }
}

const steps = [
  {
    icon: Heart,
    title: "Sigue nuestra página y reacciona",
    desc: "Dale ❤️ a la publicación del sorteo y síguenos para no perderte nada."
  },
  {
    icon: Share2,
    title: "Comparte en modo público",
    desc: "Comparte la publicación en tu Historia o Muro en modo público (indispensable para validar tu juego)."
  },
  {
    icon: Camera,
    title: "Comenta con una FOTO REAL",
    desc: "Sube una foto real de tu negocio, proyecto escolar o idea y etiqueta a 3 amigos de Huixquilucan."
  },
  {
    icon: MessageCircle,
    title: "Guarda nuestro WhatsApp",
    desc: "Envía un mensaje para registrar tu participación oficialmente y estar en contacto."
  }
]

const prizeExamples = [
  "Cuadros y posters personalizados",
  "Jerseys y uniformes deportivos",
  "Papelería y tarjetas de presentación",
  "Tarjetas de descuento especiales"
]

export default function SorteoPage() {
  const whatsappLink = "https://wa.me/525571381809?text=Hola%2C%20quiero%20registrar%20mi%20participación%20en%20el%20Sorteo%20IGSA%202026"

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(giveawayJsonLd) }}
      />
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section with Stadium Floodlights Effect */}
        <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-32">
          {/* Background Image with Lime/Blue waves */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/sorteo-bg.jpg"
              alt="Sorteo IGSA Background"
              fill
              className="object-cover opacity-40 scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <AnimateOnScroll>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white mb-4 leading-tight">
                    ¡LA COPA DE LOS CAMPEONES! 🏆 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                      SORTEO 2026 iGSA
                    </span>
                  </h1>
                  <p className="text-3xl md:text-5xl font-black text-yellow-400 mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                    $6,000 MXN EN BONOS
                  </p>
                  <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
                    La gran emoción llegó a Huixquilucan. Participa y juega en primera división con los mejores premios en impresión.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-lg px-8 py-6 rounded-full shadow-lg shadow-yellow-500/20 transition-transform hover:scale-105">
                      <a href="#como-participar" aria-label="Ver mecánica del sorteo">
                        ¡COMENTA Y GANA AHORA! 👇
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2 border-white/20 text-white hover:bg-white/10">
                      <a href="https://www.facebook.com/share/p/1BzK9p4QFA/" target="_blank" rel="noopener noreferrer" aria-label="Ir a la publicación del sorteo en Facebook para participar">
                        <Share2 className="mr-2 h-5 w-5" />
                        Registrar participación
                      </a>
                    </Button>
                  </div>
                </AnimateOnScroll>
              </div>
              
              {/* Spinning Prize Wheel Visual */}
              <div className="flex-1 flex justify-center">
                <AnimateOnScroll>
                  <div className="relative w-72 h-72 md:w-96 md:h-96">
                    {/* Outer glow */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-3xl animate-pulse" />
                    {/* Wheel container */}
                    <div className="relative w-full h-full rounded-full border-8 border-yellow-500 bg-gradient-to-br from-emerald-700 to-slate-900 shadow-[0_0_60px_rgba(16,185,129,0.4)] animate-[spin_12s_linear_infinite] flex items-center justify-center">
                      <div className="absolute inset-2 rounded-full border-4 border-dashed border-white/20" />
                      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0_20deg,rgba(255,255,255,0.1)_20deg_40deg,transparent_40deg)]" />
                      <div className="relative w-28 h-28 md:w-36 md:h-36 mb-6">
                        <Image
                          src="/logo-igsa-2026-facebook.svg"
                          alt="Logo IGSA Print & Copy"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="absolute bottom-12 text-white font-black text-2xl tracking-widest drop-shadow-md">RULETA IGSA</span>
                    </div>
                    {/* Pointer */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-yellow-500 drop-shadow-lg z-20" />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-white to-red-600 opacity-50" />
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-black tracking-wider text-yellow-600 uppercase bg-yellow-100 dark:bg-yellow-900/30 rounded-full border border-yellow-300 dark:border-yellow-700">
                  ¡GANA!
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
                  Premios a los <span className="text-emerald-600 dark:text-emerald-400">Campeones</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* 2nd Place */}
                <Card className="border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 order-2 md:order-1 mt-8 md:mt-12 shadow-lg">
                  <CardHeader className="text-center pb-2">
                    <Medal className="h-16 w-16 text-slate-400 mx-auto mb-2" />
                    <CardTitle className="text-xl font-bold text-slate-700 dark:text-slate-300">Subcampeón</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-black text-slate-600 dark:text-slate-200 mb-2">$2,000</p>
                    <p className="text-sm text-muted-foreground mb-4">MXN en Bono de Canje</p>
                    <ul className="text-xs text-left space-y-2 text-slate-600 dark:text-slate-400">
                      {prizeExamples.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* 1st Place */}
                <Card className="border-yellow-500 dark:border-yellow-400 bg-gradient-to-b from-white to-yellow-50 dark:from-slate-900 dark:to-yellow-950/30 shadow-2xl shadow-yellow-500/10 order-1 md:order-2 transform md:-translate-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-yellow-500 text-slate-950 text-xs font-black px-3 py-1 rounded-bl-lg">¡GANA!</div>
                  <CardHeader className="text-center pb-2">
                    <Trophy className="h-20 w-20 text-yellow-500 mx-auto mb-2 drop-shadow-sm" />
                    <CardTitle className="text-2xl font-black text-yellow-600 dark:text-yellow-400">Campeón del Torneo</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-5xl font-black text-yellow-600 dark:text-yellow-400 mb-2">$3,000</p>
                    <p className="text-sm font-medium text-muted-foreground mb-4">MXN en Bono de Canje</p>
                    <ul className="text-xs text-left space-y-2 text-slate-700 dark:text-slate-300">
                      {prizeExamples.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* 3rd Place */}
                <Card className="border-amber-700/50 dark:border-amber-600/50 bg-white dark:bg-slate-900 order-3 mt-8 md:mt-12 shadow-lg">
                  <CardHeader className="text-center pb-2">
                    <Medal className="h-16 w-16 text-amber-700 dark:text-amber-600 mx-auto mb-2" />
                    <CardTitle className="text-xl font-bold text-amber-800 dark:text-amber-500">Tercer Puesto</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-black text-amber-700 dark:text-amber-600 mb-2">$1,000</p>
                    <p className="text-sm text-muted-foreground mb-4">MXN en Bono de Canje</p>
                    <ul className="text-xs text-left space-y-2 text-slate-600 dark:text-slate-400">
                      {prizeExamples.slice(2, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* How to Enter */}
        <section id="como-participar" className="py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-slate-900 dark:text-white">
                👇 ¿Cómo entrar a la cancha?
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Sigue estos 4 pasos obligatorios para asegurar tu lugar en el torneo.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                  <div key={index} className="relative bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg border-2 border-white dark:border-slate-950">
                      {index + 1}
                    </div>
                    <div className="flex items-center gap-3 mb-3 mt-2">
                      <step.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              

            </AnimateOnScroll>
          </div>
        </section>

        {/* Timeline Banner */}
        <section className="py-16 bg-slate-900 relative overflow-hidden">
          {/* Stadium graphics hint */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-950" />
          <div className="container mx-auto px-4 relative z-10">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-white">
                📅 Pase a la Gran Final
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
                  <CalendarDays className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">Cierre de Pases</h3>
                  <p className="text-3xl font-black text-yellow-400">21 de Junio</p>
                  <p className="text-slate-300 font-medium">12:00 PM (Mediodía)</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-900/50 to-slate-900/50 backdrop-blur-md border border-emerald-500/30 p-8 rounded-2xl text-center relative overflow-hidden group hover:border-emerald-500/60 transition-colors">
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-black px-4 py-1.5 rounded-bl-lg animate-pulse">EN VIVO</div>
                  <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">Gran Final EN VIVO</h3>
                  <p className="text-3xl font-black text-yellow-400">23 de Junio, 2026</p>
                  <p className="text-slate-300 mt-3 text-sm leading-relaxed">
                    Se seleccionará primero a 10 convocados (finalistas) tomando en cuenta las reacciones, likes y los comentarios impulsando tu idea, de ahí pasaremos a la <strong className="text-emerald-400">RULETA IGSA</strong> en vivo para definir a los 3 campeones oficiales. ¡Transparencia total frente a las cámaras!
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Rules & Security */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="flex items-center justify-center gap-3 mb-12">
                <Trophy className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 dark:text-white">
                  Reglamento de Juego Limpio
                </h2>
              </div>
              <div className="max-w-4xl mx-auto space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Identidad Local",
                    desc: "El ganador deberá presentar físicamente en sucursal una identificación oficial (INE), credencial escolar o comprobante de domicilio que acredite que vive, estudia o tiene su negocio dentro del municipio de Huixquilucan."
                  },
                  {
                    icon: XCircle,
                    title: "Tarjeta Roja al Plagio",
                    desc: "Cada negocio o proyecto participa una sola vez por cuenta. El uso de la misma fotografía en diferentes perfiles causará la descalificación inmediata. Nada de fotos de internet ni de inteligencia artificial (IA)."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Pases Válidos y Filtro Antifraude",
                    desc: "Los 3 amigos etiquetados deben ser cuentas reales y activas. NO participan perfiles 'caza-sorteos' (muros dedicados exclusivamente a rifas). Se verificará el perfil en vivo."
                  },
                  {
                    icon: CalendarDays,
                    title: "Uso del Bono",
                    desc: "Válido únicamente para servicios de IGSA Print & Copy; no se cambia por dinero en efectivo. Si tu pedido supera el valor del bono, solo pagas la diferencia. Tienes 30 días naturales para usarlo tras el sorteo."
                  }
                ].map((rule, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <rule.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">{rule.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{rule.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Security Alert */}
                <div className="mt-8 p-6 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900 rounded-xl flex gap-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-red-200 dark:bg-red-900 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400 shrink-0 mt-1 relative z-10" />
                  <div className="relative z-10">
                    <h3 className="font-black text-lg text-red-700 dark:text-red-400 mb-1 flex items-center gap-2">
                      🚨 ALERTA DE SEGURIDAD
                    </h3>
                    <p className="text-red-600/90 dark:text-red-300/90 text-sm leading-relaxed font-medium">
                      Sorteo 100% gratuito. <strong>NUNCA</strong> pediremos tus datos bancarios, tarjetas de crédito, ni te enviaremos enlaces externos por mensaje privado. Los ganadores se elegirán exclusivamente EN VIVO. No caigas en fuera de juego con cuentas falsas.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Sweepstakes Custom Footer */}
        <section className="py-16 bg-slate-900 text-white border-t-4 border-emerald-600">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left: Brand Logo */}
              <div className="flex items-center">
                <div className="relative w-28 h-28 shrink-0">
                  <Image
                    src="/logo-igsa-2026-facebook.svg"
                    alt="IGSA Print & Copy Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Center: Sweepstakes Slogan */}
              <div className="hidden lg:flex flex-col items-center gap-1 text-center max-w-sm">
                <span className="text-sm font-black text-yellow-400 tracking-widest uppercase">
                  🏆 LA COPA DE LOS CAMPEONES
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Registra tu participación antes del 21 de Junio. Exclusivo para Huixquilucan.
                </p>
              </div>

              {/* Right: Contact Info */}
              <div className="flex flex-col items-center lg:items-end gap-6 text-center lg:text-right">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg px-8 py-6 rounded-full shadow-lg shadow-emerald-900/50 animate-pulse">
                  <a href="https://www.facebook.com/share/p/1BzK9p4QFA/" target="_blank" rel="noopener noreferrer" aria-label="Registrarse y participar en el sorteo">
                    ¡REGÍSTRATE Y PARTICIPA! 👉📲
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}