<template>
  <header class="navbar">
    <span>Vuex:</span>
    <strong>{{ counter }}</strong>

    <button class="btn primary" @click="add">Добавить 5</button>
  </header>
</template>

<script>
export default {
  methods: {
    add() {
      //1). this.$store.commit('add', 5)
      /*2). this.$store.commit('add', {
        value: 5
      })*/
      this.$store.commit({
        type: 'add',
        value: 5
      })
    }
  },
  computed: {
    counter() {
      return this.$store.getters.counter
    }
  }
}
</script>
