<template>
  <!--grid -->
  <div class="grid grid-cols-2 md:divide-x-0 md:grid-cols-3 lg:grid-cols-4  ">
    <!-- flex (item #1-->

    <div
      v-for="item in 10"
      :key="item"
      class="flex flex-col py-9 px-5  border-b even:border-l md:border-l-0"
    >
      <div></div>
      <img
        src="../assets/imageTest.jpg"
        alt="Obrazek szafa"
        class="w-auto h-auto"
      />
      <div class="flex flex-col mt-5">
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
    </div>

    <!-- flex (item #1-->

    <!-- flex (item #2) -->
    <div></div>
    <!-- flex (item #2) -->
  </div>
  <!--grid -->
</template>

<script>
import BaseIcon from './BaseIcon';
export default {
  components: {
    BaseIcon,
  },
};
</script>

<style></style>
