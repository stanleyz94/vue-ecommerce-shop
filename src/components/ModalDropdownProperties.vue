<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between "
  >
    <span class="flex flex-col items-start  flex-wrap	">
      <span>Właściwości</span>
      <span
        v-if="propertyTypeItems.length >= 1"
        class="text-xs text-left	break-words	"
      >
        {{ propertyTypeItems.join(', ') }}</span
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
          'opacity-50':
            wardrobeAmount('Możliwość dostosowania') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Możliwość dostosowania') == 0"
        :availableProducts="wardrobeAmount('Możliwość dostosowania')"
        label="Możliwość dostosowania"
        v-model="filteredProperties"
        value="Możliwość dostosowania"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50': wardrobeAmount('Półki') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Półki') == 0"
        :availableProducts="wardrobeAmount('Półki')"
        label="Półki"
        v-model="filteredProperties"
        value="Półki"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50': wardrobeAmount('Miękkie domykanie') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Miękkie domykanie') == 0"
        :availableProducts="wardrobeAmount('Miękkie domykanie')"
        label="Miękkie domykanie"
        v-model="filteredProperties"
        value="Miękkie domykanie"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50':
            wardrobeAmount('Kosze druciane i siatkowe') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Kosze druciane i siatkowe') == 0"
        :availableProducts="wardrobeAmount('Kosze druciane i siatkowe')"
        label="Kosze druciane i siatkowe"
        v-model="filteredProperties"
        value="Kosze druciane i siatkowe"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50': wardrobeAmount('Szuflady') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Szuflady') == 0"
        :availableProducts="wardrobeAmount('Szuflady')"
        label="Szuflady"
        v-model="filteredProperties"
        value="Szuflady"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50': wardrobeAmount('Półki szklane') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Półki szklane') == 0"
        :availableProducts="wardrobeAmount('Półki szklane')"
        label="Półki szklane"
        v-model="filteredProperties"
        value="Półki szklane"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50': wardrobeAmount('Szuflady szklane') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Szuflady szklane') == 0"
        :availableProducts="wardrobeAmount('Szuflady szklane')"
        label="Szuflady szklane"
        v-model="filteredProperties"
        value="Szuflady szklane"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50': wardrobeAmount('Półki na buty') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Półki na buty') == 0"
        :availableProducts="wardrobeAmount('Półki na buty')"
        label="Półki na buty"
        v-model="filteredProperties"
        value="Półki na buty"
        @change="onChange()"
      />

      <BaseCheckbox
        :class="{
          'opacity-50': wardrobeAmount('Regulowane stopki') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Regulowane stopki') == 0"
        :availableProducts="wardrobeAmount('Regulowane stopki')"
        label="Regulowane stopki"
        v-model="filteredProperties"
        value="Regulowane stopki"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50': wardrobeAmount('Nogi') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Nogi') == 0"
        :availableProducts="wardrobeAmount('Nogi')"
        label="Nogi"
        v-model="filteredProperties"
        value="Nogi"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50':
            wardrobeAmount('Regulowane drązki na ubrania') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Regulowane drązki na ubrania') == 0"
        :availableProducts="wardrobeAmount('Regulowane drązki na ubrania')"
        label="Regulowane drązki na ubrania"
        v-model="filteredProperties"
        value="Regulowane drązki na ubrania"
        @change="onChange()"
      />
      <BaseCheckbox
        :class="{
          'opacity-50': wardrobeAmount('Regulowane nóżki') == 0 ? true : false,
        }"
        :disabled="wardrobeAmount('Regulowane nóżki') == 0"
        :availableProducts="wardrobeAmount('Regulowane nóżki')"
        label="Regulowane nóżki"
        v-model="filteredProperties"
        value="Regulowane nóżki"
        @change="onChange()"
      />
    </div>
  </div>
  <input type="text" :disabled="true" />
</template>

<script>
import BaseIcon from './BaseIcon';
import BaseCheckbox from './BaseCheckbox';

export default {
  components: {
    BaseIcon,
    BaseCheckbox,
  },
  inject: ['testNumberOfProducts', 'store'],
  data() {
    return {
      isListActive: this.$store.getters.getIsListActive.ModalDropdownProperties,
      filteredProperties: [],
    };
  },
  methods: {
    onChange() {
      let checked = [...this.filteredProperties];

      this.$store.commit('setFiltersValues', {
        propertyType: checked,
      });
    },
    wardrobeAmount(value) {
      let searchedWardrobe = this.wardrobesFiltered.filter((wardrobe) => {
        return wardrobe.propertyType == value;
      });
      return searchedWardrobe.length;
    },
  },
  computed: {
    propertyTypeItems() {
      return this.$store.getters.getItemProperty('propertyType');
    },
    wardrobesFiltered() {
      return this.$store.getters.loadFilters;
    },
  },

  watch: {
    propertyTypeItems: {
      deep: true,
      handler(value) {
        if (value.length == 0) {
          this.filteredProperties = [];
        }
      },
    },
  },
};
</script>

<style></style>
