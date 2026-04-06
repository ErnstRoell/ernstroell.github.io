
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
    <img :src="getImgUrl(this.image)" v-if="this.image"/> 
    <h3>{{ title }}</h3>  
    <div class="card-body">
      <slot name="content"></slot> 
    </div>
    <div class="links" v-show="this.arxiv !== nill || this.paper !== nill || this.github !== nill">
      <a :href="this.arxiv" v-if="this.arxiv" class="button">Arxiv</a>
      <a :href="this.paper" v-if="this.paper" class="button">Paper</a>
      <a :href="this.github" v-if="this.github" class="button">Github</a>
    </div>
  </div>
</template>


<style scoped> 

.item{
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 4;
  padding: 1em;
  background-color: red;
  text-align: center;
  border-radius: 8px;
  font-size:2rem;
  
}

.card {
  display: grid; 
  grid-template-rows: subgrid;
  grid-row: span 3;
  border-radius: 16px;
  padding: 0px 0px 20px 0px; 
  box-shadow: 0px 8px 16px rgba(0, 0, 0, .6);
  background-color: rgb(224, 224, 224);
}

.links {
  margin-top: auto;
  display: flex; 
  justify-content: center;
  align-content: center;
  gap: 1em;
  padding: 1em;
}


.card img {
    width: 100%;    
    border-radius: 16px 16px 0px 0px; 
}

.card h3 {
  margin-left: 2em;
  margin-right: 2em;
  font-size: 20px;
  text-align: center;
}


.card-body {
  font-size: 15px;
  line-height: 1.3;
  text-align: justify;
  margin-left: 2em;
  margin-right: 2em;
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
