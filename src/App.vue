<template>
  <div class="container with-nav">
    <the-navbar></the-navbar>

    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ $store.state.counter }}</h2>

      <button class="btn" @click="increment">Добавить</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'

export default {
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  },
  components: {TheNavbar}
}
</script>
