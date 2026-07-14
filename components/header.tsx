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

          <button type="button" aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={mobileMenuOpen} className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden ${lightNavigation ? "bg-slate-100 text-[#08213c]" : "bg-white/10 text-white"}`} onClick={() => setMobileMenuOpen((open) => !open)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
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
        </div>
      </div>
    </>
  )
}
