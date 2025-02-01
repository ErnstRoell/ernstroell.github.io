<script setup>
// @ is an alias to /src
import Card from '@/components/Card.vue'
</script>

<template>

  <h2>Research</h2>

  <div class="card-container">
  <Card image="research/ect.png" title="Differentiable Euler Characteristic Transforms for Shape
      Classification">
    <template v-slot:content>
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
    </template>
  </Card>
  <Card image="research/lorentz.png" title="Normal form for maps with nilpotent linear part">
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
  <Card image="research/airplane.png" title="Generative Topology for Shape Synthesis">
    <template v-slot:content>
      <p>   
        The Euler Characteristic Transform (ECT) is a powerful invariant for
        assessing geometrical and topological characteristics of a large variety
        of objects, including graphs and embedded simplicial complexes. Although
        the ECT is invertible in theory, no explicit algorithm for general data
        sets exists. In this paper, we address this lack and demonstrate that it
        is possible to learn the inversion, permitting us to develop a novel
        framework for shape generation tasks on point clouds. Our model exhibits
        high quality in reconstruction and generation tasks, affords efficient
        latent-space interpolation, and is orders of magnitude faster than
        existing methods. 
    </p>
    </template>
  </Card>
  <Card image="research/triangulation.png" title="MANTRA: The Manifold Triangulations Assemblage">
    <template v-slot:content>
      <p> 
        The rising interest in leveraging higher-order interactions present in
        complex systems has led to a surge in more expressive models exploiting
        high-order structures in the data, especially in topological deep
        learning (TDL), which designs neural networks on high-order domains such
        as simplicial complexes. However, progress in this field is hindered by
        the scarcity of datasets for benchmarking these architectures. To
        address this gap, we introduce MANTRA, the first large-scale, diverse,
        and intrinsically high order dataset for benchmarking high-order models,
        comprising over 43,000 and 249,000 triangulations of surfaces and
        three-dimensional manifolds, respectively. With MANTRA, we assess
        several graph- and simplicial complex-based models on three topological
        classification tasks. We demonstrate that while simplicial complex-based
        neural networks generally outperform their graph-based counterparts in
        capturing simple topological invariants, they also struggle, suggesting
        a rethink of TDL. Thus, MANTRA serves as a benchmark for assessing and
        advancing topological methods, leading the way for more effective
        high-order models.
      </p>
    </template>
  </Card>

  <Card image="research/diffusionmodel.png" title="A Diffusion Model Predicts 3D Shapes from 2D Microscopy Images">
    <template v-slot:content>
        Diffusion models are a special type of generative model, capable of
        synthesising new data from a learnt distribution. We introduce DISPR, a
        diffusion-based model for solving the inverse problem of
        three-dimensional (3D) cell shape prediction from two-dimensional (2D)
        single cell microscopy images. Using the 2D microscopy image as a prior,
        DISPR is conditioned to predict realistic 3D shape reconstructions. To
        showcase the applicability of DISPR as a data augmentation tool in a
        feature-based single cell classification task, we extract morphological
        features from the red blood cells grouped into six highly imbalanced
        classes. Adding features from the DISPR predictions to the three
        minority classes improved the macro F1 score. We thus demonstrate that
        diffusion models can be successfully applied to inverse biomedical
        problems, and that they learn to reconstruct 3D shapes with realistic
        morphological features from 2D microscopy images.
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
  /* border: 1px solid black; */
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
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
