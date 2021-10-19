<template>
  <div class="container" v-cloak>
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>

      <app-input
        placeholder="Введи имя"
        label="Как тебя зовут?"
        :error="errors.name"
        v-model="name"
      />

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
          type="number"
          id="age"
          v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label>Твой город</label>
        <select
          id="city"
          v-model="city"
        >
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>

        <div class="checkbox">
          <label>
            <input
              type="radio"
              name="trip"
              value="yes"
              v-model="relocate"
              checked
            >
            Да
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input
              type="radio"
              name="trip"
              value="name"
              v-model="relocate"
            >
            Нет
          </label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>

        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              name="skills"
              value="Vuex"
              v-model="skills"
            >
            Vuex
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              name="skills"
              value="CLI"
              v-model="skills"
            >
            Vue CLI
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              name="skills"
              value="Router"
              v-model="skills"
            >
            Vue Router
          </label>
        </div>
      </div>

      <div class="form-checkbox">
        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              name="privatePolice"
              v-model="privatePolice"
            >
            вы принимаете правила обработки персональных данных
          </label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>

    <app-news></app-news>
  </div>
</template>

<script>
import AppNews from './AppNews'
import AppInput from './AppInput'

export default {
  data () {
    return {
      name: '',
      age: 23,
      city: 'msk',
      relocate: 'yes',
      skills: [],
      privatePolice: false,
      errors: {
        name: null
      }
    }
  },
  methods: {
    formIsValid () {
      let isValid = true
      if (this.name.length === 0) {
        this.errors.name = 'укажите ваше имя'
        isValid = false
      } else {
        this.errors.name = null
      }
      return isValid
    },
    submitHandler () {
      if (this.formIsValid()) {
        console.group('FORM')
        console.log('Name: ', this.name)
        console.log('Age: ', this.age)
        console.log('Selected: ', this.city)
        console.log('ReLocate: ', this.relocate)
        console.log('Skills: ', this.skills)
        console.log('PrivatePolice: ', this.privatePolice)
        console.groupEnd()
      } else {
        console.log('вы не заполнили поле Name')
      }
    }
  },
  components: {
    'app-news': AppNews,
    'app-input': AppInput
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
