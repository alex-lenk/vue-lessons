<template>
  <div class="container" v-cloak>
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-block>
      <p>Текст для нового блока</p>

      <template #header>
        <h4>This title</h4>
      </template>

      <template v-slot:footer>
        <hr>
        <small>Copyright</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock'

export default {
  components: {
    AppBlock
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
