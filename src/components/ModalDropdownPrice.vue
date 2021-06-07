<template>
  <li class="py-6">
    <button
      @click="isListActive = !isListActive"
      class="flex w-full justify-between "
    >
      <span class="flex flex-col items-start  flex-wrap	">
        <span>Cena</span>
        <span
          v-if="priceTypeItems.length >= 1"
          class="text-xs text-left	break-words	"
        >
          {{ priceTypeItems.join(', ') }}</span
        >
      </span>
      <BaseIcon
        class="w-6 h-6 flex-shrink-0"
        :imageUrl="isListActive ? 'chevron-up' : 'chevron-down'"
      />
    </button>

    <div
      :class="
        isListActive
          ? 'opacity-100 visible h-auto p-7 space-y-5'
          : 'h-0 opacity-0 invisible overflow-hidden'
      "
      class="transition duration-500 ease-in-out text-sm  bg-white "
    >
      <div class="space-y-5">
        <BaseCheckbox
          :class="{
            'opacity-50': wardrobeAmount(0, 499) == 0 ? true : false,
          }"
          :disabled="wardrobeAmount(0, 499) == 0"
          :availableProducts="wardrobeAmount(0, 499)"
          label="0 - 499 zł"
          v-model="filteredPrice"
          value="0 - 499 zł"
          @change="onChange()"
        />
        <BaseCheckbox
          :class="{
            'opacity-50': wardrobeAmount(500, 999) == 0 ? true : false,
          }"
          :disabled="wardrobeAmount(500, 999) == 0"
          :availableProducts="wardrobeAmount(500, 999)"
          label="500 - 999 zł"
          v-model="filteredPrice"
          value="500 - 999 zł"
          @change="onChange()"
        />
        <BaseCheckbox
          :class="{
            'opacity-50': wardrobeAmount(1000, 1499) == 0 ? true : false,
          }"
          :disabled="wardrobeAmount(1000, 1499) == 0"
          :availableProducts="wardrobeAmount(1000, 1499)"
          label="1 000 - 1 499 zł"
          v-model="filteredPrice"
          value="1 000 - 1 499 zł"
          @change="onChange()"
        />
        <BaseCheckbox
          :class="{
            'opacity-50': wardrobeAmount(1500, 1999) == 0 ? true : false,
          }"
          :disabled="wardrobeAmount(1500, 1999) == 0"
          :availableProducts="wardrobeAmount(1500, 1999)"
          label="1 500 - 1 999 zł"
          v-model="filteredPrice"
          value="1 500 - 1 999 zł"
          @change="onChange()"
        />
        <BaseCheckbox
          :class="{
            'opacity-50': wardrobeAmount(2000, 100000) == 0 ? true : false,
          }"
          :disabled="wardrobeAmount(2000, 100000) == 0"
          :availableProducts="wardrobeAmount(2000, 100000)"
          label="2 000+ zł"
          v-model="filteredPrice"
          value="2 000+ zł"
          @change="onChange()"
        />
      </div>
    </div>
  </li>
</template>

<script>
import BaseIcon from './BaseIcon';
import BaseCheckbox from './BaseCheckbox';

export default {
  components: {
    BaseIcon,
    BaseCheckbox,
  },

  data() {
    return {
      isListActive: this.$store.getters.getIsListActive.ModalDropdownPrice,
      filteredPrice: [],
    };
  },
  methods: {
    onChange() {
      let checked = [...this.filteredPrice];
      this.$store.commit('setFiltersValues', { price: checked });
    },
    wardrobeAmount(minValue, maxValue) {
      let searchedWardrobe = this.wardrobesFiltered.filter((wardrobe) => {
        return wardrobe.price >= minValue && wardrobe.price <= maxValue;
      });
      return searchedWardrobe.length;
    },
  },

  computed: {
    priceTypeItems() {
      return this.$store.getters.getItemProperty('price');
    },
    wardrobesFiltered() {
      return this.$store.getters.loadFilters;
    },
  },

  watch: {
    priceTypeItems: {
      deep: true,
      handler(value) {
        if (value.length == 0) {
          this.filteredPrice = [];
        }
      },
    },
  },
  created() {
    this.filteredPrice = this.priceTypeItems;
  },
};
</script>

<style></style>
