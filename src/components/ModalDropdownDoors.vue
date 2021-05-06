<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between"
  >
    <span class="flex flex-col items-start">
      <span>Drzwi</span>
      <span v-if="exampleArr.length >= 1" class="text-xs text-left	">
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
        label="Drzwi na zawiasach"
        v-model="exampleArr"
        value="Drzwi na zawiasach"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Drzwi przesuwane"
        v-model="exampleArr"
        value="Drzwi przesuwane"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Drzwi lustrzane"
        v-model="exampleArr"
        value="Drzwi lustrzane"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Drzwi szklane"
        v-model="exampleArr"
        value="Drzwi szklane"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Bez drzwi"
        v-model="exampleArr"
        value="Bez drzwi"
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
      exampleArr: [],
    };
  },
};
</script>

<style></style>
