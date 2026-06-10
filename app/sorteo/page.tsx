import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { 
  Trophy, Medal, CalendarDays, ShieldCheck, AlertTriangle, 
  Camera, Share2, Heart, MessageCircle, MapPin, CheckCircle2, XCircle 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/seo-config"

const SITE_URL = siteConfig.url

export const metadata: Metadata = {
  title: 'Sorteo Mundialista: Gana $6,000 en Bonos | IGSA Print Huixquilucan',
  description: 'Participa en La Copa Mundial de los Campeones de IGSA Print. Gana hasta $3,000 MXN en bonos de impresión para tu negocio o proyecto en Huixquilucan. Sorteo en vivo el 23 de Junio 2026.',
  keywords: [
    'sorteo huixquilucan',
    'concurso impresión',
    'bonos igsa print',
    'sorteo mundialista',
    'imprenta huixquilucan sorteo',
    'ganar lonas publicitarias',
    'regalos igsa print'
  ],
  alternates: {
    canonical: `${SITE_URL}/sorteo`,
  },
  openGraph: {
    title: 'Sorteo Mundialista: Gana $6,000 en Bonos | IGSA Print',
    description: 'Participa y gana hasta $3,000 MXN en bonos de impresión para tu negocio o proyecto en Huixquilucan. ¡La fiebre mundialista llegó a IGSA Print!',
    url: `${SITE_URL}/sorteo`,
    siteName: siteConfig.name,
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/logo-igsa.jpg',
        width: 1200,
        height: 630,
        alt: 'Sorteo Mundialista IGSA Print & Copy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sorteo Mundialista: Gana $6,000 en Bonos | IGSA Print',
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
  name: 'Sorteo La Copa Mundial de los Campeones - IGSA Print',
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
    title: "Sigue y da Me Gusta",
    desc: "Sigue a nuestra página y dale ❤️ a la publicación del sorteo."
  },
  {
    icon: Share2,
    title: "Comparte en tu muro",
    desc: "Comparte la publicación en modo público (indispensable para validar tu juego)."
  },
  {
    icon: Camera,
    title: "Comenta con FOTO REAL",
    desc: "Sube una foto real de tu negocio, proyecto escolar o idea. ¡Etiqueta a 3 amigos de Huixquilucan!"
  },
  {
    icon: MessageCircle,
    title: "Registra tu participación",
    desc: "Guarda nuestro WhatsApp y envía un mensaje para registrar tu participación oficialmente."
  }
]

const services = [
  "Lonas y viniles de gran formato",
  "Banners, banderas y anuncios para fachada",
  "Volantes, folletos y tarjetas de presentación",
  "Impresión digital, stickers y etiquetas troqueladas",
  "Vasos, termos y souvenirs personalizados",
  "Uniformes o playeras deportivas publicitarias",
  "Letreros 2D o 3D de alto impacto"
]

export default function SorteoPage() {
  const whatsappLink = "https://wa.me/525535870335?text=Hola%2C%20quiero%20registrar%20mi%20participación%20en%20el%20sorteo%20mundialista"

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(giveawayJsonLd) }}
      />
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 to-background py-20 lg:py-32">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimateOnScroll>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-emerald-400 uppercase bg-emerald-950/50 border border-emerald-800 rounded-full">
                ⚽🏆 Huixquilucan
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6">
                LA COPA MUNDIAL DE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  LOS CAMPEONES
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                ¡La fiebre mundialista ya se siente en IGSA Print & Copy! 
                Te patrocinamos con <span className="text-emerald-400 font-bold">$6,000 MXN EN BONOS</span> para que juegues en primera división.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-emerald-900/20">
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Registrar participación en el sorteo por WhatsApp"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Registrar mi participación
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2">
                  <a href="#como-participar">
                    Ver mecánica
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Prizes Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Premios a los <span className="text-emerald-500">Campeones</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* 2nd Place */}
                <Card className="border-gray-300 dark:border-gray-700 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900/50 order-2 md:order-1 mt-8 md:mt-12">
                  <CardHeader className="text-center">
                    <Medal className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <CardTitle className="text-2xl">Subcampeón</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-extrabold text-gray-600 dark:text-gray-300 mb-2">$2,000</p>
                    <p className="text-muted-foreground">MXN en Bono de Canje</p>
                  </CardContent>
                </Card>

                {/* 1st Place */}
                <Card className="border-yellow-500/50 bg-gradient-to-b from-background to-yellow-50/50 dark:to-yellow-950/20 shadow-xl shadow-yellow-500/10 order-1 md:order-2 transform md:-translate-y-4">
                  <CardHeader className="text-center">
                    <Trophy className="h-20 w-20 text-yellow-500 mx-auto mb-4" />
                    <CardTitle className="text-3xl text-yellow-600 dark:text-yellow-400">Campeón del Torneo</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-5xl font-extrabold text-yellow-600 dark:text-yellow-400 mb-2">$3,000</p>
                    <p className="text-muted-foreground font-medium">MXN en Bono de Canje</p>
                  </CardContent>
                </Card>

                {/* 3rd Place */}
                <Card className="border-amber-700/50 bg-gradient-to-b from-background to-amber-50/50 dark:to-amber-950/20 order-3 mt-8 md:mt-12">
                  <CardHeader className="text-center">
                    <Medal className="h-16 w-16 text-amber-700 mx-auto mb-4" />
                    <CardTitle className="text-2xl">Tercer Puesto</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-extrabold text-amber-700 dark:text-amber-600 mb-2">$1,000</p>
                    <p className="text-muted-foreground">MXN en Bono de Canje</p>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* How to Enter */}
        <section id="como-participar" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                👇 ¿Cómo entrar a la cancha?
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Sigue estos 4 pasos obligatorios para asegurar tu lugar en el torneo.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                  <div key={index} className="relative bg-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <step.icon className="h-10 w-10 text-emerald-600 mb-4 mt-2" />
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center p-6 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl max-w-3xl mx-auto">
                <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center justify-center gap-2">
                  <Trophy className="h-5 w-5" /> ¡Jugadas Extra!
                </h4>
                <p className="text-muted-foreground">
                  Cada comentario adicional con una <strong>fotografía diferente</strong> de tus productos, local o actividades escolares, junto a <strong>3 amigos nuevos</strong>, cuenta como un tiro al arco adicional. ¡Entre más comentes, más posibilidades tienes de ganar!
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Eligible Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                🖨️ Tácticas de Canje
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Diseña la idea publicitaria que tu marca o proyecto necesite. Tu bono es válido para:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-emerald-950 text-white">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                📅 Pase a la Gran Final en Vivo
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center">
                  <CalendarDays className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cierre de Participaciones</h3>
                  <p className="text-3xl font-extrabold text-yellow-400">21 de Junio</p>
                  <p className="text-white/70">12:00 hrs (Mediodía)</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-red-600 text-xs font-bold px-3 py-1 rounded-bl-lg">EN VIVO</div>
                  <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Gran Final</h3>
                  <p className="text-3xl font-extrabold text-yellow-400">23 de Junio 2026</p>
                  <p className="text-white/70 mt-2 text-sm">
                    Se seleccionarán 10 convocados al azar y pasaremos a la <strong>RULETA IGSA</strong> en vivo para definir a los 3 campeones. ¡Transparencia total!
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Rules & Security */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                📋 Reglamento de Juego Limpio
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Validación de Identidad Local",
                    desc: "El ganador deberá presentar físicamente en sucursal una identificación oficial (INE), credencial escolar o comprobante de domicilio que acredite que vive, estudia o tiene su negocio dentro del municipio de Huixquilucan."
                  },
                  {
                    icon: XCircle,
                    title: "Tarjeta Roja al Plagio",
                    desc: "Cada negocio o proyecto participa una sola vez por cuenta. El uso de la misma fotografía en diferentes perfiles causará la descalificación inmediata. Nada de fotos de internet ni de inteligencia artificial."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Pases Válidos y Filtro Anti-Fantasmas",
                    desc: "Los 3 amigos etiquetados deben ser cuentas reales y activas. NO participan perfiles 'caza-sorteos' (muros dedicados exclusivamente a rifas). Se verificará el perfil en vivo."
                  },
                  {
                    icon: CalendarDays,
                    title: "Uso del Bono",
                    desc: "Válido únicamente para servicios de IGSA Print & Copy; no se cambia por dinero en efectivo. Si tu pedido supera el valor del bono, solo pagas la diferencia. Tienes 30 días naturales para usarlo tras el sorteo."
                  },
                  {
                    icon: AlertTriangle,
                    title: "Políticas de la Empresa",
                    desc: "Queda estrictamente prohibida la participación de empleados de IGSA Print & Copy y sus familiares directos para garantizar la total equidad del torneo."
                  }
                ].map((rule, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-background rounded-xl border border-border shadow-sm">
                    <rule.icon className="h-6 w-6 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">{rule.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{rule.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Security Alert */}
                <div className="mt-8 p-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl flex gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-red-700 dark:text-red-400 mb-1">🚨 ALERTA ARBITRAL DE SEGURIDAD</h3>
                    <p className="text-red-600/80 dark:text-red-300/80 text-sm leading-relaxed">
                      En IGSA Print & Copy cuidamos tu seguridad. <strong>NUNCA</strong> te pediremos datos bancarios, tarjetas de crédito, ni te enviaremos enlaces externos para registrarte por mensaje privado. Los ganadores se elegirán exclusivamente EN VIVO en esta página oficial. ¡No caigas en fuera de juego con cuentas falsas!
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background text-center">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                📍 ¡Válido para todo Huixquilucan!
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                Podrás recoger tus trabajos en la sucursal de tu elección: <strong>Centro</strong> o <strong>Magdalena Chichicaspa</strong>. 
                <br />¡Muchísima suerte a todos! Haz de tus proyectos un éxito con IGSA. 🍀⚽
              </p>
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-10 py-6 rounded-full shadow-lg">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Registrar participación en el sorteo por WhatsApp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  ¡Quiero participar ahora!
                </a>
              </Button>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}