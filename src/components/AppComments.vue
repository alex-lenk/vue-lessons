<template>
  <p v-if="baseComment.length === 0">
    <button class="btn primary" @click="$emit('load')">Загрузить комментарии</button>
  </p>

  <div class="card" v-else>
    <h2>Комментарии</h2>

    <ul class="list">
      <li class="list-item"
          v-for="item in baseComment"
          :key="item.id"
      >
        <div>
          <p><strong>{{item.email}}</strong></p>
          <small>{{item.body}}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['load'],
  props: ['baseComment'],
  methods: {
  },
  name: 'AppComments'
}
</script>

<style scoped>

</style>
