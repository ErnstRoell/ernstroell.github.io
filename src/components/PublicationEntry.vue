<script>
export default {
  name: 'PublicationEntry',
  props: {
    title: { type: String, required: true },
    venue: { type: String, default: '' },
    year: { type: [String, Number], default: '' },
    paper: { type: String, default: '' },
    arxiv: { type: String, default: '' },
    github: { type: String, default: '' },
    // A resolved URL, imported by the view. Deliberately not a bare filename
    // resolved through require(): that compiles to a require.context over the
    // whole assets directory and ships every file in it, referenced or not.
    figure: { type: String, default: '' },
    figureAlt: { type: String, default: '' },
  },
  computed: {
    links() {
      return [
        { label: 'Paper', href: this.paper },
        { label: 'arXiv', href: this.arxiv },
        { label: 'Code', href: this.github },
      ].filter(l => l.href)
    },
    meta() {
      return [this.venue, this.year].filter(Boolean).join(' · ')
    },
  },
}
</script>

<template>
  <article class="entry">
    <div class="head">
      <h3>{{ title }}</h3>
      <div v-if="links.length" class="links">
        <a
          v-for="l in links"
          :key="l.label"
          :href="l.href"
          class="mono link"
          target="_blank"
          rel="noopener"
        >{{ l.label }}<span aria-hidden="true"> ↗</span></a>
      </div>
    </div>

    <!-- Omitted entirely when unknown, rather than printing an empty rule.
         Several entries have no confirmed venue yet. -->
    <p v-if="meta" class="mono meta">{{ meta }}</p>

    <div class="body">
      <p class="abstract"><slot name="content"></slot></p>
      <figure v-if="figure" class="fig">
        <img :src="figure" :alt="figureAlt" loading="lazy">
      </figure>
    </div>
  </article>
</template>

<style scoped>
.entry {
  border-top: 1px solid var(--hair);
  padding: clamp(28px, 3.5vw, 44px) 0;
}

.head {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
  gap: 16px 32px;
}

h3 { max-width: 34ch; }

.links {
  display: flex;
  gap: 20px;
  white-space: nowrap;
}

.link {
  color: var(--ink-soft);
  transition: color .2s ease;
}
.link:hover,
.link:focus-visible { color: var(--accent-text); }

.meta {
  margin-top: 12px;
  color: var(--ink-soft);
}

/* Proportional rather than a fixed prose column: giving the abstract the full
   720px left barely 200px for the figure, which is too small to read a curve
   plot or a three-panel strip at. */
.body {
  margin-top: 20px;
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: start;
}

/* Entries without a figure cap at the prose column rather than running the
   full index width, so the measure stays close to the figured entries
   instead of visibly jumping between rows. */
.body:not(:has(.fig)) { grid-template-columns: minmax(0, var(--prose)); }

.abstract { max-width: 68ch; }

/* Source figures are drawn on white; multiplying them into the paper puts
   them on the field instead of in a white box, with the coordinate grid
   faintly through them.

   STACKING — a blend mode only reaches its nearest stacking context, so no
   wrapper between this image and the paper may carry a z-index, a transform,
   or an opacity below 1. A figure appearing in a white box means something
   above it created a stacking context. */
.fig img {
  display: block;
  width: 100%;
  height: auto;
  mix-blend-mode: multiply;
}

@media (max-width: 760px) {
  .head { grid-template-columns: 1fr; }
  .links { gap: 18px; }
  .body { grid-template-columns: minmax(0, 1fr); }
}
</style>
