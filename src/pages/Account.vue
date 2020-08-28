<template>
  <section>
    <div class="underHeader row bg-primary text-grey-1">
      <div class="container">
        <h2>My account</h2>
      </div>
    </div>
    <div class="row bg-grey-1 text-grey-9" style="margin-top:3rem">
      <div class="container store">
        <ProductList />
      </div>
    </div>
  </section>
</template>

<style>

</style>

<script>

import ProductList from './../components/ProductList'

export default {
  name: 'PageAccount',
  components: {
    ProductList
  }
}
</script>
