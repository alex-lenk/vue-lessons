<template>
  <div class="container" v-cloak>
    <form class="card" @submit.prevent="createdPerson">
      <h1>Работа с базой данных</h1>

      <div class="form-control">
        <label for="name">Имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <app-button class="primary" :disabled="name.length < 2">создать пользователя</app-button>
    </form>

    <app-people-list
      :people="people"
      @load="peopleLoad"
    ></app-people-list>
  </div>
</template>

<script>
import axios from 'axios'
import AppButton from './AppButton'
import AppPeopleList from './AppPeopleList'

export default {
  data () {
    return {
      name: '',
      urlBase: 'https://vue-with-http-68465-default-rtdb.europe-west1.firebasedatabase.app/people.json',
      people: []
    }
  },
  methods: {
    async peopleLoad () {
      await axios.get(this.urlBase
      )
    },
    async createdPerson () {
      const response = await fetch(this.urlBase, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })

      const firebaseData = await response.json

      console.log(firebaseData)

      this.name = ''
    }
  },
  components: { AppButton, AppPeopleList }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
