<template>
  <q-layout :class="{scrolled: cartOpenWhilstScrolled || scrolled}" view="hHh Lpr fFf" class="bg-grey-1">
    <q-header class="text-grey-9">
      <q-toolbar>

        <q-toolbar-title>
          <router-link to="/" class="link">Gray Brew</router-link>
        </q-toolbar-title>

        <div class="t-menu">
          <q-btn
            flat
            class="menuItem first"
            style="padding-right:1.5rem"
            to="/shop"
            icon="o_shop"
            aria-label="Shop"
          >Shop</q-btn>
          <q-btn
            flat
            class="menuItem middle"
            style="padding-right:1.5rem"
            to="/account"
            icon="o_person"
            aria-label="Account"
          >About</q-btn>
          <q-btn
            flat
            style="padding-right:1.5rem; margin-left:-0.8rem;"
            class="menuItem last"
            icon="o_shopping_cart"
            aria-label="Cart"
            @click="showCart = true"
          >Cart</q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="showCart"
      side="right"
      behavior="mobile"
      overlay
      content-class="bg-secondary"
    >
      <q-list>
        <q-item-label
          header
          @click="toggle"
          class="text-primary bg-grey-1"
        >
          <q-btn
            flat
            style="pointer-events:none; padding:none!important;"
            icon="o_shopping_cart"
            aria-label="Cart"
          ></q-btn>Cart
        </q-item-label>
        <transition-group
          enter-active-class="scaleIn"
          leave-active-class="scaleOut"
        >
          <q-card light flat class="cartItem" v-for="(item) in getItems" :key="item.id">
            <q-card-section>
              <ProductFromID class="cartProduct" style="color:#fafafa;" small :item="item" />
            </q-card-section>
          </q-card>
        </transition-group>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog v-model="showAccountDialog" full-width>
      <q-card style="margin-top:3rem" class="bg-secondary">
        <q-card-section class="bg-primary" style="position:fixed; z-index:1; width:calc(100% - 48px); border-top-right-radius:4px;">
          <div class="text-h6">Contact & delivery</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="scroll" style="padding-top:5rem; padding-bottom:4rem;">
          <CustomerForm />
        </q-card-section>

        <q-separator />
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<style scoped>
  .noshow {
    opacity:0;
  }
</style>

<script>

import ProductFromID from 'components/ProductFromID'
import CustomerForm from 'components/CustomerForm'
import { mapGetters, mapMutations } from 'vuex'

const linksData = [
]

export default {
  name: 'MainLayout',
  components: {
    ProductFromID,
    CustomerForm
  },
  data () {
    return {
      showAccountDialog: false,
      menuDrawerOpen: false,
      essentialLinks: linksData,
      scrolled: false,
      cartOpenWhilstScrolled: false
    }
  },
  methods: {
    ...mapMutations('cart', [
      'toggle'
    ]),
    ...mapGetters('products', [
      'getProduct'
    ]),
    checkScrolled () {
      const doc = document.documentElement
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      if (top > 70) {
        if (!this.scrolled) this.scrolled = true
      } else {
        if (this.scrolled) this.scrolled = false
      }
      return this.scrolled
    }
  },
  mounted () {
    setInterval(this.checkScrolled, 50)
  },
  computed: {
    ...mapGetters('cart', [
      'isOpened',
      'getItems'
    ]),
    getCounterValue () {
      return (this.getItems.length < 10 ? this.getItems.length : '9+')
    },
    showCart: {
      get () {
        return this.isOpened
      },
      set (value) {
        if (value) {
          if (this.checkScrolled()) {
            this.cartOpenWhilstScrolled = true
            this.scrolled = true
          } else {
            this.cartOpenWhilstScrolled = false
          }
        } else {
          this.cartOpenWhilstScrolled = false
        }
        this.toggle()
      }
    }
  }
}
</script>
