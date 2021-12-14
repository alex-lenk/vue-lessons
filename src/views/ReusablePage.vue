<template>
  <div class="card">
    <h1>Новая страница для примера</h1>

    <button class="btn primary">показать сообщение</button>
    <button class="btn" @click="nav">на главную</button>
  </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    console.log(route.path)

    const nav = () => {
      router.push('/')
    }

    return {
      nav
    }
  },
  name: "ReUsable"
}
</script>

<style scoped>

</style>
