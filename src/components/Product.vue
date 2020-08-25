<template>
  <q-card :dark="small" square flat class="my-card">
    <q-img
      v-if="!small"
      :src="'https://picsum.photos/seed/'+id+'/300/400'"
      basic
    >
      <div class="absolute-bottom text-h6">
        {{ product.name }}
      </div>
    </q-img>
    <q-card-section v-if="small"> {{ product.name }} <br/> {{ product.description || product.summary }} </q-card-section>
    <q-card-section v-if="!small">
      {{ product.description || 'Description coming soon!' }}
    </q-card-section>
    <q-card-section>
      <q-btn-group v-if="!small">
        <q-btn class="absolute-left" flat unelevated outline color="grey-8" label="Read more" />
        <q-btn @click="addItem(id)" class="absolute-right" flat unelevated outline  color="primary" label="Add to cart" icon="shopping_cart" />
      </q-btn-group>
      <q-btn-group v-if="small">
        <q-btn @click="removeItem(index)" class="absolute-right" flat unelevated outline  color="primary" label="Remove" icon="shopping_cart" />
      </q-btn-group>
    </q-card-section>

  </q-card>
</template>

<style scoped>
</style>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'ProductList',
  props: ['product', 'id', 'mini', 'index'],
  data: () => {
    return {}
  },
  computed: {
    small () {
      return (typeof this.mini !== 'undefined')
    }
  },
  methods: {
    ...mapMutations('cart', [
      'addItem',
      'toggle',
      'removeItem'
    ])
  }
}

</script>
