import { siteConfig } from '@/lib/seo-config'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'IGSA Print',
    description: 'Imprenta profesional en Huixquilucan. Impresión digital, gran formato, rotulación y más.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0b14',
    theme_color: '#9abb57',
    lang: 'es-MX',
    categories: ['business', 'productivity'],
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  }
}
