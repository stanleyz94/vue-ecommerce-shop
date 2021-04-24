<template>
  <nav
    class="container mx-auto font-medium p-4 border-b-2 border-gray-100"
    aria-label="Breadcrumb"
  >
    <ol class="flex items-center justify-start space-x-2 text-xs">
      <li class="xs:hidden">
        <a href="">Produkty</a>
      </li>

      <li class="flex items-center space-x-2">
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5 xs:hidden" />
        <a href="">Przechowywanie i organizacja</a>
      </li>

      <li class="flex items-center space-x-2">
        <BaseIcon imageUrl="chevron-right" class="h-2.5 w-2.5" />
        <a href="">Szafy</a>
      </li>

      <li class="flex items-center space-x-2 xs:hidden">
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
