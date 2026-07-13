# Despliegue en Dokploy

Este proyecto está configurado para desplegarse en Dokploy usando Docker.

## Archivos de configuración

- `Dockerfile` - Build multi-stage optimizado para Next.js
- `docker-compose.yml` - Configuración para docker-compose
- `.dockerignore` - Excluye archivos innecesarios del build
- `.env.example` - Template de variables de entorno

## Despliegue en Dokploy

### Opción 1: Dockerfile directo

1. En Dokploy, crea una nueva aplicación
2. Selecciona "Dockerfile" como método de despliegue
3. Conecta tu repositorio Git
4. Dokploy detectará automáticamente el Dockerfile
5. Configura las variables de entorno necesarias
6. Despliega

### Opción 2: Docker Compose

1. En Dokploy, crea una nueva aplicación
2. Selecciona "Docker Compose" como método de despliegue
3. Conecta tu repositorio Git
4. Dokploy usará el `docker-compose.yml`
5. Configura las variables de entorno
6. Despliega

## Variables de entorno

Copia `.env.example` a `.env` y configura:

```bash
cp .env.example .env
```

Variables requeridas:
- `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` - ID de Facebook Pixel (opcional)

## Comandos locales

```bash
# Construir imagen Docker
docker build -t igsa-print-app .

# Ejecutar contenedor
docker run -p 3000:3000 igsa-print-app

# Usando docker-compose
docker-compose up -d

# Ver logs
docker-compose logs -f
```

## Estructura del Dockerfile

El Dockerfile usa un build multi-stage para optimizar el tamaño:

1. **deps** - Instala dependencias
2. **builder** - Construye la aplicación Next.js
3. **runner** - Imagen final mínima para producción

La imagen final usa `standalone` output de Next.js, que solo incluye los archivos necesarios para ejecutar la aplicación, resultando en una imagen Docker mucho más pequeña.

## Puertos

La aplicación escucha en el puerto 3000. Dokploy configurará automáticamente el reverse proxy.

## Healthcheck

El docker-compose incluye un healthcheck que verifica que la aplicación esté respondiendo en `http://localhost:3000/`.
