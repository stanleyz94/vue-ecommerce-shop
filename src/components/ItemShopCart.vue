<template>
  <!-- Empty Cart -->
  <div v-if="cartLength == 0" class="space-y-10">
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-2xl">Twój koszyk jest pusty</h1>
      <button class="hover:bg-gray-200 rounded-full p-4">
        <BaseIcon imageUrl="dots" class=" w-5 h-5" />
      </button>
    </div>

    <div class="p-7 border rounded">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="block font-bold text-lg">Masz konto?</h2>
          <h3 class="text-sm mr-2">
            <a class="underline" href="#">Dołącz lub zaloguj się</a> aby szybko
            i sprawnie dokonywać zakupów i uzyskać dostęp do historii zamówień.
          </h3>
        </div>
        <div>
          <BaseIcon class="h-8 w-8 " imageUrl="profile" />
        </div>
      </div>
    </div>
  </div>
  <!-- Cart -->
  <div v-else class="md:grid gap-5 md:grid-cols-3  place-content-start">
    <div class="col-span-2 ">
      <!--Header  -->
      <div class=" space-y-5">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-2xl">Koszyk</h1>
          <button class="hover:bg-gray-200 rounded-full p-4">
            <BaseIcon imageUrl="dots" class=" w-5 h-5" />
          </button>
        </div>
      </div>
      <!--Header  -->
      <!-- Item -->
      <div
        v-for="product in products"
        :key="product.id"
        class=" flex items-center py-10"
      >
        <div class="self-start w-16 md:w-24 mr-3">
          <img :src="product.img" :alt="`Szafa ${product.name}`" />
        </div>
        <div class="flex-grow space-y-3">
          <div class="flex md:text-lg">
            <ul>
              <li class="font-bold">
                <span>{{ product.name }}</span>
              </li>
              <li>
                <span
                  >{{ product.description }}, {{ product.color }} /
                  {{ product.doorType }}</span
                >
              </li>
              <li>
                <span>{{ product.measurement }}</span>
              </li>
            </ul>
            <div class="ml-auto md:text-2xl">
              <span class="font-bold">{{ product.price }},-</span>
            </div>
          </div>
          <div class="flex flex-row items-center space-x-5">
            <div
              class="flex  w-24 items-center border hover:border-gray-700  rounded-full py-1.5 px-4 relative"
            >
              <select
                class="w-full appearance-none outline-none "
                @change="updateQuantity(product, parseInt($event.target.value))"
                :key="product.id"
              >
                <optgroup>
                  <option
                    v-for="option in 100"
                    :key="option"
                    :selected="option == product.quantity"
                    :value="option"
                    >{{ option }}</option
                  >
                </optgroup>
              </select>
              <BaseIcon
                class="w-4 h-4 absolute right-3 pointer-events-none"
                imageUrl="chevron-down"
              />
            </div>
            <div class="flex-grow">
              <button @click="removeFromCart(product)">
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
      <!-- Item -->
    </div>

    <!-- Summary -->
    <div class="col-span-1 md:sticky md:top-0 md:self-start">
      <div class="space-y-14 mt-10 md:mt-0">
        <div class="text-xs md:text-sm space-y-5">
          <div>
            <h1 class="font-bold">Podsumowanie</h1>
          </div>
          <div class="flex justify-between	">
            <h2>Dostawa</h2>
            <h2 class="ml-auto text-right">
              Koszt dostawy poznasz na dalszym etapie zamówienia
            </h2>
          </div>
          <hr class="bg-black border-black h-0.5 my-5" />
          <div class="flex justify-between font-bold items-center">
            <h2>Wartość produktów</h2>
            <h2 class="text-2xl">{{ cartTotal }},-</h2>
          </div>
        </div>
        <div>
          <div class="py-7 px-7 border rounded">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="block font-bold text-lg">Masz konto?</h2>
                <h3 class="text-sm mr-2">
                  <a class="underline" href="#">Dołącz lub zaloguj się</a> aby
                  szybko i sprawnie dokonywać zakupów i uzyskać dostęp do
                  historii zamówień.
                </h3>
              </div>
              <div>
                <BaseIcon class="h-8 w-8 " imageUrl="profile" />
              </div>
            </div>
          </div>
        </div>

        <button class="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-full ">
          <span class=" inline-flex items-center ">
            <span class="text-white font-bold text-sm ">Dalej</span>
          </span>
        </button>
      </div>
    </div>

    <!-- Summary -->
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
    products() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    cartLength() {
      return this.$store.getters.getCartLength;
    },
  },
  methods: {
    removeFromCart(product) {
      this.$store.commit('removeFromCart', product);
    },
    updateQuantity(product, value) {
      this.$store.commit('updateCartQuantity', { product, value });
    },
  },
};
</script>

<style></style>
