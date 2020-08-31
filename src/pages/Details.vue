<template>
  <section>
    <div class="underHeader row bg-primary text-grey-1">
    </div>
    <div style="max-width:1400px; margin: 0 auto; padding-bottom:3rem;" class="row bg-grey-1 text-grey-9 productContent">
      <div class="container" style="text-align:center">
        <q-img style="cursor:pointer; height:100%; width:50vw; max-width:300px;" contain :src="product.thumb" />
      </div>
      <div class="container sidepad">
        <q-card flat class="displayItem">
          <q-card-section class="text-primary">
            <div class="row no-wrap items-center">
              <div class="col text-h4">
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
            <div class="text-caption text-grey-8">
              <br/>All-natural<br/>
              No artificial flavors or preservatives<br/>
              Gluten-free<br/>
              100% Vegan<br/>
              60% less acidic<br/>
              Sugar-free<br/>
              Lactose-free<br/>
              Recyclable packaging<br/>
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
                class="absolute quantifier fadeIn shown text-primary quantityField"
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
              <q-btn @click="quantityAdded = quantityToAdd; animateAdding(); addItem({id: $route.params.id, quantity: quantityToAdd}); quantityToAdd = 1; " style="border-radius:0; width:100%;" class="absolute-right addButton" unelevated color="primary" :class="{'bg-positive': adding}" :label="(!adding ? 'Add '+(quantityToAdd > 1 ? ' '+ quantityToAdd +' ' : '')+' to cart' : quantityAdded+' added to cart!')" :icon="(!adding ? 'o_shopping_cart' : 'o_thumb_up')" />
            </q-btn-group>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </section>
</template>

<style scoped>

  .productContent .container {
    padding-top:3rem;
    padding-bottom:3rem;
    width:50%;
  }

  .productContent .q-img {
    overflow:visible!important;
  }

  @media (max-width:600px) {
    .productContent .container {
      width:100%;
    }
  }

</style>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'PageDetail',
  data () {
    return {
      ready: false,
      quantityToAdd: 1,
      adding: false
    }
  },
  components: {},
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
    ...mapGetters('products', ['getProduct']),
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
