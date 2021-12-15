<template>
  <app-alert v-if="alert" title="it is work" type="primary"></app-alert>

  <div class="card">
    <h1>Новая страница для примера</h1>

    <button class="btn primary" @click="toggle">{{ alert ? '' : 'показать'}} сообщение</button>
    <button class="btn" @click="nav">на главную</button>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import AppAlert from "../AppAlert";

export default {
  setup() {
    const alert = ref(false)
    const router = useRouter()
    const route = useRoute()

    console.log(route.path)

    const nav = () => router.push('/')

    const toggle = () => alert.value = !alert.value

    return {
      alert,
      nav,
      toggle
    }
  },
  components: {AppAlert},
  name: "ReUsable"
}
</script>

<style scoped>

</style>
