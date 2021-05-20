<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between"
  >
    <span>Sortuj</span>
    <BaseIcon :imageUrl="isListActive ? 'chevron-up' : 'chevron-down'" />
  </button>

  <div
    :class="
      isListActive
        ? 'opacity-100 visible h-auto px-8 py-10 space-y-5'
        : 'h-0 opacity-0 invisible overflow-hidden'
    "
    class="transition duration-500 ease-in-out text-sm  bg-white "
  >
    <label
      v-for="item in sortModalContainerItems"
      :key="item.id"
      class="flex cursor-pointer items-center"
      :for="item.id"
    >
      <span>{{ item.text }}</span>
      <input
        class="hidden"
        :id="item.id"
        name="radioSort"
        :value="item.text"
        v-model="sortValue"
        type="radio"
        @change="onChange()"
      />
      <div
        class="flex ml-auto w-5 h-5  border border-gray-600 rounded-full "
      ></div>
    </label>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';
export default {
  components: {
    BaseIcon,
  },
  inject: ['sortContainerVariables'],
  data() {
    return {
      isListActive: false,
      sortModalContainerItems: this.sortContainerVariables,
      sortValue: '',
    };
  },
  methods: {
    onChange() {
      let checked = this.sortValue;
      this.$store.commit('setFiltersValues3', { sortedValue: checked });
    },
  },
};
</script>

<style></style>
