<template>
  <div>
    <div class="space-y-5">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-2xl">Koszyk</h1>
        <button class="hover:bg-gray-200 rounded-full p-4">
          <BaseIcon imageUrl="dots" class=" w-5 h-5" />
        </button>
      </div>

      <button class="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-full ">
        <span class=" inline-flex items-center ">
          <span class="text-white font-bold text-sm ">Dalej</span>
        </span>
      </button>
    </div>

    <div class="flex items-center py-10">
      <div class="self-start w-16 mr-3">
        <img :src="loadItem.img" :alt="`Szafa ${loadItem.name}`" />
      </div>
      <div class="flex-grow space-y-3">
        <div class="flex">
          <ul>
            <li class="font-bold">
              <span>PAX</span>
            </li>
            <li>
              <span>Szafa, biały/Bergsbo biały</span>
            </li>
            <li>
              <span>150x60x236 cm</span>
            </li>
          </ul>
          <div class="ml-auto">
            <span class="font-bold">1365,-</span>
          </div>
        </div>
        <div class="flex flex-row items-center space-x-5">
          <div
            class="flex  w-24 items-center border hover:border-gray-700  rounded-full py-1.5 px-4 relative"
          >
            <select class="w-full appearance-none outline-none">
              <optgroup v-for="option in 100" :key="option">
                <option :value="option">{{ option }}</option>
              </optgroup>
            </select>
            <BaseIcon
              class="w-4 h-4 absolute right-3 pointer-events-none"
              imageUrl="chevron-down"
            />
          </div>
          <div class="flex-grow">
            <button>
              <span>Usuń produkty</span>
            </button>
          </div>
          <div>
            <button class="hover:bg-gray-200 rounded-full p-4">
              <BaseIcon imageUrl="dots" class=" w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-14 mt-10">
      <div class="text-xs  space-y-5">
        <div>
          <h1 class="font-bold">Podsumowanie</h1>
        </div>
        <div class="flex justify-betwee	">
          <h2>Dostawa</h2>
          <h2 class="ml-auto">
            Koszt dostawy poznasz na dalszym etapie zamówienia
          </h2>
        </div>
        <hr class="bg-black border-black h-0.5 my-5" />
        <div class="flex justify-between font-bold items-center">
          <h2>Wartość produktów</h2>
          <h2 class="text-2xl">1365,-</h2>
        </div>
      </div>
      <div>
        <div class="py-7 px-5 border rounded">
          <div class="flex items-center">
            <div>
              <h2 class="block font-bold text-lg">Masz konto?</h2>
              <h3 class="text-sm">
                <a class="underline" href="#">Dołącz lub zaloguj się</a> aby
                szybko i sprawnie dokonywać zakupów i uzyskać dostęp do historii
                zamówień.
              </h3>
            </div>
            <div>
              <BaseIcon class="h-8 w-8" imageUrl="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
export default {
  components: {
    BaseIcon,
  },
  computed: {
    loadItem() {
      return this.$store.getters.loadItemById(1);
    },
  },
};
</script>

<style></style>
