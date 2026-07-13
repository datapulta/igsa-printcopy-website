"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/seo-config"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        {pathname === "/sorteo" && (
          <div className="w-full h-1 bg-gradient-to-r from-green-600 via-white to-red-600" />
        )}
        
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="relative flex items-center z-10">
            <Image
              src="/logo-igsa-2026-facebook.svg"
              alt="IGSA Print & Copy Logo"
              width={48}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <nav className="flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-3 z-10">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              Cotizar
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block w-full h-[1.5px] bg-gray-900 rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-full h-[1.5px] bg-gray-900 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-full h-[1.5px] bg-gray-900 rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white" />

        <div className="relative h-full flex flex-col justify-center px-8">
          <nav className="space-y-2">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-4 text-3xl font-bold transition-all duration-300 border-b border-gray-100 ${
                    isActive ? "text-gray-900" : "text-gray-600"
                  } ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                  style={{ transitionDelay: mobileMenuOpen ? `${index * 0.08 + 0.1}s` : "0s" }}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div
            className={`mt-12 transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "0.5s" : "0s" }}
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-gray-900 text-white rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
