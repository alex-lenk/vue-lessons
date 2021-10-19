<template>
  <div class="card">
    <h3>{{ title }}</h3>

    <app-button @action="open">{{ isNewsOpen ? 'Скрыть новость' : 'Развернуть' }}</app-button>

    <app-button @action="unmark" v-if="wasRead" :color="'danger'">отметить непрочитанной</app-button>

    <div v-if="isNewsOpen">
      <hr>

      <p>loream imsipetloream imsipetloream imsipetloream imsipetloream imsipetloream imsipet</p>

      <app-button @action="mark" v-if="!wasRead" color="primary">Подробнее</app-button>

      <app-other-news></app-other-news>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton'
import AppOtherNews from './AppOtherNews'

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
    wasRead: Boolean
  },
  // emits: ['open-news'],
  /*  emits: {
      'open-news'(num) {
        if (num) {
          return true
        }
        console.warn("нет параметров data")
        return false
      }
    }, */
  emits: {
    'open-news': null,
    'read-news' (id) {
      if (id) {
        return true
      }
      console.warn('Нет id у новости')
      return false
    },
    unmark: null
  },
  data () {
    return {
      isNewsOpen: this.isOpened
    }
  },
  methods: {
    open () {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark () {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    unmark () {
      this.$emit('unmark', this.id)
    }
  },
  components: {
    AppButton,
    AppOtherNews
  }
}
</script>
