<template>
  <li class="py-6">
    <BaseCheckbox
      :class="{
        'opacity-50': wardrobeAmount() == 0 ? true : false,
      }"
      :disabled="wardrobeAmount() == 0"
      :availableProducts="wardrobeAmount()"
      label="W sprzedaży przez internet"
      v-model="onSaleOnline"
      value="W sprzedaży przez internet"
      @change="onChange($event)"
    />
  </li>
</template>

<script>
import BaseCheckbox from './BaseCheckbox';

export default {
  components: {
    BaseCheckbox,
  },

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
    wardrobeAmount() {
      let searchedWardrobe = this.wardrobesFiltered.filter((wardrobe) => {
        return wardrobe.saleOnline == true;
      });
      return searchedWardrobe.length;
    },
  },
  computed: {
    onSaleOnlineItems() {
      return this.$store.getters.getItemProperty('saleOnline');
    },
    wardrobesFiltered() {
      return this.$store.getters.loadFilters;
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
  created() {
    if (this.onSaleOnlineItems) {
      this.onSaleOnline.push('W sprzedaży przez internet');
    }
  },
};
</script>

<style></style>
