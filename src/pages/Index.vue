<template>
  <section>
    <div style="position:relative;" class="underHeader row bg-secondary text-grey-1 hero">
      <div class="container sidepad heroContent">
        <h1 class="text-bold">
          Freshly brewed
        </h1>
        <h2>
          Hot-blooded creatives turned cold-brewers
        </h2>
      </div>
      <div class="video-container">
        <div class="color-overlay bg-primary"></div>
        <video autoplay loop muted>
            <source src="hero.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="row bg-grey-1 text-grey-9 rest" style="padding-bottom:6rem; padding-top:0rem;">
      <div class="container store">
        <h2 class="text-bold text-center">
          Our products
        </h2>
        <ProductList />
      </div>
    </div>
    <div class="row bg-primary text-grey-1 rest">
      <div class="container sidepad">
        <h2 style="margin:3rem 0" class="text-bold text-center">
          Frequently Asked Questions
        </h2>
      </div>
    </div>
    <div class="row bg-grey-1 text-grey-9 rest" style="padding-bottom:6rem;">
      <div class="container sidepad">
        <FAQ/>
      </div>
    </div>
  </section>
</template>

<style>

.heroContent {
  position:relative;
  z-index:9;
}

.rest {
  z-index:10;
  position:relative;
}

.hero h1 {
  line-height:2.8rem;
}

.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  overflow:hidden;
  z-index:1;
  max-height:88vh;
}

.video-container video {
  min-height:100%;
  width:100%;
  position:absolute;
  top:50%;
  transform:translate(0, -50%);
  object-fit: cover;
  max-height:88vh;
}

.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height:88vh;
  overflow:hidden;
  height: 100%;
  opacity: 0;
  z-index:2;
}
.hero, .video-container {
  min-height:88vh;
}

.hero {
  padding-top:0;
  align-items: center;
  display: flex;
}

</style>

<script>

import ProductList from './../components/ProductList'
import FAQ from './../components/FAQ'

export default {
  name: 'PageIndex',
  methods: {},
  components: {
    ProductList,
    FAQ
  }
}
</script>
