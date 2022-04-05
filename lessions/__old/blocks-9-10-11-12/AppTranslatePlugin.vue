<template>
  <div class="container" v-cloak>
    <div class="card">
      <h2>{{ $lang18('app.title') }}</h2>

      <button class="btn" @click="changeLang">{{ $lang18('app.changeBtn') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['changeLang18'],
  methods: {
    changeLang() {
      this.changeLang18('en')
      this.$forceUpdate()
    }
  }
}
</script>
