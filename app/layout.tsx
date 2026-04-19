import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { OrganizationJsonLd } from '@/components/structured-data'
import { siteConfig } from '@/lib/seo-config'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

const SITE_URL = siteConfig.url
const SITE_NAME = siteConfig.name

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0b14' },
    { media: '(prefers-color-scheme: light)', color: '#0a0b14' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    template: `%s | ${SITE_NAME}`,
    default: 'IGSA Print & Copy Huixquilucan | Imprenta Profesional 24 Horas',
  },

  description:
    'Imprenta profesional con más de 20 años de experiencia en Huixquilucan. Impresión digital, gran formato, rotulación, señalética, letreros 3D y más. Servicio 24 horas, 2 sucursales.',

  keywords: [
    'imprenta Huixquilucan',
    'impresión digital',
    'gran formato',
    'rotulación vehicular',
    'señalética',
    'letreros 3D',
    'lonas publicitarias',
    'impresión 24 horas',
    'IGSA Print',
    'IGSA Print & Copy',
    'imprenta Estado de México',
    'sublimación',
    'corte láser',
    'diseño gráfico Huixquilucan',
    'banners publicitarios',
    'tarjetas de presentación',
    'copias certificadas',
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'IGSA Print & Copy | Imprenta Profesional en Huixquilucan',
    description:
      'Más de 20 años ofreciendo soluciones de impresión de alta calidad. Impresión digital, gran formato, rotulación, señalética y más. Servicio 24/7.',
    images: [
      {
        url: '/images/logo-igsa.jpg',
        width: 1200,
        height: 630,
        alt: 'IGSA Print & Copy — Imprenta Profesional en Huixquilucan',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'IGSA Print & Copy | Imprenta Profesional 24 Horas',
    description:
      'Imprenta profesional en Huixquilucan con más de 20 años. Impresión digital, gran formato, rotulación y más.',
    images: ['/images/logo-igsa.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  category: 'business',

  other: {
    'geo.region': 'MX-MEX',
    'geo.placename': 'Huixquilucan de Degollado',
    'geo.position': '19.3621026;-99.3491322',
    'ICBM': '19.3621026, -99.3491322',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans antialiased min-h-screen">
        <OrganizationJsonLd />
        {children}
        <FloatingWhatsApp />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
