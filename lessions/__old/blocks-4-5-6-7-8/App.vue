<template>
  <div class="container" v-cloak>
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form class="card" @submit.prevent="createdPerson">
      <h1>Работа с базой данных</h1>

      <div class="form-control">
        <label for="name">Имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>
      <app-button class="primary" :disabled="name.length < 2">создать пользователя</app-button>
    </form>

    <aside class="card">
      Количество людей в базе данных:
      {{ people.length }}
    </aside>

    <app-loader v-if="loading"/>

    <app-people-list
      v-else
      :people="people"
      @load="loadPeople"
      @remove="removePerson"
    />
  </div>
</template>

<script>
import axios from 'axios'
import AppButton from './AppButton'
import AppPeopleList from './AppPeopleList'
import AppAlert from './AppAlert'
import AppLoader from './AppLoader'

export default {
  data () {
    return {
      name: '',
      urlBase: 'https://vue-with-http-68465-default-rtdb.europe-west1.firebasedatabase.app/people.json',
      people: [],
      alert: null,
      loading: true
    }
  },
  mounted () {
    this.loadPeople()
  },
  methods: {
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

      const firebaseData = await response.json()

      this.people.push({
        firstName: this.name,
        id: firebaseData.name
      })

      this.name = ''
    },
    async loadPeople () {
      try {
        // this.loading = true
        const { data } = await axios.get(this.urlBase)

        if (!data) {
          throw new Error('Список людей пуск, заполните его.')
        }

        this.people = Object.keys(data).map(key => {
          return {
            id: key,
            // firstName: data[key].firstName
            ...data[key]
          }
        })

        this.loading = false
      } catch (e) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка!',
          text: e.message
        }
        this.loading = false
      }
    },
    async removePerson (id) {
      try {
        const name = this.people.find(person => person.id === id).firstName
        await axios.delete(`https://vue-with-http-68465-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
        this.people = this.people.filter(person => person.id !== id)

        this.alert = {
          type: 'primary',
          title: 'Пользователь удален!',
          text: `Человек с именем ${name} успешно удален!`
        }
      } catch (e) {
      }
    }
  },
  components: { AppButton, AppPeopleList, AppAlert, AppLoader }
}
</script>

<style>

</style>
