export type WatchSeries = 'Film' | 'SG-1' | 'Atlantis' | 'Universe';

export interface WatchEntry {
  key: string;
  series: WatchSeries;
  season?: number;
  episode?: number;
  title: string;
  kind: 'film' | 'episode';
  group: string;
}

const sg1Titles: Record<number, string[]> = {
  1: ["Children of the Gods, Part 1", "Children of the Gods, Part 2", "The Enemy Within", "Emancipation", "The Broca Divide", "The First Commandment", "Cold Lazarus", "The Nox", "Brief Candle", "Thor's Hammer", "The Torment of Tantalus", "Bloodlines", "Fire and Water", "Hathor", "Singularity", "Cor-ai", "Enigma", "Solitudes", "Tin Man", "There But for the Grace of God", "Politics", "Within the Serpent's Grasp"],
  2: ["The Serpent's Lair", "In the Line of Duty", "Prisoners", "The Gamekeeper", "Need", "Thor's Chariot", "Message In a Bottle", "Family", "Secrets", "Bane", "The Tok'ra, Part 1", "The Tok'ra, Part 2", "Spirits", "Touchstone", "The Fifth Race", "A Matter of Time", "Holiday", "Serpent's Song", "One False Step", "Show and Tell", "1969", "Out of Mind"],
  3: ["Into the Fire", "Seth", "Fair Game", "Legacy", "Learning Curve", "Point of View", "Deadman Switch", "Demons", "Rules of Engagement", "Forever In a Day", "Past and Present", "Jolinar's Memories", "The Devil You Know", "Foothold", "Pretense", "Urgo", "A Hundred Days", "Shades of Grey", "New Ground", "Maternal Instinct", "Crystal Skull", "Nemesis"],
  4: ["Small Victories", "The Other Side", "Upgrades", "Crossroads", "Divide and Conquer", "Window of Opportunity", "Watergate", "The First Ones", "Scorched Earth", "Beneath the Surface", "Point of No Return", "Tangent", "The Curse", "The Serpent's Venom", "Chain Reaction", "2010", "Absolute Power", "The Light", "Prodigy", "Entity", "Double Jeopardy", "Exodus"],
  5: ["Enemies", "Threshold", "Ascension", "The Fifth Man", "Red Sky", "Rite of Passage", "Beast of Burden", "The Tomb", "Between Two Fires", "2001", "Desperate Measures", "Wormhole X-Treme!", "Proving Ground", "48 Hours", "Summit", "Last Stand", "Fail Safe", "The Warrior", "Menace", "The Sentinel", "Meridian", "Revelations"],
  6: ["Redemption, Part 1", "Redemption, Part 2", "Descent", "Frozen", "Nightwalkers", "Abyss", "Shadow Play", "The Other Guys", "Allegiance", "Cure", "Prometheus", "Unnatural Selection", "Sight Unseen", "Smoke and Mirrors", "Paradise Lost", "Metamorphosis", "Disclosure", "Forsaken", "The Changeling", "Memento", "Prophecy", "Full Circle"],
  7: ["Fallen", "Homecoming", "Fragile Balance", "Orpheus", "Revisions", "Lifeboat", "Enemy Mine", "Space Race", "Avenger 2.0", "Birthright", "Evolution, Part 1", "Evolution, Part 2", "Grace", "Fallout", "Chimera", "Death Knell", "Heroes, Part 1", "Heroes, Part 2", "Resurrection", "Inauguration", "Lost City, Part 1", "Lost City, Part 2"],
  8: ["New Order, Part 1", "New Order, Part 2", "Lockdown", "Zero Hour", "Icon", "Avatar", "Affinity", "Covenant", "Sacrifices", "Endgame", "Gemini", "Prometheus Unbound", "It's Good To Be King", "Full Alert", "Citizen Joe", "Reckoning, Part 1", "Reckoning, Part 2", "Threads", "Moebius, Part 1", "Moebius, Part 2"],
  9: ["Avalon, Part 1", "Avalon, Part 2", "Origin", "The Ties That Bind", "The Powers That Be", "Beachhead", "Ex Deus Machina", "Babylon", "Prototype", "The Fourth Horseman, Part 1", "The Fourth Horseman, Part 2", "Collateral Damage", "Ripple Effect", "Stronghold", "Ethon", "Off the Grid", "The Scourge", "Arthur's Mantle", "Crusade", "Camelot"],
  10: ["Flesh and Blood", "Morpheus", "The Pegasus Project", "Insiders", "Uninvited", "200", "Counterstrike", "Memento Mori", "Company of Thieves", "The Quest, Part 1", "The Quest, Part 2", "Line In the Sand", "The Road Not Taken", "The Shroud", "Bounty", "Bad Guys", "Talion", "Family Ties", "Dominion", "Unending"],
};

const sgaTitles: Record<number, string[]> = {
  1: ["Rising, Part 1", "Rising, Part 2", "Hide and Seek", "Thirty Eight Minutes", "Suspicion", "Childhood's End", "Poisoning the Well", "Underground", "Home", "The Storm", "The Eye", "The Defiant One", "Hot Zone", "Sanctuary", "Before I Sleep", "The Brotherhood", "Letters From Pegasus", "The Gift", "The Siege, Part 1", "The Siege, Part 2"],
  2: ["The Siege, Part 3", "The Intruder", "Runner", "Duet", "Condemned", "Trinity", "Instinct", "Conversion", "Aurora", "The Lost Boys", "The Hive", "Epiphany", "Critical Mass", "Grace Under Pressure", "The Tower", "The Long Goodbye", "Coup D'etat", "Michael", "Inferno", "Allies"],
  3: ["No Man's Land", "Misbegotten", "Irresistible", "Sateda", "Progeny", "The Real World", "Common Ground", "McKay and Mrs. Miller", "Phantoms", "The Return, Part 1", "The Return, Part 2", "Echoes", "Irresponsible", "Tao of Rodney", "The Game", "The Ark", "Sunday", "Submersion", "Vengeance", "First Strike"],
  4: ["Adrift", "Lifeline", "Reunion", "Doppelganger", "Travelers", "Tabula Rasa", "Missing", "The Seer", "Miller's Crossing", "This Mortal Coil", "Be All My Sins Remember'd", "Spoils of War", "Quarantine", "Harmony", "Outcast", "Trio", "Midway", "The Kindred, Part 1", "The Kindred, Part 2", "The Last Man"],
  5: ["Search and Rescue", "The Seed", "Broken Ties", "The Daedalus Variations", "Ghost In the Machine", "The Shrine", "Whispers", "The Queen", "Tracker", "First Contact", "The Lost Tribe", "Outsiders", "Inquisition", "The Prodigal", "Remnants", "Brain Storm", "Infection", "Identity", "Vegas", "Enemy At the Gate"],
};

const sguTitles: Record<number, string[]> = {
  1: ["Air, Part 1", "Air, Part 2", "Air, Part 3", "Darkness", "Light", "Water", "Earth", "Time", "Life", "Justice", "Space", "Divided", "Faith", "Human", "Lost", "Sabotage", "Pain", "Subversion", "Incursion, Part 1", "Incursion, Part 2"],
  2: ["Intervention", "Aftermath", "Awakening", "Pathogen", "Cloverdale", "Trial and Error", "The Greater Good", "Malice", "Visitation", "Resurgence", "Deliverance", "Twin Destinies", "Alliances", "Hope", "Seizure", "The Hunt", "Common Descent", "Epilogue", "Blockade", "Gauntlet"],
};

const keyPrefix = (series: Exclude<WatchSeries, 'Film'>) =>
  series === 'SG-1' ? 'sg1' : series === 'Atlantis' ? 'sga' : 'sgu';

export const watchKeyForEpisode = (series: Exclude<WatchSeries, 'Film'>, season: number, episode: number) =>
  `${keyPrefix(series)}:${season}:${episode}`;

const titlesFor = (series: Exclude<WatchSeries, 'Film'>, seasonNumber: number) =>
  series === 'SG-1' ? sg1Titles[seasonNumber] : series === 'Atlantis' ? sgaTitles[seasonNumber] : sguTitles[seasonNumber];

const episodeEntry = (
  series: Exclude<WatchSeries, 'Film'>,
  seasonNumber: number,
  episode: number,
  group: string
): WatchEntry => {
  const key = watchKeyForEpisode(series, seasonNumber, episode);
  const title = titlesFor(series, seasonNumber)?.[episode - 1];
  if (!title) throw new Error(`Missing watch-order title for ${series} S${seasonNumber}E${episode}`);
  return { key, series, season: seasonNumber, episode, title, kind: 'episode', group };
};

const season = (
  series: Exclude<WatchSeries, 'Film'>,
  seasonNumber: number,
  count: number,
  group = `${series} · Season ${seasonNumber}`
) => Array.from({ length: count }, (_, i) => episodeEntry(series, seasonNumber, i + 1, group));

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

const sg1s8 = season('SG-1', 8, 20, 'SG-1 S8 + Atlantis S1');
const sga1 = season('Atlantis', 1, 20, 'SG-1 S8 + Atlantis S1');
const parallel8a1 = [sg1s8[0], sg1s8[1], sga1[0], sga1[1], ...interleave(sg1s8.slice(2), sga1.slice(2))];

const parallel9a2 = interleave(
  season('SG-1', 9, 20, 'SG-1 S9 + Atlantis S2'),
  season('Atlantis', 2, 20, 'SG-1 S9 + Atlantis S2')
);
const parallel10a3 = interleave(
  season('SG-1', 10, 20, 'SG-1 S10 + Atlantis S3'),
  season('Atlantis', 3, 20, 'SG-1 S10 + Atlantis S3')
);
const sga4 = season('Atlantis', 4, 20);
const sga5 = season('Atlantis', 5, 20);

export const watchOrder: WatchEntry[] = [
  { key: 'film:stargate-1994', series: 'Film', title: 'Stargate', kind: 'film', group: 'Feature film' },
  ...sg1Early,
  ...parallel8a1,
  ...parallel9a2,
  ...parallel10a3,
  { key: 'film:ark-of-truth', series: 'Film', title: 'Stargate: The Ark of Truth', kind: 'film', group: 'SG-1 conclusion' },
  ...sga4,
  sga5[0],
  { key: 'film:continuum', series: 'Film', title: 'Stargate: Continuum', kind: 'film', group: 'Atlantis S5 + Continuum' },
  ...sga5.slice(1).map((entry) => ({ ...entry, group: 'Atlantis S5 + Continuum' })),
  ...season('Universe', 1, 20),
  ...season('Universe', 2, 20)
];

export const watchOrderIndex = new Map(watchOrder.map((entry, index) => [entry.key, index]));

export const codeForWatchEntry = (entry: WatchEntry) =>
  entry.kind === 'film'
    ? 'FEATURE'
    : `S${String(entry.season).padStart(2, '0')}E${String(entry.episode).padStart(2, '0')}`;
