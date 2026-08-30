# Chevron Seven Content Model

## Phase 1 — Episodes

Episode frontmatter is the source of truth for individual mission records.

Core dimensions:

- series
- season / episode
- mission type
- characters
- factions
- worlds
- technology
- story arcs
- narrative thread memberships
- spoiler level
- rewatch rating
- O'Neill Sarcasm Rating
- Teal'c Eyebrow Index

## Phase 2 — Dedicated archive entities

Curated archive records add lore to metadata-generated indexes for:

- personnel
- factions
- worlds
- technology
- story arcs

The automatic mission backlinks remain independent of whether a curated lore record exists.

## Phase 3 — Narrative threads

Narrative Threads are selective story paths, not tag collections.

An episode belongs to a thread only when removing it would meaningfully weaken the viewer's understanding of that continuing storyline. Mere appearances, mentions or shared characters do not qualify unless they add genuine context.

Thread roles:

- `breadcrumb` — an early clue or piece of foreshadowing
- `development` — materially advances understanding of the thread
- `escalation` — raises the stakes or scope
- `reveal` — explains something previously hidden
- `turning-point` — changes the direction of the storyline
- `payoff` — delivers on prior setup or resolves the central conflict
- `aftermath` — shows meaningful consequences

Relevance:

- `primary` — essential to understanding the thread
- `secondary` — a meaningful clue, consequence or contextual bridge

Each thread owns a `milestones` path that can include later episodes before those episodes have full Mission Log records. This keeps the thread's long-game structure complete without prematurely creating episode archive entries.

The public thread page has two readings:

1. **First-watch path** — milestones visible only up to the current Mission Log position.
2. **Full rewatch path** — explicitly opened by the viewer and allowed to contain later spoilers.

## Bigger Picture

`biggerPicture` belongs to an individual episode and answers: **where does this episode sit in the wider Stargate story?**

It is distinct from a Narrative Thread:

- **Why It Matters** — what the episode contributes.
- **Bigger Picture** — why that contribution matters beyond the episode.
- **Narrative Thread** — the selective chain of episodes that builds and resolves a continuing storyline.

## Editorial fields inside each episode

Recommended headings:

1. Why It Matters
2. Rewatch Notes
3. Character Dynamic
4. Things to Watch
5. Continuity
6. Best Moment

Not every episode needs every heading.

## Spoiler policy

`spoilerLevel` indicates the intended boundary for an entry:

- `episode`: safe after watching that episode
- `season`: may reference later events in the same season
- `series`: full-series retrospective
- `franchise`: may cross series boundaries

The default for episode and lore records should be `episode`. Full narrative-thread paths may contain later spoilers, but those milestones must remain behind an explicit viewer action when they are beyond the current Mission Log position.
