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
          <div class="overflow-y-auto overflow-x-hidden flex-grow">
            <ul class="space-y-4 px-9">
              <li class="py-6">
                <ModalDropdownSort />
              </li>

              <li class="py-6">
                <ModalDropdownSize />
              </li>

              <li class="py-6">
                <ModalDropdownColor />
              </li>

              <li class="py-6">
                <ModalDropdownDoors />
              </li>

              <li class="py-6">
                <ModalDropdownProperties />
              </li>

              <li class="py-6">
                <ModalDropdownPrice />
              </li>

              <li class="py-6">
                <ModalDropdownSaleNet />
              </li>
              <li class="py-6">
                <ModalDropdownMaterial />
              </li>

              <li class="py-6">
                <ModalDropdownNewest />
              </li>

              <li class="py-6">
                <ModalDropdownRating />
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
import ModalDropdownDoors from './ModalDropdownDoors';
import ModalDropdownProperties from './ModalDropdownProperties';
import ModalDropdownPrice from './ModalDropdownPrice';
import ModalDropdownSaleNet from './ModalDropdownSaleNet';
import ModalDropdownMaterial from './ModalDropdownMaterial';
import ModalDropdownNewest from './ModalDropdownNewest';
import ModalDropdownRating from './ModalDropdownRating';
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
    ModalDropdownDoors,
    ModalDropdownProperties,
    ModalDropdownPrice,
    ModalDropdownSaleNet,
    ModalDropdownMaterial,
    ModalDropdownNewest,
    ModalDropdownRating,
  },
};
</script>

<style></style>
