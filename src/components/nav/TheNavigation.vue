<template>
  <header class="container mx-auto p-4">
    <div
      class="flex flex-wrap justify-between items-center space-x-6 space-y-5"
    >
      <div class="hidden xl:flex mt-4 p-5 self-center">
        <button>
          <BaseIcon imageUrl="menu-navbar" />
        </button>
      </div>
      <div class="">
        <a href="">
          <BaseIcon imageUrl="ikea-logo" />
        </a>
      </div>
      <!--- Nav bar#1 --->
      <nav class="hidden xl:flex justify-around">
        <ul class="space-x-5 font-bold text-sm">
          <li
            v-for="(item, index) in navbarLeftItems"
            :key="index"
            class="inline-block p-2"
          >
            <a :href="item.url">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
      <!--- Nav bar#1 --->

      <div
        class="flex flex-grow order-last sm:order-1 rounded-full bg-gray-100 p-4 m-2"
      >
        <button class="focus:outline-none">
          <BaseIcon imageUrl="loop" />
        </button>

        <input
          placeholder="Czego szukasz?"
          type="text"
          class="rounded-full w-full bg-transparent text-gray-700 focus:outline-none px-2"
        />
        <button class="focus:outline-none">
          <BaseIcon imageUrl="camera" />
        </button>
      </div>

      <nav class="order-2 ">
        <!--- Nav bar#2 --->
        <ul class="flex">
          <li
            v-for="(item, index) in navbarRightItems"
            :key="index"
            class="navbar-li relative"
          >
            <router-link
              :to="{
                name: item.routeName,
              }"
            >
              <a :href="item.url">
                <BaseIcon :imageUrl="item.svgName" />
              </a>
              <div
                v-if="cartLength >= 1 && item.svgName == 'cart'"
                class="bg-blue-900 border border-white rounded-full w-3 h-3 absolute bottom-0 right-0"
              ></div>
            </router-link>
          </li>
        </ul>
      </nav>
      <!--- Nav bar#2 --->
    </div>
  </header>
</template>

<script>
import BaseIcon from '../BaseIcon';
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      navbarLeftItems: [
        { text: 'Produkty', url: '#' },
        { text: 'Pomieszczenia', url: '#' },
        { text: 'Usługi planowania', url: '#' },
        { text: 'Nowości', url: '#' },
      ],
      navbarRightItems: [
        { svgName: 'cart', url: '#', routeName: 'ItemShopCart' },
        { svgName: 'truck', url: '#' },
        { svgName: 'profile', url: '#' },
        { svgName: 'heart', url: '#' },
        { svgName: 'menu-navbar', url: '#' },
        { svgName: 'cart', url: '#', routeName: 'ItemShopCart' },
      ],
    };
  },
  computed: {
    cartLength() {
      return this.$store.getters.getCartLength;
    },
  },
};
</script>

<style>
.test {
  flex-grow: 2;
}
</style>
