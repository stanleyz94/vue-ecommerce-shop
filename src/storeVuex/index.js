import { createStore } from 'vuex';
import { items } from '../data/variables';
import {
  filterByValues,
  filterByPrice,
  sortItems,
  resetValues,
} from './filters.js';

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default createStore({
  state: {
    counter: 0,
    colorCode: 'bluse',
    cart: [],
    items: items,
    filtersValues: [],

    filteredValues: {
      color: [],
      doorType: [],
      propertyType: [],
      materialType: [],
      saleOnline: false,
      newest: false,
      rating: 5,
      price: [],
      sortedValue: '',
    },
  },
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      updateLocalStorage(state.cart);
    },

    removeFromCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== product.id);
        }
      }
      updateLocalStorage(state.cart);
    },

    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart');
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber;
    },
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    },
    setFiltersValues(state, newValues) {
      state.filtersValues = [...newValues];
    },
    setFiltersValues2(state, newValues, objectKey) {
      if (Array.isArray(newValues[objectKey])) {
        state.filteredValues[objectKey] = [...newValues];
      } else {
        state.filteredValues[objectKey] = newValues;
      }
    },
    setFiltersValues3(state, newValues) {
      console.log('newValeues: ' + newValues);
      console.log('state: ' + state.filteredValues['color']);

      const key = Object.keys(state.filteredValues).find((key) => {
        if (Object.keys(newValues).includes(key)) {
          return key;
        }
      });

      const values = Object.values(newValues);

      const [extractedValue] = values;

      state.filteredValues[key] = extractedValue;
    },
    clearFilters(state) {
      resetValues(state.filteredValues);
      console.log('test');
    },
  },
  //async
  actions: {
    async increaseCounter({ commit }) {
      const response = await fetch(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      );
      const responseData = await response.json();
      commit('increaseCounter', responseData);
      //   console.log(responseData);
    },
    async decreaseCounter({ commit }) {
      const response = await fetch(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      );
      const responseData = await response.json();
      commit('decreaseCounter', responseData);
      //   console.log(responseData);
    },
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue);
    },
    setFiltersValues({ commit }, newValue) {
      commit('setFiltersValues', newValue);
    },
    setFiltersValues2({ commit }, newValues, objectKey) {
      commit('setFiltersValues2', newValues, objectKey);
    },

    setFiltersValues3({ commit }, newValues) {
      commit('setFiltersValues2', newValues);
    },

    filterItems() {
      //z filtrowac w actions , nowa liste umiescic w state
    },
  },
  //get data from state
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
    loadItems(state) {
      return state.items;
    },
    loadItemById: (state) => (id) => {
      return state.items.find((item) => item.id == id);
    },
    loadFilters(state) {
      return filterByValues(
        filterByPrice(
          sortItems(state.items, state.filteredValues),
          state.filteredValues
        ),
        state.filteredValues
      );
    },
    getItemsLength(state, getters) {
      return getters.loadFilters.length;
    },
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) return item.quantity;
      else return null;
    },
    cartItems: (state) => {
      return state.cart;
    },
    cartTotal: (state) => {
      return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },

  //breaking to different (states)
  modules: {},
});
