"use client"

import { useState, ComponentType } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrackedAnchor, TrackedLink } from "@/components/tracked-link"
import { 
  ArrowLeft, 
  Layers, 
  Award, 
  Mail, 
  Bookmark, 
  FileText, 
  Contact, 
  HeartPulse, 
  Receipt, 
  ClipboardList, 
  FolderOpen, 
  Ticket, 
  Tag, 
  PenTool, 
  BookOpen, 
  GraduationCap,
  MessageCircle,
  Search,
  Sparkles,
  Printer,
  X,
  Check
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BreadcrumbJsonLd } from "@/components/structured-data"
import { siteConfig } from "@/lib/seo-config"

interface Product {
  name: string
  desc: string
  icon: ComponentType<{ className?: string }>
  tone: string
  image?: string
  details?: {
    longDesc?: string
    processTitle?: string
    processSteps?: { title: string; desc: string }[]
    sizes?: string[]
    papers?: string[]
    types?: string[]
  }
}

const products: Product[] = [
  {
    name: "Dípticos y Trípticos",
    desc: "Folletos plegados ideales para menús, guías informativas y catálogos corporativos rápidos.",
    icon: Layers,
    tone: "bg-[#e8f4c9] text-[#335711]",
    image: "/images/dipticos-tripticos.png",
    details: {
      longDesc: "La impresión en dípticos y trípticos es ideal para comunicar mensajes breves e impactar al cliente con información clara y concisa. Son herramientas altamente versátiles que pueden usarse para promocionar ofertas, catálogos de productos, servicios, campañas publicitarias o incluir instrucciones simples en empaques.",
      processTitle: "¿Cómo elaboramos un díptico o tríptico?",
      processSteps: [
        {
          title: "Carátula Principal",
          desc: "Es la primera sección visible cuando el folleto está cerrado. Aquí se coloca el nombre de la empresa, logotipo y una imagen principal atractiva que represente el contenido."
        },
        {
          title: "Interiores",
          desc: "Al desplegar el folleto, se encuentra la parte central que contiene el mensaje principal. Manteniendo la información breve, clara, bien organizada y con tipografías legibles."
        },
        {
          title: "Contraportada",
          desc: "Incluye los datos de contacto como dirección, teléfono, correo y sitio web. Es fundamental para generar confianza y facilitar la comunicación con el cliente."
        }
      ],
      sizes: ["Carta (19.7 x 27.5 cm)", "Oficio (19.7 x 35.5 cm)", "Tabloide (39.7 x 27.5 cm)"],
      papers: ["Bond 90 gr.", "Couche 115 gr."],
      types: ["4x0 (Color al frente)", "4x1 (Color al frente, vuelta B/N)", "4x4 (Color ambos lados)"]
    }
  },
  {
    name: "Diplomas",
    desc: "Reconocimientos e invitaciones de honor impresos en papeles especiales de alto gramaje con excelente nitidez.",
    icon: Award,
    tone: "bg-[#e6effa] text-[#16457d]",
    image: "/images/diplomas.png"
  },
  {
    name: "Invitaciones",
    desc: "Tarjetas personalizadas para eventos sociales o corporativos con sobres opcionales y acabados finos.",
    icon: Mail,
    tone: "bg-[#f7ecdc] text-[#8a4a14]",
    image: "/images/invitaciones.png"
  },
  {
    name: "Pósters y Carteles",
    desc: "Impresión de gran impacto visual en papel bond, satinado o brillante para interiores o vitrinas.",
    icon: Printer,
    tone: "bg-emerald-50 text-emerald-800",
    image: "/images/posters-carteles.png"
  },
  {
    name: "Separadores",
    desc: "Puntos de libro personalizados para obsequios literarios, eventos o merchandising promocional.",
    icon: Bookmark,
    tone: "bg-purple-50 text-purple-800",
    image: "/images/separadores.png"
  },
  {
    name: "Programas",
    desc: "Guías de mano y programas impresos para bodas, ceremonias religiosas, conciertos y graduaciones.",
    icon: FileText,
    tone: "bg-pink-50 text-pink-800",
    image: "/images/programas.png"
  },
  {
    name: "Tarjetas de Presentación",
    desc: "Tu firma profesional en papeles satinados, mate, texturizados o con laminado plastificado de alta resistencia.",
    icon: Contact,
    tone: "bg-amber-50 text-amber-800",
    image: "/images/tarjetas-presentacion.png"
  },
  {
    name: "Recetas",
    desc: "Recetarios médicos oficiales y hojas de consulta personalizadas para clínicas y consultorios particulares.",
    icon: HeartPulse,
    tone: "bg-red-50 text-red-800",
    image: "/images/recetas.png"
  },
  {
    name: "Recibos",
    desc: "Talonarios numerados de cobro o recibos oficiales autocopiantes (original y copias) con acabados grapados.",
    icon: Receipt,
    tone: "bg-teal-50 text-teal-800",
    image: "/images/recibos.png"
  },
  {
    name: "Notas de Remisión",
    desc: "Documentos de pedido o remisión autocopiantes personalizados con tu logotipo y foliado consecutivo.",
    icon: ClipboardList,
    tone: "bg-indigo-50 text-indigo-800",
    image: "/images/notas-remision.png"
  },
  {
    name: "Folders",
    desc: "Carpetas corporativas con o sin solapas interiores para organizar y presentar propuestas a clientes.",
    icon: FolderOpen,
    tone: "bg-sky-50 text-sky-800",
    image: "/images/folders.png"
  },
  {
    name: "Boletos",
    desc: "Entradas numeradas y foliadas con pleca de pre-corte de seguridad, perfectos para rifas o eventos masivos.",
    icon: Ticket,
    tone: "bg-rose-50 text-rose-800",
    image: "/images/boletos.png"
  },
  {
    name: "Volantes",
    desc: "Flyers publicitarios de reparto masivo impresos a color en papel couche para campaigns publicitarias.",
    icon: Sparkles,
    tone: "bg-yellow-50 text-yellow-800",
    image: "/images/volantes.png"
  },
  {
    name: "Etiquetas Adhesivas",
    desc: "Stickers e imanes adhesivos troquelados en planilla o individuales para etiquetado de productos y empaques.",
    icon: Tag,
    tone: "bg-emerald-50 text-emerald-800",
    image: "/images/etiquetas-adhesivas.png"
  },
  {
    name: "Papelería Corporativa",
    desc: "Hojas membretadas, sobres oficiales y hojas institucionales que mantienen tu identidad corporativa al día.",
    icon: PenTool,
    tone: "bg-blue-50 text-blue-800",
    image: "/images/papeleria-corporativa.png"
  },
  {
    name: "Catálogos",
    desc: "Cuadernillos grapados de múltiples páginas impresos a color para exhibir tu catálogo completo de productos.",
    icon: BookOpen,
    tone: "bg-indigo-50 text-indigo-800",
    image: "/images/catalogos.png"
  },
  {
    name: "Tesis",
    desc: "Impresión de alta calidad y empastado profesional de tesis universitarias con pasta dura o blanda.",
    icon: GraduationCap,
    tone: "bg-stone-50 text-stone-800",
    image: "/images/tesis.png"
  },
  {
    name: "Revistas",
    desc: "Publicaciones impresas periódicas engrapadas o en lomo cuadrado con acabados profesionales en portada.",
    icon: BookOpen,
    tone: "bg-cyan-50 text-cyan-800",
    image: "/images/revistas_v2.png"
  }
]

export default function DigitalesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.desc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleOpenDetails = (product: Product) => {
    setSelectedProduct(product)
  }

  const handleCloseDetails = () => {
    setSelectedProduct(null)
  }

  // Helper function to get default specs for products without custom detailed specs
  const getProductSpecs = (product: Product) => {
    if (product.details) return product.details

    // Fallback standard specs
    return {
      longDesc: product.desc,
      processTitle: "¿Cómo se elabora?",
      processSteps: [
        {
          title: "Recepción de Archivo",
          desc: "Revisamos tu archivo de diseño para validar resolución, márgenes y perfiles de color correctos."
        },
        {
          title: "Impresión Digital Láser",
          desc: "Imprimimos en prensa digital de última tecnología con registro perfecto y fidelidad de tonos."
        },
        {
          title: "Acabado y Refine",
          desc: "Cortamos milimétricamente tus piezas y aplicamos terminados extras como laminados o suajados."
        }
      ],
      sizes: ["Carta (21.5 x 28 cm)", "Media Carta (14 x 21.5 cm)", "Tabloide (30.5 x 45.7 cm)"],
      papers: ["Couche 150 gr / 300 gr", "Bond 90 gr", "Opalina 225 gr"],
      types: ["Color frente (4x0)", "Color ambos lados (4x4)"]
    }
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/servicios" },
        { name: "Impresión Digital", href: "/servicios/digitales" }
      ]} />
      <Header />
      <main className="min-h-screen pt-20 bg-slate-50/50">
        
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-white border-b border-slate-100">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8f8f8_1px,transparent_1px),linear-gradient(to_bottom,#f8f8f8_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <TrackedLink 
                href="/servicios" 
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors" 
                event="services_cta_clicked" 
                properties={{
                  cta_label: "volver_a_servicios",
                  cta_destination: "/servicios",
                  page_name: "servicios_digitales",
                }}
              >
                <ArrowLeft className="h-4 w-4" /> Volver a Servicios
              </TrackedLink>
              
              <AnimateOnScroll>
                <span className="inline-flex items-center rounded-full bg-[#67920f]/10 px-3 py-1 text-xs font-bold text-[#67920f] uppercase tracking-wider mb-4">
                  01 • Impresión al instante
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-[#08213c] leading-[0.95] tracking-tight mb-8">
                  Catálogo de
                  <br />
                  <span className="text-slate-400">Impresión Digital</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Papelería, folletos, invitaciones y talonarios comerciales impresos con la más alta resolución y en tiempos récord. Encuentra el producto ideal para tu negocio o evento social.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Catalog Search & Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            {/* Search Bar */}
            <AnimateOnScroll className="mb-12">
              <div className="relative max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar producto (ej. Tarjetas, Volantes, Tesis)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-100 transition shadow-sm"
                />
              </div>
              {searchTerm && (
                <p className="mt-4 text-xs text-slate-500">
                  Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? "resultado" : "resultados"} para "{searchTerm}"
                </p>
              )}
            </AnimateOnScroll>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => {
                  const Icon = product.icon
                  return (
                    <AnimateOnScroll key={product.name} delay={index * 0.05}>
                      <article className="group h-full rounded-2xl border border-slate-200/85 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 flex flex-col justify-between">
                        <div>
                          {/* Image Header or Gradient Placeholder */}
                          {product.image ? (
                            <div 
                              onClick={() => handleOpenDetails(product)}
                              className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-slate-50 border border-slate-100 cursor-pointer"
                            >
                              <Image 
                                src={product.image} 
                                alt={product.name} 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                              />
                            </div>
                          ) : (
                            <div 
                              onClick={() => handleOpenDetails(product)}
                              className={`flex w-full aspect-video items-center justify-center rounded-xl ${product.tone} mb-5 border border-current/5 cursor-pointer`}
                            >
                              <Icon className="h-8 w-8" />
                            </div>
                          )}
                          
                          <h3 
                            onClick={() => handleOpenDetails(product)}
                            className="text-lg font-bold text-[#08213c] tracking-tight hover:text-[#67920f] transition-colors cursor-pointer"
                          >
                            {product.name}
                          </h3>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{product.desc}</p>
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => handleOpenDetails(product)}
                            className="text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            Ver detalles
                          </button>
                          
                          <TrackedAnchor
                            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20impresi%C3%B3n%20de%20${encodeURIComponent(product.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition duration-300"
                            event="digital_product_quote_clicked"
                            properties={{
                              product_name: product.name,
                              cta_location: "catalog_card"
                            }}
                          >
                            <MessageCircle className="h-3.5 w-3.5" /> Cotizar
                          </TrackedAnchor>
                        </div>
                      </article>
                    </AnimateOnScroll>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl p-8 max-w-md mx-auto">
                <p className="text-slate-500 text-sm mb-4">No encontramos productos que coincidan con tu búsqueda.</p>
                <button 
                  onClick={() => setSearchTerm("")}
                  className="text-xs font-bold text-[#67920f] hover:underline"
                >
                  Limpiar búsqueda
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Product Details Modal (Drawer) */}
        {selectedProduct && (() => {
          const specs = getProductSpecs(selectedProduct)
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Backdrop */}
              <div 
                onClick={handleCloseDetails}
                className="absolute inset-0 bg-[#08213c]/60 backdrop-blur-sm transition-opacity duration-300"
              />
              
              {/* Modal Container */}
              <div className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-transform duration-300 scale-100 z-10">
                
                {/* Close Button */}
                <button
                  onClick={handleCloseDetails}
                  className="absolute right-4 top-4 z-20 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Side: Product Media & Specs */}
                <div className="w-full md:w-5/12 bg-slate-50 border-r border-slate-100 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    {selectedProduct.image ? (
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-white border border-slate-100">
                        <Image 
                          src={selectedProduct.image} 
                          alt={selectedProduct.name} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`flex w-full aspect-video items-center justify-center rounded-2xl ${selectedProduct.tone} mb-6 border border-current/5`}>
                        {(() => {
                          const Icon = selectedProduct.icon
                          return <Icon className="h-10 w-10" />
                        })()}
                      </div>
                    )}

                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Especificaciones Técnicas</h4>
                    
                    <div className="space-y-4">
                      {specs.sizes && specs.sizes.length > 0 && (
                        <div>
                          <p className="text-[11px] font-bold text-[#08213c] uppercase">Tamaños disponibles</p>
                          <ul className="mt-1 space-y-1">
                            {specs.sizes.map((s) => (
                              <li key={s} className="text-xs text-slate-600 flex items-center gap-1.5">
                                <Check className="h-3 w-3 text-[#67920f] shrink-0" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {specs.papers && specs.papers.length > 0 && (
                        <div>
                          <p className="text-[11px] font-bold text-[#08213c] uppercase">Tipos de Papel</p>
                          <ul className="mt-1 space-y-1">
                            {specs.papers.map((p) => (
                              <li key={p} className="text-xs text-slate-600 flex items-center gap-1.5">
                                <Check className="h-3 w-3 text-[#67920f] shrink-0" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {specs.types && specs.types.length > 0 && (
                        <div>
                          <p className="text-[11px] font-bold text-[#08213c] uppercase">Modalidad de Impresión</p>
                          <ul className="mt-1 space-y-1">
                            {specs.types.map((t) => (
                              <li key={t} className="text-xs text-slate-600 flex items-center gap-1.5">
                                <Check className="h-3 w-3 text-[#67920f] shrink-0" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 hidden md:block">
                    <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                      IGSA Print & Copy • Más de 20 años de experiencia técnica a tu servicio.
                    </p>
                  </div>
                </div>

                {/* Right Side: Product Details & Process */}
                <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#67920f]">Impresión Profesional</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#08213c] mt-1 mb-4">{selectedProduct.name}</h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {specs.longDesc}
                    </p>

                    {specs.processTitle && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-[#08213c] border-b border-slate-100 pb-2 mb-4">
                          {specs.processTitle}
                        </h4>
                        <div className="space-y-4">
                          {specs.processSteps?.map((step, idx) => (
                            <div key={step.title} className="flex gap-3">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-black text-slate-500 shrink-0">
                                {idx + 1}
                              </span>
                              <div>
                                <h5 className="text-xs font-bold text-[#08213c]">{step.title}</h5>
                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button
                      onClick={handleCloseDetails}
                      className="text-xs font-bold text-slate-500 hover:text-slate-700 order-2 sm:order-1"
                    >
                      Cerrar catálogo
                    </button>
                    
                    <TrackedAnchor
                      href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20me%20interesa%20cotizar%20impresi%C3%B3n%20de%20${encodeURIComponent(selectedProduct.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold bg-[#67920f] text-white rounded-full hover:bg-[#5b810d] transition duration-300 shadow-md shadow-[#67920f]/10 order-1 sm:order-2"
                      event="digital_product_modal_quote_clicked"
                      properties={{
                        product_name: selectedProduct.name,
                        cta_location: "details_modal"
                      }}
                    >
                      <MessageCircle className="h-4 w-4" /> Cotizar este producto
                    </TrackedAnchor>
                  </div>

                </div>

              </div>
            </div>
          )
        })()}

        {/* Preparation Guidelines */}
        <section className="py-20 md:py-28 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[.18em] text-[#67920f]">Guía Técnica</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#08213c] mt-2">¿Cómo enviar tus archivos?</h2>
              <p className="text-slate-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">Sigue estas pautas para garantizar una calidad tipográfica óptima y acabados perfectos.</p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                <span className="text-2xl font-black text-slate-300 mb-3 block">01</span>
                <h3 className="text-base font-bold text-[#08213c] mb-2">Formato y Márgenes</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Crea tu archivo a tamaño real con 3 mm de sangrado en todos los bordes para prevenir cortes asimétricos.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                <span className="text-2xl font-black text-slate-300 mb-3 block">02</span>
                <h3 className="text-base font-bold text-[#08213c] mb-2">Resolución y Modo</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Exporta siempre en modo de color **CMYK** (evita RGB) con una resolución de **300 dpi** para evitar pixelados.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                <span className="text-2xl font-black text-slate-300 mb-3 block">03</span>
                <h3 className="text-base font-bold text-[#08213c] mb-2">Fuentes Curvadas</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Convierte tus textos a curvas o contornos (outlines) en PDF o AI para evitar fuentes faltantes al abrir el archivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimateOnScroll direction="scale">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-[#08213c] p-12 md:p-20 text-center text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(143,184,46,0.1),transparent_50%)]" />
                <div className="relative">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    ¿No encuentras el <span className="text-[#b6df55]">formato</span> que buscas?
                  </h2>
                  <p className="text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                    No te preocupes. Escríbenos directamente por WhatsApp y coméntanos qué producto necesitas imprimir; lo fabricamos a tu medida.
                  </p>
                  <TrackedAnchor
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hola%2C%20quiero%20cotizar%20un%20producto%20de%20impresi%C3%B3n%20digital%20personalizado`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300"
                    event="custom_digital_material_quote_clicked"
                    properties={{
                      cta_location: "bottom_cta"
                    }}
                  >
                    <MessageCircle className="h-4 w-4" /> Asesoría Especializada
                  </TrackedAnchor>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
