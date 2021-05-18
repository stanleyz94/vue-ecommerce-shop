<template>
  <button
    @click="isListActive = !isListActive"
    class="flex w-full justify-between "
  >
    <span class="flex flex-col items-start  flex-wrap	">
      <span>Ocena</span>
      <span
        v-if="filteredRatings.length >= 1"
        class="text-xs text-left	break-words	"
      >
        {{ filteredRatings.join(', ') }}</span
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
      <!-- <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        v-model="exampleArr"
        value="5"
      >
        <span class="flex">
          <BaseIcon
            v-for="i in 5"
            :class="i <= ratings[0] ? 'text-gray-900' : 'text-gray-300'"
            class="fill-current w-7 h-7"
            :key="i"
            imageUrl="star"
          />
        </span>
      </BaseCheckbox>
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        v-model="exampleArr"
        value="4"
      >
        <span class="flex">
          <BaseIcon
            v-for="i in 5"
            :class="i <= ratings[1] ? 'text-gray-900' : 'text-gray-300'"
            class="fill-current w-7 h-7"
            :key="i"
            imageUrl="star"
          />
        </span>
      </BaseCheckbox>
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        v-model="exampleArr"
        value="3"
      >
        <span class="flex">
          <BaseIcon
            v-for="i in 5"
            :class="i <= ratings[2] ? 'text-gray-900' : 'text-gray-300'"
            class="fill-current w-7 h-7"
            :key="i"
            imageUrl="star"
          />
        </span>
      </BaseCheckbox> -->

      <BaseCheckbox
        v-for="(rating, index) in ratings"
        :key="index + 1"
        :availableProducts="this.testNumberOfProducts"
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
      isListActive: false,
      filteredRatings: [],
      ratings: [5, 4, 3],
    };
  },
  methods: {
    onChange() {
      let checked = [...this.filteredRatings];

      if (checked.length <= 1) {
        this.$store.commit('setFiltersValues3', { rating: checked.join() });
      } else {
        this.$store.commit('setFiltersValues3', { rating: checked });
      }
    },
  },
};
</script>

<style></style>
