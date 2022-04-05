// eslint-disable-next-line no-undef
Vue.createApp({
  data() {
    return {
      title: 'Список',
      placeholder: 'Введите название',
      inputValue: '',
      notes: ['value simple', 'value', 'one']
    }
  },
  methods: {
    addInputValue(event) {
      if (this.inputValue !== '' && (event.key || !event.key)) {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    deleteCurrentNote(idx) {
      this.notes.shift(idx)
      //event.target.closest('.list-item').remove()
    },
    toUppercase(item) {
      return item.toUpperCase()
    }
  },
  computed: {
    doubleCounts() {
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        console.log(value)
        this.inputValue = ''
      }
    }
  }
}).mount('#app')
