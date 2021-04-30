<template>
  <label
    :for="fieldId"
    class="flex justify-between items-center  text-gray-800 cursor-pointer"
  >
    <span>{{ label }}</span>
    <input type="checkbox" :id="fieldId" class="ml-auto w-5 h-5 hidden" />
    <BaseIcon
      imageUrl="square-regular"
      class="text-blue-600 w-4 h-4 checked:text-red-500"
    />

    <!-- <i class="fas fa-check-square ml-auto text-blue-600"></i> -->
  </label>
</template>

<script>
import BaseIcon from './BaseIcon';

export default {
  components: { BaseIcon },
  props: {
    label: String,
    fieldId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
