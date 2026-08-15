<script setup>
// Explicit imports rather than a filename prop resolved through require():
// see the note in PublicationEntry.vue.
import portrait from '@/assets/profile_square.jpg'
import githubIcon from '@/assets/github-icon.svg'
import scholarIcon from '@/assets/google-scholar-icon.svg'
import cvIcon from '@/assets/cv-icon.svg'
import linkedinIcon from '@/assets/linkedin-icon.svg'

const socials = [
  { label: 'GitHub', href: 'https://github.com/ErnstRoell', icon: githubIcon },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=AKghH_sAAAAJ&hl=en', icon: scholarIcon },
  { label: 'CV', href: 'cv.pdf', icon: cvIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ernstroell/', icon: linkedinIcon },
]
</script>

<template>
  <section id="about" class="band">
    <div class="wide intro">
      <h1>Ernst <i>Röell</i></h1>
    </div>

    <!-- .wide rather than .prose: the bio needs the full spine width to hold a
         column of reading copy and the portrait beside it. .about-text caps
         itself at reading measure, so the left edge is unchanged. -->
    <div class="wide about">
      <img class="portrait" :src="portrait" alt="Ernst Röell">

      <div class="about-text">
      <p>
        In Algebraic Topology, persistent homology is a methodology to compute the
        homology groups of a simplicial complexes endowed with a filtration. The
        simplicial complex is usually constructed from a topological space and
        homology groups persisting over a large range of the filtration can be
        interpreted as meaningful features of the underlying topological space.
      </p>
      <p>
        Datasets often have interesting structure, but due to high dimensionality
        and the discrete nature this structure is difficult to quantify. Through the
        construction of a Vietoris-Rips complex and a computation of the persistent
        homology one is able to make qualitative statements on the structure, or
        loosly speaking shape, of the underlying topological space from which the
        original dataset was sampled. The resulting so-called persistence diagram can
        be interpreted as the number of connected components, loops and voids in the
        dataset at various scales, providing valuable information to practitioners.
      </p>
      <p>
        We aim to study how the topological information of datasets can be exploited
        to create deep learning architectures that are both sparser and more
        expressive. We hope to apply this to expand and combine on the work done and
        apply results to biomedical data.
      </p>

      <nav class="socials">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          class="mono social"
          :target="s.href.startsWith('http') ? '_blank' : null"
          rel="noopener"
        >
          <img :src="s.icon" alt="" aria-hidden="true">
          {{ s.label }}
        </a>
      </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  padding-top: clamp(56px, 9vw, 120px);
  padding-bottom: clamp(32px, 5vw, 56px);
}

/* Reading copy on the spine, portrait out at the right edge of .wide — the
   same left/right pairing as .section-head. The text column is capped at
   reading measure by the first track, not by centring a narrower box. */
/* The portrait track is sized, not flexible: a 1fr second track would let the
   copy hold its full 720px measure and shrink the photo to a thumbnail at
   ~1000px. The text column takes the slack instead, and stays capped at
   reading measure by .about-text. */
.about {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(180px, 260px);
  column-gap: clamp(32px, 5vw, 72px);
  align-items: start;
}

.about-text {
  grid-column: 1;
  grid-row: 1;
  max-width: var(--prose);
}
.about-text > * + * { margin-top: 22px; }

.portrait {
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
  display: block;
  width: 100%;
  max-width: 260px;
  height: auto;
}

/* Below the point where 720px of copy plus the portrait stop fitting, stack:
   portrait first, as it was before, then the bio. */
@media (max-width: 820px) {
  .about { grid-template-columns: minmax(0, 1fr); }
  .about-text { grid-column: 1; grid-row: 2; }
  .portrait {
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    margin-bottom: 40px;
  }
}

p { max-width: 68ch; }

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 28px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--hair);
}

.social {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--ink-soft);
  transition: color .2s ease;
}
.social img {
  width: 15px;
  height: 15px;
  /* The icons are solid black; dim them to sit with the label and let them
     come up to full ink on hover along with the text. */
  opacity: .55;
  transition: opacity .2s ease;
}
.social:hover,
.social:focus-visible { color: var(--accent-text); }
.social:hover img,
.social:focus-visible img { opacity: 1; }
</style>
