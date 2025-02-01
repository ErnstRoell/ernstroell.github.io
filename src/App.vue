
<script setup>
  import HomeView from "./views/HomeView.vue";
  import HobbiesView from "./views/HobbiesView.vue";
  import Research from "./views/Research.vue";
</script>

<template>
  <!-- <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> | 
    <router-link :to="{ name: 'jobs' }">Jobs</router-link> | 
    <router-link :to="{ name: 'projects' }">Projects</router-link>
  </nav>
  <router-view/> -->
  <HomeView></HomeView>
  <HobbiesView></HobbiesView>
  <Research></Research>

  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  max-width: 1500px;
}


</style>
