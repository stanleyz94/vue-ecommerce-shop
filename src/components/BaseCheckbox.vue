<template>
  <label class="flex justify-between items-center mr-4 mb-2" for="item2">
    <span>Test</span>

    <input
      type="checkbox"
      class="flex w-5/6 h-7 opacity-0 absolute"
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
    },
    modelValue: [Array],
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
