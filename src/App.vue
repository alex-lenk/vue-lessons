<template>
  <div class="container">
    <AppHeader :openRate="openRate" :readRate="readRate" />

    <appNews
      v-for="item in news"
      :key="item.id"
      :id="item.id"
      :item="item"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unread-news="unreadNews"
    />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppNews from "@/components/AppNews";

export default {
  provide() {
    return {
      title: 'список новостей',
      news: this.news
    }
  },
  data: () => ({
    openRate: 0,
    readRate: 0,
    news: [
      {
        id: 1,
        isOpen: false,
        wasRead: false,
        title: 'Гугл удвоит скорость Интернета для африканцев',
        text: 'Подводный кабель, принадлежащий Google, который поможет удвоить скорость Интернета для миллионов людей в Африке, достиг Того в прошлую пятницу.',
      },
      {
        id: 2,
        isOpen: false,
        wasRead: false,
        title: 'Если ты не понимаешь, что происходит?',
        text: 'Что делать, если ты не понимаешь, что происходит? Когда привычный мир меняется с просто невообразимой скоростью?',
      },
      {
        id: 3,
        isOpen: false,
        wasRead: false,
        title: 'Миссия Психея близка к запуску',
        text: 'Миссия Психея, которая должна помочь исследовать один из самых богатых металлами астероидов, приблизилась к старту.',
      },
      {
        id: 4,
        isOpen: false,
        wasRead: false,
        title: 'Двунаправленная зарядка электрокаров поможет экономить на электричестве',
        text: 'На выставке потребительской электроники 2022 года (CES) компания Wallbox Industries представит свою двунаправленную домашнюю зарядную станцию второго поколения для рынка Северной Америки.',
      },
    ],
  }),
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      const index = this.news.findIndex(news => news.id === id)
      this.news[index].wasRead = true
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  name: 'App',
  components: {
    AppNews,
    AppHeader
  }
}
</script>
