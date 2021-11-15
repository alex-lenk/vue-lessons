<template>
  <div class="container with-nav">
    <the-navbar></the-navbar>

    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ counter }} ({{ $store.getters.doubleCounter }})</h2>

      <button class="btn" @click="add">Добавить</button>
      <button class="btn danger" @click="addAsync">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'

export default {
  methods: {
    add() {
      this.$store.commit('add', {
        value: 1
      })
    },
    addAsync() {
      this.$store.dispatch('addAsync', {
        value: 15,
        delay: 900
      })
    }
  },
  computed: {
    counter() {
      return this.$store.getters.counter
    }
  },
  components: {TheNavbar}
}
</script>
