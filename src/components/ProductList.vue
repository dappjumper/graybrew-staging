<template>
  <div>
    <div class="products" v-if="ready">
      <Product class="product" :item="item" :id="key" :product="item" :key="key" v-for="(item, key) in catalog" />
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
</style>

<script>

import { mapGetters, mapActions } from 'vuex'
import Product from './Product'

export default {
  name: 'ProductList',
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
    ])
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
