<script setup>
import PublicationEntry from '@/components/PublicationEntry.vue'

// Figures are imported explicitly so only referenced files are bundled.
import ectCurves from '@/assets/research/ect-curves.png'
import bunnyTriple from '@/assets/research/bunny-triple.jpg'
import platonicSolids from '@/assets/research/platonic-solids.jpg'
import diffusionModel from '@/assets/research/diffusion-model.png'
import normalForm from '@/assets/research/normal-form.png'
</script>

<template>
  <section id="research" class="band">
    <div class="wide">
      <div class="section-head">
        <h2>Research</h2>
        <span class="mono count">Six papers</span>
      </div>

      <PublicationEntry
        title="Differentiable Euler Characteristic Transforms for Shape Classification"
        paper="https://openreview.net/forum?id=MO632iPq3I"
        github="https://github.com/aidos-lab/dect-evaluation"
        :figure="ectCurves"
        figure-alt="Euler characteristic curves across filtration directions"
      >
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
      </PublicationEntry>

      <PublicationEntry
        title="Point Cloud Synthesis Using Inner Product Transforms"
        venue="NeurIPS"
        year="2025"
        paper="https://arxiv.org/abs/2410.18987"
        :figure="bunnyTriple"
        figure-alt="A bunny as voxels, as a mesh and as a point cloud"
      >
        <template v-slot:content>
          Point-cloud synthesis, i.e. the generation of novel point clouds
          from an input distribution, remains a challenging task, for which
          numerous complex machine-learning models have been devised. We
          develop a novel method that encodes geometrical-topological
          characteristics of point clouds using inner products, leading to a
          highly-efficient point cloud representation with provable
          expressivity properties. Integrated into deep learning models, our
          encoding exhibits high quality in typical tasks like
          reconstruction, generation, and interpolation, with inference times
          orders of magnitude faster than existing methods.
        </template>
      </PublicationEntry>

      <PublicationEntry
        title="MANTRA: The Manifold Triangulations Assemblage"
        paper="https://openreview.net/forum?id=X6y5CC44HM"
        github="https://github.com/aidos-lab/mantra-benchmarks"
        :figure="platonicSolids"
        figure-alt="The five platonic solids as triangulated surfaces"
      >
        <template v-slot:content>
          The rising interest in leveraging higher-order interactions present
          in complex systems has led to a surge in more expressive models
          exploiting high-order structures in the data, especially in
          topological deep learning (TDL), which designs neural networks on
          high-order domains such as simplicial complexes. However, progress
          in this field is hindered by the scarcity of datasets for
          benchmarking these architectures. To address this gap, we introduce
          MANTRA, the first large-scale, diverse, and intrinsically high
          order dataset for benchmarking high-order models, comprising over
          43,000 and 249,000 triangulations of surfaces and three-dimensional
          manifolds, respectively. With MANTRA, we assess several graph- and
          simplicial complex-based models on three topological classification
          tasks. We demonstrate that while simplicial complex-based neural
          networks generally outperform their graph-based counterparts in
          capturing simple topological invariants, they also struggle,
          suggesting a rethink of TDL. Thus, MANTRA serves as a benchmark for
          assessing and advancing topological methods, leading the way for
          more effective high-order models.
        </template>
      </PublicationEntry>

      <PublicationEntry
        title="LEAP: Local ECT-Based Learnable Positional Encodings for Graphs"
        venue="arXiv preprint"
        year="2025"
        arxiv="https://arxiv.org/abs/2510.00757"
      >
        <template v-slot:content>
          Graph neural networks (GNNs) largely rely on the message-passing
          paradigm, where nodes iteratively aggregate information from their
          neighbors. Yet, standard message passing neural networks (MPNNs)
          face well-documented theoretical and practical limitations. Graph
          positional encoding (PE) has emerged as a promising direction to
          address these limitations. The Euler Characteristic Transform (ECT)
          is an efficiently computable geometric–topological invariant that
          characterizes shapes and graphs. In this work, we combine the
          differentiable approximation of the ECT (DECT) and its local
          variant (ℓ-ECT) to propose LEAP, a new end-to-end trainable local
          structural PE for graphs. We evaluate our approach on multiple
          real-world datasets as well as on a synthetic task designed to test
          its ability to extract topological features. Our results underline
          the potential of ℓ-ECT-based encodings as a powerful component for
          graph representation learning pipelines.
        </template>
      </PublicationEntry>

      <PublicationEntry
        title="A Diffusion Model Predicts 3D Shapes from 2D Microscopy Images"
        paper="https://ieeexplore.ieee.org/document/10230752"
        :figure="diffusionModel"
        figure-alt="The DISPR diffusion pipeline, noising and denoising a 3D cell shape"
      >
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
      </PublicationEntry>

      <PublicationEntry
        title="Normal form for maps with nilpotent linear part"
        paper="https://royalsocietypublishing.org/doi/10.1098/rspa.2021.0908"
        :figure="normalForm"
        figure-alt="A dense family of orbits under a map with nilpotent linear part"
      >
        <template v-slot:content>
          The normal form for an n-dimensional map with irreducible nilpotent
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
          as far as we know.
        </template>
      </PublicationEntry>
    </div>
  </section>
</template>

<style scoped>
/* Scoped, unlike the block this replaces — its bare h2 rule used to leak
   into every other section on the page. */
.section-head { margin-bottom: 8px; }
</style>
