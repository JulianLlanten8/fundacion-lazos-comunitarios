# Decisiones de Diseño - Fundación Lazos Comunitarios

1. **Paleta Identitaria Muestreada**: Verde Huerta (`#3AB54A`), Rojo Alimentación (`#D7273C`), Azul Deporte (`#35A8DF`) y Azul Oscuro Comunidad (`#2B379B`), asignados semánticamente a cada línea.
2. **Contraste y Accesibilidad WCAG AA**: Fondo base blanco (`#FFFFFF`) y pizarra suave (`#F8FAFC`) con texto principal Slate 900 (`#0F172A`) y acentos contrastados para ratio mínimo de 4.5:1.
3. **Tipografía Humanista y Confiable**: Par tipográfico `@fontsource-variable/inter` para texto base legible y moderno, combinado con titulares claros en pesos 600/700, evitando cursivas y estilos sobredecorados.
4. **Motivo Gráfico del Rompecabezas**: Cuadrícula de 4 cuadrantes que encajan visualmente (bordes redondeados orgánicos y esquinas ensamblables) representando unión comunitaria sin recurrir a ilustraciones genéricas.
5. **Mobile-First Real**: Componentes y áreas táctiles optimizadas a un mínimo de 44x44px con márgenes mínimos de 8px, pensando en el tráfico principal proveniente de WhatsApp e Instagram en móviles.
6. **Microinteracciones con Sentido**: Contador numérico animado para cifras de impacto al entrar en viewport; respeto estricto de `prefers-reduced-motion` sin animaciones intrusivas o bucles infinitos.
7. **Arquitectura de Contenido Transparente**: Navegación predecible orientada a la credibilidad institucional (misión, impacto verificable, NIT, personerías y rendición de cuentas visibles).
8. **Imágenes Reales y Protección Infantil**: Uso exclusivo de fotografías reales optimizadas con `astro:assets` (WebP/AVIF, lazy loading), sin revelar nombres ni datos sensibles de menores.
9. **Llamados a la Acción Claros (CTA)**: Rutas de donación diferenciadas (monetaria/Nequi, especie, voluntariado) y canal directo a WhatsApp (`wa.me`) con botón flotante accesible y visible.
10. **Rendimiento y Cero Deuda Técnica**: Sitio estático (SSG) con HTML semántico puro, CSS estructurado con Tailwind, metadatos JSON-LD para ONG y cero librerías JS pesadas para garantizar Lighthouse ≥ 95.
