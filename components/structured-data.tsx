export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://v0-igsa-print-copy.vercel.app/#organization",
    name: "IGSA Print & Copy",
    url: "https://v0-igsa-print-copy.vercel.app",
    logo: "https://v0-igsa-print-copy.vercel.app/images/logo-igsa.svg",
    description:
      "Imprenta profesional con más de 20 años de experiencia en Huixquilucan, Estado de México. Servicios de impresión digital, gran formato, rotulación, señalética y más.",
    foundingDate: "1993",
    email: "igsaprintcopy2@gmail.com",
    telephone: ["+525535870335", "+525571381809"],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Av. Venustiano Carranza #30, 2do Piso, San Melchor",
        addressLocality: "Huixquilucan de Degollado",
        addressRegion: "Estado de México",
        postalCode: "52760",
        addressCountry: "MX",
      },
      {
        "@type": "PostalAddress",
        streetAddress:
          "Carretera Huixquilucan - Naucalpan, Magdalena Chichicaspa",
        addressLocality: "Huixquilucan de Degollado",
        addressRegion: "Estado de México",
        postalCode: "52773",
        addressCountry: "MX",
      },
    ],
    sameAs: ["https://facebook.com", "https://instagram.com"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+525535870335",
        contactType: "customer service",
        areaServed: "MX",
        availableLanguage: "Spanish",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://v0-igsa-print-copy.vercel.app/#business",
    name: "IGSA Print & Copy",
    image: "https://v0-igsa-print-copy.vercel.app/images/logo-igsa.jpg",
    url: "https://v0-igsa-print-copy.vercel.app",
    telephone: "+525535870335",
    email: "igsaprintcopy2@gmail.com",
    description:
      "Imprenta profesional con más de 20 años de experiencia. Servicios de impresión digital, gran formato, rotulación, señalética, letreros 3D, sublimación y corte láser. Servicio 24 horas.",
    foundingDate: "1993",
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Efectivo, Tarjeta de crédito, Tarjeta de débito, Transferencia",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Venustiano Carranza #30, 2do Piso, San Melchor",
      addressLocality: "Huixquilucan de Degollado",
      addressRegion: "Estado de México",
      postalCode: "52760",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.3621026,
      longitude: -99.3491322,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 19.3621026,
        longitude: -99.3491322,
      },
      geoRadius: "50000",
    },
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
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://v0-igsa-print-copy.vercel.app${item.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://v0-igsa-print-copy.vercel.app/#website",
    name: "IGSA Print & Copy",
    url: "https://v0-igsa-print-copy.vercel.app",
    description:
      "Imprenta profesional en Huixquilucan con más de 20 años de experiencia. Servicio 24 horas.",
    publisher: {
      "@id": "https://v0-igsa-print-copy.vercel.app/#organization",
    },
    inLanguage: "es-MX",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
