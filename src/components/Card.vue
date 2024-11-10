
<script>
export default {
  name: 'Card',
  props: ['image','title'],
  methods: {
      getImgUrl(pic) {
        return require('../assets/' + pic)
    }
  }
}
</script>


<template>
  <div class="card">
    <img :src="getImgUrl(this.image)">
    <h3>{{ title }}</h3>  
    <p>  
      <slot name="content"></slot> 
    </p>
  </div>
</template>




<style scoped> 

/* .card {
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);


} */

.card {
  display: flex;
  flex-direction: column;
  /* border-radius: 8px; */
  /* overflow: hidden; */
   box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);
}

.card img {
    width: 100%;    
}

.card h3 {
  color: #962020;
  font-size: 30px;
  text-align: center;
  margin-left: 15%;
  margin-right: 15%;
}


.card p {
    color: #962020;
    font-size: 15px;
    line-height: 1.3;
    text-align: justify;
    margin-left: 15%;
    margin-right: 15%;
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