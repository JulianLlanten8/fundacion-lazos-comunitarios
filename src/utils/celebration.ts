import confetti from 'canvas-confetti';

const COLORES_BRAND = ['#3AB54A', '#D7273C', '#35A8DF', '#2B379B', '#F59E0B'];

/**
 * Dispara confeti con la paleta de la Fundación Lazos Comunitarios
 */
export function lanzarConfeti() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Primer disparo central
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.65 },
    colors: COLORES_BRAND,
  });

  // Ráfagas laterales tipo cañón
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: COLORES_BRAND,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: COLORES_BRAND,
    });
  }, 250);
}

/**
 * Crea un corazón flotante estilo Instagram en la posición del clic
 */
export function crearCorazonFlotante(event?: MouseEvent) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const x = event ? event.clientX : window.innerWidth / 2;
  const y = event ? event.clientY : window.innerHeight / 2;

  // Crear contenedor de corazón
  const heart = document.createElement('div');
  heart.className = 'corazon-flotante pointer-events-none fixed z-50 select-none';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D7273C" class="h-16 w-16 drop-shadow-xl animate-corazon">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `;

  document.body.appendChild(heart);

  // Remover tras terminar animación
  setTimeout(() => {
    heart.remove();
  }, 1200);
}

/**
 * Muestra un banner emergente de agradecimiento cálido
 */
export function mostrarToastAgradecimiento(mensaje = '¡Gracias por tu generosidad! Con el amor renace la esperanza ❤️') {
  const existente = document.getElementById('toast-agradecimiento');
  if (existente) existente.remove();

  const toast = document.createElement('div');
  toast.id = 'toast-agradecimiento';
  toast.className =
    'fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-2xl bg-slate-900/95 border border-red-500/40 px-6 py-3.5 text-white shadow-2xl backdrop-blur-md transition-all duration-300 animate-slide-down';
  toast.innerHTML = `
    <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </span>
    <span class="text-sm font-semibold">${mensaje}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, -20px)';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/**
 * Función combinada para celebrar la donación
 */
export function celebrarDonacion(event?: MouseEvent, mensaje?: string) {
  crearCorazonFlotante(event);
  lanzarConfeti();
  mostrarToastAgradecimiento(mensaje);
}
