<template>
<div class="card-container">
        <div class="card">
            <img src="@/assets/newprofile.jpg" alt="Lorem Picsum">
            <div class="card-content">
                <h3>About me </h3>
                <p>
                In Algebraic Topology, persistent homology is a methodology to
                compute the homology groups of a simplicial complexes endowed
                with a filtration. The simplicial complex is usually constructed
                from a topological space and homology groups persisting over a
                large range of the filtration can be interpreted as meaningful
                features of the underlying topological space. Datasets often
                have interesting structure, but due to high dimensionality and
                the discrete nature this structure is difficult to quantify.
                Through the construction of a Vietoris-Rips complex and a
                computation of the persistent homology one is able to make
                qualitative statements on the structure, or loosly speaking
                shape, of the underlying topological space from which the
                original dataset was sampled. The resulting so-called
                persistence diagram can be interpreted as the number of
                connected components, loops and voids in the dataset at various
                scales, providing valuable information to practitioners. We aim
                to study how the topological information of datasets can be
                exploited to create deep learning architectures that are both
                sparser and more expressive. We hope to apply this to expand and
                combine on the work done and apply results to biomedical
                data.</p>
            </div>
                   
        </div>
    </div>
  
</template>

<style scoped>

.card-container {
    max-width: 1500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin:auto;
    margin-top: 100px;

}

.card {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    height: auto;
    background-color: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);
    margin: 20px;
}

.card img {
    height: 100%;
    max-width: 300px;
    object-fit: contain;
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
    padding-top: 16px;
}

.card .btn {
    margin-top: auto;
    text-align: center;    
    display: inline-block;
    padding: 8px 16px; 
    background-color: #333;
    border-radius: 8px;
    color: #ffff;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
