<template>
  <div class="hello text-lg text-red-500">
    <h1>TEST 2</h1>

    <inline-svg :src="require('../assets/icons/heart.svg')">test</inline-svg>
    <h1>ARRAY:</h1>
    <div>
      <article>
        <h1 v-for="(item, index) in items" :key="index">
          {{ item.message }}
        </h1>
      </article>
      <!-- <ul>
        <li class="inline-block mx-2">
          <a href="">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </a>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  components: {
    InlineSvg,
  },
  data() {
    return {
      icon: 'truck',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
