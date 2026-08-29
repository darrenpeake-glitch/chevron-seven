# Chevron Seven Content Model

## Phase 1 — Episodes

Episode frontmatter is the source of truth.

Core dimensions:

- series
- season / episode
- mission type
- characters
- factions
- worlds
- technology
- story arcs
- spoiler level
- rewatch rating
- O'Neill Sarcasm Rating
- Teal'c Eyebrow Index

## Phase 2 — Dedicated archive entities

Once the episode archive is large enough, create collections for:

- personnel
- factions
- worlds
- technology
- ships
- story arcs
- gate addresses

Each entity should reference episode IDs instead of duplicating episode prose.

## Editorial fields inside each episode

Recommended headings:

1. Why It Matters
2. Rewatch Notes
3. Character Dynamic
4. Things to Watch
5. Continuity
6. Best Moment
7. Chevron Seven Metrics

Not every episode needs every heading.

## Spoiler policy

`spoilerLevel` indicates the intended boundary for an entry:

- `episode`: safe after watching that episode
- `season`: may reference later events in the same season
- `series`: full-series retrospective

The default should be `episode`, because Chevron Seven is primarily a rewatch companion that can also be browsed by people progressing through the show.
