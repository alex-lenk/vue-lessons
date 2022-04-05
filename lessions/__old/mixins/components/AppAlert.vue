<template>
  <div class="alert" :class="type">
    <h3>{{ title }}</h3>

    <p>{{ Text }}</p>

    <button class="btn" v-if="closable" :class="type" @click="$emit('close')">закрыть</button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title: String,
    Text: String,
    closable: {
      type: Boolean,
      required: false,
      default: false

    },
    type: {
      default: 'primary',
      validator (value) {
        return ['warning', 'primary', 'danger'].includes(value)
      }
    }
  },
  name: 'AppAlert'
}
</script>
