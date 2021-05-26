<template>
  <TheNavigation />
  <BreadcrumbNavigation />
  <main class="container mx-auto p-4">
    <router-view />
  </main>
  <TheFooter />
</template>

<script>
import { provide } from 'vue';
import TheNavigation from './components/nav/TheNavigation.vue';
import BreadcrumbNavigation from './components/nav/BreadcrumbNavigation.vue';
import TheFooter from './components/TheFooter.vue';
import store from '@/store';
// import { filtersValuesArray } from './variables.js';
export default {
  name: 'App',
  components: {
    TheNavigation,
    TheFooter,
    BreadcrumbNavigation,
  },

  setup() {
    // const filtersValues = ref(filtersValuesArray);
    // provide('filtersValues', filtersValues);
    provide('store', store);
  },
  mounted() {
    this.$store.commit('updateCartFromLocalStorage');
  },
};
</script>

<style>
#app {
  position: relative;
}
</style>
