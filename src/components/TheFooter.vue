<template>
  <footer class="bg-gray-50 relative bottom-0 ">
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

      <!--- Footer Accordion -->
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
      <!--- Footer Accordion -->

      <div
        class="lg:border-b-2 border-gray-100 flex items-center flex-wrap justify-between space-y-4 lg:py-7"
      >
        <!-- Social Media Links -->
        <div class="mr-5 mt-4">
          <ul class="flex space-x-3.5 ">
            <li v-for="(item, index) in socialMediaItems" :key="index">
              <a :href="item.url">
                <BaseIcon
                  :imageUrl="item.svgName"
                  class="border border-gray-300 rounded-2xl hover:border-gray-500 fill-current text-gray-700 px-1.5 w-8 h-8"
                />
              </a>
            </li>
          </ul>
        </div>
        <!-- Social Media Links -->

        <!-- Payment Options -->
        <div>
          <ul class="flex space-x-3.5 ">
            <li v-for="(svgName, index) in paymentOptionsItems" :key="index">
              <BaseIcon
                class="border border-gray-300 rounded px-1 w-11 h-8"
                :imageUrl="svgName"
              />
            </li>
          </ul>
        </div>
        <!-- Payment Options -->

        <!-- Language Selector 	 -->
        <div class="xs:flex-100 lg:flex md:flex-initial lg:ml-auto">
          <a
            href=""
            class="inline-flex items-center border border-gray-300 hover:border-gray-500 fill-current text-gray-700 rounded-full font-bold text-xs px-4 py-1.5"
          >
            <BaseIcon imageUrl="globe" class="h-6 w-6 mr-1" />
            <span>Zmień kraj</span>
          </a>
        </div>
        <!-- Language Selector -->
      </div>
      <!-- Copyrights -->
      <div class="flex items-center justify-between flex-wrap py-7 text-xs">
        <div>
          <p>© Inter IKEA Systems B.V 1999-2021</p>
        </div>
        <div class="my-5">
          <ul class="flex flex-wrap font-medium ">
            <li
              v-for="(item, index) in copyrightItems"
              :key="index"
              class=" mr-5"
            >
              <a :href="item.url">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyrights -->
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
            { text: 'Zwroty', url: '#' },
            { text: 'Gwarancje', url: '#' },
            { text: 'Reklamacje', url: '#' },
            { text: 'Sprawdź swoją reklamację na czacie', url: '#' },
            { text: 'Wycofane produkty', url: '#' },
            { text: 'Bezpieczeństwo w domu', url: '#' },
            { text: 'Wsparcie produktowe', url: '#' },
            { text: 'Regulaminy', url: '#' },
            { text: 'Kontakt', url: '#' },
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
            { text: 'Restaurajca IKEA', url: '#' },
            { text: 'IKEA dla Dzieci', url: '#' },
            { text: 'Karta upominkowa', url: '#' },
            { text: 'Klub IKEA Family', url: '#' },
            { text: 'IKEA dla Firm', url: '#' },
            { text: 'Panele słoneczne', url: '#' },
            { text: 'Aplikacje mobilne IKEA', url: '#' },
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
            { text: 'Planowanie szaf PAX', url: '#' },
            { text: 'Planowanie regałów BESTA', url: '#' },
            { text: 'Planowanie dla Firm', url: '#' },
            { text: 'Na raty w IKEA', url: '#' },
            { text: 'Leasing dla Firm', url: '#' },
            { text: 'Usługi krawieckie', url: '#' },
            { text: 'Wynajem samochodu', url: '#' },
            { text: 'Dłuższe życie produktów', url: '#' },
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
            { text: 'Praca w IKEA', url: '#' },
            { text: 'Podziel się opinią', url: '#' },
          ],
        },
      ],
      copyrightItems: [
        { text: 'Polityka prywatności', url: '#' },
        { text: 'Ustawienia plików cookie', url: '#' },
        { text: 'Responsible Disclosure', url: '#' },
        { text: 'Dla akcjonariuszy IKEA Distribution', url: '#' },
      ],
      socialMediaItems: [
        { svgName: 'facebook-oval', url: '#' },
        { svgName: 'instagram', url: '#' },
        { svgName: 'twitter-original', url: '#' },
        { svgName: 'youtube', url: '#' },
        { svgName: 'linkedin-original', url: '#' },
      ],
      paymentOptionsItems: [
        'logo-przelewy-24',
        'visa',
        'mastercard',
        'gift-card',
        'ikano-bank-logo',
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
