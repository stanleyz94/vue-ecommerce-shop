<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between "
  >
    <span class="flex flex-col items-start  flex-wrap	">
      <span>Właściwości</span>
      <span v-if="exampleArr.length >= 1" class="text-xs text-left	break-words	">
        {{ exampleArr.join(', ') }}</span
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
        v-model="filtersValues.value"
        value="Możliwość dostosowania"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Półki"
        v-model="filtersValues.value"
        value="Półki"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Miękkie domykanie"
        v-model="filtersValues.value"
        value="Miękkie domykanie"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Kosze druciane i siatkowe"
        v-model="filtersValues.value"
        value="Kosze druciane i siatkowe"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Szuflady"
        v-model="exampleArr"
        value="Szuflady"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Półki szklane"
        v-model="exampleArr"
        value="Półki szklane"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Szuflady szklane"
        v-model="exampleArr"
        value="Szuflady szklane"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Półki na buty"
        v-model="exampleArr"
        value="Półki na buty"
      />

      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane stopki"
        v-model="exampleArr"
        value="Regulowane stopki"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Nogi"
        v-model="exampleArr"
        value="Nogi"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane drązki na ubrania"
        v-model="exampleArr"
        value="Regulowane drązki na ubrania"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Regulowane nóżki"
        v-model="exampleArr"
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
  inject: ['testNumberOfProducts', 'filtersValues'],
  data() {
    return {
      isListActive: false,
      exampleArr: [],
      exampleArr2: [],
    };
  },

  beforeUpdate() {
    this.exampleArr = this.exampleArr2;
    // this.exampleArr.forEach((x) => this.exampleArr2.push(x));
    console.log(this.exampleArr2);
  },
};
</script>

<style></style>
