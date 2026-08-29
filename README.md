# Chevron Seven

**The Stargate rewatch companion.**

Chevron Seven is a fan-built, episode-by-episode Stargate rewatch archive focused on context, continuity, lore and character dynamics rather than plot transcription.

## MVP

- Astro static site
- Markdown/MDX content collections
- Episode archive and individual episode pages
- Structured fields for factions, characters, technology, worlds and story arcs
- "Why It Matters"
- O'Neill Sarcasm Rating
- Teal'c Eyebrow Index
- Rewatch rating
- Spoiler-aware notes
- No database required

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

The static output is written to `dist/`.

## Cloudflare Pages

Use:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: current supported LTS

Change `site` in `astro.config.mjs` when the final domain is known.

## Content

Add episode entries to:

`src/content/episodes/`

The filename becomes the URL slug.

Example:

`src/content/episodes/s03e04-legacy.md`

## Editorial principle

Chevron Seven should complement a rewatch, not reproduce copyrighted scripts or episode summaries verbatim.

The project is an unofficial fan project and is not affiliated with MGM, Amazon or the rights holders of Stargate.
