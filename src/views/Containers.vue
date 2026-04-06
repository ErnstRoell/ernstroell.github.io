<script setup>
// @ is an alias to /src
// import Card from '@/components/Card.vue'
</script>

<template>
  <h2>Dev Containers</h2>
  <div class="grid-container">
    <div class="item">  
      <div class="header"> Item 1 Stuff and a long title </div>
      <div class="body"> 
        This establishes the main-axis, thus defining the direction flex
        items are placed in the flex container. Flexbox is (aside from
        optional wrapping) a single-direction layout concept. Think of flex
        items as primarily laying out either in horizontal rows or vertical
        columns.
      </div>
      <div class="footer"> The footer </div>
    </div>
    <div class="item">  
      <div class="header"> Item 2 Stuff </div>
      <div class="body"> 
        This defines a flex container; inline or block depending on the
        given value. It enables a flex context for all its direct children.
      </div>
      <div class="footer"> The footer </div>
    </div>
    <div class="item">  
      <div class="header"> Item 3 </div>
      <div class="body"> 
        In this video, you’ll learn how CSS Subgrid fixes one of the most
        In this video, you’ll learn how CSS Subgrid fixes one of the most
        annoying layout problems in modern web design.
        annoying layout problems in modern web design.
      </div>
      <div class="footer"> The footer </div>
    </div>
    <div class="item">  
      <div class="header"> Item 4 Long Stuff </div>
      <div class="body"> 
        In this video, you’ll learn how CSS Subgrid fixes one of the most
        annoying layout problems in modern web design.
      </div>
      <div class="footer"> The footer </div>
    </div>

  </div>
</template>

<style> 
.grid-container {
  display: grid;
  background-color: blue;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.item{
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  padding: 1em;
  background-color: red;
  text-align: center;
  border-radius: 8px;
  font-size:2rem;
  
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
