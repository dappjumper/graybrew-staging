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
    <q-card v-if="!small" flat class="displayItem">
      <q-img @click="$router.push('/shop/'+id)" style="cursor:pointer; height:250px;" contain :src="product.thumb" />

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
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'ProductList',
  props: ['product', 'id', 'quantity', 'mini', 'expanded'],
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
      'quantityInCart',
      'toggle'
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
