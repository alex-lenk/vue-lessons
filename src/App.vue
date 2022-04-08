<template>
  <div class="container">
    <div class="card">
      <h2>Fresh news {{dataNow}}</h2>
      <span>Открыто: {{OpenRate}}</span>
    </div>

    <appNews
      v-for="(item, idx) in news"
      :idx="idx"
      :key="item.id"
      :item="item"
      @news-open="OpenRate++"
    />
  </div>
</template>

<script>
//import TheHeader from "@/components/TheHeader";
import AppNews from "@/components/AppNews";

export default {
  data: () => ({
    OpenRate: 0,
    dataNow: new Date().toLocaleDateString(),
    news: [
      {
        id: 1,
        isOpen: false,
        title: 'Гугл удвоит скорость Интернета для африканцев',
        text: 'Подводный кабель, принадлежащий Google, который поможет удвоить скорость Интернета для миллионов людей в Африке, достиг Того в прошлую пятницу.',
      },
      {
        id: 2,
        isOpen: false,
        title: 'Если ты не понимаешь, что происходит?',
        text: 'Что делать, если ты не понимаешь, что происходит? Когда привычный мир меняется с просто невообразимой скоростью?',
      },
      {
        id: 3,
        isOpen: false,
        title: 'Миссия Психея близка к запуску',
        text: 'Миссия Психея, которая должна помочь исследовать один из самых богатых металлами астероидов, приблизилась к старту.',
      },
      {
        id: 4,
        isOpen: false,
        title: 'Двунаправленная зарядка электрокаров поможет экономить на электричестве',
        text: 'На выставке потребительской электроники 2022 года (CES) компания Wallbox Industries представит свою двунаправленную домашнюю зарядную станцию второго поколения для рынка Северной Америки.',
      },
    ],
  }),
  name: 'App',
  components: {
    AppNews
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
