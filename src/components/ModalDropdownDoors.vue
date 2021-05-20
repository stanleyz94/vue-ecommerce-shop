<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between"
  >
    <span class="flex flex-col items-start">
      <span>Drzwi</span>
      <span v-if="filteredDoorType.length >= 1" class="text-xs text-left	">
        {{ filteredDoorType.join(', ') }}</span
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
        label="Drzwi na zawiasach"
        v-model="filteredDoorType"
        value="Drzwi na zawiasach"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Drzwi przesuwane"
        v-model="filteredDoorType"
        value="Drzwi przesuwane"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Drzwi lustrzane"
        v-model="filteredDoorType"
        value="Drzwi lustrzane"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Drzwi szklane"
        v-model="filteredDoorType"
        value="Drzwi szklane"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Bez drzwi"
        v-model="filteredDoorType"
        value="Bez drzwi"
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
      filteredDoorType: [],
    };
  },
  methods: {
    onChange() {
      let checked = [...this.filteredDoorType];

      this.$store.commit('setFiltersValues3', {
        doorType: checked,
      });
    },
  },
};
</script>

<style></style>
