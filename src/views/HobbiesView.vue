<script setup>
import FigureCard from '@/components/FigureCard.vue'

import bonbons from '@/assets/bonbons.png'
import sunset from '@/assets/sunset.png'
import hiking from '@/assets/hiking.jpg'
</script>

<template>
  <section id="interests" class="band">
    <div class="wide">
      <div class="section-head">
        <h2>Interests</h2>
        <span class="mono count">Away from the desk</span>
      </div>

      <div class="figure-row">
        <FigureCard :image="bonbons" title="Bonbons" alt="Hand-made chocolate bonbons">
          <template v-slot:content>
            Exploring different flavour combinations that speak to the imagination
            and invoke conversation is a passion of mine.
            Chocolate does not only works amazingly well with a large variety spices, such as nutmeg,
            pepper, paprika and kardamom, but also with herbs and aromatics such as
            rozemary, lemongrass and rozes.
          </template>
        </FigureCard>

        <FigureCard :image="sunset" title="Photography" alt="A sunset over the water">
          <template v-slot:content>
            Photography drives the photographer to reevaluate the way we look at
            things, finding the unique angles or hidden detail we often overlook. It
            is this sort of cat and mouse game and the sheer depth one can find in
            seemingly simple objects that is truly exhilarating.
          </template>
        </FigureCard>

        <FigureCard :image="hiking" title="Hiking" alt="A lake in the mountains south of Munich">
          <template v-slot:content>
            During the weekends I love to explore the surrounding mountains just south
            of Munich. The nature is wonderful and lets you revitalize during the weekends.
          </template>
        </FigureCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* The personal section takes the deck's second accent, so the two-accent
   split across its acts survives here in miniature. */
.section-head { --accent: var(--ultramarine); margin-bottom: 40px; }

.figure-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(28px, 4vw, 48px);
}
</style>
