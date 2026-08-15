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

/* Bio at reading measure on the left, portrait in the right column. Both
   tracks have a fixed max so the pair stays left-aligned on the page spine
   rather than spreading to the container edges, and the text track shrinks
   before the portrait does. */
.about {
  display: grid;
  grid-template-columns: minmax(0, var(--prose)) minmax(0, 260px);
  column-gap: clamp(32px, 4vw, 64px);
  align-items: start;
}

.about-text { grid-column: 1; grid-row: 1; }
.about-text > * + * { margin-top: 22px; }

.portrait {
  grid-column: 2;
  grid-row: 1;
  display: block;
  width: 100%;
  height: auto;
}

p { max-width: 68ch; }

/* One column below the point where the portrait would squeeze the measure;
   source order puts it above the bio, as it was before. */
@media (max-width: 880px) {
  .about { grid-template-columns: minmax(0, 1fr); }
  .about-text,
  .portrait { grid-column: 1; grid-row: auto; }
  .portrait {
    max-width: 260px;
    margin-bottom: 40px;
  }
}

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
