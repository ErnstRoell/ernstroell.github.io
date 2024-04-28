
<script>
export default {
  name: 'Card'
}
</script>


<template>
  <div class="card">
      <slot name="image"></slot>
      <div class="card-content">
        <slot name="title"></slot>
        <slot name="content"></slot>
      </div>
      <div class="thebutton">
                <a href="#" class="btn">Read More</a>
          </div>
  </div>
</template>




<style scoped> 

.card {
  display: flex;
    flex-direction: column;
    justify-content: baseline;
    width: 425px;
    background-color: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);
    margin: 20px;
}

.card img {
    width: auto;
    height: 200px;
}


.card-content {
    padding: 16px;
}

.card-content h3 {
    font-size: 28;
    margin-bottom: 8px;
}

.card-content p {
    color: #666;
    font-size: 15px;
    line-height: 1.3;
}

.card .thebutton {
    margin-top: auto;
    padding: 16px;
}

.thebutton .btn {
    display: inline-block;
    padding: 8px 16px; 
    background-color: #333;
    border-radius: 8px;
    margin-top: 8px;
    color: #f0f0f0;
}
</style>