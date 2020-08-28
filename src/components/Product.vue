<template>
  <div>
    <!-- Cart -->
    <q-card v-if="small" dark>
      <q-card-section>
        {{ quantity }} x {{ product.name }} <a @click="removeItem(id)" class="absolute-right" style="cursor:pointer;">x</a><br/>
        ₱{{ quantity * product.price }} - {{ product.description }}
      </q-card-section>
    </q-card>
    <!-- End cart -->
    <q-card v-if="!small" class="displayItem">
      <q-img :src="product.thumb" />

      <q-card-section class="text-primary">
        <div class="row no-wrap items-center">
          <div class="col text-h6">
            {{ product.name }}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none" style="margin-bottom: 3.5rem;">
        <div class="text-subtitle1 text-bold text-primary">
          ₱{{ product.price }}
        </div>
        <div class="text-caption text-grey-8">
          {{ product.description }}
        </div>
      </q-card-section>

      <q-card-section>
        <q-btn-group>
          <transition name="fade">
            <q-btn
              color="primary"
              flat
              icon="o_add"
              class="absolute quantifier"
              @click="quantityToAdd++"
              style="border-bottom-left-radius:0; border-top-left-radius:0; top: 0; right: 0px; z-index:1; transform: translateY(-100%);"
            >
            </q-btn>
          </transition>
          <q-input
            color="primary"
            class="absolute quantifier fadeIn shown text-primary"
            v-bind:class="{shown: quantityToAdd > 1}"
            v-model.number="quantityToAdd"
            type="number"
            @input="ensureSafeQuantity"
            style="top: 1px; left: 0; z-index:0; width:100%;"
          />
          <q-btn
            color="primary"
            icon="o_remove"
            flat
            class="absolute quantifier fadeIn"
            :class="{shown: quantityToAdd >=2}"
            @click="(quantityToAdd >= 2 ? quantityToAdd-- : '')"
            style="border-bottom-right-radius:0; border-top-right-radius:0; top: 0; left: 0px; z-index:1; transform: translateY(-100%);"
          >
          </q-btn>
          <q-btn @click="quantityAdded = quantityToAdd; animateAdding(); addItem({id: id, quantity: quantityToAdd}); quantityToAdd = 1; " style="border-radius:0; width:100%;" class="absolute-right addButton" unelevated color="primary" :class="{'bg-positive': adding}" :label="(!adding ? 'Add '+(quantityToAdd > 1 ? ' '+ quantityToAdd +' ' : '')+' to cart' : quantityAdded+' added to cart!')" :icon="(!adding ? 'o_shopping_cart' : 'o_thumb_up')" />
        </q-btn-group>
      </q-card-section>
    </q-card>
    <!-- Showcase -->
  </div>

  <!-- End showcase -->
  <!-- Old
  <q-card :class="{small:small, adding: adding}" :style="small ? 'background-image:url('+product.thumb+')' : ''" square flat class="productcard">
    <q-img
      v-if="!small"
      :src="product.thumb"
    >
      <div class="text-white absolute-bottom text-h6">
        {{ product.name }} - ₱{{ product.price * quantityToAdd }}
      </div>

    </q-img>
    <q-card-section v-if="small"> {{ quantity }} x {{ product.name }} - ₱{{ product.price * quantity }}<br/> {{ product.description || product.summary }} </q-card-section>
    <q-card-section v-if="!small">
      {{ product.description || 'Description coming soon!' }}
    </q-card-section>
    <q-card-section class="quantity" v-if="!small">
      <q-input bottom-slots min="1" @input="ensureSafeQuantity()" max="99" v-model.number="quantityToAdd" label="Quantity" type="number">
        <template v-slot:prepend>
          <q-btn round dense @click="if(quantityToAdd>1) { quantityToAdd--; } else { quantityToAdd = 1 }" flat icon="remove" />
        </template>
        <template v-slot:append>
          <q-btn round dense @click="quantityToAdd++" flat icon="add" />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section v-if="small">
      <q-input dark bottom-slots min="0" max="99" v-model.number="innerQuantity" label="Quantity" type="number">
        <template v-slot:prepend>
          <q-btn round dense @click="changeQuantity({id: id, quantity: -1})" flat icon="remove" />
        </template>
        <template v-slot:append>
          <q-btn round dense @click="changeQuantity({id: id, quantity: 1})" flat icon="add" />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section>
      <q-btn-group v-if="!small">
        <q-btn @click="quantityAdded = quantityToAdd; animateAdding(); addItem({id: id, quantity: quantityToAdd}); quantityToAdd = 1; " style="width:100%;" class="absolute-right addButton" flat unelevated outline  color="primary" :class="{'bg-positive text-white': adding}" :label="(!adding ? 'Add to cart' : quantityAdded+' added to cart!')" :icon="(!adding ? 'o_shopping_cart' : 'thumb_up')" />
      </q-btn-group>
      <q-btn-group v-if="small">
        <q-btn dense @click="removeItem(id)" class="absolute-right" style="width:100%;" color="red" label="Remove" icon="delete" />
      </q-btn-group>
    </q-card-section>

  </q-card>-->
</template>

<style scoped>
  .quantifier {
    height:50px;
    width:50px;
  }
  .fadeIn {
    opacity:0;
    transition: all .15s;
    transform:translate(-100%, -100%)!important;
  }
  .fadeIn.shown {
    opacity:1;
    transform:translate(0, -100%)!important;
  }
</style>

<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'ProductList',
  props: ['product', 'id', 'quantity', 'mini'],
  data: () => {
    return {
      quantityToAdd: 1,
      adding: false,
      quantityAdded: 0,
      timer: 0
    }
  },
  computed: {
    small () {
      return (typeof this.mini !== 'undefined')
    },
    innerQuantity: {
      get () {
        return this.quantity
      },
      set (value) {
        if (value === '') return false
        this.setQuantity({ id: this.id, quantity: value })
      }
    }
  },
  methods: {
    ...mapMutations('cart', [
      'addItem',
      'toggle',
      'removeItem',
      'changeQuantity',
      'setQuantity'
    ]),
    ...mapGetters('cart', [
      'quantityInCart'
    ]),
    animateAdding () {
      this.adding = true
      window.clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.adding = false
      }, 2000)
    },
    ensureSafeQuantity () {
      if (this.quantityToAdd < 1) { this.quantityToAdd = 1 }
    }
  }
}

</script>
