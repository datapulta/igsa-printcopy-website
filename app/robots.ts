import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      // --- AI Crawlers (explicit allow) ---
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'meta-externalagent', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
