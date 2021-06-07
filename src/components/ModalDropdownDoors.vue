<template>
  <li class="py-6">
    <button
      @click="isListActive = !isListActive"
      class="flex w-full justify-between"
    >
      <span class="flex flex-col items-start">
        <span>Drzwi</span>
        <span v-if="doorTypeItems.length >= 1" class="text-xs text-left	">
          {{ doorTypeItems.join(', ') }}</span
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
          :class="{
            'opacity-50':
              wardrobeAmount('Drzwi na zawiasach') == 0 ? true : false,
          }"
          :disabled="wardrobeAmount('Drzwi na zawiasach') == 0"
          :availableProducts="wardrobeAmount('Drzwi na zawiasach')"
          label="Drzwi na zawiasach"
          v-model="filteredDoorType"
          value="Drzwi na zawiasach"
          @change="onChange()"
        />
        <BaseCheckbox
          :class="{
            'opacity-50':
              wardrobeAmount('Drzwi przesuwane') == 0 ? true : false,
          }"
          :disabled="wardrobeAmount('Drzwi przesuwane') == 0"
          :availableProducts="wardrobeAmount('Drzwi przesuwane')"
          label="Drzwi przesuwane"
          v-model="filteredDoorType"
          value="Drzwi przesuwane"
          @change="onChange()"
        />
        <BaseCheckbox
          :class="{
            'opacity-50': wardrobeAmount('Drzwi lustrzane') == 0 ? true : false,
          }"
          :disabled="wardrobeAmount('Drzwi lustrzane') == 0"
          :availableProducts="wardrobeAmount('Drzwi lustrzane')"
          label="Drzwi lustrzane"
          v-model="filteredDoorType"
          value="Drzwi lustrzane"
          @change="onChange()"
        />
        <BaseCheckbox
          :class="{
            'opacity-50': wardrobeAmount('Drzwi szklane') == 0 ? true : false,
          }"
          :disabled="wardrobeAmount('Drzwi szklane') == 0"
          :availableProducts="wardrobeAmount('Drzwi szklane')"
          label="Drzwi szklane"
          v-model="filteredDoorType"
          value="Drzwi szklane"
          @change="onChange()"
        />
        <BaseCheckbox
          :class="{
            'opacity-50': wardrobeAmount('Bez drzwi') == 0 ? true : false,
          }"
          :disabled="wardrobeAmount('Bez drzwi') == 0"
          :availableProducts="wardrobeAmount('Bez drzwi')"
          label="Bez drzwi"
          v-model="filteredDoorType"
          value="Bez drzwi"
          @change="onChange()"
        />
      </div>
    </div>
  </li>
</template>

<script>
import BaseIcon from './BaseIcon';
import BaseCheckbox from './BaseCheckbox';

export default {
  components: {
    BaseIcon,
    BaseCheckbox,
  },

  data() {
    return {
      isListActive: this.$store.getters.getIsListActive.ModalDropdownDoors,
      filteredDoorType: [],
    };
  },
  methods: {
    onChange() {
      let checked = [...this.filteredDoorType];

      this.$store.commit('setFiltersValues', {
        doorType: checked,
      });
    },
    wardrobeAmount(value) {
      let searchedWardrobe = this.wardrobesFiltered.filter((wardrobe) => {
        return wardrobe.doorType == value;
      });
      return searchedWardrobe.length;
    },
  },

  computed: {
    doorTypeItems() {
      return this.$store.getters.getItemProperty('doorType');
    },

    wardrobesFiltered() {
      return this.$store.getters.loadFilters;
    },
  },

  watch: {
    doorTypeItems: {
      deep: true,
      handler(value) {
        if (value.length == 0) {
          this.filteredDoorType = [];
        }
      },
    },
  },
  created() {
    this.filteredDoorType = this.doorTypeItems;
  },
};
</script>

<style></style>
