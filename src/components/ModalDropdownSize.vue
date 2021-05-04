<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between"
  >
    <span>Rozmiar</span>

    <BaseIcon :imageUrl="isListActive ? 'chevron-up' : 'chevron-down'" />
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
      <h3 class="font-bold text-base -ml-7">Szerokość</h3>

      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="0 - 99 cm"
        v-model="exampleArr"
        value="0-99"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="100 - 199 cm"
        v-model="exampleArr"
        value="100-199"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="200 - 299 cm"
        v-model="exampleArr"
        value="200-299"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="300 - 399 cm"
        v-model="exampleArr"
        value="300-399"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="400+ cm"
        v-model="exampleArr"
        value="400+"
      />
    </div>

    <div class="space-y-5">
      <h3 class="font-bold text-base -ml-7">Wysokość</h3>

      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="0 - 179 cm"
        v-model="exampleArr"
        value="0-179"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="180 - 189 cm"
        v-model="exampleArr"
        value="180-189"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="190 - 199 cm"
        v-model="exampleArr"
        value="190-199"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="200 - 209 cm"
        v-model="exampleArr"
        value="200-209"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="210+ cm"
        v-model="exampleArr"
        value="210+"
      />
    </div>
    <div class="space-y-5">
      <h3 class="font-bold text-base -ml-7">Głębokość</h3>

      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="30 - 39 cm"
        v-model="exampleArr"
        value="30-39"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="40 - 49 cm"
        v-model="exampleArr"
        value="40-49"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="50 - 59 cm"
        v-model="exampleArr"
        value="50-59"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="60+ cm"
        v-model="exampleArr"
        value="60+"
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
