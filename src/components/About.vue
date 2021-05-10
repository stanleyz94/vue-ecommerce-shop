<template>
  <div>
    <div class="">
      <section class="space-y-2">
        <h1 class="text-2xl font-bold">Szafy do zabudowy</h1>
        <p>
          Chcemy pomóc ci w zaplanowaniu jak najlepszego przechowywania
          dostosowanego do twoich ubrań i przestrzeni, jaką dysponujesz, dlatego
          oferujemy wybór szaf dwudrzwiowych. Są dostępne w różnych rozmiarach i
          stylach. Wiele szaf jest wyposażonych w akcesoria, takie jak drążki na
          ubrania czy półki.
        </p>
        <p class="underline text-gray-700 text-sm	">
          <a href=""><strong>Dowiedz się więcej o szafach PAX >></strong> </a>
        </p>
        <p class="underline text-gray-700 text-sm	">
          <a href=""
            ><strong>Skorzystaj z naszego planera szaf PAX >></strong></a
          >
        </p>
      </section>
    </div>

    <div class="relative">
      <!-- Carousel buttons -->
      <div class="py-5 relative  border-b-2 border-gray-100">
        <button
          @click="scrollHorizontallyTo('right')"
          :class="{ hidden: isHidden }"
          class="absolute lg:hidden top-auto right-2 shadow bg-gray-50 hover:bg-gray-300  rounded-full  px-2 py-2"
        >
          <BaseIcon imageUrl="chevron-right" class="w-4 h-4" />
        </button>

        <button
          @click="scrollHorizontallyTo('left')"
          :class="{ hidden: !isHidden }"
          class="absolute lg:hidden top-auto left-2 shadow bg-gray-50 hover:bg-gray-300  rounded-full  px-2 py-2"
        >
          <BaseIcon imageUrl="chevron-left" class="w-4 h-4" />
        </button>
        <div
          @scroll="handleScroll"
          ref="scrollbar"
          class="flex  no-scrollbar overflow-x-scroll space-x-3 lg:justify-start"
        >
          <button
            @click="isContainerVisible = true"
            :disabled="isContainerVisible ? true : false"
            aria-label="Aktywuj wybór porównania produktów"
            class=" border border-gray-300 hover:border-gray-500 disabled:bg-gray-300 disabled:opacity-50 rounded-full font-bold text-xs px-4 py-2.5"
          >
            <span> Porównaj</span>
          </button>
          <button
            @click="isSortContainerVisible = !isSortContainerVisible"
            aria-label="Pokaż opcje sortowania moda"
            :class="{
              'bg-gray-900': isSortContainerVisible,
              'hover:bg-gray-900': isSortContainerVisible,
              'text-white': isSortContainerVisible,
            }"
            class="inline-flex items-center  bg-gray-100 hover:bg-gray-200   rounded-full font-bold text-xs px-4 py-2.5"
          >
            <span>Sortuj</span>
            <BaseIcon
              class="h-5 w-5 ml-1.5"
              :imageUrl="isSortContainerVisible ? 'chevron-up' : 'chevron-down'"
            />
          </button>
          <button
            aria-label="Pokaż okno filtrów"
            class="   bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Rozmiar</span>
          </button>
          <button
            aria-label="Aktywuj wybór porównania produktów"
            class="   bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Kolor</span>
          </button>
          <button
            aria-label="Aktywuj wybór porównania produktów"
            class="  bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Drzwi</span>
          </button>
          <button
            aria-label="Aktywuj wybór porównania produktów"
            class="  bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Właściwości</span>
          </button>
          <button
            aria-label="Aktywuj wybór porównania produktów"
            class=" bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Cena</span>
          </button>
          <button
            aria-label="Aktywuj wybór porównania produktów"
            class=" inline-flex items-center whitespace-nowrap bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Wszystkie filtry</span>
            <BaseIcon class="h-4 w-4 ml-1" imageUrl="adjustments" />
          </button>
        </div>
      </div>
      <!-- Carousel buttons -->

      <!--- Sort dropdown --->
      <div
        v-if="isSortContainerVisible"
        class="text-sm w-64 bg-white px-8 py-10 rounded-lg border border-gray-200 space-y-5 shadow-md absolute top-16 left-24 z-50"
      >
        <label
          v-for="item in sortContainerItems"
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
      <!--- Sort dropdown --->
    </div>

    <!-- Compare container -->
    <div v-if="isContainerVisible" class="flex border-b-2 border-gray-100">
      <div class="flex py-5 mr-auto">
        <button
          @click="isContainerVisible = false"
          class="bg-gray-50 hover:bg-gray-300  rounded-full font-bold text-xs  px-5 py-2.5"
        >
          Zamknij
        </button>
      </div>
      <div class="flex py-5 items-center space-x-3">
        <div class="">
          <span>{{ products.length }} wybranych </span>
          <span v-if="products.length < 2"
            >(Wybierz co najmniej {{ 2 - products.length }} więcej)</span
          >
        </div>
        <button
          :disabled="products.length >= 2 ? false : true"
          class="bg-gray-50 hover:bg-gray-300 disabled:bg-gray-300 disabled:opacity-50 border rounded-full font-bold text-xs  px-6 py-3"
        >
          Porównaj produkty
        </button>
      </div>
    </div>

    <!-- Compare container -->

    <!-- Modal dropdown for carousel buttons  --->

    <ModalDropdown v-if="isModalVisible" @hide-modal="hideModal" />

    <!-- Modal dropdown for carousel buttons  --->

    <AppliedFilters />

    <ProductsList />
    <!-- Checkboxes-->

    <div class="flex mt-5 ">
      <label
        class="flex w-7 h-7 items-center mr-4 mb-2"
        v-for="item in items"
        :key="item"
        for=""
      >
        <input
          type="checkbox"
          class="w-7 h-7 opacity-0 absolute"
          :value="item"
          v-model="products"
        />
        <div
          class="flex w-7 h-7 justify-center items-center border rounded-md border-gray-800 "
        >
          <BaseIcon
            imageUrl="check"
            class="h-4 w-4 fill-current hidden  text-white pointer-events-none "
          />
        </div>
      </label>
    </div>
    <!-- Checkboxes-->
    <div>
      <p v-for="product in products" :key="product">{{ product }}</p>
    </div>
  </div>

  <button @click="showModal" class="bg-red-500 p-3 rounded">
    KLIKNIJ MNIE
  </button>

  <div :style="{ color: $store.state.colorCode }" class="vuex-testing">
    {{ $store.state.counter }}

    {{ $store.state.counter }}
    <sup>2</sup> = {{ $store.getters.counterSquared }}

    <div class="space-x-2">
      <button
        class="bg-green-500 w-8 h-8"
        @click="$store.dispatch('increaseCounter')"
      >
        +
      </button>
      <button
        class="bg-red-500 w-8 h-8"
        @click="$store.dispatch('decreaseCounter')"
      >
        -
      </button>
      <div>
        <!-- <input
          v-model="$store.state.colorCode"
          placeholder="Type color"
          type="text"
        /> -->

        <input v-model="colorCode" placeholder="Type color" type="text" />
      </div>
    </div>
  </div>

  <div>
    <div v-for="(item, i) in 100" :key="i">
      <button>make item active</button>
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';
import ModalDropdown from './ModalDropdown';
import AppliedFilters from './AppliedFilters';
import ProductsList from './ProductsList';

export default {
  inject: ['sortContainerVariables'],
  data() {
    return {
      isContainerVisible: false,
      products: [],
      // isActive: false,
      items: ['test', 'test1', 'test2', 'test3'],
      // activeItem: null,
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
      isHidden: false,
      isSortContainerVisible: false,
      sortContainerItems: this.sortContainerVariables,
      isModalVisible: false,

      // accordionItems: [
      //   {
      //     span: 'Obsługa klienta',
      //     isActive2: false,
      //     nestedList: [
      //       { text: 'Zaloguj się', url: '#' },
      //       { text: 'Znajdź swoje zamówienie', url: '#' },
      //       { text: 'Zmień datę dostawy zamówienia', url: '#' },
      //       { text: 'Anuluj zamówienie', url: '#' },
      //       { text: 'Faktury', url: '#' },
      //     ],
      //   },
      //   {
      //     span: 'Zakupy w IKEA',
      //     isActive2: false,
      //     nestedList: [
      //       { text: 'Katalog i broszury', url: '#' },
      //       { text: 'Centrum Urządzania Wnetrz', url: '#' },
      //       { text: 'Narzędzia do planowania online', url: '#' },
      //       { text: 'Sklepy IKEA', url: '#' },
      //       { text: 'Oferty lokalne', url: '#' },
      //     ],
      //   },
      //   {
      //     span: 'Usługi',
      //     isActive2: false,
      //     nestedList: [
      //       { text: 'Dostawa', url: '#' },
      //       { text: 'Zamów i odbierz', url: '#' },
      //       { text: 'Montaż i instalacja', url: '#' },
      //       { text: 'Planowanie i doradztwo', url: '#' },
      //       { text: 'Planowanie kuchni', url: '#' },
      //     ],
      //   },
      //   {
      //     span: 'O IKEA',
      //     isActive2: false,
      //     nestedList: [
      //       { text: 'Informacje o IKEA', url: '#' },
      //       { text: 'Biuro prasowe i aktualności', url: '#' },
      //       { text: 'Aktualne informacje dot. COVID-19', url: '#' },
      //       { text: 'IKEA dla planety', url: '#' },
      //       { text: '60 lat IKEA w Polsce', url: '#' },
      //     ],
      //   },
      // ],
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
    ModalDropdown,
    AppliedFilters,
    ProductsList,
  },

  provide: {
    testNumberOfProducts: 2,
  },
  // methods: {
  //   selectItem(item, i) {
  //     item.isActive2 = !item.isActive2;
  //     this.activeItem = i;
  //   },
  // },

  methods: {
    handleScroll(e) {
      const isScrollbarVisible = e.target.scrollWidth > e.target.clientWidth;

      if (!isScrollbarVisible) {
        this.isHidden = false;
      }
    },
    scrollHorizontallyTo(direction) {
      const maxScrollLeft =
        this.$refs.scrollbar.scrollWidth - this.$refs.scrollbar.clientWidth;
      if (direction === 'right') {
        this.$refs.scrollbar.scrollLeft += maxScrollLeft;
        this.isHidden = !this.isHidden;
      }
      if (direction === 'left') {
        this.$refs.scrollbar.scrollLeft -= maxScrollLeft;
        this.isHidden = !this.isHidden;
      }
    },
    showModal() {
      this.isModalVisible = true;
      document.body.classList.add('modal-open');
    },
    hideModal() {
      this.isModalVisible = false;
      document.body.classList.remove('modal-open');
    },
  },

  mounted() {
    console.log(this.$globalVariable);
  },
  computed: {
    message() {
      return '$' + this.message2;
    },
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue);
      },
    },
  },

  watch: {},
};
</script>

<style>
input[type='radio']:checked + div {
  background-color: black;
  box-shadow: 0px 0px 0px 3px white inset;
}

input[type='radio']:checked + div {
  color: black;
}
input[type='radio']:hover + div {
  opacity: 0.7;
  background-color: black;
  box-shadow: 0px 0px 0px 3px white inset;
  color: black;
}
</style>
