<template>
  <div>
    <div v-if="ready">
      <h1>Products</h1>
      <div>
        <Product :id="key" :product="item" :key="key" v-for="(item, key) in catalog" />
      </div>
    </div>
    <div v-if="!ready">
      Loading...
    </div>
  </div>
</template>

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
