<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between "
  >
    <span class="flex flex-col items-start  flex-wrap	">
      <span>Ocena</span>
      <span
        v-if="filteredRatings.length >= 1 || ratingTypeItems !== ''"
        class="text-xs text-left	break-words	"
      >
        {{
          Array.isArray(ratingTypeItems)
            ? ratingTypeItems.join(', ')
            : ratingTypeItems
        }}</span
      >
    </span>
    <BaseIcon
      class="w-6 h-6 flex-shrink-0"
      :imageUrl="isListActive ? 'chevron-up' : 'chevron-down'"
    />
  </button>

  <div
    :class="
      isListActive
        ? 'opacity-100 visible h-auto p-7 space-y-5'
        : 'h-0 opacity-0 invisible overflow-hidden'
    "
    class="transition duration-500 ease-in-out text-sm  bg-white "
  >
    <div class="space-y-5">
      <BaseCheckbox
        v-for="(rating, index) in ratings"
        :key="index + 1"
        :class="{
          'opacity-50': wardrobeAmount(rating) == 0 ? true : false,
        }"
        :disabled="wardrobeAmount(rating) == 0"
        :availableProducts="wardrobeAmount(rating)"
        v-model="filteredRatings"
        :value="rating"
        @change="onChange()"
      >
        <span class="flex">
          <BaseIcon
            v-for="i in 5"
            :class="i <= rating ? 'text-gray-900' : 'text-gray-300'"
            class="fill-current w-7 h-7"
            :key="i"
            imageUrl="star"
          />
        </span>
      </BaseCheckbox>
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon';
import BaseCheckbox from './BaseCheckbox';

export default {
  components: {
    BaseIcon,
    BaseCheckbox,
  },
  inject: ['testNumberOfProducts'],
  data() {
    return {
      isListActive: this.$store.getters.getIsListActive.ModalDropdownRating,
      filteredRatings: [],
      ratings: [5, 4, 3],
    };
  },
  methods: {
    onChange() {
      let checked = [...this.filteredRatings];

      if (checked.length <= 1) {
        this.$store.commit('setFiltersValues', {
          rating: Number(checked.join()),
        });
      } else {
        this.$store.commit('setFiltersValues', { rating: checked });
      }
    },
    wardrobeAmount(value) {
      let searchedWardrobe = this.wardrobesFiltered.filter((wardrobe) => {
        return wardrobe.rating == value;
      });
      return searchedWardrobe.length;
    },
  },

  computed: {
    ratingTypeItems() {
      return this.$store.getters.getItemProperty('rating');
    },
    wardrobesFiltered() {
      return this.$store.getters.loadFilters;
    },
  },

  watch: {
    ratingTypeItems: {
      deep: true,
      handler(value) {
        if (Array.isArray(value)) {
          if (value.length == 0) {
            this.filteredRatings = [];
          }
        }
        if (!value) {
          this.filteredRatings = [];
        }
      },
    },
  },
};
</script>

<style></style>
