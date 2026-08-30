import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seriesName = z.enum(['SG-1', 'Atlantis', 'Universe']);
const threadRole = z.enum(['breadcrumb', 'development', 'escalation', 'reveal', 'turning-point', 'payoff', 'aftermath']);
const relevance = z.enum(['primary', 'secondary']);
const episodePoint = z.object({
  series: seriesName,
  season: z.number().int().positive(),
  episode: z.number().int().positive()
});

const missionFields = {
  title: z.string(),
  airDate: z.coerce.date().optional(),
  briefing: z.string(),
  debrief: z.string(),
  whyItMatters: z.string(),
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
};

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/episodes' }),
  schema: z.object({
    ...missionFields,
    series: seriesName,
    season: z.number().int().positive(),
    episode: z.number().int().positive(),
    previouslyRelevant: z.array(z.object({
      watchKey: z.string(),
      reason: z.string()
    })).default([]),
    narrativeThreads: z.array(z.object({
      thread: z.string(),
      role: threadRole,
      relevance: relevance.default('primary'),
      note: z.string().optional()
    })).default([]),
    biggerPicture: z.object({
      summary: z.string(),
      threads: z.array(z.string()).default([]),
      fullContext: z.string().optional(),
      fullContextUnlock: episodePoint.optional()
    }).optional()
  })
});

const films = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/films' }),
  schema: z.object({
    ...missionFields,
    watchKey: z.string(),
    franchisePosition: z.string().optional()
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
    safeThrough: episodePoint.optional(),
    revelations: z.array(z.object({
      after: episodePoint,
      heading: z.string(),
      text: z.string()
    })).default([]),
    status: z.string().default('CURATED RECORD'),
    aliases: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const threads = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/threads' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    scope: z.enum(['SG-1', 'Atlantis', 'Universe', 'Franchise']),
    spoilerLevel: z.enum(['episode', 'season', 'series', 'franchise']).default('series'),
    status: z.string().default('ACTIVE THREAD'),
    aliases: z.array(z.string()).default([]),
    milestones: z.array(z.object({
      series: seriesName,
      season: z.number().int().positive(),
      episode: z.number().int().positive(),
      title: z.string(),
      role: threadRole,
      relevance: relevance.default('primary'),
      firstWatch: z.string(),
      rewatch: z.string().optional()
    })).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { episodes, films, lore, threads };
