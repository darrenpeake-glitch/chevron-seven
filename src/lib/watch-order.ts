export type WatchSeries = 'Film' | 'SG-1' | 'Atlantis' | 'Universe';

export interface WatchEntry {
  key: string;
  series: WatchSeries;
  season?: number;
  episode?: number;
  title: string;
  kind: 'film' | 'episode';
}

const knownTitles: Record<string, string> = {
  'film:stargate-1994': 'Stargate',
  'film:ark-of-truth': 'Stargate: The Ark of Truth',
  'film:continuum': 'Stargate: Continuum',
  'sg1:3:3': 'Fair Game',
  'sg1:3:4': 'Legacy',
  'sg1:3:5': 'Learning Curve',
  'sg1:3:22': 'Nemesis',
  'sg1:4:1': 'Small Victories',
  'sg1:5:1': 'Enemies',
  'sg1:5:11': 'Desperate Measures',
  'sg1:5:12': 'Wormhole X-Treme!',
  'sg1:6:12': 'Unnatural Selection',
  'sg1:8:1': 'New Order, Part 1',
  'sg1:8:2': 'New Order, Part 2',
  'sg1:8:11': 'Gemini',
  'sg1:8:16': 'Reckoning, Part 1',
  'sg1:8:17': 'Reckoning, Part 2',
  'sg1:8:18': 'Threads'
};

const keyPrefix = (series: Exclude<WatchSeries, 'Film'>) =>
  series === 'SG-1' ? 'sg1' : series === 'Atlantis' ? 'sga' : 'sgu';

export const watchKeyForEpisode = (series: Exclude<WatchSeries, 'Film'>, season: number, episode: number) =>
  `${keyPrefix(series)}:${season}:${episode}`;

const episodeEntry = (series: Exclude<WatchSeries, 'Film'>, season: number, episode: number): WatchEntry => {
  const key = watchKeyForEpisode(series, season, episode);
  return {
    key,
    series,
    season,
    episode,
    title: knownTitles[key] ?? `Episode ${episode}`,
    kind: 'episode'
  };
};

const season = (series: Exclude<WatchSeries, 'Film'>, seasonNumber: number, count: number) =>
  Array.from({ length: count }, (_, i) => episodeEntry(series, seasonNumber, i + 1));

const interleave = (a: WatchEntry[], b: WatchEntry[]) => {
  const out: WatchEntry[] = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (a[i]) out.push(a[i]);
    if (b[i]) out.push(b[i]);
  }
  return out;
};

const sg1Early = [1,2,3,4,5,6,7].flatMap((s) => season('SG-1', s, 22));

// SG-1 S8 and Atlantis S1 began one week apart. The SG-1 two-part opener aired
// before Atlantis launched, after which the shows largely travelled in parallel.
const sg1s8 = season('SG-1', 8, 20);
const sga1 = season('Atlantis', 1, 20);
const parallel8a1 = [sg1s8[0], sg1s8[1], sga1[0], sga1[1], ...interleave(sg1s8.slice(2), sga1.slice(2))];

const parallel9a2 = interleave(season('SG-1', 9, 20), season('Atlantis', 2, 20));
const parallel10a3 = interleave(season('SG-1', 10, 20), season('Atlantis', 3, 20));
const sga4 = season('Atlantis', 4, 20);
const sga5 = season('Atlantis', 5, 20);

export const watchOrder: WatchEntry[] = [
  { key: 'film:stargate-1994', series: 'Film', title: 'Stargate', kind: 'film' },
  ...sg1Early,
  ...parallel8a1,
  ...parallel9a2,
  ...parallel10a3,
  { key: 'film:ark-of-truth', series: 'Film', title: 'Stargate: The Ark of Truth', kind: 'film' },
  ...sga4,
  sga5[0],
  { key: 'film:continuum', series: 'Film', title: 'Stargate: Continuum', kind: 'film' },
  ...sga5.slice(1),
  ...season('Universe', 1, 20),
  ...season('Universe', 2, 20)
];

export const watchOrderIndex = new Map(watchOrder.map((entry, index) => [entry.key, index]));

export const codeForWatchEntry = (entry: WatchEntry) =>
  entry.kind === 'film'
    ? 'FEATURE'
    : `S${String(entry.season).padStart(2, '0')}E${String(entry.episode).padStart(2, '0')}`;
