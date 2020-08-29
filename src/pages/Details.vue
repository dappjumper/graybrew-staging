<template>
  <section>
    <div class="underHeader row bg-primary text-grey-1">
      <div class="container">
        <h2 style="text-align:center;">{{ product.name || $route.params.id }}</h2>
      </div>
    </div>
    <div class="row bg-grey-1 text-grey-9" style="margin-top:3rem">
      <div v-if="product" class="container store">
        <Product :item="product" />
      </div>
    </div>
  </section>
</template>

<style>

</style>

<script>

import { mapGetters } from 'vuex'
import Product from './../components/Product'

export default {
  name: 'PageDetail',
  data () {
    return {
      ready: false
    }
  },
  components: {
    Product
  },
  computed: {
    product: {
      get () {
        return this.getProduct()(this.$route.params.id)
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
