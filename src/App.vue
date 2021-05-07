<template>
  <TheNavigation />
  <BreadcrumbNavigation />
  <main class="container mx-auto p-4">
    <router-view />
  </main>
  <TheFooter />
</template>

<script>
import { provide, ref } from 'vue';
import TheNavigation from './components/nav/TheNavigation.vue';
import BreadcrumbNavigation from './components/nav/BreadcrumbNavigation.vue';
import TheFooter from './components/TheFooter.vue';
import { filtersValuesArray } from './variables.js';
export default {
  name: 'App',
  components: {
    TheNavigation,
    TheFooter,
    BreadcrumbNavigation,
  },

  setup() {
    const filtersValues = ref(filtersValuesArray);
    provide('filtersValues', filtersValues);
  },
};
</script>

<style>
#app {
  position: relative;
}
</style>
