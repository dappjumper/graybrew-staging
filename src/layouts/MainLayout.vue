<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-dark">
      <q-toolbar>

        <q-toolbar-title>
          Gray Brew
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="menuDrawerOpen = !menuDrawerOpen"
        />

        <q-btn
          flat
          dense
          round
          icon="shopping_cart"
          aria-label="Cart"
          @click="toggle"
        >
          <span :class="{noshow: !getItems.length}" class="counter">{{ getCounterValue }}</span>
        </q-btn>
        <q-btn
          flat
          dense
          round
          :to="$route.path === '/account' ? '/' : 'account'"
          icon="person"
          aria-label="Account"
        >
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="showCart"
      side="right"
      overlay
      content-class="bg-dark"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Cart
        </q-item-label>
        <transition-group
          enter-active-class="scaleIn"
          leave-active-class="scaleOut"
        >
          <q-card dark flat class="cartItem" v-for="(item) in getItems" :key="item.id">
            <q-card-section>
              <ProductFromID style="color:#fafafa;" small :item="item" />
            </q-card-section>
          </q-card>
        </transition-group>
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="menuDrawerOpen"
      side="left"
      content-class="bg-dark"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-dark">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
  .counter {
    position:absolute;
    top:5px;
    right:5px;
    height:1rem;
    width:1rem;
    font-size:0.8rem;
    line-height:0.5rem;
    padding:4px;
    border-radius:16px;
    transition:all .1s;
    background:rgba(255,255,255,0.1);
  }
  .noshow {
    opacity:0;
  }
</style>

<script>

import EssentialLink from 'components/EssentialLink.vue'
import ProductFromID from 'components/ProductFromID'
import { mapGetters, mapMutations } from 'vuex'

const linksData = [
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
    ProductFromID
  },
  data () {
    return {
      menuDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  methods: {
    ...mapMutations('cart', [
      'toggle'
    ]),
    ...mapGetters('products', [
      'getProduct'
    ])
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
        this.toggle()
      }
    }
  }
}
</script>
