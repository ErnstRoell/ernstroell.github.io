<template>
  <h2>In my free time I love to ..</h2>
  <div class="hobbies">
    <div class="bonbons">
      <img src="@/assets/bonbons.png" alt="">
    </div>
    <div class="photos">
      <img src="@/assets/sunset.png" alt="">
    </div>
    <div class="explore"><img src="@/assets/hiking.jpg" alt=""></div>
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

.hobbies {
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid black; */
  display: flex;
  width: 100%;
  max-width: 1000px;
  padding-top: 2em;
  text-align: center;
  justify-content: space-between;
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
  name: 'HobbiesView',
  components: {
  }
}
</script>
