import {ref} from 'vue'

export function useAlert(visible = false) {
  const alert = ref(visible)
  const toggle = () => alert.value = !alert.value
  const close = () => alert.value = false

  return {
    alert,
    toggle,
    close
  }
}
