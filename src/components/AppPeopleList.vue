<template>
  <div v-if="people.length !== 0">
    <div class="card d-flex" v-for="person in people" :key="person.id">
      <h4>{{ person.firstName }}</h4>

      <app-button class="danger" @click="$emit('remove', person.id)">удалить</app-button>
    </div>
  </div>

  <div class="card" v-else>
    <h5>Людей пока нет</h5>

    <app-button @click="$emit('load')">подгрузить</app-button>
  </div>
</template>

<script>
import AppButton from './AppButton'

export default {
  emits: ['load', 'remove'],
  props: ['people'],
  methods: {
  },
  name: 'AppPeopleList',
  components: { AppButton }
}
</script>

<style scoped>
.d-flex {
  display: flex;
  align-content: center;
  justify-content: space-between;
}

h4 {
  padding: 0;
  margin: 0;
}
</style>
