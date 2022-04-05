// eslint-disable-next-line no-undef
Vue.createApp({
  data: () => ({
    title: 'Список',
    html: '<h1>Vue js</h1>',
    person: {
      firstName: 'Alex',
      lastName: 'Lenk',
      age: '35',
    },
    items: [1, 2, 3, 4, 5, 6, 7]
  }),
  methods: {
    remove(idx) {
      this.items.shift(idx)
    },
    addValue() {
      this.items.unshift(this.$refs.myField.value)
      this.$refs.myField.value = ''
    },
    log(item) {
      console.log('log: ', item)
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  },
  watch: {}
}).mount('#app')
