<template>

<div class="about-card-container">

<div class="about-card-image">
        <img src="@/assets/profile_square.jpg" alt="Profile Ernst Röell">
</div>

<div class="about-card-text">
    <div class="about-card-content">
        <h3>About me </h3>
        <p>
            In Algebraic Topology, persistent homology is a methodology to
            compute the homology groups of a simplicial complexes endowed with a
            filtration. The simplicial complex is usually constructed from a
            topological space and homology groups persisting over a large range
            of the filtration can be interpreted as meaningful features of the
            underlying topological space. Datasets often have interesting
            structure, but due to high dimensionality and the discrete nature
            this structure is difficult to quantify. Through the construction of
            a Vietoris-Rips complex and a computation of the persistent homology
            one is able to make qualitative statements on the structure, or
            loosly speaking shape, of the underlying topological space from
            which the original dataset was sampled. The resulting so-called
            persistence diagram can be interpreted as the number of connected
            components, loops and voids in the dataset at various scales,
            providing valuable information to practitioners. We aim to study how
            the topological information of datasets can be exploited to create
            deep learning architectures that are both sparser and more
            expressive. We hope to apply this to expand and combine on the work
            done and apply results to biomedical data.

        </p>
    </div>
</div>
</div>

</template>

<style scoped>


.about-card-container {
    /* border: 2px solid black; */
    display: grid;
    gap:20px;
    grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
    margin-top: 100px;

}


.about-card-image {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);
    background-color: rgb(224,224,224);
    /* border: 2px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-card-image img {
    width: 50%;
    /* justify-items: center; */

}

.about-card-text {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);
    background-color: rgb(224, 224, 224);
    align-content: center;
}

.about-card-content {
    margin: 10%;
    text-align: justify;
}

.about-card-content h3 {
    pad: 20px;
    text-align: center;
}


</style>
<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
