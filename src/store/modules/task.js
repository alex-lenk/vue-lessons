import {ref} from "vue";

export default {
  state() {
    return {
      title: ref(''),
      date: ref(null),
      description: ref(''),
      tasks: ref([])
    }
  }
}
