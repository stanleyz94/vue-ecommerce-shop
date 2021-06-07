<template>
  <div>
    <div>
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
            @click="showModal()"
            aria-label="Aktywuj wybór porównania produktów"
            class=" inline-flex items-center whitespace-nowrap bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Wszystkie filtry</span>
            <BaseIcon class="h-4 w-4 ml-1" imageUrl="adjustments" />
          </button>
          <button
            @click="showModalWithDropdown('ModalDropdownSort')"
            aria-label="Pokaż opcje sortowania moda"
            class="  bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Sortuj</span>
          </button>

          <button
            @click="showModalWithDropdown('ModalDropdownColor')"
            aria-label="Aktywuj wybór porównania produktów"
            class="   bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Kolor</span>
          </button>
          <button
            @click="showModalWithDropdown('ModalDropdownDoors')"
            aria-label="Aktywuj wybór porównania produktów"
            class="  bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Drzwi</span>
          </button>
          <button
            @click="showModalWithDropdown('ModalDropdownProperties')"
            aria-label="Aktywuj wybór porównania produktów"
            class="  bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Właściwości</span>
          </button>
          <button
            @click="showModalWithDropdown('ModalDropdownPrice')"
            aria-label="Aktywuj wybór porównania produktów"
            class=" bg-gray-100 hover:bg-gray-200  rounded-full font-bold text-xs px-5 py-2.5"
          >
            <span>Cena</span>
          </button>
        </div>
      </div>
      <!-- Carousel buttons -->

      <!--- Sort dropdown --->

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
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';
import ModalDropdown from './modal/ModalDropdown';
import AppliedFilters from './AppliedFilters';
import ProductsList from './ProductsList';

export default {
  data() {
    return {
      isContainerVisible: false,
      products: [],
      isMobile: false,
      isHidden: false,
      isModalVisible: false,
    };
  },

  components: {
    BaseIcon,
    ModalDropdown,
    AppliedFilters,
    ProductsList,
  },

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
    showModalWithDropdown(ModaldropdownType) {
      this.isModalVisible = true;
      document.body.classList.add('modal-open');
      this.$store.commit('changeIsListActive', ModaldropdownType);
    },
  },
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
