<template>
  <header class="navbar">
    <span>Vuex:</span>
    <strong>{{ counter }}</strong>

    <button class="btn" @click="add">Добавить 5</button>
  </header>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit('add', 5)
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  }
}
</script>
