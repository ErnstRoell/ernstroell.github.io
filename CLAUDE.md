# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Ernst Röell's personal academic homepage — a Vue 3 SPA built with vue-cli 5 (webpack), published to GitHub Pages at `ernstroell.github.io`.

## Commands

```bash
npm install
npm run serve   # dev server with HMR, bound to localhost
npm run build   # production bundle into dist/
```

There is no test suite and no linter configured, so `npm run build` is the only correctness check available. Verify visual changes in a browser — see *Verifying visually* below.

## Deployment

`.github/workflows/deploy.yaml` builds on push to `main` (or manual `workflow_dispatch`) and publishes `dist/` through GitHub's official Pages actions. This depends on the repo's Settings → Pages → Source being set to **GitHub Actions**; if it is ever switched back to "Deploy from a branch", deploys will silently stop taking effect.

## Design system

The site's visual language is inherited from Ernst's thesis deck at `~/repos/claude-presentation/thesis-presentation/` (see its `:root` block), so the two read as one body of work. Layout restraint — no shadows, no radii, hairline rules, generous whitespace — follows thinkingmachines.ai.

All tokens live in `src/App.vue`'s unscoped `<style>`:

| Token | Use |
|---|---|
| `--paper` `#F4F1EA` | page ground |
| `--ink` `#14140F` | primary type |
| `--ink-soft` `#5A5A52` | **all secondary text** |
| `--accent` (vermilion `#E2452F`) | large display italics only |
| `--accent-text` `#C6321C` | links, hover, small accented text |
| `--graphite`, `--ultramarine` | deck fidelity; graphite is intentionally unused |
| `--hair` / `--hair-strong` | the only borders on the site |

**Contrast is why there are two accents and two greys.** The deck's `--graphite` is 2.65:1 on paper and `--vermilion` is 3.63:1 — fine projected at 25px+, both fail WCAG AA for normal-size screen text. `--ink-soft` (6.17:1) and `--accent-text` (4.81:1) are the same hues darkened just enough to pass, and they carry every piece of small text. Do not put `--graphite` or raw `--vermilion` on body copy, metadata, or links.

Three faces, loaded from Google Fonts in `public/index.html`: Instrument Serif (display), IBM Plex Sans 300/400/500 (body), IBM Plex Mono 400/500 (labels, metadata, nav — the `.mono` utility).

### Layout

Two containers, both `max-width` capped and sharing **one left edge** — this spine is the main structural idea, so don't centre a narrower box inside it:

- `.wide` (1150px) — section headings, publication index, interests grid
- `.prose` (same outer width, children capped at 720px) — reading copy

Fluid `padding-inline: clamp(20px, 5vw, 64px)`; no fixed widths anywhere. `.field-grid` in `App.vue` paints the faint 80px coordinate grid (48px under 640px).

## Components

`App.vue` composes the page directly — there is no router (`vue-router` was removed deliberately). Sections are `HomeView` → `Research` → `HobbiesView`, each an `id`-anchored `<section class="band">` targeted by the header nav.

- **`SiteHeader.vue`** — 56px sticky, hairline bottom rule, nav hidden under 640px.
- **`PublicationEntry.vue`** — one index row. Optional `venue`/`year`/`figure`/link props; **must keep working when they are absent** (LEAP has no figure, and several entries have no confirmed venue). Abstract goes in the named slot `content`.
- **`FigureCard.vue`** — an interest: photo, mono caption, prose.

### Images: import them, never require a filename

Views `import` each image and pass the resolved URL as a prop:

```js
import ectCurves from '@/assets/research/ect-curves.png'
```

The old `Card.vue` resolved images with `require('../assets/' + pic)`, which compiles to a `require.context` over **all** of `src/assets/` and emitted every file in it whether referenced or not — that shipped 8 MB of unused images. Explicit imports mean only referenced files are bundled. Keep it that way; `ls dist/img | wc -l` should equal the number of images the components actually reference (currently 13).

### Figure blending

Research figures are line art drawn on white and use `mix-blend-mode: multiply` so they sit on the paper with the grid faintly through them, rather than in white boxes.

**A blend mode only reaches its nearest stacking context.** No wrapper between a blended image and the paper may carry `z-index`, `transform`, or `opacity < 1`. If a figure appears in a white box, something above it created a stacking context. (The deck documents the same trap at its `index.html:262`.)

Interest photographs keep their own ground and are deliberately *not* blended.

## Publication metadata is incomplete

`venue`/`year` are only filled where verified: **NeurIPS 2025** for the IPT paper (from the deck) and **arXiv preprint 2025** for LEAP. DECT, MANTRA, DISPR and the normal-form paper have no venue set, because OpenReview serves a bot-verification page, its API returns nothing for those forum IDs, and IEEE is not fetchable. The row omits the metadata line when absent. **Do not guess venues** — ask.

## Verifying visually

Firefox is the browser to check in: it caught a background bug here before, and the techniques in use (`mix-blend-mode`, subgrid-free CSS grid, `:has()`) are where it differs.

```bash
npm run build && (cd dist && python3 -m http.server 8099 &)
firefox --headless --window-size=1600,6000 --screenshot /tmp/wide.png  http://localhost:8099/
firefox --headless --window-size=430,2600  --screenshot /tmp/phone.png http://localhost:8099/
```

Headless capture races image decoding — a missing image in one screenshot is usually a decode race, not a bug. Re-shoot before investigating, and check the server log for a real 404.

Worth asserting after any style change: `grep -c 'box-shadow\|border-radius' dist/css/*.css` should be **0**.

## Notes

- Interest photographs are still heavy (`bonbons.png` 417 KB, `hiking.jpg` 392 KB, `sunset.png` 370 KB) and draw build size warnings. Research figures were compressed on import (all five total 344 KB); the photos were left byte-identical and are the obvious next win.
- `public/index.html`'s `<%= BASE_URL %>` is an html-webpack-plugin variable, not a router artifact.
