import {createApp} from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from "./js/plugin/translatePlugin";

const app = createApp(App)

const ru = {
   app: {
     title: 'Как работают плагины VUE JS?',
     changeBtn: 'сменить язык'
   }
}
const en = {
   app: {
     title: 'How do VUE JS plugins work?',
     changeBtn: 'change lang'
   }
}

app.use(translatePlugin, {ru, en})

app.mount('#app')
