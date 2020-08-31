<template>
  <section>
    <div class="underHeader row bg-primary text-grey-1">
      <div class="container">
        <h2>About us</h2>
      </div>
    </div>
    <div class="row bg-grey-1 text-grey-9 sidepad bmf" style="max-width:1000px; margin:0 auto; padding:3rem 0; margin-top:3rem">
      <div class="container col-sm-6 mf">
        <h4>Hot-blooded creatives turned cold-brewers</h4>
        <p>
          Supports local urban & rural communities in the Philippines through social-economic-environmental sustainability.<br/><br/>
          Remote team from the Philippines and Spain.<br/><br/>
          Made in Manila
        </p>
      </div>
      <div class="container store col-sm-6 mf im" style="margin:0 auto; padding-left:3rem;">
        <q-img src="/about.jpg"/>
      </div>
    </div>
    <div class="row bg-grey-1 text-grey-9 bmf" style="max-width:1400px; width: 100vw; margin:0 auto; margin-top:3rem!important">
      <div class="container bg-grey-1 text-grey-9" style="width:100vw; text-align:center">
        <h3 class="bmf">Frequently Asked Questions</h3>
      </div>
      <div class="bmf container store">
        <FAQ class="bmf"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @media (max-width: 1000px) {
    .mf {
      width:100%;
      padding:1rem;
      padding-bottom:3rem;
    }
    .im {
      padding-left:0!important;
      padding:0 3rem!important;
    }
    .bmf {
      padding-top:0!important;
      margin-top:0!important;
    }
  }
</style>

<script>

import FAQ from './../components/FAQ'

export default {
  name: 'PageAccount',
  components: {
    FAQ
  }
}
</script>
