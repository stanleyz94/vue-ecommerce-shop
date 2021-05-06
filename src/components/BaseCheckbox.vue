<template>
  <label class="flex justify-between items-center  mb-2 relative" :for="value">
    <span class="flex-grow">
      <slot>{{ label }} </slot></span
    >
    <span class="mr-5">{{ availableProducts }}</span>
    <input
      type="checkbox"
      class="flex w-full h-7 opacity-0 absolute"
      :checked="isChecked"
      :value="value"
      @change="onChange"
    />

    <div
      class="flex w-7 h-7 justify-center items-center border rounded-md border-gray-800 "
    >
      <BaseIcon
        imageUrl="check"
        class="h-4 w-4 fill-current hidden  text-white pointer-events-none "
      />
    </div>
  </label>
</template>

<script>
import BaseIcon from './BaseIcon';

export default {
  components: {
    BaseIcon,
  },

  props: {
    value: {
      default: null,
      type: [String, Number],
    },
    modelValue: [Array],
    label: { type: String },
    availableProducts: { default: null, type: Number },
  },
  computed: {
    isChecked() {
      return this.modelValue.includes(this.value);
    },
  },

  methods: {
    onChange() {
      const checked = this.modelValue;
      const found = checked.indexOf(this.value);
      if (found !== -1) {
        checked.splice(found, 1);
      } else {
        checked.push(this.value);
      }
    },
  },
};
</script>

<style></style>
