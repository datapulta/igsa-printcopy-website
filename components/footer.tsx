import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { siteConfig } from "@/lib/seo-config"

const locations = [
  {
    name: "Huixquilucan",
    address: "José María Morelos #51, San Juan Bautista, 52760",
    phone: "+52 55 3587 0335",
    mapUrl: "https://maps.app.goo.gl/pdp7VVyuqPRKazUo7",
    schedule: "Lun-Vie: 9-3 PM, 4-6 PM"
  },
  {
    name: "Chichicaspa",
    address: "Carretera Huixquilucan-Naucalpan, Magdalena Chichicaspa, 52773",
    phone: "+52 55 7138 1809",
    mapUrl: "https://www.google.com/maps/place/Igsa+Print+%26+Copy/@19.3621026,-99.3491322,17z",
    schedule: "Lun-Vie: 9 AM-7 PM, Sáb: 9 AM-2 PM"
  }
]

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
]

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo-igsa-2026-facebook.svg"
                alt="IGSA Print & Copy"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-xs">
              Más de 20 años ofreciendo soluciones de impresión profesional en Huixquilucan.
            </p>

            <div className="flex items-center gap-3">
              {[
                {
                  label: "WhatsApp",
                  href: `https://wa.me/${siteConfig.whatsapp}`,
                  icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                },
                {
                  label: "Facebook",
                  href: siteConfig.social.facebook,
                  icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                },
                {
                  label: "Instagram",
                  href: siteConfig.social.instagram,
                  icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                },
                {
                  label: "TikTok",
                  href: siteConfig.social.tiktok,
                  icon: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.28 6.28 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.85z"
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-5">
              Sucursales
            </h3>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">{location.name}</p>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" />
                    <span className="leading-relaxed">{location.address}</span>
                  </a>
                  <a
                    href={`tel:${location.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                    {location.phone}
                  </a>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                    <span>{location.schedule}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-5">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:cotizacion@igsaprint.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-400" />
                cotizacion@igsaprint.com
              </a>
              <a
                href="mailto:igsaprintcopy@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-400" />
                igsaprintcopy@gmail.com
              </a>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-gray-50">
              <p className="text-xs text-gray-600 mb-2">¿Necesitas cotización rápida?</p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-primary transition-colors"
              >
                Escríbenos por WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} IGSA Print & Copy
          </p>
          <p className="text-xs text-gray-400">
            Huixquilucan, Estado de México
          </p>
        </div>
      </div>
    </footer>
  )
}
