<template>
  <nav
    class="container mx-auto p-4 border-b-2 border-gray-100"
    aria-label="Breadcrumb"
  >
    <ol class="flex items-center justify-start space-x-2 text-xs">
      <li class="">
        <a href="">Produkty</a>
      </li>

      <li class="flex items-center space-x-2">
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5" />
        <a href="">Przechowywanie i organizacja</a>
      </li>

      <li class="flex items-center space-x-2">
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5" />
        <a href="">Szafy</a>
      </li>

      <li class="flex items-center space-x-2 ">
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5" />
        <a href="" aria-current="about">Szafy do zabudowy</a>
      </li>
    </ol>
  </nav>
</template>

<script>
import BaseIcon from '../BaseIcon';
export default {
  components: {
    BaseIcon,
  },
};
</script>

<style></style>
