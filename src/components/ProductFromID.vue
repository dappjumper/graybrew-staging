<template>
  <Product mini :id="id" :index="index" :product="product"/>
</template>

<style scoped>
  .cover {
    background-size:cover;
    background-position:center center;
  }
</style>

<script>

import { mapGetters } from 'vuex'
import Product from './Product'

export default {
  name: 'ProductList',
  props: ['id', 'index'],
  components: {
    Product
  },
  data: () => {
    return {}
  },
  computed: {
    product: {
      get () {
        return this.getProduct()(this.id)
      },
      set (value) {
      }
    }
  },
  methods: {
    ...mapGetters('products', ['getProduct'])
  }
}

</script>
