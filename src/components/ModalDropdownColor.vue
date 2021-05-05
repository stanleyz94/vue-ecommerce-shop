<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between"
  >
    <span>Kolor</span>

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
    <div class="flex items-center justify-evenly flex-wrap ">
      <!---  Color without loop  -->
      <!-- <div class="flex flex-col items-center p-5">
        <label
          for="bialy"
          class="flex justify-between items-center relative bg-white ring-1 ring-gray-400 ring-offset-1	 w-16 h-16  hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 rounded-full "
        >
          <input
            id="bialy"
            type="checkbox"
            value="bialy"
            v-model="testing"
            class="rounded-color flex opacity-0 absolute h-full w-full cursor-pointer"
          />
          <span
            class="flex w-16 h-16 justify-center items-center  rounded-full"
          >
            <BaseIcon
              imageUrl="check"
              class="w-4 h-4  hidden fill-current text-black "
            />
          </span>
        </label>
        <div class="text-center mt-2">
          <span class="block">bialy</span>
          <span class="block">15</span>
        </div>
      </div>

      <div class="flex flex-col items-center p-5">
        <label
          for="bezowy"
          class="flex justify-between items-center relative bg-yellow-100	 w-16 h-16  hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 rounded-full "
        >
          <input
            id="bezowy"
            type="checkbox"
            value="bezowy"
            v-model="testing"
            class="rounded-color flex opacity-0 absolute h-full w-full cursor-pointer"
          />
          <span
            class="flex w-16 h-16 justify-center items-center  rounded-full"
          >
            <BaseIcon
              imageUrl="check"
              class="w-4 h-4  hidden fill-current text-black "
            />
          </span>
        </label>
        <div class="text-center mt-2">
          <span class="block">bezowy</span>
          <span class="block">15</span>
        </div>
      </div>

      <div class="flex flex-col items-center p-5">
        <label
          for="brazowy"
          class="flex justify-between items-center relative bg-yellow-800	 w-16 h-16  hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 rounded-full "
        >
          <input
            id="brazowy"
            type="checkbox"
            value="brazowy"
            v-model="testing"
            class="rounded-color flex opacity-0 absolute h-full w-full cursor-pointer "
          />
          <span class="flex w-16 h-16 justify-center items-center rounded-full">
            <BaseIcon
              imageUrl="check"
              class="w-4 h-4 pointer-events-none hidden "
            />
          </span>
        </label>
        <div class="text-center mt-2">
          <span class="block">brazowy</span>
          <span class="block">15</span>
        </div>
      </div>

      <div class="flex flex-col items-center p-5">
        <label
          for="szary"
          class="flex justify-between items-center relative bg-gray-400	 w-16 h-16  hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 rounded-full "
        >
          <input
            id="szary"
            type="checkbox"
            value="szary"
            v-model="testing"
            class="rounded-color flex opacity-0 absolute h-full w-full cursor-pointer "
          />
          <span class="flex w-16 h-16 justify-center items-center rounded-full">
            <BaseIcon
              imageUrl="check"
              class="w-4 h-4 pointer-events-none hidden "
            />
          </span>
        </label>
        <div class="text-center mt-2">
          <span class="block">szary</span>
          <span class="block">15</span>
        </div>
      </div>

      <div class="flex flex-col items-center p-5">
        <label
          for="czarny"
          class="flex justify-between items-center relative bg-black	 w-16 h-16  hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 rounded-full "
        >
          <input
            id="czarny"
            type="checkbox"
            value="czarny"
            v-model="testing"
            class="rounded-color flex opacity-0 absolute h-full w-full cursor-pointer "
          />
          <span class="flex w-16 h-16 justify-center items-center rounded-full">
            <BaseIcon
              imageUrl="check"
              class="w-4 h-4 pointer-events-none hidden "
            />
          </span>
        </label>
        <div class="text-center mt-2">
          <span class="block">czarny</span>
          <span class="block">15</span>
        </div>
      </div>

      <div class="flex flex-col items-center p-5">
        <label
          for="zielony"
          class="flex justify-between items-center relative bg-green-700 w-16 h-16  hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 rounded-full "
        >
          <input
            id="zielony"
            type="checkbox"
            value="zielony"
            v-model="testing"
            class="rounded-color flex opacity-0 absolute h-full w-full cursor-pointer "
          />
          <span class="flex w-16 h-16 justify-center items-center rounded-full">
            <BaseIcon
              imageUrl="check"
              class="w-4 h-4 pointer-events-none hidden "
            />
          </span>
        </label>
        <div class="text-center mt-2">
          <span class="block">zielony</span>
          <span class="block">15</span>
        </div>
      </div>

      <div class="flex flex-col items-center p-5">
        <label
          for="zolty"
          class="flex justify-between items-center relative bg-yellow-300	 w-16 h-16  hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 rounded-full "
        >
          <input
            id="zolty"
            type="checkbox"
            value="zolty"
            v-model="testing"
            class="rounded-color flex opacity-0 absolute h-full w-full cursor-pointer"
          />
          <span
            class="flex w-16 h-16 justify-center items-center  rounded-full"
          >
            <BaseIcon
              imageUrl="check"
              class="w-4 h-4  hidden fill-current text-black "
            />
          </span>
        </label>
        <div class="text-center mt-2">
          <span class="block">zolty</span>
          <span class="block">15</span>
        </div>
      </div>
 -->
      <!---  Color without loop  -->
      <div
        v-for="colorItem in colorItems"
        :key="colorItem"
        class="flex flex-col items-center p-5"
      >
        <label
          :for="colorItem.color"
          :class="colorItem.class"
          class="flex justify-between items-center relative  w-16 h-16  hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 rounded-full "
        >
          <input
            :id="colorItem.color"
            type="checkbox"
            :value="colorItem.color"
            v-model="testing"
            class="rounded-color flex opacity-0 absolute h-full w-full cursor-pointer"
          />
          <span
            class="flex w-16 h-16 justify-center items-center  rounded-full"
          >
            <BaseIcon
              imageUrl="check"
              :class="colorItem.blackCheckbox ? 'fill-current text-black' : ''"
              class="w-4 h-4 hidden "
            />
          </span>
        </label>
        <div class="text-center mt-2">
          <span class="block">{{ colorItem.color }}</span>
          <span class="block">15</span>
        </div>
      </div>
    </div>

    <span class="block">{{ testing }}</span>
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
      colorItems: [
        {
          color: 'bialy',
          class: 'bg-white ring-1 ring-gray-400 ring-offset-1',
          blackCheckbox: true,
        },
        {
          color: 'bezowy',
          class: 'bg-yellow-100',
          blackCheckbox: true,
        },
        {
          color: 'brazowy',
          class: 'bg-yellow-800',
          blackCheckbox: false,
        },
        {
          color: 'szary',
          class: 'bg-gray-400',
          blackCheckbox: false,
        },
        {
          color: 'czarny',
          class: 'bg-black',
          blackCheckbox: false,
        },
        {
          color: 'zielony',
          class: 'bg-green-700',
          blackCheckbox: false,
        },
        {
          color: 'zolty',
          class: 'bg-yellow-300',
          blackCheckbox: true,
        },
      ],
    };
  },
};
</script>

<style></style>
