<template>
  <div class="card">
    <h3>{{ item.id }}. {{ item.title }}</h3>

    <appButton @action="opened">{{ isNewsOpen ? 'закрыть' : 'открыть' }}</appButton>

    <div v-if="isNewsOpen">
      <hr>

      <p>
        {{ item.id }}. {{ item.text }}
      </p>


      <appButton v-if="!item.wasRead" color="primary" @action="mark">прочесть</appButton>

      <appButton v-else color="danger" @action="$emit('unread-news', item.id)">Пометить не прочитанным</appButton>

      <app-news-list/>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppNewsList from "@/components/AppNewsList";

export default {
  props: {
    item: Object,
    /*    isOpen: {
          type: Boolean,
          required: false,
          default: false,
          validator (value) {
            return value === true || value === false
          }
        },*/
  },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('no data in emit read-news')
      return false
    },
    'unread-news'(id) {
      if (id) {
        return true
      }
      console.warn('no data in emit unread-news')
      return false
    },
  },
//props: ['title'],
//emits: ['open-news'],
  data: () => ({
    isNewsOpen: false,
    isRead: false,
  }),
  methods: {
    opened() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.item.id)
    },
    /*    unmark() {
          this.isNewsOpen = false
          this.$emit('unread-news', this.item.id)
        },*/
  },
  components: {AppNewsList, AppButton},
  name: 'AppNews',
}
</script>
