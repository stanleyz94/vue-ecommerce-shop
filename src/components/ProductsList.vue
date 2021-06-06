<template>
  <!--grid -->
  <div class="grid grid-cols-2 md:divide-x-0 md:grid-cols-3 lg:grid-cols-4  ">
    <!-- flex (item #1-->

    <!-- <div
      v-for="item in 1"
      :key="item"
      class="flex flex-col py-9 px-5  border-b even:border-l md:border-l-0 cursor-pointer"
    >
      <div class="relative">
        <span
          class="absolute top-0 transition-opacity ease-in-out duration-300 hover:opacity-0"
        >
          <img
            src="../assets/imageTest.jpg"
            alt="Obrazek szafa"
            class="w-auto h-auto"
          />
        </span>
        <span>
          <img
            src="https://www.ikea.com/pl/pl/images/products/pax-tjoerhom-kombinacja-szafy-bialy__0949368_pe799673_s5.jpg"
            alt="Obrazek szafa"
            class="w-auto h-auto"
          />
        </span>
      </div>

      <div class="flex flex-col mt-5">
        <span class="font-bold text-yellow-600	">Nowość</span>
        <span class="font-bold">PAX / TYSSEDAL</span>
        <span>Kombinacja szafy, 250x60x236cm</span>
        <span class="font-bold md:text-2xl">5 700,-</span>
        <button
          class="bg-blue-700 rounded-full w-6 h-6 p-6 flex justify-center items-center self-end hover:bg-blue-800	"
        >
          <span>
            <BaseIcon class="text-white" imageUrl="add-item" />
          </span>
        </button>
      </div>
    </div> -->

    <div
      v-for="item in listItems"
      :key="item.id"
      class="flex flex-col py-9 px-5 border-b even:border-l md:border-l-0  cursor-pointer"
    >
      <router-link
        :to="{
          name: 'ItemShopDetails',
          params: {
            id: item.id,
            name: item.name,
            description: item.description,
          },
        }"
      >
        <div class="relative">
          <span
            class="absolute top-0 transition-opacity ease-in-out duration-300 hover:opacity-0"
          >
            <img :src="item.img" alt="Obrazek szafa" class="w-auto h-auto" />
          </span>
          <span>
            <img :src="item.img2" alt="Obrazek szafa" class="w-auto h-auto" />
          </span>
        </div>
        <div class="flex flex-col mt-5">
          <span
            :class="{ invisible: !item.newest }"
            class="font-bold text-yellow-600 "
            >Nowość</span
          >
          <span class="font-bold">{{ item.name }}</span>
          <span>{{ item.description }}, {{ item.measurement }}</span>
          <span class="font-bold md:text-2xl">{{ item.price }},-</span>
        </div>
      </router-link>

      <div class="self-end mt-auto">
        <button
          class="bg-blue-700 rounded-full w-6 h-6 p-6 flex justify-center items-center  hover:bg-blue-800	"
          @click="addToCart(item)"
        >
          <span>
            <BaseIcon class="text-white" imageUrl="add-item" />
          </span>
        </button>
      </div>
    </div>
    <!-- flex (item #1-->

    <!-- flex (item #2) -->
    <div>{{ $store.state.filteredValues }}</div>

    <!-- <div>{{ $store.state.items }}</div> -->
    <!-- flex (item #2) -->
  </div>
  <ModalAddedToCart
    v-if="isModalAddedVisible"
    :name="itemName"
    @hide-modal-added="hideModal"
  />
  <!--grid -->
</template>

<script>
import BaseIcon from './BaseIcon';
import { items } from '../data/variables';
import ModalAddedToCart from './ModalAddedToCart';
export default {
  components: {
    BaseIcon,
    ModalAddedToCart,
  },
  data() {
    return {
      test: items,
      isModalAddedVisible: false,
      itemName: '',
      itemNames: [],
    };
  },
  methods: {
    clickTest(i) {
      console.log(i);
    },
    addToCart(item) {
      this.$store.commit('addToCart', item);
      this.itemNames.push(item.name);
      this.itemName = this.itemNames.pop();
      if (!this.isModalAddedVisible) {
        this.isModalAddedVisible = true;
      }
    },

    hideModal() {
      this.isModalAddedVisible = false;
    },
  },
  computed: {
    listItems() {
      return this.$store.getters.loadFilters;
    },
  },
};
</script>

<style></style>
