<template>
  <div class="card">
    <h3>{{ id }}. {{ title }} ({{ index }})</h3>
    <button class="btn" @click="open">{{ isOpened ? 'Скрыть новость' : 'Раскрыть новость' }}</button>
    <p v-if="isOpened">loream imsipet</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpened: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        return value === true || value === false
      }
    },
    index: Number
  },
  data () {
    return {
      isNewsOpen: this.isOpened
    }
  },
  methods () {
  }
}
</script>
