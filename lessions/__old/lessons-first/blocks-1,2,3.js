Vue.createApp({
  data: () => ({
    exampleTitle: 'Заголовок пример',
    exampleHtmlTitle: '<h1>Искусственно созданый заголовок</h1>',
    counter: 0,
    placeholderString: 'Введите название',
    inputValue: '',
    valueItemArchive: '',
    notes: [],
    person: {
      name: 'Alex',
      lastName: 'Lenk',
      age: 34
    },
    numberItems: [1, 2, 3, 4, 5, 6, 7]
  }),
  methods: {
    inputChangeHandler (event) {
      this.inputValue = event.target.value
    },
    addNewNote () {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUppercase (item) {
      return item.toUpperCase()
    },
    removeCurrentNote (index) {
      this.notes.splice(index, 1)
    },
    addItemArchive () {
      if (this.$refs.itemArchive.value !== '') {
        this.numberItems.unshift(this.$refs.itemArchive.value)
        this.$refs.itemArchive.value = ''
      }
    },
    remove (i) {
      this.numberItems.splice(i, 1)
    },
    log (item) {
      console.log('Выводим лог: ', item)
    }
  },
  computed: {
    evenNumbers () {
      return this.numberItems.filter(i => i % 2 === 0)
    },
    doubleCount () {
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue (value) {
      if (value.length >= 11) {
        this.inputValue = ''
      }
    }
  }
}).mount('#app')

/*
const App = {
    data() {
        return {
            counter: 0,
            placeholderString: 'Введите название',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUppercase(item) {
            return item.toUpperCase()
        },
        removeCurrentNote(index) {
            this.notes.splice(index, 1)
        },
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            console.log(value)
            if (value.length >= 7) {
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')
*/
