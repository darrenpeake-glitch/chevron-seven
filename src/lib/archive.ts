import type { CollectionEntry } from 'astro:content';

export const archiveTypes = {
  personnel: {
    label: 'Personnel',
    singular: 'Personnel record',
    field: 'characters',
    description: 'Characters and recurring personnel referenced by archived missions.'
  },
  factions: {
    label: 'Factions',
    singular: 'Faction record',
    field: 'factions',
    description: 'Governments, alliances, species groups and political powers in the archive.'
  },
  worlds: {
    label: 'Worlds',
    singular: 'World record',
    field: 'worlds',
    description: 'Planets and locations referenced by archived missions.'
  },
  technology: {
    label: 'Technology',
    singular: 'Technology record',
    field: 'technology',
    description: 'Devices, systems and technologies encountered during archived missions.'
  },
  arcs: {
    label: 'Story Arcs',
    singular: 'Story arc record',
    field: 'arcs',
    description: 'Long-running continuity threads that connect multiple missions.'
  }
} as const;

export type ArchiveType = keyof typeof archiveTypes;
export type EpisodeEntry = CollectionEntry<'episodes'>;

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function valuesForType(episodes: EpisodeEntry[], type: ArchiveType) {
  const field = archiveTypes[type].field;
  const values = episodes.flatMap((episode) => episode.data[field] as string[]);
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

export function episodesForValue(episodes: EpisodeEntry[], type: ArchiveType, value: string) {
  const field = archiveTypes[type].field;
  return episodes
    .filter((episode) => (episode.data[field] as string[]).includes(value))
    .sort((a, b) => {
      if (a.data.series !== b.data.series) return a.data.series.localeCompare(b.data.series);
      if (a.data.season !== b.data.season) return a.data.season - b.data.season;
      return a.data.episode - b.data.episode;
    });
}

export function episodeCode(episode: EpisodeEntry) {
  return `S${String(episode.data.season).padStart(2, '0')}E${String(episode.data.episode).padStart(2, '0')}`;
}
