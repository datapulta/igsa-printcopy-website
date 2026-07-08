import { siteConfig } from '@/lib/seo-config'

const S = siteConfig

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${S.url}/#organization`,
    name: S.name,
    url: S.url,
    logo: `${S.url}/images/logo-igsa.svg`,
    description:
      "Imprenta profesional con más de 20 años de experiencia en Huixquilucan, Estado de México. Servicios de impresión digital, gran formato, rotulación, señalética y más.",
    foundingDate: S.foundingYear,
    email: S.email,
    telephone: [S.phone.huixquilucan, S.phone.chichicaspa],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "José María Morelos #51, San Juan Bautista",
        addressLocality: "Huixquilucan de Degollado",
        addressRegion: "Estado de México",
        postalCode: "52760",
        addressCountry: "MX",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Carretera Huixquilucan - Naucalpan, Magdalena Chichicaspa",
        addressLocality: "Huixquilucan de Degollado",
        addressRegion: "Estado de México",
        postalCode: "52773",
        addressCountry: "MX",
      },
    ],
    sameAs: [S.social.facebook, S.social.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: S.phone.huixquilucan,
        contactType: "customer service",
        areaServed: "MX",
        availableLanguage: "Spanish",
        hoursAvailable: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "15:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "16:00",
            closes: "18:00",
          }
        ],
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PrintingService"],
    "@id": `${S.url}/#business`,
    name: S.name,
    image: `${S.url}/images/logo-igsa.jpg`,
    url: S.url,
    telephone: S.phone.huixquilucan,
    email: S.email,
    description:
      "Imprenta profesional con más de 20 años de experiencia. Servicios de impresión digital, gran formato, rotulación, señalética, letreros 3D, sublimación y corte láser con excelente tiempo de entrega.",
    foundingDate: S.foundingYear,
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Efectivo, Tarjeta de crédito, Tarjeta de débito, Transferencia",
    address: {
      "@type": "PostalAddress",
      streetAddress: "José María Morelos #51, San Juan Bautista",
      addressLocality: "Huixquilucan de Degollado",
      addressRegion: "Estado de México",
      postalCode: "52760",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: S.geo.latitude,
      longitude: S.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "18:00",
      }
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Huixquilucan de Degollado",
      },
      {
        "@type": "State",
        name: "Estado de México",
      },
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: S.geo.latitude, longitude: S.geo.longitude },
        geoRadius: "50000",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Impresión",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Impresión",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Impresiones Digitales", description: "Tarjetas de presentación, folletos, documentos con acabados profesionales" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Impresiones a Gran Formato", description: "Pósters, banners, lonas y gráficos de gran tamaño" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sublimación", description: "Personalización de textiles y artículos promocionales" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Señalización",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Letreros 3D", description: "Letras corpóreas con o sin iluminación" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rotulación Vehicular", description: "Vinilos de alta resistencia para vehículos" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Señalética", description: "Letreros y directorios para corporativos y espacios públicos" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Otros",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corte Láser", description: "Corte de precisión en diversos materiales" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño Gráfico", description: "Propuestas visuales para impresión" } },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.0",
      reviewCount: "6",
    },
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://wa.me/${S.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      name: "Cotizar por WhatsApp",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function FAQPageJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${S.url}${item.href}`,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${S.url}/#website`,
    name: S.name,
    url: S.url,
    description: "Imprenta profesional en Huixquilucan con más de 20 años de experiencia.",
    publisher: { "@id": `${S.url}/#organization` },
    inLanguage: "es-MX",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${S.url}/servicios` },
      "query-input": "required name=search_term_string",
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function ServicePageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios de Impresión IGSA Print & Copy",
    description: "Catálogo completo de servicios de impresión, señalización y diseño gráfico.",
    url: `${S.url}/servicios`,
    numberOfItems: 8,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Impresiones Digitales", url: `${S.url}/servicios#digitales` },
      { "@type": "ListItem", position: 2, name: "Gran Formato", url: `${S.url}/servicios#gran-formato` },
      { "@type": "ListItem", position: 3, name: "Sublimación", url: `${S.url}/servicios#sublimacion` },
      { "@type": "ListItem", position: 4, name: "Letreros 3D", url: `${S.url}/servicios#letreros-3d` },
      { "@type": "ListItem", position: 5, name: "Rotulación Vehicular", url: `${S.url}/servicios#rotulacion` },
      { "@type": "ListItem", position: 6, name: "Señalética", url: `${S.url}/servicios#senaletica` },
      { "@type": "ListItem", position: 7, name: "Corte Láser", url: `${S.url}/servicios#corte-laser` },
      { "@type": "ListItem", position: 8, name: "Diseño Gráfico", url: `${S.url}/servicios#diseno` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
