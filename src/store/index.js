import { reactive, ref } from 'vue';
import { filtersValuesArray } from '../variables.js';
const state = reactive({
  jakasWartosc: 'test',
});

const filtersValues = ref(filtersValuesArray);

export default {
  state,
  filtersValues,
};

//  setup() {
//     const filtersValues = ref(filtersValuesArray);
//     provide('filtersValues', filtersValues);
//   },
// };
