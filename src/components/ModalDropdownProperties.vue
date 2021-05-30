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
        :availableProducts="this.testNumberOfProducts"
        label="Możliwość dostosowania"
        v-model="filteredProperties"
        value="Możliwość dostosowania"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Półki"
        v-model="filteredProperties"
        value="Półki"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Miękkie domykanie"
        v-model="filteredProperties"
        value="Miękkie domykanie"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Kosze druciane i siatkowe"
        v-model="filteredProperties"
        value="Kosze druciane i siatkowe"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Szuflady"
        v-model="filteredProperties"
        value="Szuflady"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Półki szklane"
        v-model="filteredProperties"
        value="Półki szklane"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Szuflady szklane"
        v-model="filteredProperties"
        value="Szuflady szklane"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Półki na buty"
        v-model="filteredProperties"
        value="Półki na buty"
        @change="onChange()"
      />

      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane stopki"
        v-model="filteredProperties"
        value="Regulowane stopki"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Nogi"
        v-model="filteredProperties"
        value="Nogi"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane drązki na ubrania"
        v-model="filteredProperties"
        value="Regulowane drązki na ubrania"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane nóżki"
        v-model="filteredProperties"
        value="Regulowane nóżki"
        @change="onChange()"
      />
    </div>
  </div>
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

      this.$store.commit('setFiltersValues3', {
        propertyType: checked,
      });
    },
  },
  computed: {
    propertyTypeItems() {
      return this.$store.getters.getItemProperty('propertyType');
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
