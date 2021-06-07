<template>
  <li class="py-6">
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
      isListActive: this.$store.getters.getIsListActive.ModalDropdownSort,
      sortModalContainerItems: [
        {
          text: 'Od najniższej ceny',
          id: 'radio1',
          isChecked: false,
        },
        {
          text: 'Od najwyższej ceny',
          id: 'radio2',
          isChecked: false,
        },
        {
          text: 'Najnowszy',
          id: 'radio3',
          isChecked: false,
        },
        {
          text: 'Ocena',
          id: 'radio4',
          isChecked: false,
        },
        {
          text: 'Nazwa',
          id: 'radio5',
          isChecked: false,
        },

        {
          text: 'Szerokość',
          id: 'radio6',
          isChecked: false,
        },
        {
          text: 'Wysokość',
          id: 'radio7',
          isChecked: false,
        },
        {
          text: 'Głębokość',
          id: 'radio8',
          isChecked: false,
        },
      ],
      sortValue: '',
    };
  },
  methods: {
    onChange() {
      let checked = this.sortValue;
      this.$store.commit('setFiltersValues', { sortedValue: checked });
    },
  },
  computed: {
    sortedValueItems() {
      return this.$store.getters.getItemProperty('sortedValue');
    },
  },

  watch: {
    sortedValueItems: {
      deep: true,
      handler(value) {
        if (!value) {
          this.sortValue = '';
        }
      },
    },
  },
  created() {
    this.sortValue = this.sortedValueItems;
  },
};
</script>

<style></style>
