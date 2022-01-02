<template>
  <form class="card" @submit.prevent="submitTask">
    <h1>Создать новую задачу</h1>

    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!validateForm" type="submit">Создать</button>
  </form>
</template>

<script>
import {ref, computed, onMounted} from 'vue'
import {useStore} from 'vuex'
// import {useGeneral} from '../use/general'
// import axios from 'axios'

export default {
  setup() {
    const title = ref('')
    const date = ref(null)
    const description = ref('')
    const tasks = ref([])

    const validateForm = computed(() => {
      return title.value !== '' && date.value && description.value !== ''
    })

    function submitTask() {
      tasks.value.push([title.value, date.value, description.value])

      title.value = ''
      date.value = ''
      description.value = ''

      saveTasks();
    }

    function saveTasks() {
      let parsed = JSON.stringify(tasks.value);
      localStorage.setItem('task', parsed);
    }

    function loadTasks() {
      if (localStorage.getItem('task')) {
        tasks.value = JSON.parse(localStorage.getItem('task'));
      }
      console.log(tasks.value)
      /*
      if (localStorage.getItem('tasks')) {
        try {
        } catch (e) {
          localStorage.removeItem('tasks');
        }
      }
    * */
    }

    onMounted(() => loadTasks())

    return {
      title,
      date,
      description,
      tasks,
      validateForm,
      submitTask,
      loadTasks,
      saveTasks
    }
  }
}
</script>
