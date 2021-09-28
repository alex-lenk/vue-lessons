<template>
  <div class="container">
    <div class="card">
      <h2>Актуальные новости на {{ localeDate }}</h2>
      Открыто новостей: {{ newsRate }}
    </div>

    <app-news
      v-for="(item, idx) in news" item="item"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-opened="item.isOpened"
      :index="idx"
      v-on:open-news="newsRate++"
    ></app-news>
  </div>
</template>

<script>
import AppNews from './AppNews'

export default {
  data () {
    return {
      newsRate: 0,
      localeDate: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Первое беспилотное такси в России',
          id: 1,
          isOpened: false
        },
        {
          title: 'В мире прекратили продажу этилированного бензина',
          id: 2,
          isOpened: false
        },
        {
          title: 'Грибы защитят космонавтов от радиации',
          id: 3,
          isOpened: false
        }
      ]
    }
  },
  components: {
    'app-news': AppNews
  }
}
</script>
