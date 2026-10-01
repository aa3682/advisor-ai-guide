# The Adoption Path

An open, plain-English guide to using AI inside a small independent investment advisory practice without creating a compliance problem.

## What this is

An open, public reference site on using AI inside a small independent investment advisory practice, built on Nextra 4. It keeps the six-section layout (introduction, process, knowledge areas, tools, glossary, about), one example step page and one example area page as skeletons, an empty yearly-figures page, and the conventions in `CLAUDE.md` that shape every page.

## Stack

- [Nextra](https://nextra.site) 4 with `nextra-theme-docs`, restyled with a slate theme (dark only) in `app/globals.css`
- A slate code-highlighting theme in `code-theme.mjs`, passed to Nextra in `next.config.mjs`
- [Outfit](https://github.com/Outfitio/Outfit-Fonts), self-hosted from `fonts/` with `next/font/local`
- Next.js App Router
- MDX content in `content/`
- [Pagefind](https://pagefind.app) search index generated at build time
- [Playwright](https://playwright.dev) (dev only), for `pnpm theme-audit`
- pnpm as the only package manager

## Content conventions

This repository was bootstrapped from [guide-template](https://github.com/aa3682/guide-template); the template's bootstrapping steps no longer apply here. See `CLAUDE.md` for how content on this site is written and structured.

## Run locally

Requires Node.js 24 (`engines` and `.nvmrc` both pin it; Vercel reads `engines`) and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Build

```sh
pnpm build
pnpm start
```

`pnpm build` also generates the search index (Pagefind) into `public/_pagefind`.

On Vercel, set `VERCEL_DEEP_CLONE=true` (Production and Preview) in each project's environment variables. Without it Vercel clones the repository shallowly and Nextra warns "repository is shallow cloned" during the build.

`pnpm theme-audit [url]` re-checks the theme in a running build (`pnpm start`, default http://localhost:3000): dark mode forced, no theme switch, no neutral greys, text contrast and focus rings, on every sidebar page at 1280px and 390px. Run it after a Nextra upgrade or any colour change. The first run on a new machine needs `pnpm exec playwright install chromium`.

`pnpm wordcount <path>` counts the body prose of a content page, following the word-count rules in `CLAUDE.md`.

## License

The prose in `content/` is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The code is licensed under MIT (see `LICENSE`). The Outfit font in `fonts/` is licensed under the SIL Open Font License 1.1 (see `fonts/OFL.txt`).
