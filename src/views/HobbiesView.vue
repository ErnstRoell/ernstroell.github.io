<script setup>
// @ is an alias to /src
import Card from '@/components/Card.vue'
</script>


<template>
  <h2>Interests</h2>

  <div class="card-container">
  <Card image="bonbons.png" title="Bonbons">
    <template v-slot:content>
      <p> 
        Exploring different flavour combinations that speak to the imagination 
        and invoke conversation is a passion of mine. 
        Chocolate does not only works amazingly well with a large variety spices, such as nutmeg,
        pepper, paprika and kardamom, but also with herbs and aromatics such as 
        rozemary, lemongrass and rozes. 
      </p>
    </template>
  </Card>
  <Card image="sunset.png" title="Photography">
    <template v-slot:content>
      <p> Photography drives the photographer to reevaluate the way we look at
      things, finding the unique angles or hidden detail we often overlook. It
      is this sort of cat and mouse game and the sheer depth one can find in
      seemingly simple objects that is truly exhilarating </p>
    </template>
  </Card>
  <Card image="hiking.jpg" title="Hiking">
    <template v-slot:content>
      <p> During the weekends I love to explore the surrounding mountains just south 
        of Munich. The nature is wonderful and lets you revitalize during the weekends. </p>
    </template>
  </Card>
  </div>
</template>


<style scoped>

h2 {
  padding-top: 2em;
  text-align: center;
}

.card-container {
  /* border: 1px solid black; */
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
}

</style>


<script>



export default {
  name: 'HobbiesView',
  components: {
  }
}
</script>
