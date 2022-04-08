<template>
  <div class="card">
    <h3>{{item.id}}. {{ item.title }}</h3>

    <button class="btn" @click="opened">{{isNewsOpen ? 'закрыть' : 'открыть'}}</button>

    <div v-if="isNewsOpen">
      {{ idx }}. {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    idx: Number,
/*    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        return value === true || value === false
      }
    },*/
  },
  data: () => ({
    //is: this.item.isOpen
    isNewsOpen: false,
  }),
  methods: {
    opened() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('news-open')
      }
    }
  },
  name: 'AppNews',
  mounted() {
    //console.log(this.item.isOpen)
    //this.opened(this.item.isOpen)
  }
}
</script>
