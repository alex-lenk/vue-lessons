<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot/>
  </button>
</template>

<script>
export default {
  emits: ['action'],
  props: {
    text: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'primary', 'danger'].includes(value)
      },
    },
  },
  name: "AppButton"
}
</script>

<style scoped>

</style>
