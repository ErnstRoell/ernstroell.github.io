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

There is no test suite and no linter configured (no eslint plugin is installed), so `npm run build` is the only correctness check available. Verify visual changes with `npm run serve`.

## Deployment

`.github/workflows/deploy.yaml` builds on push to `main` (or manual `workflow_dispatch`) and publishes `dist/` through GitHub's official Pages actions. This depends on the repo's Settings → Pages → Source being set to **GitHub Actions**; if it ever gets switched back to "Deploy from a branch", deploys will silently stop taking effect.

## Architecture

### There is no router

`App.vue` composes the entire site as one vertically-scrolling page by importing view components directly — there is no vue-router, no routes, and no `<router-view>`:

```
App.vue → HomeView (profile photo, bio, social icon links)
        → HobbiesView (3 interest cards)
        → Research (6 publication cards)
```

To add a section, import it into `App.vue`'s `<script setup>` and place the tag inside `.main-content`. If real multi-page routing is ever wanted, `vue-router` must be reinstalled first — it was deliberately removed along with the unused tutorial scaffolding the project was generated from.

### Card.vue is the one shared component

Both `HobbiesView` and `Research` render everything through `Card.vue`. Props: `image`, `title`, `arxiv`, `paper`, `github`; body text goes in the named slot `content`:

```vue
<Card paper="https://..." github="https://..." title="Paper Title">
  <template v-slot:content>Abstract text…</template>
</Card>
```

Each provided link prop renders an "Arxiv" / "Paper" / "Github" button; omitted props render nothing, and the whole links row is hidden when none are passed (which is why hobby cards have no empty grey strip).

`image` is a **bare filename resolved at runtime** via `require('../assets/' + pic)`, so the file must sit directly in `src/assets/` (e.g. `image="hiking.jpg"`) — a path or a file outside that directory breaks the webpack require context. Research cards pass no image; hobby cards do.

### Watch out: everything in src/assets/ ships, referenced or not

That dynamic `require` compiles to a webpack `require.context` over **all of `src/assets/` recursively**, so every file in that directory is emitted into `dist/img` whether or not any component references it. This previously bloated the deployed payload to 10.5 MB against ~2.4 MB of actually-displayed images (a 2 MB unused `motorcycle.png`, a stray `research/` figure folder, several duplicate profile photos).

`src/assets/` now contains only the nine files that are genuinely used. **Do not park unused or draft images there** — they will be downloaded by every visitor. Confirm with `ls dist/img` after a build; the count should match what the components actually reference.

### Layout conventions

Every section follows the same shape: a centered `<h2>` heading plus a responsive grid,

```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
gap: 1.5em;
```

with cards using `grid-template-rows: subgrid; grid-row: span 3` so title / body / links rows align horizontally across each row of cards. **CSS subgrid is load-bearing here** — replacing it with flexbox or plain grid will break that alignment.

Note that `App.vue` pins `.main-content` to a fixed `width: 1400px`, so the responsive `minmax` grids only reflow on viewports narrower than that; the page itself does not genuinely adapt. Making the site responsive would mean revisiting that fixed width. The page background image is set on `body` in `App.vue` (`@/assets/background.png`, lightened via `background-blend-mode`).

### Styling

No CSS framework. All styles live in per-component `<style>` blocks; palette is a consistent `rgb(224, 224, 224)` card surface with box shadows. `HomeView.vue` and `HobbiesView.vue` use `scoped`, but `Research.vue` does **not** — its rules (including a bare `h2`) leak globally. Prefer `scoped` in new components. Font Awesome 6.7.2 is pulled from a CDN in `public/index.html`; social icons are local SVGs in `src/assets/`.

### Per-file script convention

Most `.vue` files carry two script blocks: a `<script setup>` at the top holding child-component imports, plus a trailing options-API `<script>` that only declares `name`. This is redundant but is the established pattern — match it when editing existing files. `Card.vue` is pure options API.

`@` aliases to `src/` (configured in `jsconfig.json` and by vue-cli default).

## Notes

- Displayed images are still heavy for a homepage (`background.png` 735 KB, `profile_square.jpg` 575 KB, and three ~400 KB card images), and the build emits size warnings for them. Compressing and resizing them was deliberately deferred, not overlooked.
- `public/index.html`'s `<%= BASE_URL %>` is an html-webpack-plugin variable, not a router artifact.
