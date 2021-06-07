<template>
  <div class="text-center">
    <h1 class="font-bold text-2xl p-5">Ups... Coś poszło nie tak!</h1>

    <p class="pb-5">Strona, której szukasz niestety nie istnieje.</p>

    <p>Spróbuj pod linkiem poniżej.</p>

    <router-link :to="{ name: 'Home' }"
      ><p class="underline">Wróć do strony głównej IKEA</p></router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style></style>
