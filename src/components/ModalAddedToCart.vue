<template>
  <teleport to="body">
    <transition
      appear
      enter-active-class="transition duration-500 "
      leave-active-class="transition duration-500 "
      enter-from-class="transform -translate-y-full md:translate-x-full md:translate-y-0"
    >
      <div
        class="fixed text-xs	md:text-base w-full top-0 md:top-10 md:right-6 md:w-2/4 md:rounded flex  items-center bg-black text-white border border-gray-600 md:border-0 h-14 px-6 py-10 space-x-6"
      >
        <div class="flex-grow">
          <p>
            <strong>{{ productName }}</strong> został dodany do Koszyka.
          </p>
        </div>
        <div class="flex-shrink">
          <router-link
            :to="{
              name: 'ItemShopCart',
            }"
          >
            <button class="font-bold">
              <span>Zobacz</span>
            </button>
          </router-link>
        </div>
        <div class="border-l border-gray-400	flex-shrink">
          <button class="ml-6 p-3" @click="this.$emit('hide-modal-added')">
            <BaseIcon imageUrl="close" class="w-4 h-4 md:w-5 md:h-5 " />
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import BaseIcon from './BaseIcon';
export default {
  components: {
    BaseIcon,
  },
  props: ['name'],
  emits: ['hide-modal-added'],
  data() {
    return {
      productName: this.name,
    };
  },
};
</script>

<style></style>
