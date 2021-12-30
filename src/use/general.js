import { ref } from 'vue'

export function useGeneral () {
  const urlBase = ref('https://test12-e5759-default-rtdb.europe-west1.firebasedatabase.app/tasks.json')

  return {
    urlBase
  }
}
