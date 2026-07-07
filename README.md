# Portfolio — César Peón (cpl121)

Personal portfolio of [César Peón](https://github.com/cpl121), full-stack developer specialized in **Web3**, **VR/3D** experiences, **OTT** streaming platforms and **AI** products. Founder of 1to1 Digital Solutions.

🔗 **Live:** [cpl121.eth.limo](https://cpl121.eth.limo)

## Tech stack

- [SvelteKit 2](https://kit.svelte.dev/) + [Svelte 5](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [`@sveltejs/adapter-static`](https://kit.svelte.dev/docs/adapter-static) — the whole site is prerendered to static HTML
- TypeScript, ESLint (flat config) + Prettier

## Project structure

```
src/
├── components/          Reusable UI (Card, FeaturedCard, Expandable, Seo…)
├── lib/
│   ├── constants/       Site metadata (URLs, OG defaults)
│   ├── data/            Curated projects & collaborations (edit these to add work)
│   ├── interfaces/      Shared TypeScript types
│   └── stores/          Theme (light/dark) store with persistence
└── routes/
    ├── +page.svelte              Home (hero + featured projects)
    ├── projects/                 Projects index (featured + collaborations + GitHub repos)
    ├── projects/[slug]/          Detail page per featured project
    ├── about/                    Experience, education, technologies
    └── sitemap.xml/              Generated sitemap
```

## Adding a project

Featured and open-source work is data-driven — no need to touch components:

- **Featured project** (with badge + detail page): add an entry to `src/lib/data/projects.ts` and a `1280×720` screenshot in `static/images/projects/<slug>.jpg`. To surface it on the home page, add its slug to `HOME_FEATURED_SLUGS`.
- **Collaboration** (simple card): add an entry to `src/lib/data/collaborations.ts`.
- **Open-source repo:** loaded automatically from the GitHub API on the projects page — nothing to do.

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build (prerendered to ./build)
npm run preview   # preview the production build
npm run check     # svelte-check (types)
npm run lint      # prettier --check + eslint
npm run format    # prettier --write
```

Requires Node.js ≥ 20. This project uses **npm** as its package manager (`package-lock.json`).

## Deployment

The site is fully prerendered and IPFS-friendly (relative asset paths, `404.html`
fallback), and is served at [cpl121.eth.limo](https://cpl121.eth.limo) — the
[eth.limo](https://eth.limo) gateway resolving the `contenthash` of the
`cpl121.eth` ENS name.

- **CI** (`.github/workflows/ci.yml`) runs the quality gate on every push/PR:
  audit, lint, type-check, unit tests, build, `verify:build` and E2E smoke tests.
- **Deploy** (`.github/workflows/deploy.yml`) runs after CI passes on `main`
  (or manually via _Run workflow_): it builds, verifies, then pins `build/` to
  public IPFS with [Pinata](https://pinata.cloud) via `scripts/pin-to-ipfs.mjs`
  and prints the resulting **CID** in the job summary.
- **Publish:** set the `contenthash` of `cpl121.eth` to `ipfs://<CID>` at
  [app.ens.domains](https://app.ens.domains/cpl121.eth) (one signed transaction).
  Using an immutable CID — rather than IPNS — means the site never depends on a
  record being continuously republished.

One-time setup — add a single repository secret:

- `PINATA_JWT` — create a free account at [pinata.cloud](https://pinata.cloud),
  then **API Keys → New Key** with the `pinFileToIPFS` scope and copy the JWT.

The same script can be run locally to publish an ad-hoc build:

```bash
npm run build
PINATA_JWT=<jwt> node scripts/pin-to-ipfs.mjs build   # prints the CID
```

## License

[MIT](./LICENSE)
