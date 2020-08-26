<template>
  <Product mini :id="item.id" :quantity="item.quantity" :index="index" :product="product"/>
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
  props: ['item', 'index'],
  components: {
    Product
  },
  data: () => {
    return {}
  },
  computed: {
    product: {
      get () {
        return this.getProduct()(this.item.id)
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
