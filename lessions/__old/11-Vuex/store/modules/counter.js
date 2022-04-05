export default {
  namespaced: true,
  state() {
    return {
      counter: 1
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    add(state, payload) {
      state.counter += payload.value
    }
  },
  actions: {
    incrementAsync({ commit }, payload) {
      setTimeout(() => {
        commit('add', payload)
      }, payload.delay)
    }
  },
  getters: {
    counter(state) {
      //if (state.counter > 20) return state.counter + 'шт.'
      return state.counter
    },
    doubleCounter(_, getters, getRoot, stateRoot) {
      return getters.counter * 2
    }
  }
}
