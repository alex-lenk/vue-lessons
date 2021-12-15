<template>
  <appAlert
    v-if="alert"
    title="it is work"
    type="primary"
    @close="close"
  />

  <div class="card">
    <h1>Новая страница для примера</h1>

    <button class="btn primary" @click="toggle">{{ alert ? 'закрыть' : 'показать' }} сообщение</button>
    <button class="btn" @click="nav">на главную</button>
  </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import AppAlert from "../AppAlert";
import {useAlert} from "../use/alert";

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    const nav = () => router.push('/')

    return {
      nav,
      ...useAlert(true)
    }
  },
  components: {AppAlert},
  name: "ReUsable"
}
</script>

<style scoped>

</style>
