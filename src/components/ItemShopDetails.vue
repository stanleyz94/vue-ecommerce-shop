<template>
  <h1>Shop</h1>
  <h2>{{ id }}</h2>
  <h3>{{ item }}</h3>
  <h4>{{ $store.getters.loadItemById(`${id}`) }}</h4>
  <h5>{{ loadItems }}</h5>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      item: {},
    };
  },
  watch: {
    $route(to, from) {
      console.log('to', to);
      console.log('from', from);
    },
  },
  computed: {
    loadItems() {
      return this.$store.getters.loadItemById(this.id);
    },
  },
  created() {
    // console.log(this.id);
    // this.item = this.$store.getters.loadItemById(this.id);
    // console.log(this.item);
  },
};
</script>

<style></style>
