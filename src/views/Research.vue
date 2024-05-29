<script setup>
// @ is an alias to /src
import Card from '@/components/Card.vue'
</script>

<template>

  <h2>Research</h2>

  <div class="card-container">
  <Card>
    <template v-slot:image>
      <img src="@/assets/research/ect_overview_a.png" alt="">
    </template>
    <template v-slot:title>
      <h3>Differentiable Euler Characteristic Transforms for Shape
      Classification</h3>
    </template>
    <template v-slot:content>
      <p>
        The Euler Characteristic Transform (ECT) has proven to be a powerful
        representation, combining geometrical and topological characteristics of
        shapes and graphs. However, the ECT was hitherto unable to learn
        task-specific representations. We overcome this issue and develop a
        novel computational layer that enables learning the ECT in an end-to-end
        fashion. Our method, the Differentiable Euler Characteristic Transform
        (DECT), is fast and computationally efficient, while exhibiting
        performance on a par with more complex models in both graph and point
        cloud classification tasks. Moreover, we show that this seemingly simple
        statistic provides the same topological expressivity as more complex
        topological deep learning layers.
      </p>
    </template>
  </Card>
  <Card>
    <template v-slot:image>
      <img src="@/assets/research/lorentz.png" alt="">
    </template>
    <template v-slot:title>
      <h3>Normal form for maps with nilpotent linear part</h3>
    </template>
    <template v-slot:content>
      <p> The normal form for an n-dimensional map with irreducible nilpotent
      linear part is determined using sl2-representation theory. We sketch by
      example how the reducible case can also be treated in an algorithmic
      manner. The construction (and proof) of the sl2-triple from the nilpotent
      linear part is more complicated than one would hope for, but once the
      abstract sl2 theory is in place, both the description of the normal form
      and the computational splitting to compute the generator of the coordinate
      transformation can be handled explicitly in terms of the nilpotent linear
      part without the explicit knowledge of the triple. Where in the vector field case
      one runs into invariant theoretical problems when the dimension gets
      larger if one wants to describe the general form of the normal form, for
      maps we obtain results without any restrictions on the dimension. In the
      literature only the 2-dimensional nilpotent case has been described sofar,
      as far as we know. </p>
    </template>
  </Card>
  </div>
</template>

<style scoped> 
h2 {
  padding-top: 2em;
  text-align: center;
}

.card-container {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    justify-content: end;
    width: 100%;
    max-width: 1300px;
    gap: 20px;
}

.card-container img {
  width: 100%;
  border-radius: 8px;
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
