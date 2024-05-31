import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
    };
  },
  mutations: {
    setAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
  },
});

export default store;
