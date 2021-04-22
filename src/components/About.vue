<template>
  <div>
    <!-- <li v-for="(svg, index) in navbarValues.svg" :key="index" class="navbar-li">
      <a href="">
        <BaseIcon :imageUrl="svg" />
      </a>
    </li> -->

    <!-- <li
      v-for="(item, index) in navbarRightItems"
      :key="index"
      class="navbar-li"
    >
      <a :href="item.url">
        <BaseIcon :imageUrl="item.svgName" />
      </a>
    </li> -->
    <!-- 
    <h1 v-for="(value, index) in navbarRightItems" :key="index">
      {{ value.svgName }}
    </h1> -->
  </div>
  <!-- <ul>
    <li v-for="(item, i) in 2" :key="i" class="border-t-2 border-gray-100">
      <span class="font-bold hidden mb-6 lg:flex">Obsługa klienta</span>
      <button
        @click="selectItem(i)"
        class="flex w-full justify-between focus:outline-none py-7 lg:hidden"
      >
        <span class="font-bold">Obsługa klienta</span>
        <BaseIcon
          :imageUrl="i === activeItem ? 'chevron-up' : 'chevron-down'"
        />
      </button>

      <ul
        class="transition duration-500 ease-in-out lg:opacity-100 lg:visible lg:h-auto"
        :class="
          i === activeItem
            ? 'opacity-100 visible h-auto'
            : 'h-0 opacity-0 invisible overflow-hidden'
        "
      >
        <li class="mt-2 mb-6">
          <a href="#">Zaloguj się</a>
        </li>
        <li class="mt-2 mb-6">
          <a href="#">Znajdz swoje zamówienie</a>
        </li>
      </ul>
    </li>
  </ul> -->

  <BaseIcon imageUrl="chevron-up" />

  <!---DZIALA  -->
  <!-- <ul>
    <li v-for="(item, i) in 2" :key="i" class="border-t-2 border-gray-100">
      <span class="font-bold hidden mb-6 lg:flex">Obsługa klienta</span>
      <button
        @click="selectItem(i)"
        class="flex w-full justify-between focus:outline-none py-7 lg:hidden"
      >
        <span class="font-bold">Obsługa klienta</span>
        <BaseIcon
          :imageUrl="
            i === activeItem && isActive ? 'chevron-up' : 'chevron-down'
          "
        />
      </button>

      <ul
        class="transition duration-500 ease-in-out lg:opacity-100 lg:visible lg:h-auto"
        :class="
          i === activeItem && isActive
            ? 'opacity-100 visible h-auto'
            : 'h-0 opacity-0 invisible overflow-hidden'
        "
      >
        <li class="mt-2 mb-6">
          <a href="#">Zaloguj się</a>
        </li>
        <li class="mt-2 mb-6">
          <a href="#">Znajdz swoje zamówienie</a>
        </li>
      </ul>
    </li>
  </ul> -->
  <!---DZIALA  -->

  <!-- DZIAL#2 dwa v-for -->
  <!-- <ul>
    <li v-for="(item, i) in accordionItems" :key="i">
      <span>{{ item.span }}</span>
      <button class="flex w-full justify-between focus:outline-none py-7">
        <span>{{ item.span }}</span>
      </button>

      <ul>
        <li
          v-for="nestedListItem in item.nestedList"
          :key="nestedListItem"
          class="mt-2 mb-6"
        >
          <a :href="nestedListItem.url" class="text-red-500">{{
            nestedListItem.text
          }}</a>
        </li>
      </ul>
    </li>
  </ul> -->

  <!-- DZIAL#2 dwa v-for -->

  <!-- TEST 3-->

  <ul>
    <li
      v-for="(item, i) in accordionItems"
      :key="i"
      class="border-t-2 border-gray-100"
    >
      <span class="font-bold hidden mb-6 lg:flex">{{ item.span }}</span>
      <button
        @click="selectItem(item, i)"
        class="flex w-full justify-between focus:outline-none py-7 lg:hidden"
      >
        <span class="font-bold">{{ item.span }}</span>
        <BaseIcon
          :imageUrl="
            i === activeItem && item.isActive2 ? 'chevron-up' : 'chevron-down'
          "
        />
      </button>

      <ul
        class="transition duration-500 ease-in-out lg:opacity-100 lg:visible lg:h-auto"
        :class="
          i === activeItem && item.isActive2
            ? 'opacity-100 visible h-auto'
            : 'h-0 opacity-0 invisible overflow-hidden'
        "
      >
        <li
          v-for="(nestedListItem, nestedListIndex) in item.nestedList"
          :key="nestedListIndex"
          class="mt-2 mb-6"
        >
          <a :href="nestedListItem.url">{{ nestedListItem.text }}</a>
        </li>
      </ul>
    </li>
  </ul>

  <!-- TEST 3-->

  <hr class="bg-red-500" />
  <!-- <div>
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="{ active: i === activeItem }"
    >
      <button @click="selectItem(i)">make item active</button>
    </div>
  </div> -->
</template>

<script>
import BaseIcon from './BaseIcon';

export default {
  data() {
    return {
      isActive: false,
      items: ['test', 'test2', 'test3', 'test'],
      activeItem: null,
      navbarValues2: [
        {
          text: ['Produkty', 'Pomieszczenia', 'Usługi planowania', 'Nowości'],
          svg: ['cart', 'truck', 'profile', 'heart', 'menu-navbar', 'cart'],
        },
      ],
      navbarValues: {
        text: ['Produkty', 'Pomieszczenia', 'Usługi planowania', 'Nowości'],
        svg: ['cart', 'truck', 'profile', 'heart', 'menu-navbar', 'cart'],
      },
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
      },
      isMobile: false,
      message2: 'cena',
      navbarLeftItems: [
        { text: 'Produkty', url: '#' },
        { text: 'Pomieszczenia', url: '#' },
        { text: 'Usługi planowania', url: '#' },
        { text: 'Nowości', url: '#' },
      ],
      navbarRightItems: [
        { svgName: 'cart', url: '#' },
        { svgName: 'truck', url: '#' },
        { svgName: 'profile', url: '#' },
        { svgName: 'heart', url: '#' },
        { svgName: 'menu-navbar', url: '#' },
        { svgName: 'cart', url: '#' },
      ],

      accordionItems: [
        {
          span: 'Obsługa klienta',
          isActive2: false,
          nestedList: [
            { text: 'Zaloguj się', url: '#' },
            { text: 'Znajdź swoje zamówienie', url: '#' },
            { text: 'Zmień datę dostawy zamówienia', url: '#' },
            { text: 'Anuluj zamówienie', url: '#' },
            { text: 'Faktury', url: '#' },
          ],
        },
        {
          span: 'Zakupy w IKEA',
          isActive2: false,
          nestedList: [
            { text: 'Katalog i broszury', url: '#' },
            { text: 'Centrum Urządzania Wnetrz', url: '#' },
            { text: 'Narzędzia do planowania online', url: '#' },
            { text: 'Sklepy IKEA', url: '#' },
            { text: 'Oferty lokalne', url: '#' },
          ],
        },
        {
          span: 'Usługi',
          isActive2: false,
          nestedList: [
            { text: 'Dostawa', url: '#' },
            { text: 'Zamów i odbierz', url: '#' },
            { text: 'Montaż i instalacja', url: '#' },
            { text: 'Planowanie i doradztwo', url: '#' },
            { text: 'Planowanie kuchni', url: '#' },
          ],
        },
        {
          span: 'O IKEA',
          isActive2: false,
          nestedList: [
            { text: 'Informacje o IKEA', url: '#' },
            { text: 'Biuro prasowe i aktualności', url: '#' },
            { text: 'Aktualne informacje dot. COVID-19', url: '#' },
            { text: 'IKEA dla planety', url: '#' },
            { text: '60 lat IKEA w Polsce', url: '#' },
          ],
        },
      ],
    };
  },

  // mounted() {
  //   window.addEventListener('resize', this.test, { passive: true });
  // },
  // beforeUnmount() {
  //   window.addEventListener('resize', this.test, { passive: true });
  // },
  components: {
    BaseIcon,
  },

  methods: {
    selectItem(item, i) {
      item.isActive2 = !item.isActive2;
      this.activeItem = i;
    },
  },
  computed: {
    message() {
      return '$' + this.message2;
    },
  },
};
</script>

<style>
/* 
.hidden-li {
  @apply inline-block mx-2;
}
.hidden-li:nth-child(4n + 1) {
  @apply hidden xl:inline-block;
}

.hidden-li:nth-child(4n + 2) {
  @apply xl:hidden inline-block;
} */

/* .test:nth-child(4n + 1) {
  @apply text-blue-500;
} */
</style>
