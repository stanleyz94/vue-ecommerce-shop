<template>
  <BaseCheckbox
    :availableProducts="this.testNumberOfProducts"
    label="W sprzedaży przez internet"
    v-model="exampleArr"
    value="W sprzedaży przez internet"
  />
</template>

<script>
import BaseCheckbox from './BaseCheckbox';

export default {
  components: {
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
