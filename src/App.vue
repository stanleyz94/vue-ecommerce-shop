<template>
  <TheNavigation />
  <main class="container mx-auto p-4">
    <router-view />
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    TheNavigation,
  },
};
</script>

<style></style>
