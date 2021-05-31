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
    cart: [],
    items: items,
    filtersValues: [],
    isListActive: {
      ModalDropdownDoors: false,
      ModalDropdownColor: false,
      ModalDropdownSort: false,
      ModalDropdownProperties: false,
      ModalDropdownPrice: false,
      ModalDropdownMaterial: false,
      ModalDropdownRating: false,
    },
    filteredValues: {
      color: [],
      doorType: [],
      propertyType: [],
      materialType: [],
      saleOnline: false,
      newest: false,
      rating: '',
      price: [],
      sortedValue: '',
    },
    appliedFilters: [],
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

    updateCartQuantity(state, { product, value }) {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) {
        item.quantity = value;
      }
      updateLocalStorage(state.cart);
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
    },
    changeIsListActive(state, propertyName) {
      state.isListActive[propertyName] = true;
    },
    updateAppliedFilters(state) {
      const { newest, saleOnline, ...remainingVal } = state.filteredValues;

      let remainingValues = [];

      for (let key in remainingVal) {
        let value = remainingVal[key];

        if (Array.isArray(value)) {
          remainingValues.push(...value);
        } else {
          remainingValues.push(value);
        }
      }

      const appliedFilters = [
        newest ? 'Najnowszy' : '',
        saleOnline ? 'W sprzedaży przez internet' : '',
        ...remainingValues,
      ].filter((item) => item != '');

      state.appliedFilters = appliedFilters;
      console.log(state.appliedFilters);
    },
  },
  //async
  actions: {
    setFiltersValues({ commit }, newValue) {
      commit('setFiltersValues', newValue);
    },
    setFiltersValues2({ commit }, newValues, objectKey) {
      commit('setFiltersValues2', newValues, objectKey);
    },

    setFiltersValues3({ commit }, newValues) {
      commit('setFiltersValues2', newValues);
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
    getCartLength(state) {
      return state.cart.length;
    },
    getItemProperty: (state) => (propertyName) => {
      const item = state.filteredValues[propertyName];
      if (item) return item;
      else return null;
    },
    getIsListActive(state) {
      return state.isListActive;
    },

    getFilteredValues(state) {
      return state.filteredValues;
    },
  },

  //breaking to different (states)
  modules: {},
});
