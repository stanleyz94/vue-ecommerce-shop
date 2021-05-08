<template>
  <div
    v-if="store.filtersValues.value.length >= 1"
    class="flex items-center  py-7 flex-wrap border-b-2 border-gray-100"
  >
    <button
      v-for="(item, index) in store.filtersValues.value"
      :key="index"
      @click="store.filtersValues.value.splice(index, 1)"
      aria-label="Aktywuj wybór porównania produktów"
      class="inline-flex items-center whitespace-nowrap border border-black bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-7 py-2.5 mt-5 mr-5"
    >
      <BaseIcon class="h-4 w-4 mr-2.5" imageUrl="close" />
      <span class="text-sm">{{ item }}</span>
    </button>

    <button
      v-if="store.filtersValues.value.length > 1"
      @click="store.filtersValues.value.length = 0"
      aria-label="Aktywuj wybór porównania produktów"
      class="inline-flex items-center whitespace-nowrap  bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-7 py-2.5 mt-5 mr-5"
    >
      <span class="text-sm">Usuń wszystko</span>
    </button>

    {{ store.filtersValues.value }}
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';
import { inject } from 'vue';
export default {
  components: {
    BaseIcon,
  },

  //   inject: ['store'],
  data() {
    return {
      testItems: [
        'Drzwi Na Zawiasach',
        'Drzwi Lustrzane',
        'Drzwi Przesuwane',
        'Ocena 5',
        'Beżowy',
        'Brązowy',
        'Szerokość 100 - 199 Cm',
      ],
    };
  },
  setup() {
    const store = inject('store');
    return {
      store,
    };
  },
};
</script>

<style></style>
