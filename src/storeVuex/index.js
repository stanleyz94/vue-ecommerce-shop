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

    clearSpecificValues(state, value) {
      const appliedFilter = value;
      const filteredValues = Object.values(state.filteredValues);

      const foundValues = filteredValues.find((el) => {
        if (Array.isArray(el)) {
          return el.includes(appliedFilter);
        }
      });
      const isUndefined = typeof foundValues == 'undefined';

      if (!isUndefined) {
        foundValues.splice(foundValues.indexOf(appliedFilter), 1);
      }
      if (typeof appliedFilter == 'number' && isUndefined) {
        state.filteredValues['rating'] = '';
      }

      if (typeof appliedFilter == 'string' && isUndefined) {
        state.filteredValues['sortedValue'] = '';
      }

      if (appliedFilter == 'Nowość') {
        state.filteredValues['newest'] = false;
      }
      if (appliedFilter == 'W sprzedaży przez internet') {
        state.filteredValues['saleOnline'] = false;
      }
    },
  },
  //async
  actions: {},
  //get data from state
  getters: {
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
