# ernstroell.github.io

Personal academic homepage of Ernst Röell — about, interests, and publications. Built as a Vue 3
single-page site with vue-cli 5 (webpack).

## Development

```bash
npm install
npm run serve   # dev server with hot reload on localhost
npm run build   # production bundle into dist/
```

There is no test suite or linter configured, so `npm run build` is the available correctness check.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yaml`, which builds the site and publishes
`dist/` to GitHub Pages via GitHub's official Pages actions. This requires the repository's
Settings → Pages → Source to be set to **GitHub Actions**.
