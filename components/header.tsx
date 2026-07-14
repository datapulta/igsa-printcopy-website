"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { captureEvent } from "@/lib/posthog"
import { siteConfig } from "@/lib/seo-config"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
]

function trackNavigationClick(label: string, href: string, location: "desktop" | "mobile") {
  captureEvent("navigation_link_clicked", { navigation_label: label, navigation_target: href, navigation_location: location })
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomeHero = pathname === "/" && !scrolled
  const lightNavigation = !isHomeHero

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  useEffect(() => {
    captureEvent("navigation_menu_toggled", { menu_state: mobileMenuOpen ? "open" : "closed", current_path: pathname })
  }, [mobileMenuOpen, pathname])

  const quoteUrl = `https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio`

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        {pathname === "/sorteo" && <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-600 via-white to-red-600" />}
        <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5 ${
          lightNavigation
            ? "border-slate-200/90 bg-white/90 shadow-[0_12px_40px_rgba(15,35,60,.09)] backdrop-blur-xl"
            : "border-white/15 bg-[#061b35]/50 shadow-[0_12px_40px_rgba(0,0,0,.14)] backdrop-blur-xl"
        }`}>
          <Link href="/" className="relative z-10 flex items-center gap-3" aria-label="IGSA Print & Copy, ir al inicio">
            <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${lightNavigation ? "bg-[#f4f7ec]" : "bg-white/10"}`}>
              <Image src="/logo-igsa-2026-facebook.svg" alt="" width={34} height={34} className="h-7 w-auto" priority />
            </span>
            <span className="hidden leading-none sm:block">
              <span className={`block text-sm font-bold tracking-[-.03em] ${lightNavigation ? "text-[#08213c]" : "text-white"}`}>IGSA</span>
              <span className={`mt-1 block text-[9px] font-bold tracking-[.16em] ${lightNavigation ? "text-slate-500" : "text-slate-300"}`}>PRINT &amp; COPY</span>
            </span>
          </Link>

          <div className={`absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border p-1 lg:flex ${lightNavigation ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href} onClick={() => trackNavigationClick(item.name, item.href, "desktop")} className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? lightNavigation ? "bg-white text-[#08213c] shadow-sm" : "bg-white text-[#08213c] shadow-lg"
                    : lightNavigation ? "text-slate-500 hover:text-[#08213c]" : "text-white/70 hover:text-white"
                }`}>
                  {item.name}
                </Link>
              )
            })}
          </div>

          <a href={quoteUrl} target="_blank" rel="noopener noreferrer" onClick={() => captureEvent("whatsapp_quote_clicked", { cta_location: "header_desktop", current_path: pathname })} className="relative z-10 hidden items-center gap-2 rounded-xl bg-[#a8d341] px-4 py-2.5 text-sm font-bold text-[#08213c] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c0ea5f] hover:shadow-lg hover:shadow-[#a8d341]/20 lg:inline-flex">
            <MessageCircle className="h-4 w-4" />
            Cotizar ahora
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <div className="relative z-10 flex items-center gap-2 lg:hidden">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => captureEvent("whatsapp_quote_clicked", { cta_location: "header_mobile_direct", current_path: pathname })}
              className="flex h-10 items-center gap-1.5 rounded-xl bg-[#a8d341] px-3 text-xs font-bold text-[#08213c] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c0ea5f] hover:shadow-lg hover:shadow-[#a8d341]/10"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden min-[360px]:inline">Cotizar</span>
            </a>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                lightNavigation ? "bg-slate-100 text-[#08213c]" : "bg-white/10 text-white"
              }`}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-[#061b35]/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute inset-x-3 top-[5.5rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08213c] p-6 shadow-2xl transition-all duration-500 sm:inset-x-5 ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}>
          <div className="mb-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#b6df55]"><span className="h-2 w-2 rounded-full bg-[#a8d341]" />Navegación</div>
          <nav className="space-y-1">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href
              return <Link key={item.name} href={item.href} onClick={() => { trackNavigationClick(item.name, item.href, "mobile"); setMobileMenuOpen(false) }} className={`flex items-center justify-between rounded-xl px-4 py-4 text-xl font-semibold transition-all duration-300 ${isActive ? "bg-white text-[#08213c]" : "text-white/80 hover:bg-white/10 hover:text-white"} ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`} style={{ transitionDelay: mobileMenuOpen ? `${index * 60 + 100}ms` : "0ms" }}><span>{item.name}</span><ArrowUpRight className="h-5 w-5" /></Link>
            })}
          </nav>
          <a href={quoteUrl} target="_blank" rel="noopener noreferrer" onClick={() => { captureEvent("whatsapp_quote_clicked", { cta_location: "header_mobile", current_path: pathname }); setMobileMenuOpen(false) }} className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#a8d341] px-5 py-4 text-sm font-bold text-[#08213c]"><MessageCircle className="h-4 w-4" />Cotizar por WhatsApp <ArrowUpRight className="h-4 w-4" /></a>

          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center gap-4">
                {[
                  {
                    label: "Facebook",
                    href: siteConfig.social.facebook,
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )
                  },
                  {
                    label: "Instagram",
                    href: siteConfig.social.instagram,
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )
                  },
                  {
                    label: "TikTok",
                    href: siteConfig.social.tiktok,
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.28 6.28 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.85z" />
                      </svg>
                    )
                  }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#08213c] transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2 text-center text-xs text-white/50 border-t border-white/5 pt-4">
                <p className="font-semibold text-white/70">Sucursales:</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-6">
                  <a href={`tel:${siteConfig.phone.huixquilucan}`} className="hover:text-white transition-colors">
                    Huixquilucan: {siteConfig.phone.huixquilucan}
                  </a>
                  <a href={`tel:${siteConfig.phone.chichicaspa}`} className="hover:text-white transition-colors">
                    Chichicaspa: {siteConfig.phone.chichicaspa}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
