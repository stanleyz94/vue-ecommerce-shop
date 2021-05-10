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
        v-model="filteredProperties"
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
        v-model="filteredProperties"
        value="Regulowane stopki"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Nogi"
        v-model="filteredProperties"
        value="Nogi"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane drązki na ubrania"
        v-model="filteredProperties"
        value="Regulowane drązki na ubrania"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane nóżki"
        v-model="filteredProperties"
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

  beforeUpdate() {
    this.store.filtersValues.value = [...this.filteredProperties];
    console.log(this.store.filtersValues.value);
    //testing
    localStorage.setItem(
      'filtersValues',
      JSON.stringify(this.filteredProperties)
    );
    //testing
  },
};
</script>

<style></style>
