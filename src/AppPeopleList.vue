<template>
  <div v-if="people.length !== 0">
    <div class="card" v-for="person in people" :key="person.id">
      <h3>{{ person.id }}. {{ person.firstName }}</h3>
    </div>
  </div>

  <div class="card" v-else>
    <h5>Людей пока нет</h5>

    <button class="btn" @click="$emit('load')">подгрузить</button>
  </div>
</template>

<script>
export default {
  emits: ['load'],
  props: ['people'],
  name: 'AppPeopleList'
}
</script>
