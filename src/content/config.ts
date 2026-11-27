import { defineCollection, z } from 'astro:content';

const programasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string(),
    lineaColor: z.string(), // hex
    lineaClase: z.string(),
    colorFondo: z.string(),
    colorTexto: z.string(),
    icono: z.string(),
    enfoque: z.string(),
    imagen: z.string(),
    imagenAlt: z.string(),
    impactoDestacado: z.string(),
    orden: z.number(),
  }),
});

export const collections = {
  programas: programasCollection,
};
