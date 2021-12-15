<template>
  <div class="alert primary">
    <p class="alert-title">{{ title }}</p>
    <p>This text</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'type'],
  name: "AppAlert"
}
</script>

<style scoped>

</style>
