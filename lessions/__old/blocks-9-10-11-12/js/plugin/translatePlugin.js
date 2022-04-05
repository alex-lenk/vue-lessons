export default {
  install(app, options) {
    let current = 'ru'

    const changeLang = name => {
      current = name
      console.log(current)
    }

    app.config.globalProperties.$alert = text => {
      window.alert(text)
    }

    app.config.globalProperties.$lang18 = key => {
      return key.split('.').reduce((words, k) => {
        return words[k] || '=НЕИЗВЕСТНАЯ_ЛОКАЛЬ='
      }, options[current])
    }

    app.provide('changeLang18', changeLang)
  }
}
