<template>
  <!--- Grid    --->
  <div class="md:grid  gap-10 md:grid-cols-3 lg:grid-cols-4 ">
    <div class="md:col-span-2 lg:col-span-3 ">
      <img class="h-full w-full  object-cover" :src="loadItem.img" alt="" />
    </div>
    <div class="md:col-span-1 lg:col-span-1 	md:sticky md:top-0 lg:self-start	">
      <div class="flex flex-row justify-between mb-7 ">
        <div class="space-y-2">
          <h2 class="font-bold text-xl md:text-2xl	">{{ loadItem.name }}</h2>
          <span class="text-sm lg:text-base	"
            >{{ loadItem.description }}, {{ loadItem.color }},
            {{ loadItem.measurement }}
          </span>
          <div class="flex flex-row space-x-2 items-center ">
            <img
              class="self-center"
              src="https://ikea-imgsrv.loyaltypoint.pl/behtar/pip-badge/ikeafamily.png"
              alt=""
            />

            <span class="text-xs tracking-tight	"
              ><b>10%</b> kwoty wydanej na zakupy <b>powyżej 400,-</b> zwracamy
              na karte rabatową. <b class="underline">Sprawdź.</b></span
            >
          </div>
          <div class="flex flex-row space-x-4 items-center">
            <img
              class="w-12 h-8 self-center"
              src="https://ikea-imgsrv.loyaltypoint.pl/behtar/installments/na-raty.png"
              alt=""
            />
            <span class="text-xs underline font-bold text-left tracking-tighter"
              >Raty 18 x 86,35 <br />RRSO 18.22% - Sprawdź</span
            >
          </div>

          <div class="flex flex-row   space-x-4 items-center">
            <img
              class="w-12 h-8 self-center flex-shrink-0	flex-grow-0"
              src="https://ikea-imgsrv.loyaltypoint.pl/behtar/installments/briefcase.svg"
              alt=""
            />

            <span
              class="flex-grow text-xs underline font-bold text-left tracking-tighter"
              >Leasing dla firm. Sprawdź</span
            >
          </div>

          <div class="flex flex-row space-x-4 items-center">
            <span class="flex">
              <BaseIcon
                v-for="i in 5"
                :class="
                  i <= loadItem.rating ? 'text-gray-900' : 'text-gray-300'
                "
                class="fill-current w-4 h-4"
                :key="i"
                imageUrl="star"
              />
            </span>
            <span class="text-sm"> ({{ loadItem.rating }})</span>
          </div>
        </div>
        <div class="flex">
          <span class="font-bold text-xl md:text-2xl"
            >{{ loadItem.price }},-</span
          >
        </div>
      </div>
      <div class="mb-7 flex space-x-2 ">
        <span><BaseIcon class="w-4 h-4" imageUrl="info"/></span>
        <span class="text-xs text-gray-700"
          >Akcesoria wewnętrzne, które pomogą zorganizować wnętrze szafy,
          sprzedawane są oddzielnie. Gałki i uchwyty sprzedawane są osobno.
        </span>
      </div>

      <div class="mb-7 border-t">
        <button class="flex w-full flex-row items-center justify-between mt-5">
          <span class="flex flex-col items-start">
            <span class="font-bold">Rozmiar</span>
            <span class="text-sm"> {{ loadItem.measurement }}</span>
          </span>

          <BaseIcon imageUrl="chevron-right" class=" w-5 h-5" />
        </button>
      </div>
      <div class="mb-7 flex gap-2 justify-between items-center">
        <button
          @click="addToCart()"
          class="flex-grow bg-blue-600 hover:bg-blue-700 rounded-full  "
        >
          <span class="inline-flex items-center px-8 h-12">
            <span v-if="!isClicked" class="text-white font-bold text-sm "
              >Dodaj do koszyka</span
            >
            <div v-else class=" inline-flex  items-center">
              <span class="text-white font-bold text-sm ">Dodano</span>
              <BaseIcon
                imageUrl="check"
                class="w-4 h-4 ml-2 pointer-events-none"
              />
            </div>
          </span>
        </button>
        <button
          class="bg-white hover:bg-gray-200 border border-gray-200 rounded-full font-bold text-sm px-3.5 py-3.5"
        >
          <span> <BaseIcon imageUrl="heart" /> </span>
        </button>
      </div>
      <div
        class="mb-7 flex p-5 shadow-lg	space-x-2  border border-gray-200 border-opacity-50"
      >
        <BaseIcon imageUrl="info" class="w-12 h-12 pb-3 text-blue-600" />
        <div>
          <p class="font-bold">Zdalne planowanie szaf PAX</p>
          <span
            >Marzysz o nowej szafie i potrzebujesz inspiracji? Zaplanuj ją z
            IKEA bez wychodzenia z domu podczas 45-minutowego spotkania online!
            Umów się</span
          >
        </div>
      </div>
      <div>
        <div class="flex py-5 space-x-2 items-center">
          <BaseIcon imageUrl="truck" />
          <span>Produkt dostępny do zamówienia</span>
          <span class="bg-green-600  rounded-full w-2 h-2"></span>
        </div>
        <div class="flex py-5 space-x-2 border-t items-center">
          <BaseIcon imageUrl="globe" />
          <span class="underline">Sprawdź dostępność w sklepie </span>
        </div>
      </div>
    </div>
    <div class="md:col-span-2 lg:col-span-3">
      <div class="flex flex-col space-y-1 py-12">
        <span class=" text-xs">Numer produktu</span>
        <span class=" bg-black font-bold text-xs text-white w-20 h-6 px-2 py-1"
          >191.272.97
        </span>
      </div>
      <div>
        <div class="py-5 border-t">
          <button
            class="flex w-full flex-row items-center justify-between py-5"
          >
            <span class="font-bold">Informacje o produkcie</span>

            <BaseIcon imageUrl="chevron-right" class=" w-5 h-5" />
          </button>
        </div>
        <div class="py-5 border-t">
          <button
            class="flex w-full flex-row items-center justify-between py-5"
          >
            <span class="font-bold">Wymiary produktu</span>

            <BaseIcon imageUrl="chevron-right" class=" w-5 h-5" />
          </button>
        </div>

        <div class="py-5 border-t">
          <button
            class="flex w-full flex-row items-center justify-between py-5"
          >
            <span class="flex flex-col items-start">
              <span class="font-bold">Opinia</span>
              <div class="flex flex-row space-x-4 items-center">
                <span class="flex">
                  <BaseIcon
                    v-for="i in 5"
                    :class="
                      i <= loadItem.rating ? 'text-gray-900' : 'text-gray-300'
                    "
                    class="fill-current w-4 h-4"
                    :key="i"
                    imageUrl="star"
                  />
                </span>
                <span class="text-sm"> ({{ loadItem.rating }})</span>
              </div>
            </span>

            <BaseIcon imageUrl="chevron-right" class=" w-5 h-5" />
          </button>
        </div>
        <div class="py-5 border-t">
          <button
            class="flex w-full flex-row items-center justify-between py-5"
          >
            <span class="font-bold">Na raty w IKEA</span>

            <BaseIcon imageUrl="chevron-right" class=" w-5 h-5" />
          </button>
        </div>
        <div class="py-5 border-t">
          <button
            class="flex w-full flex-row items-center justify-between py-5"
          >
            <span class="font-bold">Leasing dla firm</span>

            <BaseIcon imageUrl="chevron-right" class=" w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--- Grid --->
</template>

<script>
import BaseIcon from './BaseIcon.vue';
export default {
  components: {
    BaseIcon,
  },
  props: ['id'],
  data() {
    return {
      ratings: [],
      isClicked: false,
    };
  },

  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.loadItem);
      this.isClicked = true;
    },
  },

  computed: {
    loadItem() {
      return this.$store.getters.loadItemById(this.id);
    },
  },
  created() {},
};
</script>

<style></style>
