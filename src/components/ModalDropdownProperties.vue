<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between "
  >
    <span class="flex flex-col items-start  flex-wrap	">
      <span>Właściwości</span>
      <span
        v-if="filteredProperties.length >= 1"
        class="text-xs text-left	break-words	"
      >
        {{ filteredProperties.join(', ') }}</span
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
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Półki"
        v-model="filteredProperties2"
        value="Półki"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Miękkie domykanie"
        v-model="filteredProperties"
        value="Miękkie domykanie"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Kosze druciane i siatkowe"
        v-model="filteredProperties"
        value="Kosze druciane i siatkowe"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Szuflady"
        v-model="filteredProperties"
        value="Szuflady"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Półki szklane"
        v-model="filteredProperties"
        value="Półki szklane"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Szuflady szklane"
        v-model="filteredProperties"
        value="Szuflady szklane"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Półki na buty"
        v-model="filteredProperties"
        value="Półki na buty"
      />

      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane stopki"
        v-model="filteredProperties3"
        value="Regulowane stopki"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Nogi"
        v-model="filteredProperties3"
        value="Nogi"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane drązki na ubrania"
        v-model="filteredProperties2"
        value="Regulowane drązki na ubrania"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane nóżki"
        v-model="filteredProperties2"
        @input="onChange()"
        value="Regulowane nóżki"
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
      isListActive: false,
      filteredProperties: [],
    };
  },

  mounted() {
    // this.filteredProperties.push('Możliwość dostosowania');
  },
  beforeUpdate() {
    this.store.filtersValues.value = [...this.filteredProperties];
    console.log();
    // console.log(this.store.filtersValues.value);
    //testing

    // this.$store.dispatch('setFiltersValues', this.filteredProperties);
    // console.log(this.$store.state.filtersValues);
    //testing
  },

  methods: {
    onChange() {
      //   this.$store.dispatch('setFiltersValues', this.filteredProperties);
      console.log(
        'store.state.filtersValues: ' + this.$store.state.filtersValues
      );
      console.log('filteredProperties: ' + this.filteredProperties);
      //   localStorage.setItem(
      //     'filtersValues',
      //     JSON.stringify(this.filteredProperties)
      //   );
    },
  },
  computed: {
    filteredProperties2: {
      get() {
        return this.$store.state.filtersValues;
      },
      set(value) {
        this.$store.dispatch('setFiltersValues', value);

        // this.$store.dispatch('setFiltersValues', val);
        // localStorage.setItem('filtersValues', JSON.stringify(val));
      },
    },
    filteredProperties3: {
      get() {
        return this.$store.state.filteredValues.propertyType;
      },
      set(value) {
        this.$store.dispatch('setFiltersValues', value, 'propertyType');

        // this.$store.dispatch('setFiltersValues', val);
        // localStorage.setItem('filtersValues', JSON.stringify(val));
      },
    },
  },
};
</script>

<style></style>
