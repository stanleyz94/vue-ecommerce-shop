<template>
  <li class="py-6">
    <button
      @click="isListActive = !isListActive"
      class="flex w-full justify-between "
    >
      <span class="flex flex-col items-start  flex-wrap	">
        <span>Materiał</span>
        <span
          v-if="materialTypeItems.length >= 1"
          class="text-xs text-left	break-words	"
        >
          {{ materialTypeItems.join(', ') }}</span
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
              wardrobeAmount('Drewno (łączne z płytą)') == 0 ? true : false,
          }"
          :disabled="wardrobeAmount('Drewno (łączne z płytą)') == 0"
          :availableProducts="wardrobeAmount('Drewno (łączne z płytą)')"
          label="Drewno (łączne z płytą)"
          v-model="filteredMaterials"
          value="Drewno (łączne z płytą)"
          @change="onChange()"
        />
        <BaseCheckbox
          :class="{
            'opacity-50': wardrobeAmount('Metal') == 0 ? true : false,
          }"
          :disabled="wardrobeAmount('Metal') == 0"
          :availableProducts="wardrobeAmount('Metal')"
          label="Metal"
          v-model="filteredMaterials"
          value="Metal"
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
      isListActive: this.$store.getters.getIsListActive.ModalDropdownMaterial,
      filteredMaterials: [],
    };
  },
  methods: {
    onChange() {
      let checked = [...this.filteredMaterials];
      this.$store.commit('setFiltersValues', { materialType: checked });
    },
    wardrobeAmount(value) {
      let searchedWardrobe = this.wardrobesFiltered.filter((wardrobe) => {
        return wardrobe.materialType == value;
      });
      return searchedWardrobe.length;
    },
  },

  computed: {
    materialTypeItems() {
      return this.$store.getters.getItemProperty('materialType');
    },
    wardrobesFiltered() {
      return this.$store.getters.loadFilters;
    },
  },

  watch: {
    materialTypeItems: {
      deep: true,
      handler(value) {
        if (value.length == 0) {
          this.filteredMaterials = [];
        }
      },
    },
  },
  created() {
    this.filteredMaterials = this.materialTypeItems;
  },
};
</script>

<style></style>
