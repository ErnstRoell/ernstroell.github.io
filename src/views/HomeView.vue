<template>
  <div class="home">
    <div class="profile">
      <img src="@/assets/newprofile.jpg" alt="" >
    </div>
    <div class="about">
      <h3>About me</h3>
      <p>
        In Algebraic Topology, persistent homology is a methodology to compute
        the homology groups of a simplicial complexes endowed with a filtration.
        The simplicial complex is usually constructed from a topological space
        and homology groups persisting over a large range of the filtration can
        be interpreted as meaningful features of the underlying topological
        space.

        Datasets often have interesting structure, but due to high
        dimensionality and the discrete nature this structure is difficult to
        quantify. Through the construction of a Vietoris-Rips complex and a
        computation of the persistent homology one is able to make qualitative
        statements on the structure, or loosly speaking shape, of the underlying
        topological space from which the original dataset was sampled. The
        resulting so-called persistence diagram can be interpreted as the number
        of connected components, loops and voids in the dataset at various
        scales, providing valuable information to practitioners.

        We aim to study how the topological information of datasets can be
        exploited to create deep learning architectures that are both sparser
        and more expressive. We hope to apply this to expand and combine on the
        work done and apply results to biomedical data.
      </p>
    </div>  
  </div>
  
</template>

<style>
img {
  width: 100%;
}

.home {
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  display: flex;
  column-gap: 1em;
  /* border: 1px solid black; */
}

.about p {
  text-align: justify;
  
}

.profile {
  /* border: 1px solid black; */
  min-width: 33%;
  align-content: center;
  background-color: #e8dcb575;
}

.about {
  background-color: rgba(232, 220, 181, 0.46);
  padding: 3em;

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
