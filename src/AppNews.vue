<template>
  <div class="card">
    <h2>Актуальные новости на {{ localeDate }}</h2>

    Открыто новостей: <strong>{{ openRate }}</strong> |
    Прочитатно новостей: <strong>{{ readRate }}</strong>
  </div>

  <app-news-item
    v-for="item in news"
    :key="item.id"
    :title="item.title"
    :id="item.id"
    :is-opened="item.isOpened"
    :was-read="item.wasRead"
    @open-news="openNews"
    @read-news="readNews"
    @unmark="unreadNews"
  ></app-news-item>
</template>

<script>
import AppNewsItem from './AppNewsItem'

export default {
  data () {
    return {
      openRate: 0,
      readRate: 0,
      localeDate: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Первое беспилотное такси в России',
          id: 1,
          isOpened: false,
          wasRead: false
        },
        {
          title: 'В мире прекратили продажу этилированного бензина',
          id: 2,
          isOpened: false,
          wasRead: false
        },
        {
          title: 'Грибы защитят космонавтов от радиации',
          id: 3,
          isOpened: false,
          wasRead: false
        }
      ]
    }
  },
  provide () {
    return {
      title: 'Список новостей',
      news: this.news
    }
  },
  methods: {
    openNews () {
      this.openRate++
    },
    readNews (id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews (id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  components: {
    'app-news-item': AppNewsItem
  }
}
</script>
