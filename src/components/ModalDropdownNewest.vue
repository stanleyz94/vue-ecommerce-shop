<template>
  <BaseCheckbox
    :class="{
      'opacity-50': wardrobeAmount() == 0 ? true : false,
    }"
    :disabled="wardrobeAmount() == 0"
    :availableProducts="wardrobeAmount()"
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
      this.$store.commit('setFiltersValues', { newest: e.target.checked });
    },
    wardrobeAmount() {
      let searchedWardrobe = this.wardrobesFiltered.filter((wardrobe) => {
        return wardrobe.newest == true;
      });
      return searchedWardrobe.length;
    },
  },

  computed: {
    newestItems() {
      return this.$store.getters.getItemProperty('newest');
    },
    wardrobesFiltered() {
      return this.$store.getters.loadFilters;
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
  created() {
    if (this.newestItems) {
      this.filteredNewest.push('Nowość');
    }
  },
};
</script>

<style></style>
