<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between "
  >
    <span class="flex flex-col items-start  flex-wrap	">
      <span>Cena</span>
      <span
        v-if="filteredPrice.length >= 1"
        class="text-xs text-left	break-words	"
      >
        {{ filteredPrice.join(', ') }}</span
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
        label="0 - 499 zł"
        v-model="filteredPrice"
        value="0 - 499 zł"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="500 - 999 zł"
        v-model="filteredPrice"
        value="500 - 999 zł"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="1 000 - 1 499 zł"
        v-model="filteredPrice"
        value="1 000 - 1 499 zł"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="1 500 - 1 999 zł"
        v-model="filteredPrice"
        value="1 500 - 1 999 zł"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="2 000+ zł"
        v-model="filteredPrice"
        value="2 000+ zł"
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
  inject: ['testNumberOfProducts'],
  data() {
    return {
      isListActive: false,
      filteredPrice: [],
    };
  },
  methods: {
    onChange() {
      let checked = [...this.filteredPrice];
      this.$store.commit('setFiltersValues3', { price: checked });
    },
  },
};
</script>

<style></style>
