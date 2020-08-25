<template>
  <q-page class="flex">
    <ProductList />
  </q-page>
</template>

<script>

import ProductList from './../components/ProductList'

export default {
  name: 'PageIndex',
  components: {
    ProductList
  }
}
</script>
