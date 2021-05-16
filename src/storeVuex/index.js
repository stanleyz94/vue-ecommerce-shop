import { createStore } from 'vuex';
import { items } from '../data/variables';
import { filterValues } from './filters.js';

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
    },
  },
  mutations: {
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
    setFiltersValues2({ commit }, newValue, objectKey) {
      commit('setFiltersValues2', newValue, objectKey);
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
    loadFilters(state) {
      return filterValues(state.items, state.filteredValues);
    },
  },

  //breaking to different (states)
  modules: {},
});
