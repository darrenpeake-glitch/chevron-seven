# Chevron Seven Deployment

## Target

Cloudflare Pages connected directly to GitHub.

Repository: `darrenpeake-glitch/chevron-seven`

## Cloudflare Pages settings

- Production branch: `main`
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js: 22 LTS or the current Cloudflare-supported LTS

No runtime environment variables are required for the current static MVP.

## First deployment

1. In Cloudflare, open **Workers & Pages**.
2. Choose **Create application** / **Pages** and connect to Git.
3. Authorize GitHub if required.
4. Select `darrenpeake-glitch/chevron-seven`.
5. Use the settings above and deploy.
6. Confirm the generated `*.pages.dev` URL loads:
   - `/`
   - `/episodes/`
   - `/episodes/s03e03-fair-game/`
   - `/episodes/s03e04-legacy/`
   - `/archive/`
   - `/about/`

## Custom domain

Do not add a custom domain until the generated Pages deployment has passed the checks above.

When a final domain is chosen, update the `site` value in `astro.config.mjs` from the placeholder domain to the production URL.

## Release rule

`main` is the production branch. Every push to `main` should pass GitHub Actions CI before it is considered a good Chevron Seven release.
