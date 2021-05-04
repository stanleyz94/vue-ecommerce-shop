<template>
  <teleport to="body">
    <div class="bg-gray-500 bg-opacity-70 fixed inset-0">
      <transition
        appear
        enter-active-class="transition duration-500 "
        leave-active-class="transition duration-500 "
        enter-from-class="transform translate-y-full lg:translate-x-full lg:translate-y-0"
      >
        <div
          class="w-full flex flex-col border bottom-0 lg:right-0 lg:bottom-0 lg:top-0 lg:w-4/12 top-6 absolute bg-white rounded"
        >
          <div class="flex justify-end p-5 ">
            <button @click="this.$emit('hide-modal')">
              <BaseIcon class="w-5 h-5" imageUrl="close" />
            </button>
          </div>
          <div class=" overflow-y-auto overflow-x-hidden ">
            <ul class="space-y-5 px-9">
              <li>
                <ModalDropdownSort />
              </li>

              <li>
                <ModalDropdownSize />
              </li>

              <li>
                <ModalDropdownColor />
              </li>

              <!---T test --->
              <div class="bg-red-500">
                t
                <hr class="" />
              </div>
              <li v-for="item in 10" :key="item">
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
            </ul>
          </div>
          <div class="flex w-auto justify-around py-2.5  border-t-2">
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
      </transition>
    </div>
  </teleport>
</template>

<script>
import BaseIcon from './BaseIcon';

import ModalDropdownSort from './ModalDropdownSort';
import ModalDropdownSize from './ModalDropdownSize';
import ModalDropdownColor from './ModalDropdownColor';
export default {
  inject: ['sortContainerVariables', 'testNumberOfProducts'],

  emits: ['hide-modal'],
  data() {
    return {
      products: [],
      exampleArr: [],
      isListActive: false,
      sortModalContainerItems: this.sortContainerVariables,
      modalAccordionItems: [
        {
          span: 'Sortuj',
          isActive: false,
        },
        {
          span: 'Rozmiar',
          isActive: false,
        },
        {
          span: 'Kolor',
          isActive: false,
        },
        {
          span: 'Drzwi',
          isActive: false,
        },
        {
          span: 'Właściwości',
          isActive: false,
        },
        {
          span: 'Cena',
          isActive: false,
        },
        {
          span: 'W sprzedaży przez internet',
          isActive: false,
        },
        {
          span: 'Materiał',
          isActive: false,
        },
        {
          span: 'Nowość',
          isActive: false,
        },
        {
          span: 'Ocena',
          isActive: false,
        },
      ],
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

    ModalDropdownSort,
    ModalDropdownSize,
    ModalDropdownColor,
  },
};
</script>

<style></style>
