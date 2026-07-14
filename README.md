# IGSA Print & Copy — Sitio Web Oficial

Este repositorio contiene el sitio web oficial de **IGSA Print & Copy**, un taller líder en impresión digital, gran formato y acabados en materiales rígidos. El portal ha sido diseñado bajo una estética editorial premium, moderna y fluida, optimizada para ofrecer una experiencia de usuario sobresaliente y conversiones rápidas.

---

## 🚀 Características Principales

* **Bento Grid de Beneficios:** Sección interactiva que destaca el valor diferencial del taller:
  * *Agilidad que sí cumple:* Con una línea de tiempo animada (`Archivo` ➔ `Taller` ➔ `Listo`).
  * *Detalles que se notan:* Con una simulación 3D interactiva de muestrarios de materiales en hover.
  * *Acompañamiento de principio a fin:* Con un gráfico técnico estilo plano milimétrico.
* **Bento Grid de Servicios:** Previsualización dinámica de soluciones (Impresión digital, Gran formato y Materiales rígidos) presentadas en un diseño asimétrico optimizado.
* **Marquesina Infinita de Marcas:** Un carrusel rotativo fluido que muestra las marcas aliadas y clientes que confían en el taller.
* **Navegación Móvil Mejorada:** Menú adaptable de alto rendimiento con animaciones fluidas y accesos rápidos optimizados.
* **Cotizaciones Integradas:** Enlaces directos y botones de llamada a la acción (CTA) vinculados a WhatsApp para solicitudes rápidas de cotización.
* **Analítica Integrada (PostHog):** Registro de eventos importantes (clics en cotizaciones, mapas, etc.) mediante un proxy inverso interno para evadir bloqueadores de anuncios.

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** [Next.js](https://nextjs.org/) (React, App Router, Turbopack)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Iconografía:** [Lucide React](https://lucide.dev/)
* **Animaciones:** Framer Motion y Tailwind keyframes personalizadas
* **Analíticas:** [PostHog](https://posthog.com/) & Facebook Pixel
* **Despliegue/Infraestructura:** Docker y Dokploy

---

## 💻 Desarrollo Local

### 1. Clonar el repositorio e instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno (opcional)
Crea un archivo `.env.local` en la raíz del proyecto para habilitar las analíticas o pixel de Facebook:
```env
NEXT_PUBLIC_POSTHOG_KEY=tu_clave_de_posthog
NEXT_PUBLIC_POSTHOG_HOST=/ingest
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=tu_pixel_id
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### 4. Compilar para producción
```bash
npm run build
```

---

## 📦 Flujo de Git y Despliegue

El proyecto se gestiona de forma ordenada mediante el siguiente flujo de ramas:

1. **`staging` (Desarrollo):** Aquí se construyen, prueban y lintentan las nuevas características y refinamientos.
2. **`main` (Producción):** Rama estable. Las fusiones a `main` se realizan mediante **Fast-Forward (`--ff-only`)** para mantener el historial limpio y descriptivo en el panel de control de despliegue.
3. **Versiones (Tags):** Cada publicación a producción se etiqueta de forma ordenada (ej: `v1.4.3`).

Despliegue automático configurado mediante contenedores Docker administrados en Dokploy.
