<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      links: [
        { label: 'About', href: '#about' },
        { label: 'Research', href: '#research' },
        { label: 'Interests', href: '#interests' },
        { label: 'CV', href: 'cv.pdf' },
      ],
    }
  },
}
</script>

<template>
  <header class="site-header">
    <div class="wide header-inner">
      <a href="#about" class="wordmark">Ernst Röell</a>
      <nav>
        <a v-for="l in links" :key="l.label" :href="l.href" class="mono nav-link">{{ l.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Flat by design: a hairline bottom rule and the paper itself, no shadow.
   Slightly translucent with a blur so the coordinate grid keeps showing
   through as the page scrolls under it. */
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  height: var(--header-h);
  display: flex;
  align-items: center;
  background: rgba(244, 241, 234, .88);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--hair);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.wordmark {
  font-family: var(--font-display);
  font-size: 21px;
  letter-spacing: -.01em;
}

nav {
  display: flex;
  gap: clamp(18px, 2.5vw, 34px);
}

.nav-link {
  color: var(--ink-soft);
  transition: color .2s ease;
}
.nav-link:hover,
.nav-link:focus-visible {
  color: var(--accent-text);
}

/* Below 640px only the wordmark remains; the sections are a short scroll
   away on a phone and a cramped four-item nav helps nobody. */
@media (max-width: 640px) {
  nav { display: none; }
}
</style>
