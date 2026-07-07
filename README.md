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

## License

[MIT](./LICENSE)
