<template>
  <footer class="bg-gray-50 fixed bottom-0 w-full">
    <div class="container mx-auto px-4 lg:flex-row">
      <div>
        <h2 class="font-bold text-2xl mb-2">Klub IKEA Family</h2>
        <p class="mb-2 text-sm">
          W Klubie IKEA Family możesz skorzystać z atrakcyjnych ofert, promocji
          i niespodzianek. Jako Klubowicz możesz liczyć na dopasowane do Ciebie
          oferty oraz mnóstwo ciekawych inspiracji i porad. Dołącz do Klubu IKEA
          Family i poczuj się jak w domu.
        </p>
        <a
          href="#"
          class="bg-black text-white overflow-hidden px-5 py-3 inline-block rounded-full font-bold text-xs"
          >Dołącz lub zaloguj się</a
        >
      </div>
      <!--- Footer accordion --->
      <div>
        <ul>
          <li class="border-t-2 border-gray-100">
            <span class="font-bold hidden mb-6 lg:flex">Obsługa klienta</span>
            <button
              @click="isActive = !isActive"
              class="flex w-full justify-between focus:outline-none py-7 lg:hidden"
            >
              <span class="font-bold">Obsługa klienta</span>
              <BaseIcon :imageUrl="isActive ? 'chevron-up' : 'chevron-down'" />
            </button>

            <ul
              class="transition duration-500 ease-in-out lg:opacity-100 lg:visible lg:h-auto"
              :class="
                isActive
                  ? 'opacity-100 visible h-auto'
                  : 'h-0 opacity-0 invisible overflow-hidden'
              "
            >
              <li class="mt-2 mb-6">
                <a href="#">Zaloguj się</a>
              </li>
              <li class="mt-2 mb-6">
                <a href="#">Znajdz swoje zamówienie</a>
              </li>
              <li class="mt-2 mb-6">
                <a href="#">Znajdz swoje zamówienie</a>
              </li>
            </ul>
          </li>

          <li class="border-t-2 border-gray-100">
            <button class="flex w-full justify-between focus:outline-none py-7">
              <span class="font-bold">Zakupy w IKEA</span>
              <BaseIcon imageUrl="chevron-down" />
            </button>
          </li>
          <li class="border-t-2 border-gray-100">
            <button class="flex w-full justify-between focus:outline-none py-7">
              <span class="font-bold">Usługi</span>
              <BaseIcon imageUrl="chevron-down" />
            </button>
          </li>
          <li class="border-t-2 border-gray-100">
            <button class="flex w-full justify-between focus:outline-none py-7">
              <span class="font-bold">O IKEA</span>
              <BaseIcon imageUrl="chevron-down" />
            </button>
          </li>
        </ul>
      </div>
      <!--- Footer accordion --->
    </div>
  </footer>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style></style>
