# Sitio Web Oficial - Fundación Lazos Comunitarios

Sitio web oficial de la **Fundación Lazos Comunitarios** (Cali, Colombia), desarrollado con **Astro.js**, **Tailwind CSS** y **TypeScript**, optimizado para máximo rendimiento, accesibilidad WCAG AA y SEO comunitario.

- **Lema**: *"Con el amor renace la esperanza"*
- **NIT**: 901 606 417-8
- **Ubicación**: Cra 26 T # 72 w - 31, Barrio Los Lagos I, Comuna 13, Santiago de Cali.

---

## 📖 Guía para el Administrador: Cómo editar textos, fotos y cifras sin tocar código

El proyecto fue diseñado de manera modular para que cualquier persona del equipo pueda actualizar información sin necesidad de modificar el diseño ni la lógica de la página.

### 1. ¿Cómo editar datos de contacto, teléfonos o cifras de impacto?

Toda la información central de la fundación está en un solo archivo:
👉 **`src/data/fundacion.ts`**

Dentro de este archivo puedes modificar de forma sencilla:
- **Teléfono y WhatsApp**: Modifica el valor de `telefono`, `whatsapp` o `nequi`.
- **Cifras de impacto** (almuerzos, refrigerios, porcentaje de adultos mayores, niños en fútbol):
  ```typescript
  metricas: [
    { valor: 52300, etiqueta: "Almuerzos entregados" },
    { valor: 2300, etiqueta: "Refrigerios nutritivos" },
    { valor: 53, sufijo: "%", etiqueta: "Adultos mayores" },
    { valor: 40, prefijo: "+", etiqueta: "Niños en fútbol formativo" },
  ]
  ```
- **Misión, Visión o Valores**: Están escritos en texto claro en las propiedades `mision`, `vision` y `valores`.

---

### 2. ¿Cómo editar o agregar información de los 4 Programas?

Cada programa tiene su propio archivo de texto en formato Markdown (`.md`) dentro de:
👉 **`src/content/programas/`**

- `seguridad-alimentaria.md` (Comedor Comunitario)
- `educacion-ambiental.md` (Huertas Urbanas y Compostaje)
- `futbol-y-valores.md` (Lazos Comunitarios F.C.)
- `adulto-mayor.md` (Acompañamiento y Redes de Cuidado)

Para cambiar el texto o los objetivos de un programa, simplemente abre el archivo correspondiente y edita los párrafos o listas directamente en lenguaje natural.

---

### 3. ¿Cómo cambiar o actualizar fotografías y videos?

#### Fotografías:
Las fotos utilizadas en la web están organizadas en:
👉 **`src/assets/fotos/`**

Para sustituir una fotografía:
1. Nombra tu nueva foto con el mismo nombre (ej. `hero-comunidad.jpg`, `comedor-comunitario.jpg`, etc.).
2. Pégala en `src/assets/fotos/` reemplazando la anterior.
3. El sistema de Astro la convertirá automáticamente a formato ultra ligero WebP optimizando el peso y la velocidad sin perder calidad.

#### Video Institucional:
El video mostrado en la página principal se encuentra en:
👉 **`public/videos/comunidad-en-accion.mp4`** (y su portada en `public/videos/comunidad-poster.jpg`).

Para optimizar un nuevo video con `ffmpeg` antes de subirlo:
```bash
ffmpeg -y -i "tu-video-original.mp4" \
  -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 -preset slow -crf 28 -profile:v main -pix_fmt yuv420p \
  -movflags +faststart \
  -c:a aac -b:a 96k -ac 2 \
  public/videos/comunidad-en-accion.mp4
```

> [!NOTE]
> **Protección de imagen de menores**: Recuerda publicar únicamente fotografías tomadas en el marco de las actividades comunitarias de la fundación y sin divulgar datos personales o sensibles.

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor local de desarrollo
npm run dev

# Compilar para producción (genera la carpeta dist/)
npm run build

# Previsualizar la versión de producción
npm run preview
```

---

## 🚀 Despliegue en Vercel

### Opción A: Despliegue con Vercel CLI
```bash
# 1. Iniciar sesión en Vercel
npx vercel login

# 2. Despliegue previo (Preview)
npx vercel

# 3. Despliegue en producción
npx vercel --prod
```

### Opción B: Conexión con Repositorio GitHub
1. Sube este proyecto a tu cuenta de GitHub (`git push origin main`).
2. Ingresa a [vercel.com](https://vercel.com) e inicia sesión.
3. Haz clic en **Add New Project** e importa el repositorio `fundacion`.
4. En **Framework Preset**, Vercel detectará automáticamente **Astro**.
5. Haz clic en **Deploy**. Cada vez que hagas un commit en `main`, Vercel actualizará la página web automáticamente.

### Conectar dominio propio en Vercel:
1. En el panel de tu proyecto en Vercel, ve a **Settings** > **Domains**.
2. Escribe tu dominio (ejemplo: `fundacionlazoscomunitarios.org`).
3. Vercel te indicará los registros DNS (`CNAME` o `A`) que debes agregar en tu proveedor de dominio.
