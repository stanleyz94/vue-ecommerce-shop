<template>
  <teleport to="body">
    <div class="bg-gray-500 bg-opacity-70 fixed inset-0">
      <div class="w-full h-full border  bottom-0 top-6 absolute bg-white">
        <div class="flex justify-end p-5 ">
          <button @click="this.$emit('hide-modal')">
            <BaseIcon class="w-5 h-5" imageUrl="close" />
          </button>
        </div>
        <div class="h-5/6 overflow-y-auto  overflow-x-hidden ">
          <ul class="space-y-5 px-9">
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
            <li v-for="items in 10" :key="items">
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
        </div>
        <div class="flex justify-around p-5 border-t-2">
          <button
            disabled
            class="bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300 disabled:opacity-50 rounded-full font-bold text-xs px-9 py-2.5"
          >
            Wyczyść wszystko
          </button>
          <button
            class="bg-black text-white hover:opacity-80  rounded-full font-bold text-xs px-9 py-2.5 "
          >
            144 wyświetleń
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import BaseIcon from './BaseIcon';
export default {
  inject: ['sortContainerVariables'],
  emits: ['hide-modal'],
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
