<template>
  <div>
    <!-- <li v-for="(svg, index) in navbarValues.svg" :key="index" class="navbar-li">
      <a href="">
        <BaseIcon :imageUrl="svg" />
      </a>
    </li> -->

    <li
      v-for="(item, index) in navbarRightItems"
      :key="index"
      class="navbar-li"
    >
      <a :href="item.url">
        <BaseIcon :imageUrl="item.svgName" />
      </a>
    </li>
    <!-- 
    <h1 v-for="(value, index) in navbarRightItems" :key="index">
      {{ value.svgName }}
    </h1> -->
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';

export default {
  data() {
    return {
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
    };
  },
  components: {
    BaseIcon,
  },

  mounted() {
    window.addEventListener('resize', this.test, { passive: true });
  },
  beforeUnmount() {
    window.addEventListener('resize', this.test, { passive: true });
  },
  methods: {
    test() {
      // let screenWidth = window.innerWidth;

      // this.mobile = window.matchMedia('(min-width: 1280px)').matches;
      if (window.innerWidth > 1280) {
        this.isMobile = true;
        console.log('A' + this.isMobile);
      } else {
        this.isMobile = false;
        console.log('B' + this.isMobile);
      }
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
