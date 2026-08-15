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
    background-image: url('@/assets/background.png');
    background-color: rgba(255, 255, 255, 0.5);
    background-blend-mode: lighten;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }


</style>
