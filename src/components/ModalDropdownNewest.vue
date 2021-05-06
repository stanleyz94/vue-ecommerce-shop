<template>
  <BaseCheckbox
    :availableProducts="this.testNumberOfProducts"
    label="Nowość"
    v-model="exampleArr"
    value="Nowość"
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
