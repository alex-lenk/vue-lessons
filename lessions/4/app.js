h = Vue.h

// eslint-disable-next-line no-undef
const app = Vue.createApp({
  // template: `
  //   <div class="card center">
  //   <h1>{{ title }}</h1>
  //   <button class="btn primary" @click="title = 'New title'">Change</button>
  //   </div>
  // `,
  data: () => ({
    title: 'Title template'
  }),
  methods: {
    changeTitle() {
      this.title = 'New title'
    }
  },
  render() {
    return h('div', {
        className: 'card'
      },
      [
        h('h1', {}, this.title),
        h('button', {
          class: 'btn primary',
          onclick: this.changeTitle,
        }, 'Change')
      ])
  },
  beforeCreate() {
    console.log('beforeCreated')
  },
  before() {
    console.log('before')
  },
  beforeMounted() {
    console.log('beforeMounted')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmount')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
})
const appSecond = Vue.createApp({

})
app.mount('#app')
appSecond.mount('#appSecond')

/*
setTimeout(() => {
  app.unmount()
}, 2000)
*/
