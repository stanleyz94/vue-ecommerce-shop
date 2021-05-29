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

  computed: {
    newestItems() {
      return this.$store.getters.getItemProperty('newest');
    },
  },

  watch: {
    newestItems: {
      deep: true,
      handler(value) {
        if (!value) {
          this.filteredNewest = [];
        }
      },
    },
  },
};
</script>

<style></style>
