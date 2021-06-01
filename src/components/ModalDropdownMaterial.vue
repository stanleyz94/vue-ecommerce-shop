<template>
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
        :availableProducts="this.testNumberOfProducts"
        label="Drewno (łączne z płytą)"
        v-model="filteredMaterials"
        value="Drewno (łączne z płytą)"
        @change="onChange()"
      />
      <BaseCheckbox
        :availableProducts="this.testNumberOfProducts"
        label="Metal"
        v-model="filteredMaterials"
        value="Metal"
        @change="onChange()"
      />
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
      isListActive: this.$store.getters.getIsListActive.ModalDropdownMaterial,
      filteredMaterials: [],
    };
  },
  methods: {
    onChange() {
      let checked = [...this.filteredMaterials];
      this.$store.commit('setFiltersValues', { materialType: checked });
    },
  },

  computed: {
    materialTypeItems() {
      return this.$store.getters.getItemProperty('materialType');
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
};
</script>

<style></style>
