<template>
  <BaseCheckbox
    :availableProducts="this.testNumberOfProducts"
    label="Nowość"
    value="Nowość"
    v-model="filteredNewest"
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
      filteredNewest: [],
    };
  },
  methods: {
    onChange(e) {
      this.$store.commit('setFiltersValues3', { newest: e.target.checked });
    },
  },
};
</script>

<style></style>
