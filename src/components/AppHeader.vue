<template>
  <header class="card">
    <h2>Fresh news {{ dataNow }}</h2>
    <span>Открыто: {{ openRate }} || прочтено: <strong>{{ readRate }}</strong></span>
  </header>
</template>

<script>
export default {
  props: ['openRate', 'readRate'],
  data() {
    return {
      dataNow: new Date().toLocaleDateString(),
    }
  },
name: "TheHeader"
}
</script>

<style scoped>

</style>
