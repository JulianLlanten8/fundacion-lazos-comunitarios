export interface MetricaImpacto {
  valor: number;
  prefijo?: string;
  sufijo?: string;
  etiqueta: string;
  descripcion: string;
}

export interface LineaAccion {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  color: string;
  colorClase: string;
  colorBorde: string;
  colorFondo: string;
  colorTexto: string;
  resumen: string;
  enfoque: string;
  icono: string;
}

export const DATOS_FUNDACION = {
  nombre: 'Fundación Lazos Comunitarios',
  lema: 'Con el amor renace la esperanza',
  nit: '901 606 417-8',
  representanteLegal: 'Diego Andrés Montero',
  fechaFundacion: '3 de enero de 2021',
  aperturaComedor: '4 de abril de 2021',
  ubicacion: {
    direccion: 'Cra 26 T # 72 w - 31',
    barrio: 'Los Lagos I',
    comuna: 'Comuna 13',
    ciudad: 'Santiago de Cali',
    departamento: 'Valle del Cauca',
    pais: 'Colombia',
    coordenadas: {
      lat: 3.4255,
      lng: -76.4952,
    },
  },
  contacto: {
    telefono: '+57 311 303 6529',
    telefonoVisual: '311 303 6529',
    whatsapp: 'https://wa.me/573113036529?text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20Fundaci%C3%B3n%20Lazos%20Comunitarios',
    email: 'lazoscomunitariosfundacion@gmail.com',
    nequi: '311 303 6529',
    instagram: 'https://instagram.com/fundacionlazoscomunitarios',
    instagramUser: '@fundacionlazoscomunitarios',
  },
  metricas: [
    {
      valor: 52300,
      prefijo: '+',
      etiqueta: 'Almuerzos entregados',
      descripcion: 'Raciones calientes preparadas por lideresas comunitarias.',
    },
    {
      valor: 2300,
      prefijo: '+',
      etiqueta: 'Refrigerios nutritivos',
      descripcion: 'Entregados a niños y niñas en actividades y escuela formativa.',
    },
    {
      valor: 53,
      sufijo: '%',
      etiqueta: 'Adultos mayores',
      descripcion: 'De los beneficiarios diarios del comedor son personas de la tercera edad.',
    },
    {
      valor: 40,
      prefijo: '+',
      etiqueta: 'Niños en fútbol formativo',
      descripcion: 'Entrenando en Lazos Comunitarios F.C. desde marzo de 2023.',
    },
  ] as MetricaImpacto[],
  mision:
    'Promover el bienestar integral, la dignidad y la calidad de vida de la población vulnerable del oriente de Cali, incluyendo niños, niñas, adolescentes y adultos mayores, mediante programas articulados de seguridad alimentaria y nutricional, educación ambiental, deporte, arte, cultura y acompañamiento comunitario. Trabajamos de la mano con lideresas del sector y aliados institucionales para fomentar prácticas sostenibles, saludables e inclusivas que transformen el territorio, fortalezcan el tejido social y garanticen su protección y desarrollo.',
  vision:
    'Para 2030, ser una organización referente y reconocida en el oriente de Cali por su impacto social y comunitario, consolidando comunidades resilientes, solidarias y ambientalmente sostenibles donde todas las personas, en cada etapa de su vida, cuenten con redes de cuidado, entornos protectores y acceso digno a oportunidades para su desarrollo integral.',
  valores: [
    {
      titulo: 'Arraigo y Liderazgo Comunitario',
      descripcion:
        'Creemos en la transformación desde adentro; por eso trabajamos junto a las lideresas y habitantes del oriente de Cali como protagonistas de su propio desarrollo.',
    },
    {
      titulo: 'Solidaridad y Dignidad Humana',
      descripcion:
        'Atendemos a cada niño, joven y adulto mayor con respeto, empatía y calidez, garantizando espacios seguros donde todos se sientan valorados.',
    },
    {
      titulo: 'Sostenibilidad y Cuidado de la Vida',
      descripcion:
        'Promovemos el respeto por la naturaleza, el aprovechamiento responsable de los recursos y la conciencia ecológica en cada acción cotidiana.',
    },
    {
      titulo: 'Articulación y Corresponsabilidad',
      descripcion:
        'Construimos puentes entre la comunidad, el sector público, la Iglesia y la empresa privada para multiplicar el impacto social en el territorio.',
    },
    {
      titulo: 'Transparencia y Compromiso Social',
      descripcion:
        'Gestionamos cada recurso, alianza y donación con ética, rigor y rendición de cuentas clara frente a nuestros beneficiarios y aliados.',
    },
  ],
  lineasAccion: [
    {
      id: 'seguridad-alimentaria',
      slug: 'seguridad-alimentaria',
      titulo: 'Seguridad Alimentaria y Nutricional',
      subtitulo: 'Comedor Comunitario y Nutrición Digna',
      color: '#D7273C',
      colorClase: 'bg-brand-red',
      colorBorde: 'border-brand-red',
      colorFondo: 'bg-red-50',
      colorTexto: 'text-brand-red',
      resumen:
        'Comedor comunitario operado por lideresas del sector en alianza con la Alcaldía de Cali y la Iglesia Católica, garantizando raciones nutritivas diarias y tejido social.',
      enfoque: 'Garantía del derecho a la alimentación, nutrición digna y liderazgo femenino comunitario.',
      icono: 'bowl',
    },
    {
      id: 'educacion-ambiental',
      slug: 'educacion-ambiental',
      titulo: 'Educación Ambiental y Sostenibilidad',
      subtitulo: 'Huertas Comunitarias y Producción Limpia',
      color: '#3AB54A',
      colorClase: 'bg-brand-green',
      colorBorde: 'border-brand-green',
      colorFondo: 'bg-emerald-50',
      colorTexto: 'text-brand-green',
      resumen:
        'Huertas urbanas en Los Lagos I, La Paz y El Retiro (Huerta Daysi Chocó). Capacitación con FUPAD, Universidad Nacional Palmira y Fundación SIDOC.',
      enfoque: 'Conciencia ecológica, soberanía alimentaria urbana y reciclaje orgánico.',
      icono: 'sprout',
    },
    {
      id: 'futbol-y-valores',
      slug: 'futbol-y-valores',
      titulo: 'Fútbol y Valores',
      subtitulo: 'Lazos Comunitarios F.C. y Formación Ciudadana',
      color: '#35A8DF',
      colorClase: 'bg-brand-sky',
      colorBorde: 'border-brand-sky',
      colorFondo: 'bg-sky-50',
      colorTexto: 'text-brand-sky',
      resumen:
        'Escuela deportiva nacida en marzo de 2023 con más de 40 niños, niñas y adolescentes. Prevención de violencias y acompañamiento psicosocial.',
      enfoque: 'Deporte para la paz, habilidades para la vida y protección integral frente a riesgos de la calle.',
      icono: 'ball',
    },
    {
      id: 'adulto-mayor',
      slug: 'adulto-mayor',
      titulo: 'Acompañamiento Adulto Mayor',
      subtitulo: 'Envejecimiento Activo y Redes de Cuidado',
      color: '#2B379B',
      colorClase: 'bg-brand-blue',
      colorBorde: 'border-brand-blue',
      colorFondo: 'bg-indigo-50',
      colorTexto: 'text-brand-blue',
      resumen:
        'Atención psicosocial, recreativa y nutricional para las personas mayores de la comuna 13, combatiendo la soledad y articulándolos con la huerta y el comedor.',
      enfoque: 'Dignificación, salud emocional y valorización de los saberes tradicionales comunitarios.',
      icono: 'heart-hand',
    },
  ] as LineaAccion[],
  huertasSectores: [
    'Los Lagos I',
    'La Paz',
    'El Retiro (Huerta comunitaria Daysi Chocó)',
  ],
  aliados: [
    'Alcaldía de Santiago de Cali',
    'Iglesia Católica (Pastoral Social)',
    'FUPAD Colombia (Fundación Panamericana para el Desarrollo)',
    'Universidad Nacional de Colombia (Sede Palmira)',
    'Fundación SIDOC (Programa Futuros Urbanos)',
  ],
};

export const MENU_NAVEGACION = [
  { nombre: 'Inicio', ruta: '/' },
  { nombre: 'Nosotros', ruta: '/nosotros' },
  {
    nombre: 'Programas',
    ruta: '/#programas',
    subitems: [
      { nombre: 'Seguridad Alimentaria', ruta: '/programas/seguridad-alimentaria' },
      { nombre: 'Educación Ambiental', ruta: '/programas/educacion-ambiental' },
      { nombre: 'Fútbol y Valores', ruta: '/programas/futbol-y-valores' },
      { nombre: 'Adulto Mayor', ruta: '/programas/adulto-mayor' },
    ],
  },
  { nombre: 'Dona', ruta: '/dona' },
  { nombre: 'Contacto', ruta: '/contacto' },
];
