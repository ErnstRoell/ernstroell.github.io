
<script>
export default {
  name: 'Card',
  props: ['image','title','arxiv','paper','github'],
  methods: {
      getImgUrl(pic) {
        return require('../assets/' + pic)
    }
  }
}
</script>


<template>
  <div class="card">
    <h3>{{ title }}</h3>  
    <p>  
      <slot name="content"></slot> 
    </p>
    <div class="links" v-show="this.arxiv !== nill || this.paper !== nill || this.github !== nill">
      <a :href="this.arxiv" v-if="this.arxiv" class="button">Arxiv</a>
      <a :href="this.paper" v-if="this.paper" class="button">Paper</a>
      <a :href="this.github" v-if="this.github" class="button">Github</a>
    </div>
  </div>
</template>


<style scoped> 

.card {
  display: grid; 
  grid-template-rows: subgrid;
  grid-row: 1 / 3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .4);
  background-color: rgb(224, 224, 224);
  border: 1px solid blue;
}


.links {
  margin-top: auto;
  display: flex; 
  justify-content: center;
  gap: 1em;
  padding: 1em;
}


.card img {
    width: 100%;    
}

.card h3 {
  border: 1px solid black;
  font-size: 20px;
  text-align: center;
}


.card p {
    border: 1px solid black;
    font-size: 15px;
    line-height: 1.5;
    text-align: justify;
}

.button {
  transition-duration: 0.4s;
  background-color: rgba(170,170,170,1);
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
}

.button:hover {
  background-color: #555555; /* Green */
  color: white;
}



</style>
