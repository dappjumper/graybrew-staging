<template>
  <section>
    <div style="position:relative;" class="underHeader row bg-secondary text-grey-1 hero">
      <div class="container sidepad heroContent">
        <h1 class="text-bold">

        </h1>
      </div>
      <div class="video-container">
        <div class="color-overlay"></div>
        <video autoplay loop muted>
            <source src="hero.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="row bg-grey-1 text-primary">
      <div class="container sidepad">
        <h2 class="text-bold">Our products</h2>
      </div>
    </div>
    <div class="row bg-grey-1 text-grey-9">
      <div class="container store">
        <ProductList />
      </div>
    </div>
  </section>
</template>

<style>

.heroContent {
  position:relative;
  z-index:9;
}

.hero h1 {
  line-height:2.8rem;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  overflow:hidden;
  z-index:1;
}

.video-container video {
  min-height:100%;
  width:100%;
  position:absolute;
  top:50%;
  transform:translate(0, -50%);
  object-fit: cover;
}

.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333333;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index:2;
}

.hero {
  padding-top:0;
  min-height:66vh;
  align-items: center;
  display: flex;
}

</style>

<script>

import ProductList from './../components/ProductList'

export default {
  name: 'PageIndex',
  methods: {},
  components: {
    ProductList
  }
}
</script>
