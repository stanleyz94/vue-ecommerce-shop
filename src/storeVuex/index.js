import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue',
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
  },
  //get data from state
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },

  //breaking to different (states)
  modules: {},
});
