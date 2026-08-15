<script setup>
  import SiteHeader from "./components/SiteHeader.vue";
  import HomeView from "./views/HomeView.vue";
  import Research from "./views/Research.vue";
  import HobbiesView from "./views/HobbiesView.vue";
</script>

<template>
  <!-- The faint coordinate field, inherited from the thesis deck. Never given
       a z-index, so figures further down the page can still multiply into the
       paper — see the stacking note in FigureCard.vue. -->
  <div class="field-grid" aria-hidden="true"></div>

  <SiteHeader />

  <main>
    <HomeView />
    <Research />
    <HobbiesView />
  </main>

  <footer class="site-footer">
    <div class="wide footer-inner">
      <span>Ernst Röell</span>
      <span>Munich</span>
    </div>
  </footer>
</template>

<style>
  /* =========================================================================
     DESIGN TOKENS
     Taken from the thesis deck (thesis-presentation/index.html :root) so the
     site and the talk read as one body of work. Vermilion carries the
     research; ultramarine is held back for the personal section, mirroring
     the deck's two-accent split across its acts.
     ========================================================================= */
  :root {
    --paper: #F4F1EA;
    --ink: #14140F;
    --graphite: #96968C;
    --vermilion: #E2452F;
    --ultramarine: #3070B3;
    --hair: rgba(20, 20, 15, .10);
    --hair-strong: rgba(20, 20, 15, .22);
    --accent: var(--vermilion);

    /* The deck's graphite (2.65:1 on paper) and vermilion (3.63:1) are fine
       projected at 25px+, but both fail WCAG AA for normal-size text on a
       screen. These two are darkened just enough to pass (6.17:1 and 4.81:1)
       while staying the same hues, and carry every piece of small text.
       --graphite and --vermilion stay as the deck defines them, for large
       display type where they do pass. */
    --ink-soft: #5A5A52;
    --accent-text: #C6321C;

    --font-display: 'Instrument Serif', Georgia, serif;
    --font-body: 'IBM Plex Sans', system-ui, sans-serif;
    --font-mono: 'IBM Plex Mono', ui-monospace, monospace;

    --prose: 720px;
    --wide: 1150px;
    --gutter: clamp(20px, 5vw, 64px);
    --header-h: 56px;
  }

  *, *::before, *::after { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--font-body);
    font-weight: 300;
    font-size: clamp(17px, .3vw + 16px, 18px);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 80px hairline field, dropping to 48px on small screens so it does not read
     as coarse. Fixed, so it behaves as a ground rather than scrolling
     wallpaper. */
  .field-grid {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: .55;
    background-image:
      linear-gradient(var(--hair) 1px, transparent 1px),
      linear-gradient(90deg, var(--hair) 1px, transparent 1px);
    background-size: 80px 80px;
  }

  /* ── Containers ────────────────────────────────────────────────────────── */
  /* Both containers are the same width and share one left edge; .prose caps
     its children at reading measure instead of centring a narrower box. If
     .prose were centred independently, the bio would sit indented from the
     name and the section headings, and the page would lose its spine. */
  .wide, .prose {
    width: 100%;
    max-width: var(--wide);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }
  .prose > * { max-width: var(--prose); }

  /* ── Type ──────────────────────────────────────────────────────────────── */
  h1, h2, h3 {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: -.02em;
    margin: 0;
  }
  h1 { font-size: clamp(52px, 7vw, 92px); line-height: .95; }
  h2 { font-size: clamp(34px, 4vw, 44px); line-height: 1.05; }
  h3 { font-size: clamp(22px, 2.2vw, 26px); line-height: 1.2; }
  h1 i, h2 i, h3 i { font-style: italic; color: var(--accent); }

  /* Running text is justified to both edges. Hyphenation is not optional here:
     justifying without it forces the browser to make up the difference in
     word spacing alone, which opens vertical rivers of whitespace — worst in
     the narrow interest columns and on phones. `hyphens: auto` needs the lang
     attribute on <html>, which public/index.html sets. */
  p {
    margin: 0;
    text-align: justify;
    hyphens: auto;
  }

  /* Mono labels are short, uppercase and letter-spaced; justifying them would
     stretch a one-line label across the whole column. */
  p.mono {
    text-align: left;
    hyphens: manual;
  }

  a { color: inherit; text-decoration: none; }

  /* Mono label: metadata, captions, link marks. The deck's chrome voice. */
  .mono {
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 13px;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  /* Section heading, with the hairline rule every band shares. */
  .section-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 24px;
    padding-bottom: 22px;
    border-bottom: 1px solid var(--hair-strong);
  }
  .section-head .count { color: var(--ink-soft); }

  .band { padding-top: clamp(64px, 9vw, 124px); }

  /* ── Footer ────────────────────────────────────────────────────────────── */
  .site-footer {
    margin-top: clamp(80px, 10vw, 150px);
    padding-bottom: 40px;
  }
  .footer-inner {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--hair);
    padding-top: 22px;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }

  @media (max-width: 640px) {
    .field-grid { background-size: 48px 48px; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: .01ms !important;
      transition-duration: .2s !important;
    }
  }
</style>
