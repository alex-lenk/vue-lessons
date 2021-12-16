import { ref } from 'vue'

export function useGeneral () {
  const urlBase = ref('https://lession-12-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json')
  const tasks = []

  return {
    urlBase,
    tasks
  }
}
