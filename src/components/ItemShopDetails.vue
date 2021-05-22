<template>
  <h1>Shop</h1>
  <h2>{{ id }}</h2>

  <h4>{{ $store.getters.loadItemById(`${id}`) }}</h4>
  <h5>{{ loadItem.img }}</h5>

  <div>
    <img :src="loadItem.img" alt="" />
  </div>
  <div class="flex flex-row justify-between ">
    <div class="space-y-2">
      <h2 class="font-bold text-lg">PAX</h2>
      <span class="text-sm">Szafa, biały/ Bergso biały, 150x60x236 cm</span>
      <div class="flex flex-row space-x-2 ">
        <img
          class="self-center"
          src="https://ikea-imgsrv.loyaltypoint.pl/behtar/pip-badge/ikeafamily.png"
          alt=""
        />

        <span class="text-sm"
          ><b>10%</b> kwoty wydanej na zakupy <b>powyżej 400,-</b> zwracamy na
          karte rabatową. <b class="underline">Sprawdź.</b></span
        >
      </div>
      <div class="flex flex-row space-x-4">
        <img
          class="w-12 h-8 self-center"
          src="https://ikea-imgsrv.loyaltypoint.pl/behtar/installments/na-raty.png"
          alt=""
        />
        <span class="text-sm underline font-bold"
          >Raty 18 x 86,35 <br />RRSO 18.22% - Sprawdź</span
        >
      </div>
    </div>
    <div class="flex">
      <span class="font-bold text-lg">1365,-</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],

  computed: {
    loadItem() {
      return this.$store.getters.loadItemById(this.id);
    },
  },
};
</script>

<style></style>
