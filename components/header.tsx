"use client"

import Link from "next/link"
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
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/60 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative flex items-center group z-10">
            <div className="bg-white/90 rounded-xl px-2 py-1 transition-all duration-500 group-hover:bg-white group-hover:shadow-md">
              <img
                src="/images/logo-igsa.svg"
                alt="IGSA Print & Copy Logo"
                className="h-10 lg:h-12 w-auto transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation — Centered */}
          <div className="hidden lg:flex lg:items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <div className="flex items-center gap-1 bg-white/[0.04] backdrop-blur-md rounded-full px-1.5 py-1.5 border border-white/[0.08]">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                      isActive
                        ? "text-primary-foreground bg-primary shadow-md shadow-primary/20"
                        : "text-foreground/70 hover:text-foreground hover:bg-white/[0.06]"
                    }`}
                  >
                    {item.name}
                    {!isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-4" />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 z-10">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              Cotizar ahora
            </a>
          </div>

          {/* Mobile: Animated Hamburger */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] z-10 hover:bg-white/[0.1] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{mobileMenuOpen ? "Cerrar" : "Menú"}</span>
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block w-full h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-full h-[2px] bg-foreground rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-full h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu — Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/98 backdrop-blur-3xl" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-8">
          <nav className="space-y-1">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-4 text-3xl font-bold transition-all duration-500 border-b border-border/20 ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  } ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                  style={{ transitionDelay: mobileMenuOpen ? `${index * 0.08 + 0.1}s` : "0s" }}
                >
                  <span className="text-xs font-normal text-muted-foreground mr-4">
                    0{index + 1}
                  </span>
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div
            className={`mt-12 transition-all duration-500 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "0.5s" : "0s" }}
          >
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
          </div>

          {/* Contact info at bottom */}
          <div
            className={`absolute bottom-12 left-8 right-8 flex flex-wrap gap-6 text-sm text-muted-foreground transition-all duration-500 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "0.6s" : "0s" }}
          >
            <a href="tel:+525535870335" className="hover:text-primary transition-colors">
              +52 55 3587 0335
            </a>
            <a href="mailto:igsaprintcopy2@gmail.com" className="hover:text-primary transition-colors">
              igsaprintcopy2@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
