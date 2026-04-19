import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/nosotros`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
