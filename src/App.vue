<script setup>
  import HomeView from "./views/HomeView.vue";
  import HobbiesView from "./views/HobbiesView.vue";
  import Research from "./views/Research.vue";
</script>

<template>
  <div class="main-content">
    <HomeView></HomeView>
    <HobbiesView></HobbiesView>
    <Research></Research>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .main-content {
    width: 1400px; 
    margin: auto;
  }
  body {
    /* A 50%-white veil layered over the photo, rather than blending the photo
       against a translucent background-color: `lighten` takes a per-channel
       max(), so max(white, photo) is white, and Firefox resolves that to fully
       opaque white and hides the photo entirely. This gradient overlay is the
       same intended result (0.5 * photo + 0.5 * white) in every browser. */
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
      url('@/assets/background.png');
    background-color: rgb(240, 240, 240);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }


</style>
