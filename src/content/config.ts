import { defineCollection, z } from 'astro:content';

const recipesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().default('Hauptspeise'),
    tags: z.array(z.string()).default([]),
    servings: z.number().default(4),
    servingsUnit: z.string().default('Portionen'),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  recipes: recipesCollection,
};
