<template>
  <section>
    <div class="underHeader row bg-secondary text-grey-1 hero">
      <div class="container sidepad">
        <h1 class="text-bold">
          Enjoy Cold Brew
        </h1>
      </div>
    </div>
    <div class="row bg-grey-1 text-primary">
      <div class="container sidepad">
        <h2 class="text-bold">Our products</h2>
      </div>
    </div>
    <div class="row bg-grey-1 text-grey-9">
      <div class="container store">
        <ProductList />
      </div>
    </div>
  </section>
</template>

<style>

.hero {
  padding-top:0;
  min-height:66vh;
  align-items: center;
  display: flex;
}

.q-page-container {
  padding-top:0!important;
}

.sidepad {
  padding-left:1rem;
  padding-right:1rem;
}

</style>

<script>

import ProductList from './../components/ProductList'

export default {
  name: 'PageShop',
  components: {
    ProductList
  }
}
</script>
