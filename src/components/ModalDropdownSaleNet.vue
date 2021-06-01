<template>
  <BaseCheckbox
    :availableProducts="this.testNumberOfProducts"
    label="W sprzedaży przez internet"
    v-model="onSaleOnline"
    value="W sprzedaży przez internet"
    @change="onChange($event)"
  />
</template>

<script>
import BaseCheckbox from './BaseCheckbox';

export default {
  components: {
    BaseCheckbox,
  },
  inject: ['testNumberOfProducts'],
  data() {
    return {
      isListActive: false,
      onSaleOnline: [],
    };
  },
  methods: {
    onChange(e) {
      this.$store.commit('setFiltersValues', { saleOnline: e.target.checked });
    },
  },
  computed: {
    onSaleOnlineItems() {
      return this.$store.getters.getItemProperty('saleOnline');
    },
  },

  watch: {
    onSaleOnlineItems: {
      deep: true,
      handler(value) {
        if (!value) {
          this.onSaleOnline = [];
        }
      },
    },
  },
};
</script>

<style></style>
