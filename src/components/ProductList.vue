<template>
  <div>
    <div class="products" :class="{animationContainer: animated}" v-if="ready">
      <Product :class="{animated: animated}" class="product" :item="item" :id="key" :style="getStyle(index)" :product="item" :key="key" v-for="(item, key, index) in catalog" />
    </div>
    <div v-if="!ready">
      Loading...
    </div>
  </div>
</template>

<style scoped>
  .row {
    width:100vw;
    padding:1rem;
    margin:0 auto!important;
  }
  .row > * {
    padding:1rem;
    box-sizing:border-box;
  }
  @media (min-width:600px) {
    .animated {
      opacity:0;
      position:relative;
      animation: fadein .5s forwards ease-in-out;
    }

    .animationContainer {
      padding-top:3rem;
      padding-bottom:3rem;
      background:none;
      animation: fadeinParent .5s forwards ease-in-out;
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
    }
  }

  @keyframes fadein {
      from { opacity: 0; top:0;}
      to   { opacity: 1; top:-2.5rem;}
  }

  @keyframes fadeinParent {
      from { background:#fafafa; margin-top:0;}
      to   { background:#fafafa; margin-top:-6rem;}
  }
</style>

<script>

import { mapGetters, mapActions } from 'vuex'
import Product from './Product'

export default {
  name: 'ProductList',
  props: ['animated'],
  data: () => {
    return {
      ready: false,
      catalog: {},
      keyToAdd: ''
    }
  },
  components: {
    Product
  },
  methods: {
    ...mapActions('cart', [
      'addToCart'
    ]),
    getStyle (num) {
      if (!this.animated) return ''
      return 'animation-delay: ' + ((num + 1) * 100) + 'ms;'
    }
  },
  computed: {
    ...mapGetters('products', [
      'getProducts'
    ])
  },
  watch: {
    getProducts: {
      immediate: true,
      handler (val) {
        if (val) {
          this.ready = true
          this.catalog = val
        }
      }
    }
  }
}

</script>
