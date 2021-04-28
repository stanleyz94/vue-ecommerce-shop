<template>
  <teleport to="body">
    <div class="bg-gray-500 bg-opacity-70 fixed inset-0  ">
      <div class="my-5 border px-5  bg-white">
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
                  type="radio"
                />
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

            <div
              class="transition duration-500 ease-in-out text-sm  bg-white opacity-100 visible h-auto py-7 space-y-5"
            >
              <span class="font-bold">Szerokość</span>
              <label
                class="flex cursor-pointer items-center px-7"
                for="item.id"
              >
                <span>0.99 cm</span>

                <input
                  class="hidden"
                  id="item.id"
                  name="radioSort"
                  type="radio"
                />

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

            <div
              class="transition duration-500 ease-in-out text-sm  bg-white opacity-100 visible h-auto py-7 space-y-5"
            >
              <span class="font-bold">Szerokość</span>

              <label class="flex items-center text-xs    " for="test">
                <span class="px-9 mr-auto">0.99 cm </span>
                <span class="mr-6">4</span>
                <input
                  type="checkbox"
                  class="w-full h-7 opacity-0 absolute cursor-pointer"
                  value="item"
                />
                <div
                  class="flex w-5 h-5 justify-center items-center border rounded-md border-gray-800 "
                >
                  <BaseIcon
                    imageUrl="check"
                    class="h-3 w-3 fill-current hidden  text-white pointer-events-none "
                  />
                </div>
              </label>
            </div>
          </li>

          <!---T test --->
        </ul>
        <button @click="testowanko">KLIK</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import BaseIcon from './BaseIcon';
export default {
  inject: ['sortContainerVariables'],
  data() {
    return {
      isListActive: false,
      sortModalContainerItems: this.sortContainerVariables,
      sizeContainerItems: [
        {
          header: 'Szerokość',
          isActive: false,
          nestedList: [
            { text: 'Zaloguj się', url: '#' },
            { text: 'Znajdź swoje zamówienie', url: '#' },
            { text: 'Zmień datę dostawy zamówienia', url: '#' },
            { text: 'Anuluj zamówienie', url: '#' },
            { text: 'Faktury', url: '#' },
            { text: 'Zwroty', url: '#' },
            { text: 'Gwarancje', url: '#' },
            { text: 'Reklamacje', url: '#' },
            { text: 'Sprawdź swoją reklamację na czacie', url: '#' },
            { text: 'Wycofane produkty', url: '#' },
            { text: 'Bezpieczeństwo w domu', url: '#' },
            { text: 'Wsparcie produktowe', url: '#' },
            { text: 'Regulaminy', url: '#' },
            { text: 'Kontakt', url: '#' },
          ],
        },
      ],
    };
  },

  methods: {
    testowanko() {
      //   this.$globalVariable = !this.$globalVariable;
      //   this.sortContainerItems = !this.sortContainerItems;
      console.log(this.sortContainerVariables);
      //   console.log(this.$globalVariable);
    },
  },
  components: {
    BaseIcon,
  },
};
</script>

<style scoped></style>
