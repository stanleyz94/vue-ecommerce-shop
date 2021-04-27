<template>
  <div class="my-5 border">
    <BaseIcon class="flex ml-auto w-4 h-4 " imageUrl="close" />
    <ul class="space-y-5">
      <li>
        <button class="flex w-full justify-between">
          <span>Sortuj</span>
          <BaseIcon imageUrl="chevron-down" />
        </button>
      </li>
      <li>
        <button class="flex w-full justify-between">
          <span>Rozmiar</span>
          <BaseIcon imageUrl="chevron-down" />
        </button>
      </li>
    </ul>
  </div>
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
