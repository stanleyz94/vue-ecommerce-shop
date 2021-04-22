<template>
  <footer class="bg-gray-50 relative   bottom-0 ">
    <div class="container mx-auto px-4 lg:flex-row">
      <div class="mb-7 pt-9">
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
        <ul class="lg:flex lg:flex-row lg:justify-between">
          <li
            v-for="(item, i) in accordionItems"
            :key="i"
            class="border-t-2 border-gray-100 lg:border-none"
          >
            <span class="font-bold hidden mb-6 lg:flex">{{ item.span }}</span>
            <button
              @click="selectItem(item, i)"
              class="flex w-full justify-between focus:outline-none py-7 lg:hidden"
            >
              <span class="font-bold">{{ item.span }}</span>
              <BaseIcon
                :imageUrl="
                  i === activeItem && item.isActive
                    ? 'chevron-up'
                    : 'chevron-down'
                "
              />
            </button>

            <ul
              class="transition duration-500 ease-in-out lg:opacity-100 lg:visible lg:h-auto"
              :class="
                i === activeItem && item.isActive
                  ? 'opacity-100 visible h-auto'
                  : 'h-0 opacity-0 invisible overflow-hidden'
              "
            >
              <li
                v-for="(nestedListItem, nestedListIndex) in item.nestedList"
                :key="nestedListIndex"
                class="mt-2 mb-6 lg:flex lg:flex-row"
              >
                <a :href="nestedListItem.url">{{ nestedListItem.text }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
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
      activeItem: null,
      accordionItems: [
        {
          span: 'Obsługa klienta',
          isActive: false,
          nestedList: [
            { text: 'Zaloguj się', url: '#' },
            { text: 'Znajdź swoje zamówienie', url: '#' },
            { text: 'Zmień datę dostawy zamówienia', url: '#' },
            { text: 'Anuluj zamówienie', url: '#' },
            { text: 'Faktury', url: '#' },
          ],
        },
        {
          span: 'Zakupy w IKEA',
          isActive: false,
          nestedList: [
            { text: 'Katalog i broszury', url: '#' },
            { text: 'Centrum Urządzania Wnetrz', url: '#' },
            { text: 'Narzędzia do planowania online', url: '#' },
            { text: 'Sklepy IKEA', url: '#' },
            { text: 'Oferty lokalne', url: '#' },
          ],
        },
        {
          span: 'Usługi',
          isActive: false,
          nestedList: [
            { text: 'Dostawa', url: '#' },
            { text: 'Zamów i odbierz', url: '#' },
            { text: 'Montaż i instalacja', url: '#' },
            { text: 'Planowanie i doradztwo', url: '#' },
            { text: 'Planowanie kuchni', url: '#' },
          ],
        },
        {
          span: 'O IKEA',
          isActive: false,
          nestedList: [
            { text: 'Informacje o IKEA', url: '#' },
            { text: 'Biuro prasowe i aktualności', url: '#' },
            { text: 'Aktualne informacje dot. COVID-19', url: '#' },
            { text: 'IKEA dla planety', url: '#' },
            { text: '60 lat IKEA w Polsce', url: '#' },
          ],
        },
      ],
    };
  },

  methods: {
    selectItem(item, i) {
      item.isActive = !item.isActive;
      this.activeItem = i;
    },
  },
};
</script>

<style></style>
