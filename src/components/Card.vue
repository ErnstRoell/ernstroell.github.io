
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

.card {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .4);
  background-color: rgb(224, 224, 224);
}

.links {
  display: flex; 
  justify-content: center;
  gap: 1em;
  padding: 1em;
  margin-top: auto;
}

.card img {
    width: 100%;    
}

.card h3 {
  /* color: #962020;  */
  font-size: 20px;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
}


.card p {
    /* color: #962020; */
    font-size: 15px;
    line-height: 1.3;
    text-align: justify;
    margin-left: 10%;
    margin-right: 10%;
}

.card .thebutton {
    margin-top: auto;
    padding: 16px;
}

/* .thebutton .btn {
    display: inline-block;
    padding: 8px 16px; 
    background-color: #333;
    border-radius: 8px;
    margin-top: 8px;
    color: #f0f0f0;
}  */
</style>
