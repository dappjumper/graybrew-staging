<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
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
          @click="cartDrawerOpen = !cartDrawerOpen"
        />

        <q-btn
          flat
          dense
          round
          icon="person"
          aria-label="Account"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="cartDrawerOpen"
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
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="menuDrawerOpen"
      side="left"
      show-if-above
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

    <q-page-container class="bg-primary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      menuDrawerOpen: false,
      cartDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
