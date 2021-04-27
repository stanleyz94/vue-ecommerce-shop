<template>
  <div class="my-5 border">
    <BaseIcon class="flex ml-auto w-4 h-4 " imageUrl="close" />
    <ul class="space-y-5">
      <li>
        <button
          @click="isListActive = !isListActive"
          class="flex w-full justify-between"
        >
          <span>Sortuj</span>
          <BaseIcon imageUrl="chevron-down" />
        </button>

        <div
          :class="
            isListActive
              ? 'opacity-100 visible h-auto'
              : 'h-0 opacity-0 invisible overflow-hidden'
          "
          class="transition duration-500 ease-in-out text-sm  bg-white px-8 py-10 space-y-5"
        >
          <label
            v-for="item in sortModalContainerItems"
            :key="item.id"
            class="flex cursor-pointer items-center"
            :for="item.id"
          >
            <span>{{ item.text }}</span>
            <input class="hidden" :id="item.id" name="radioSort" type="radio" />
            <div
              class="flex ml-auto w-5 h-5  border border-gray-600 rounded-full "
            ></div>
          </label>
        </div>
      </li>
      <li>
        <button class="flex w-full justify-between">
          <span>Rozmiar</span>
          <BaseIcon imageUrl="chevron-down" />
        </button>

        <ul>
          <li>
            <p>Szerokość</p>
            <span>0 - 99cm</span>
            <p>Wysokość</p>
            <span>0 - 179cm</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';
export default {
  data() {
    return {
      isListActive: false,
      sortModalContainerItems: [
        {
          text: 'Najbardziej pasuje',
          id: 'radio1',
          isChecked: false,
        },
        {
          text: 'Od najniższej ceny',
          id: 'radio2',
          isChecked: false,
        },
        {
          text: 'Od najwyższej ceny',
          id: 'radio3',
          isChecked: false,
        },
        {
          text: 'Najnowszy',
          id: 'radio4',
          isChecked: false,
        },
        {
          text: 'Ocena',
          id: 'radio5',
          isChecked: false,
        },
        {
          text: 'Nazwa',
          id: 'radio6',
          isChecked: false,
        },
        {
          text: 'Najbardziej popularny',
          id: 'radio7',
          isChecked: false,
        },
        {
          text: 'Szerokość',
          id: 'radio8',
          isChecked: false,
        },
        {
          text: 'Wysokość',
          id: 'radio9',
          isChecked: false,
        },
        {
          text: 'Głębokość',
          id: 'radio10',
          isChecked: false,
        },
      ],
    };
  },
  components: {
    BaseIcon,
  },
};
</script>

<style></style>
