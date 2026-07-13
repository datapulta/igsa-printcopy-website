# Rediseño Visual IGSA Print & Copy

## Resumen Ejecutivo

Rediseño completo del sitio web de IGSA Print & Copy, migrando de un diseño **dark mode con glassmorphism pesado** a un **light mode premium estilo startup** (Linear, Vercel, Stripe).

**Fecha:** Julio 2026  
**Branch:** `staging` → `main`  
**Tags:** v1.0.0 a v1.3.5

---

## Estado Inicial (Antes del Rediseño)

### Problemas Identificados

1. **Dark mode con glassmorphism excesivo**
   - Múltiples capas de blur y gradientes superpuestos
   - Efectos de glow y noise texture
   - Animaciones excesivas (float, pulse, shimmer, rotate)

2. **Diseño genérico**
   - Secciones apiladas estándar
   - Cards con bordes brillantes y efectos hover exagerados
   - Tipografía con gradientes en todos los títulos

3. **Código muerto**
   - `ThemeProvider` sin usar
   - `styles/globals.css` duplicado
   - 57 componentes UI de shadcn sin usar
   - Hooks no utilizados

4. **Configuración de build**
   - `typescript.ignoreBuildErrors: true` (ocultaba errores)
   - `images.unoptimized: true` (sin optimización)
   - ESLint no instalado
   - Facebook Pixel ID hardcodeado

---

## Decisiones de Diseño

### 1. Light Mode vs Dark Mode

**Decisión:** Migrar completamente a light mode

**Razones:**
- Mejor legibilidad para contenido de texto largo
- Percepción de profesionalismo y limpieza
- Alineación con marcas premium (Linear, Vercel, Stripe)
- Contraste más controlable para accesibilidad

### 2. Paleta de Colores

#### Colores de Marca (Intocables)
- **Verde Lima:** `#A4C639` → Ajustado a `hsl(80 65% 42%)` para contraste AA sobre blanco
- **Azul Oscuro:** `hsl(210 80% 25%)` (secundario)
- **Azul Grisáceo:** `hsl(203 45% 45%)` (acento)

#### Sistema de Colores Light Mode

```css
:root {
  /* Fondos */
  --background: oklch(1 0 0);           /* Blanco puro */
  --card: oklch(0.98 0 0);              /* Gris muy claro */
  
  /* Texto */
  --foreground: oklch(0.13 0 0);        /* Negro suave */
  --muted-foreground: oklch(0.45 0 0);  /* Gris medio */
  
  /* Bordes */
  --border: oklch(0.92 0 0);            /* Gris claro */
}
```

### 3. Principios de Diseño Aplicados

#### A. Menos es Más
- Eliminado glassmorphism excesivo
- Reducido de 15+ animaciones a 4 básicas (fadeInUp, fadeInDown, fadeIn, scaleIn)
- Bordes sutiles en lugar de brillos

#### B. Espaciado Generoso
- Padding de secciones: `py-32` (128px) en lugar de `py-24` (96px)
- Gaps entre elementos: `gap-6` a `gap-8`
- Más whitespace para respiración visual

#### C. Jerarquía Tipográfica Clara
- Headlines: `text-5xl md:text-6xl lg:text-7xl font-bold`
- Body: `text-gray-600 leading-relaxed`
- Labels: `text-xs font-medium text-primary uppercase tracking-widest`

#### D. Layouts Asimétricos
- Hero: Grid 12 columnas (7 cols texto + 5 cols imagen)
- Features: Sticky header izquierdo + bento grid derecho
- FAQ: Header sticky + accordion limpio

#### E. Hover States Elegantes
- Translate Y sutil: `-2px` (antes `-4px`)
- Shadow: `0 8px 24px rgba(0,0,0,0.06)` (antes glows de colores)
- Transición: `0.4s cubic-bezier(0.4, 0, 0.2, 1)`

---

## Cambios Técnicos

### CSS (globals.css)

#### Antes
```css
.glass-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
}

.premium-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(164,198,57,0.05);
}
```

#### Después
```css
.glass-card {
  background: var(--card);
  border: 1px solid var(--border);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  border-color: oklch(0.88 0 0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}
```

### Componentes Rediseñados

#### Header
- **Antes:** Nav pill con fondo `bg-white/[0.04] backdrop-blur-md`
- **Después:** Nav inline con `bg-gray-100` y hover states simples

#### Hero Section
- **Antes:** Imagen de fondo con múltiples gradientes oscuros
- **Después:** Layout dividido 7/5, imagen con opacidad 20%, floating card

#### Features Section
- **Antes:** Grid 4 columnas con glass cards
- **Después:** Layout 4/8 con sticky header + bento grid asimétrico

#### FAQ Section
- **Antes:** Accordion con side panel decorativo
- **Después:** Layout 4/8 con header sticky + accordion minimalista

#### CTA Section
- **Antes:** Card centrada con gradiente sutil
- **Después:** Fondo `bg-gray-900` con gradientes radiales y tipografía blanca

#### Footer
- **Antes:** Fondo `bg-card` (oscuro) con 4 columnas densas
- **Después:** Fondo `bg-white` con espaciado generoso y bordes sutiles

---

## Arquitectura de Archivos

```
app/
├── globals.css              # Sistema de diseño light mode
├── layout.tsx               # Layout principal
├── page.tsx                 # Home
├── nosotros/page.tsx        # Sobre nosotros
── servicios/page.tsx       # Catálogo de servicios
├── servicios/rigidos/page.tsx # Materiales rígidos
├── contacto/page.tsx        # Contacto y mapas
└── nuevo/page.tsx           # Nuevo local

components/
── header.tsx               # Navegación
├── footer.tsx               # Pie de página
├── animate-on-scroll.tsx    # Animaciones scroll
├── floating-whatsapp.tsx    # Botón flotante
└── home/
    ├── hero-section.tsx
    ├── features-section.tsx
    ├── services-preview.tsx
    ├── faq-section.tsx
    └── cta-section.tsx

lib/
├── seo-config.ts            # Configuración SEO
├── utils.ts                 # Utilidades
└── faqs.ts                  # FAQs centralizadas
```

---

## Referencias de Diseño

### Inspiración
- **Linear** (linear.app) — Limpio, dark, tipografía bold
- **Vercel** (vercel.com) — Minimal, mucho espacio, gradientes sutiles
- **Raycast** (raycast.com) — Dark theme elegante, cards limpias
- **Stripe** (stripe.com) — Secciones bien definidas, CTAs claros

### Framework
- **Tailwind CSS 4** — Utility-first
- **shadcn/ui** — Componentes base (no todos usados)
- **Lucide Icons** — Iconografía consistente
- **Geist Font** — Tipografía moderna (Vercel)

---

## Métricas de Mejora

### Performance
- **Build time:** 2.5s (Turbopack)
- **TypeScript:** 0 errores (antes ignorados)
- **ESLint:** 0 errores, 0 warnings
- **Imagen Docker:** ~150MB (standalone output)

### Accesibilidad
- **Contraste:** WCAG AA (verde ajustado de #A4C639 a hsl(80 65% 42%))
- **Focus states:** Outline ring visible
- **ARIA labels:** En botones de iconos

### SEO
- **Structured Data:** Organization, LocalBusiness, FAQPage, BreadcrumbList
- **Metadata:** OpenGraph, Twitter Cards, robots.txt, sitemap.xml
- **Performance:** Imágenes optimizadas con next/image

---

## Comandos de Desarrollo

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Lint
npm run lint

# Docker local
docker build -t igsa-print-app .
docker run -p 3000:3000 igsa-print-app

# Deploy
git checkout main
git merge staging
git tag -a v1.x.x -m "Descripción"
git push origin-new main --tags
```

---

## Notas para IAs

### Si necesitas modificar el diseño:

1. **Colores:** Solo modificar variables en `app/globals.css` → `:root`
2. **Espaciado:** Usar clases Tailwind (`py-32`, `gap-6`, etc.)
3. **Tipografía:** Mantener jerarquía (bold para títulos, regular para body)
4. **Bordes:** Usar `border-gray-200` para sutil, `border-gray-300` para hover
5. **Sombras:** Máximo `shadow-lg` (0 10px 15px -3px rgba(0,0,0,0.1))
6. **Animaciones:** Solo fadeInUp, fadeInDown, fadeIn, scaleIn

### Si necesitas agregar una sección nueva:

```tsx
<section className="py-32 bg-gray-50"> {/* o bg-white */}
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <AnimateOnScroll>
      <p className="text-sm font-medium text-primary mb-4">Label</p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Título
      </h2>
    </AnimateOnScroll>
    
    {/* Contenido */}
  </div>
</section>
```

### Patrones de Layout Comunes:

1. **Hero asimétrico:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
  <div className="lg:col-span-7">...</div>
  <div className="lg:col-span-5">...</div>
</div>
```

2. **Sticky header + contenido:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
  <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">...</div>
  <div className="lg:col-span-8">...</div>
</div>
```

3. **Bento grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="md:col-span-2">...</div>
  <div>...</div>
  <div>...</div>
</div>
```

---

## Historial de Versiones

- **v1.0.0** - Rediseño inicial light mode
- **v1.1.0** - Ajustes de espaciado y tipografía
- **v1.2.0** - Optimización de animaciones
- **v1.3.0** - Refinamiento de hover states
- **v1.3.5** - Versión actual (estable)

---

## Contacto

Para preguntas sobre el diseño, consultar:
- Repositorio: https://github.com/datapulta/igsa-printcopy-website
- Documentación: DOKPLOY.md (despliegue)
- Este archivo: DESIGN_SYSTEM.md (diseño visual)
