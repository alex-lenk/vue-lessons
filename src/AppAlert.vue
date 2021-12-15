<template>
  <div class="alert primary" @click="$emit('close')">
    <p class="alert-title">{{ title }}</p>
    <p>This text</p>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: ['title', 'type'],
  name: "AppAlert"
}
</script>

<style scoped>

</style>
