import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'IGSA Print & Copy Huixquilucan | Imprenta Profesional',
  description: 'Imprenta profesional con más de 20 años de experiencia. Servicios de impresión digital, gran formato, rotulación, señalética y más. Servicio 24 horas en Huixquilucan.',
  keywords: 'imprenta, impresión digital, gran formato, rotulación, señalética, Huixquilucan, IGSA Print, copias, diseño gráfico',
  openGraph: {
    title: 'IGSA Print & Copy Huixquilucan',
    description: 'Imprenta profesional con más de 20 años de experiencia en Huixquilucan',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        <FloatingWhatsApp />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
