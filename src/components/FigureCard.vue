<script>
export default {
  name: 'FigureCard',
  props: {
    // A resolved URL imported by the view — see the note in PublicationEntry.
    image: { type: String, required: true },
    alt: { type: String, default: '' },
    title: { type: String, required: true },
  },
}
</script>

<template>
  <figure class="card">
    <img :src="image" :alt="alt" loading="lazy">
    <figcaption class="mono">{{ title }}</figcaption>
    <p class="body"><slot name="content"></slot></p>
  </figure>
</template>

<style scoped>
/* No border, no radius, no shadow: the photograph sits directly on the paper
   and the caption does the framing. Photographs keep their own ground and are
   not blended, unlike the line figures in PublicationEntry. */
.card {
  margin: 0;
  display: flex;
  flex-direction: column;
}

img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

figcaption {
  margin-top: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--hair);
  color: var(--ink);
}

.body {
  margin-top: 16px;
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 1.6;
}
</style>
