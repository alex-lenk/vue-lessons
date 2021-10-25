<template>
  <div class="card">
    <ul>
      <li v-for="(item, idx) in 5" :key="idx">
        <slot :iter="item" :idx="idx"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppList'
}
</script>

<style scoped>

</style>
