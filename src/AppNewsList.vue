<template>
  <hr>

  <h4>{{ title }}</h4>

  <ul>
    <li v-for="item in news" :key="item.id">
      {{ item.title }}
      <strong v-if="item.wasRead"><em>прочитана</em></strong>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppNewsList',
  inject: ['title', 'news']
}
</script>

<style scoped>

</style>
