const App = Vue.createApp({
  data() {
    return {
      activeIndex: 0,
      isActive: '',
      nameBtn: 'Вперед',
      steps: [
        {
          title: 'Основы',
          text: '1  В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'
        },
        {
          title: 'Компоненты',
          text: '2  Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'
        },
        {
          title: 'Роутер',
          text: '3  В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'
        },
        {
          title: 'Vuex',
          text: '4   В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'
        },
        {
          title: 'Composition',
          text: '5   Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
        },
      ]
    }
  },
  methods: {
    prev() {
      if (this.activeIndex > 0) {
        this.activeIndex = this.activeIndex - 1
        console.log(this.activeIndex)
      }
      if (this.activeIndex < 4) {
        return this.nameBtn = 'Вперед'
      }
      // когда нажимаем кнопку назад
    },
    reset() {
      return this.activeIndex = 0
      // начать заново
    },
    nextOfFinish() {
      this.activeIndex++
      console.log('nextOfFinish (activeIndex): ', this.activeIndex)

      if (this.activeIndex === 4) {
        return this.nameBtn = 'Закончить'
      } else if (this.activeIndex === 5) {
        this.activeIndex = 0
      } else {
        return this.nameBtn = 'Вперед'
      }
      // кнопка вперед или закончить
    },
    setActive(idx) {
      console.log('idx: ', idx, 'activeIndex: ', this.activeIndex)
      this.activeIndex = idx
      if (idx === 4) {
        return this.nameBtn = 'Закончить'
      } else {
        return this.nameBtn = 'Вперед'
      }
      // когда нажимаем на определенный шаг
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    currentStep() {
      return this.steps[this.activeIndex]
    },
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге

    isDisabled() {
      return this.activeIndex === 0
    }
  }
});


App.mount('#app')

