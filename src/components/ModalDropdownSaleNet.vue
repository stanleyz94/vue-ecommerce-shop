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
      this.$store.commit('setFiltersValues3', { saleOnline: e.target.checked });
    },
  },
};
</script>

<style></style>
