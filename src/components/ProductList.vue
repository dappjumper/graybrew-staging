<template>
  <div>
    <div class="row" v-if="ready">
      <div class="col-xs-12 col-sm-6 col-md-3" :key="key" v-for="(item, key) in catalog">
        <Product :id="key" :product="item" />
      </div>
    </div>
    <div v-if="!ready">
      Loading...
    </div>
  </div>
</template>

<style scoped>
  .row {
    width:100vw;
    margin:0 auto!important;
  }
  .row > * {
    padding:1rem;
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
