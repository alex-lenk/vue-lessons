<template>
  <form class="card card-w30" @submit.prevent="addData">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="typeBlock">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="valueBlock"></textarea>
    </div>

    <button class="btn primary" :disabled="formValid">Добавить</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      typeBlock: 'title',
      valueBlock: ''
    }
  },
  methods: {
    addData () {
      this.$emit('added-section', {
        id: Date.now(),
        typeBlock: this.typeBlock,
        valueBlock: this.valueBlock
      })

      this.typeBlock = 'title'
      this.valueBlock = ''
    }
  },
  computed: {
    formValid () {
      return this.valueBlock.length < 3
    }
  },
  name: 'AppForm'
}
</script>

<style scoped>

</style>
