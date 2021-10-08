import { createApp, defineAsyncComponent } from 'vue'
import './theme.css'
import App from './App.vue'

const app = createApp(App)

// Global Components
app.component('async-component', defineAsyncComponent(() => {
  return import('./AppAsyncComponent')
}))

app.mount('#app')
