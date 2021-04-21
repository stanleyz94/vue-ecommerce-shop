<template>
  <footer class="bg-gray-50 fixed bottom-0 w-full">
    <!--- Footer accordion --->
    <div class="container mx-auto px-4 ">
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
      <div>
        <ul>
          <li class="border-t-2 border-gray-100">
            <button class="flex w-full justify-between focus:outline-none py-7">
              <span class="font-bold">Obsługa klienta</span>
              <BaseIcon imageUrl="chevron-down" />
            </button>
            <ul class="invisible overflow-hidden h-0">
              <li class="mt-2 mb-6">
                <a href="#">Zaloguj się visible opacity-0 </a>
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
    </div>
    <!--- Footer accordion --->
  </footer>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
export default {
  components: {
    BaseIcon,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
</style>
