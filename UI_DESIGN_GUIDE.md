# Guía general de UI — IGSA Print & Copy

Este documento define cómo debe verse y comportarse la interfaz de IGSA Print & Copy en todo el sitio. Está pensado para que diseñadores y otras IA puedan crear o modificar páginas, secciones y componentes con un resultado consistente, profesional y alineado con la marca.

## Esencia de la interfaz

La UI combina la precisión de un estudio editorial con la energía tangible de una empresa de impresión. Debe comunicar calidad, experiencia y cercanía sin sentirse anticuada ni excesivamente tecnológica.

**Atributos de la interfaz:**

- Profesional y confiable.
- Moderna, limpia y editorial.
- Cercana y orientada a resolver proyectos reales.
- Visualmente audaz solo cuando ayuda a comunicar o convertir.

Evitar dos extremos: una web de imprenta genérica llena de elementos promocionales, y una interfaz de startup abstracta que no muestra el trabajo físico de IGSA.

## Principios de diseño

1. **Claridad antes que decoración.** Cada elemento debe ayudar a entender una oferta, generar confianza o facilitar una acción.
2. **Contraste con intención.** Los fondos oscuros se reservan para momentos de alto impacto; las superficies claras sostienen la lectura y la exploración.
3. **Ritmo editorial.** Combinar titulares grandes, bloques de aire, imágenes reales y contenido breve para crear una lectura fluida.
4. **Una jerarquía visible.** En cada área debe haber una acción o pieza de contenido claramente prioritaria.
5. **Detalles contenidos.** Bordes, sombras, colores y animaciones deben sentirse refinados, no llamativos por sí mismos.
6. **La conversión es humana.** Contacto y WhatsApp deben estar disponibles, pero sin interrumpir la navegación ni competir con el contenido.

## Sistema visual

### Color

| Rol | Valor | Uso |
| --- | --- | --- |
| Azul noche | `#061B35` / `#08213C` | Fondos de alto contraste, títulos oscuros, botones secundarios. |
| Verde IGSA | `#A8D341` | Acción principal, CTA y momentos de energía de marca. |
| Verde claro | `#B6DF55` | Énfasis sobre azul noche y detalles puntuales. |
| Verde de apoyo | `#67920F` | Eyebrows, enlaces y texto de acento sobre fondos claros. |
| Fondo suave | `#F7F8F5` | Alternancia de secciones y superficies editoriales. |
| Blanco | `#FFFFFF` | Fondo de lectura, cards y superficies elevadas. |
| Texto de apoyo | `slate-600` | Descripciones y contenido secundario. |
| Bordes | `slate-200` / `gray-200` | Separación sutil entre superficies. |

Reglas:

- El verde IGSA es principalmente un color de acción; no debe saturar toda la página.
- El texto pequeño sobre verde o blanco debe mantener contraste suficiente.
- No introducir colores nuevos para una sección sin una razón semántica clara.
- Para colores globales y tokens, consultar [`app/globals.css`](app/globals.css).

### Tipografía

La interfaz usa Geist y trabaja con titulares compactos, sobrios y de alto contraste.

| Nivel | Patrón recomendado |
| --- | --- |
| H1 | `text-5xl` a `lg:text-[5.25rem]`, `font-semibold`, tracking negativo, interlineado cercano a `1`. |
| H2 | `text-4xl md:text-5xl` o `md:text-6xl`, `font-semibold`, tracking negativo. |
| H3 | `text-xl`, `font-semibold`, tracking ajustado. |
| Eyebrow | `text-xs`, mayúsculas, `font-bold`, tracking amplio. |
| Párrafo | `text-sm` o `text-base`, `leading-relaxed`, gris azulado. |
| CTA | `text-sm`, `font-bold` o `font-semibold`. |

No usar gradientes de texto como recurso habitual. La jerarquía debe venir de tamaño, peso, color, composición y espacio.

### Espacio y retícula

- Contenedor estándar: `mx-auto max-w-7xl px-6 lg:px-8`.
- Secciones: normalmente `py-20 md:py-28`; usar `py-32` cuando el contenido sea largo o necesite presencia editorial.
- Separación interna: preferir `gap-4`, `gap-6`, `gap-8`, `gap-12` o `gap-16` según la jerarquía.
- Layouts complejos en desktop: retícula de 12 columnas.
- En mobile: apilar el contenido y preservar al menos 24 px de margen lateral.
- Evitar bloques excesivamente anchos: los textos deben tener un ancho cómodo de lectura (`max-w-xl`, `max-w-2xl` o similar).

### Forma, bordes y sombra

- Radio usual: `rounded-xl` en controles y `rounded-2xl` en cards y paneles.
- Momentos especiales: `rounded-[2rem]` en CTAs heroicos o módulos destacados.
- Bordes finos, neutros y visibles solo lo necesario.
- Sombras amplias con poca opacidad; deben dar profundidad, no producir una apariencia brillante o pesada.
- El hover puede elevar cards hasta `-translate-y-1`; no usar saltos mayores como estándar.

## Patrones reutilizables

### Navegación

El header es flotante y cambia de una superficie oscura translúcida sobre el hero a una superficie blanca tras hacer scroll o en páginas claras.

- Desktop: logo a la izquierda, navegación centrada, CTA de cotización a la derecha.
- Mobile: botón compacto y panel oscuro con enlaces grandes y una CTA final.
- El CTA de WhatsApp o cotización mantiene el verde como señal de acción principal.
- Mantener estados activos, `aria-expanded` y navegación accesible.

Archivo de referencia: [`components/header.tsx`](components/header.tsx).

### Secciones editoriales

Una sección típica debe incluir, en este orden, un eyebrow opcional, un titular claro, un texto de apoyo y el contenido o CTA correspondiente.

```tsx
<section className="bg-white py-20 md:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#67920f]">
      Contexto de sección
    </p>
    <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] text-[#08213c] md:text-5xl">
      Una idea clara que ayude a decidir.
    </h2>
    <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
      Explicación breve y concreta.
    </p>
  </div>
</section>
```

Alternar entre `bg-white` y `bg-[#f7f8f5]` para establecer ritmo. Usar azul noche cuando una sección requiera una pausa visual fuerte o una llamada de atención relevante.

### Cards

Las cards comunican beneficios, servicios, materiales o información accionable. Deben ser simples y escaneables.

- Fondo blanco sobre superficie suave.
- Borde `border-slate-200`.
- Padding aproximado de `p-6` o `p-7`.
- Una idea por card: icono o imagen, título, descripción corta y enlace opcional.
- Hover discreto: borde ligeramente más visible, desplazamiento mínimo y sombra tenue.

No llenar una card con múltiples CTAs, listas largas o adornos superpuestos.

### Botones y enlaces

| Tipo | Estilo |
| --- | --- |
| Primario | Fondo verde IGSA, texto azul noche, forma redondeada y peso fuerte. |
| Secundario sobre oscuro | Borde blanco translúcido, fondo blanco muy sutil y texto blanco. |
| Secundario sobre claro | Fondo azul noche, texto blanco; usar cuando la prioridad sea secundaria respecto a un CTA verde. |
| Enlace editorial | Texto azul noche o verde de apoyo, con icono direccional opcional. |

- Las CTAs deben usar verbos concretos: “Cotiza tu proyecto”, “Ver servicios”, “Solicitar cotización”.
- Incluir iconos solo cuando aclaren dirección o canal (`ArrowRight`, `MessageCircle`).
- Siempre conservar un estado hover y focus visible.
- Toda CTA relevante debe rastrearse con `captureEvent` siguiendo los patrones existentes.

### Imágenes

La imagen debe demostrar el oficio: procesos de impresión, acabados, piezas terminadas, materiales, señalética o instalaciones reales.

- Usar `next/image` para imágenes de contenido.
- Mantener `alt` descriptivo y útil.
- Usar proporciones estables, como `aspect-[4/3]` para cards.
- Aplicar overlays o gradientes solo para mejorar legibilidad o integrar una foto en un fondo, no por decoración.
- En hero, colocar el punto focal visual donde no compita con la lectura del titular.

### FAQ y contenido expansible

Los acordeones son para resolver dudas sin alargar visualmente una página. Usar preguntas claras y respuestas breves, humanas y específicas.

- La pregunta es el elemento de mayor contraste.
- Separar ítems con bordes ligeros.
- Ofrecer una ruta de contacto si la respuesta no está disponible.
- En desktop, una columna sticky de contexto funciona bien junto a la lista de respuestas.

### Contacto y WhatsApp

WhatsApp es un canal de baja fricción y debe estar disponible en momentos de intención: header, FAQ, CTA final y botón flotante.

- Mantener mensajes prellenados claros y específicos.
- No duplicar el mismo CTA visual más de una vez dentro de un bloque.
- El botón flotante debe aparecer sin bloquear contenido ni controles mobile.

Archivo de referencia: [`components/floating-whatsapp.tsx`](components/floating-whatsapp.tsx).

## Movimiento e interacción

La interacción debe reforzar calidad y respuesta, nunca distraer.

- Entrada en scroll: usar `AnimateOnScroll` con transiciones cortas y discretas.
- Cards: transición de 300–500 ms, elevación ligera y sombras suaves.
- Imágenes: escala máxima aproximada `1.05` en hover.
- Iconos: desplazamientos mínimos de 1 unidad.
- Botones: cambios moderados de color y sombra.
- Respetar `prefers-reduced-motion` al introducir comportamiento nuevo.

Evitar rebotes, pulso continuo, partículas, blur intenso, glows grandes y animaciones que retrasen la lectura o la interacción.

## Responsive y accesibilidad

- Diseñar primero la lectura en una sola columna; enriquecer con grids en `md` y `lg`.
- Nunca depender de hover para acceder a información esencial.
- Los objetivos táctiles deben ser cómodos; los botones actuales usan alturas cercanas a 44–56 px.
- Comprobar contraste en todos los fondos, en especial sobre verde y azul noche.
- Mantener `aria-label` en controles solo iconográficos y `aria-expanded` en menús o acordeones.
- No ocultar contenido esencial solo por breakpoint; reorganizarlo.
- Evitar scroll horizontal causado por elementos decorativos absolutos.

## Antipatrones

- Glassmorphism pesado, blur en cada panel o varias capas de gradiente sin función.
- Sombras negras densas, bordes brillantes o efectos neon.
- Verde lima usado como color de texto fino sobre blanco.
- Grids repetitivos de muchas cards idénticas.
- Párrafos extensos dentro de cards o varios mensajes prioritarios dentro de un mismo bloque.
- Más de una CTA primaria compitiendo en la misma área.
- Imágenes de stock genéricas cuando se puede mostrar capacidad real de IGSA.
- Cambios locales que ignoran los tokens y patrones globales.

## Checklist de entrega

- ¿La acción principal de la página es identificable de inmediato?
- ¿La interfaz conserva los colores, radios, tipografía y espaciado del sistema?
- ¿Los títulos tienen jerarquía suficiente sin recurrir a efectos decorativos?
- ¿Las cards y botones muestran hover/focus coherentes?
- ¿Las imágenes son pertinentes, optimizadas y tienen `alt` útil?
- ¿El diseño funciona a 320 px, tablet y desktop sin contenido tapado?
- ¿Los CTAs de conversión conservan o incluyen analítica?
- ¿El contenido se siente limpio, confiable y claramente IGSA?

## Referencias de código

- Tokens globales: [`app/globals.css`](app/globals.css)
- Layout y tipografía: [`app/layout.tsx`](app/layout.tsx)
- Navegación: [`components/header.tsx`](components/header.tsx)
- Footer: [`components/footer.tsx`](components/footer.tsx)
- Componentes de home: [`components/home`](components/home)
- Datos de marca y contacto: [`lib/seo-config.ts`](lib/seo-config.ts)
- Sistema y contexto histórico: [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)

Si cambia la dirección de marca, actualizar esta guía y los tokens globales antes de modificar componentes individuales. Así se evita que cada página evolucione con reglas visuales distintas.
