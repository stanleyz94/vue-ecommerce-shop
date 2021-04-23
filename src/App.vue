<template class="">
  <TheNavigation />
  <BreadcrumbNavigation />
  <main class="container mx-auto p-4">
    <router-view />
  </main>
  <TheFooter />
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';
import BreadcrumbNavigation from './components/nav/BreadcrumbNavigation.vue';
import TheFooter from './components/TheFooter.vue';
export default {
  name: 'App',
  components: {
    TheNavigation,
    TheFooter,
    BreadcrumbNavigation,
  },
};
</script>

<style></style>
