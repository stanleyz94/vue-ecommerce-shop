<template>
  <teleport to="body">
    <div
      class="fixed text-xs	md:text-base w-full top-0 md:top-10 md:right-6 md:w-2/4 md:rounded flex  items-center bg-black text-white border border-gray-600 h-14 px-6 py-10 space-x-6"
    >
      <div class="flex-grow">
        <p><strong>PAX / TYSSEDAL</strong> został dodany do Koszyka.</p>
      </div>
      <div class="flex-shrink">
        <button class="font-bold">
          <span>Zobacz</span>
        </button>
      </div>
      <div class="border-l border-gray-400	flex-shrink">
        <button class="ml-6 p-3">
          <BaseIcon imageUrl="close" class="w-4 h-4 md:w-5 md:h-5 " />
        </button>
      </div>
    </div>
  </teleport>
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
