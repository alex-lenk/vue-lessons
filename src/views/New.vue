<template>
  <form class="card" @submit.prevent="submitHandler">
    <h1>Создать новую задачу</h1>

    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="inputTitle">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="inputDate">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="textareaDesc"></textarea>
    </div>

    <button class="btn primary" :disabled="!validateForm" type="submit">Создать</button>
  </form>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useGeneral } from '../use/general'
import axios from 'axios'

export default {
  setup () {
    const { urlBase, task: tasksGeneral } = useGeneral()
    const tasks = ref([])
    const inputTitle = ref('')
    const inputDate = ref('')
    const textareaDesc = ref('')

    const validateForm = computed(() => {
      return inputTitle.value.length && inputDate.value.length && textareaDesc.value.length > 3
    })

    async function submitHandler () {
      const response = await fetch(urlBase.value, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: inputTitle.value,
          data: inputDate.value,
          text: textareaDesc.value
        })
      })

      const firebaseData = await response.json()

      tasks.value.push({
        id: firebaseData.inputTitle,
        title: inputTitle.value,
        data: inputDate.value,
        text: textareaDesc.value
      })

      inputTitle.value = ''
      inputDate.value = ''
      textareaDesc.value = ''
    }

    const loadTasks = async () => {
      try {
        // this.loading = true
        const { data } = await axios.get(urlBase.value)

        if (!data) {
          console.log('Список людей пуск, заполните его.')
          throw new Error('Список людей пуск, заполните его.')
        }

        tasks.value = Object.keys(data).map(key => {
          return {
            id: key,
            // firstName: data[key].firstName
            ...data[key]
          }
        })

        // this.loading = false
      } catch (e) {
        console.log('catch')
        // this.alert = {
        //   type: 'danger',
        //   title: 'Ошибка!',
        //   text: e.message
        // }
        // this.loading = false
      }
    }

    onMounted(loadTasks)

    console.log(loadTasks)
    console.log(tasks.value._value)

    return {
      urlBase,
      tasksGeneral,
      tasks,
      inputTitle,
      inputDate,
      textareaDesc,
      validateForm,
      submitHandler,
      loadTasks
    }
  }
}
</script>
