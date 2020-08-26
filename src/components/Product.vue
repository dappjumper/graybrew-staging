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
    <q-card-section v-if="small"> {{ quantity }} x {{ product.name }} <br/> {{ product.description || product.summary }} </q-card-section>
    <q-card-section v-if="!small">
      {{ product.description || 'Description coming soon!' }}
    </q-card-section>
    <q-card-section v-if="!small">
      <q-input outlined bottom-slots min="1" @input="ensureSafeQuantity()" max="99" v-model.number="quantityToAdd" label="Quantity" type="number">
        <template v-slot:prepend>
          <q-btn round dense @click="if(quantityToAdd>1) { quantityToAdd--; } else { quantityToAdd = 1 }" flat icon="remove" />
        </template>
        <template v-slot:append>
          <q-btn round dense @click="quantityToAdd++" flat icon="add" />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section>
      <q-btn-group v-if="!small">
        <q-btn class="absolute-left" flat unelevated outline color="grey-8" label="Read more" />
        <q-btn @click="addItem({id: id, quantity: quantityToAdd})" class="absolute-right" flat unelevated outline  color="primary" label="Add to cart" icon="shopping_cart" />
      </q-btn-group>
      <q-btn-group v-if="small">
        <q-btn @click="removeItem(id)" class="absolute-right" flat unelevated outline  color="primary" label="Remove" icon="shopping_cart" />
      </q-btn-group>
    </q-card-section>

  </q-card>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'ProductList',
  props: ['product', 'id', 'quantity', 'mini'],
  data: () => {
    return {
      quantityToAdd: 1
    }
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
    ]),
    ensureSafeQuantity () {
      if (this.quantityToAdd < 1) { this.quantityToAdd = 1 }
    }
  }
}

</script>
