<template>
  <li class="py-6">
    <button
      @click="isListActive = !isListActive"
      class="flex w-full justify-between"
    >
      <span class="flex flex-col items-start">
        <span>Kolor</span>
        <span v-if="colorTypeItems.length >= 1" class="text-xs text-left	">
          {{ colorTypeItems.join(', ') }}
        </span>
      </span>

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
        <div
          v-for="colorItem in colorItems"
          :key="colorItem.color"
          class="flex flex-col items-center p-5"
        >
          <label
            :for="colorItem.color"
            :class="colorItem.class"
            class="flex justify-between items-center relative  w-16 h-16  hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 rounded-full "
          >
            <input
              type="checkbox"
              :value="colorItem.color"
              v-model="filteredColors"
              @change="onChange()"
              class="rounded-color flex opacity-0 absolute h-full w-full cursor-pointer"
            />
            <span
              class="flex w-16 h-16 justify-center items-center  rounded-full"
            >
              <BaseIcon
                imageUrl="check"
                :class="
                  colorItem.blackCheckbox ? 'fill-current text-black' : ''
                "
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
    </div>
  </li>
</template>

<script>
import BaseIcon from '../BaseIcon';
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      isListActive: this.$store.getters.getIsListActive.ModalDropdownColor,
      filteredColors: [],
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
  methods: {
    onChange() {
      let checked = [...this.filteredColors];

      this.$store.commit('setFiltersValues', { color: checked });
    },
  },

  computed: {
    colorTypeItems() {
      return this.$store.getters.getItemProperty('color');
    },
  },

  watch: {
    colorTypeItems: {
      deep: true,
      handler(value) {
        if (value.length == 0) {
          this.filteredColors = [];
        }
      },
    },
  },
  created() {
    this.filteredColors = this.colorTypeItems;
  },
};
</script>

<style></style>
