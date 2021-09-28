<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="default">Нет текста</slot>
    <slot name="footer" v-if="$slots.footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'AppBlock',
  mounted () {
    console.log(this.$slots)
  }
}
</script>

<style scoped>

</style>
