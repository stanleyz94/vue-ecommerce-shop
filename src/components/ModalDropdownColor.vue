<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between"
  >
    <span>Kolor</span>

    <BaseIcon :imageUrl="isListActive ? 'chevron-up' : 'chevron-down'" />
  </button>
  <div
    class="transition duration-500 ease-in-out text-sm  bg-white opacity-100 visible h-auto p-7 space-y-5"
  >
    <label
      for="czarny"
      class="flex justify-between items-center  relative bg-green-700 w-16 h-16 hover:ring-1 hover:ring-gray-600 hover:ring-offset-2 rounded-full  cursor-pointer"
    >
      <input
        type="checkbox"
        value="czarny"
        v-model="testing"
        class="flex opacity-0 absolute h-full w-full "
      />
      <div></div>
    </label>
    <div
      class="bg-green-700 w-16 h-16 hover:ring-1 hover:ring-gray-600 hover:ring-offset-2 rounded-full  cursor-pointer"
    ></div>

    <label
      for="zielony"
      class="flex justify-between items-center relative bg-green-700 w-16 h-16  hover:ring-1 hover:ring-gray-600 hover:ring-offset-2 rounded-full "
    >
      <input
        id="rounded-color"
        type="checkbox"
        value="zielony"
        v-model="testing"
        class="flex opacity-0 absolute h-full w-full cursor-pointer"
      />
      <div class="flex w-16 h-16 justify-center items-center">
        <BaseIcon
          imageUrl="check"
          class="w-4 h-4 pointer-events-none hidden "
        />
      </div>
    </label>

    <label
      for="zolty"
      class="flex justify-between items-center relative bg-yellow-100	 w-16 h-16  hover:ring-1 hover:ring-gray-600 hover:ring-offset-2 rounded-full "
    >
      <input
        id="rounded-color"
        type="checkbox"
        value="zolty"
        v-model="testing"
        class="flex opacity-0 absolute h-full w-full cursor-pointer"
      />
      <div class="flex w-16 h-16 justify-center items-center text-black">
        <BaseIcon imageUrl="check" class="w-4 h-4  fill-current text-black " />
      </div>
    </label>

    {{ testing }}
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      isListActive: false,
      testing: [],
    };
  },
};
</script>

<style></style>
