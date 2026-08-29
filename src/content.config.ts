import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string(),
    series: z.enum(['SG-1', 'Atlantis', 'Universe']),
    season: z.number().int().positive(),
    episode: z.number().int().positive(),
    airDate: z.coerce.date().optional(),
    missionType: z.array(z.string()).default([]),
    characters: z.array(z.string()).default([]),
    factions: z.array(z.string()).default([]),
    worlds: z.array(z.string()).default([]),
    technology: z.array(z.string()).default([]),
    arcs: z.array(z.string()).default([]),
    spoilerLevel: z.enum(['episode', 'season', 'series']).default('episode'),
    oneillSarcasm: z.number().min(0).max(10).optional(),
    tealcEyebrow: z.enum(['none', 'low', 'moderate', 'high', 'legendary']).optional(),
    rewatchRating: z.number().min(0).max(5),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

export const collections = { episodes };
