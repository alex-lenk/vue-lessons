<template>
  <div v-if="email">
    <h2>{{ email.theme }}</h2>

    <p>
    </p>

    <button class="btn" @click="$router.push('/mail')">Закрыть</button>
  </div>

  <div v-else>
    <h3>Выберите письмо</h3>
  </div>
</template>

<script>
export default {
  inject: ['emails'],
  props: ['mailId'],
  computed: {
    email() {
      return this.emails.find(e => e.id === parseInt(this.mailId))
    }
  }
}
</script>

<style scoped>

</style>
