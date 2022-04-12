<template>
  <hr>

  <h4>{{title}}</h4>

  <ul>
    <li v-for="item in news" :key="item">
      {{item.title}}
    </li>
  </ul>
</template>

<script>
export default {
  inject: ['title', 'news'],
  name: "AppNewsList"
}
</script>

<style scoped>

</style>
