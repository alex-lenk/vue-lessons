import {createStore} from 'vuex'

export default createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    add(state, payload) {
      state.counter += payload.value
    }
  },
  actions: {
    addAsync(context, payload) {
      setTimeout(() => {
        context.commit('add', payload)
      }, payload.delay)
    }
  },
  getters: {
    counter(state) {
      //if (state.counter > 20) return state.counter + 'шт.'
      return state.counter
    },
    doubleCounter(_, getters) {
      return getters.counter * 2
    }
  }
})
