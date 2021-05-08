<template>
  <!--grid -->
  <div
    class="grid grid-cols-2 md:divide-x-0 md:grid-cols-3 lg:grid-cols-4 divide-x-2 "
  >
    <!-- flex (item #1-->

    <div
      v-for="item in 10"
      :key="item"
      class="flex flex-col  p-5 border-t  border-b "
    >
      <div></div>
      <img
        src="../assets/imageTest.jpg"
        alt="Obrazek szafa"
        class="w-auto h-auto"
      />
      <div class="flex flex-col">
        <span class="font-bold">PAX / TYSSEDAL</span>
        <span>Kombinacja szafy, 250x60x236cm</span>
        <span class="font-bold">5 700,-</span>
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
export default {};
</script>

<style></style>
