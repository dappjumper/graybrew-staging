<template>
  <q-layout view="lHh Lpr lFf">
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
        />
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
        <ProductFromID style="color:#fafafa;" small :key="index" :index="index" :id="item" v-for="(item, index) in getItems" />
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

<script>

import EssentialLink from 'components/EssentialLink.vue'
import ProductFromID from 'components/ProductFromID'
import { mapGetters, mapMutations } from 'vuex'

const linksData = [
]

export default {
  name: 'MainLayout',
  components: { EssentialLink, ProductFromID },
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
