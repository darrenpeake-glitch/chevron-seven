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
    biggerPicture: z.object({
      summary: z.string(),
      threads: z.array(z.string()).default([]),
      fullContext: z.string().optional()
    }).optional(),
    oneillSarcasm: z.number().min(0).max(10).optional(),
    tealcEyebrow: z.enum(['none', 'low', 'moderate', 'high', 'legendary']).optional(),
    rewatchRating: z.number().min(0).max(5),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const lore = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lore' }),
  schema: z.object({
    name: z.string(),
    type: z.enum(['personnel', 'factions', 'worlds', 'technology', 'arcs']),
    subtitle: z.string().optional(),
    summary: z.string(),
    spoilerLevel: z.enum(['episode', 'season', 'series']).default('episode'),
    safeThrough: z.object({
      series: z.enum(['SG-1', 'Atlantis', 'Universe']),
      season: z.number().int().positive(),
      episode: z.number().int().positive()
    }).optional(),
    status: z.string().default('CURATED RECORD'),
    aliases: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { episodes, lore };
