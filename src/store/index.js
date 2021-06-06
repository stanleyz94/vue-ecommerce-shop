import { reactive, ref } from 'vue';
import { filtersValuesArray } from '../variables.js';

const updateLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

//mutations: { productsQuantity: state => product => {
//  const item = state.cart.find(i => i.id === product.id)
//  if(item) return item.quantity
//  else return null
//}}
//

const state = reactive({
  jakasWartosc: 'test',
  cart: [],
});

const filtersValues = ref(filtersValuesArray);

export default {
  state,
  filtersValues,
  updateLocalStorage,
};
