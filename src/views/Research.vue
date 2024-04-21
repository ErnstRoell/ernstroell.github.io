<template>
  <h2>Research</h2>
  <div class="research">
    <div class="bonbons">
      <img src="@/assets/research/ect_overview_a.png" alt="">
    </div>
    <div class="photos">
      <img src="@/assets/research/lorentz.png" alt="">
    </div>
  </div>
</template>

<style scoped> 
h2 {
  padding-top: 2em;
  text-align: center;
}
img {
  width: 100%;
}

.research {
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid black; */
  display: flex;
  width: 100%;
  max-width: 1000px;
  padding-top: 2em;
  text-align: center;
  justify-content: center;
  column-gap: 2em;
  padding-bottom: 10em;
}

.bonbons {
  /* border: 1px solid black; */
  width: 30%;
}
.photos {
  /* border: 1px solid black; */
  width: 30%;
}
.explore {
  /* border: 1px solid black; */
  width: 30%;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Research',
  components: {
  }
}
</script>
