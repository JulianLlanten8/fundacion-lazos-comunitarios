/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#3AB54A',       // Verde Huerta & Educación Ambiental
          red: '#D7273C',         // Rojo Alimentación & Nutrición
          sky: '#35A8DF',         // Azul Claro Deporte & Valores
          blue: '#2B379B',        // Azul Oscuro Comunidad & Adulto Mayor
          dark: '#0F172A',        // Slate 900 para contraste de texto WCAG AAA
          muted: '#475569',       // Slate 600
          surface: '#F8FAFC',     // Slate 50 fondo suave
          border: '#E2E8F0',      // Slate 200
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        puzzle: '0 4px 20px -2px rgba(43, 55, 155, 0.08)',
        'puzzle-hover': '0 12px 30px -4px rgba(43, 55, 155, 0.14)',
      },
    },
  },
  plugins: [],
};
