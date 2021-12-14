<template>
  <div class="container">
    <div class="card">
      <h1>
        Vue Composition Api
      </h1>

      <small>data, methods, computed, watch</small>

      <div class="form-control">
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>

    <frameworkInfo :name="name" :version="version" @change-version="changeVersion" />
  </div>
</template>

<script>
import {ref, reactive, toRefs, isRef, isReactive, computed, watch} from 'vue'
import FrameworkInfo from './FrameworkInfo'

export default {
  setup() {
    const name = ref('VueJs')
    const version = ref(3)
    const firstName = ref('')

    const framework = reactive({
      name: 'VueJs',
      version: 3
    })

    //const doubleVersion = computed(() => version.value * 2)

    watch(firstName, (newValue) => {
      console.log(newValue)
    })

    function changeInfo() {
      name.value = 'Vue JS!'
      version.value = 4
    }

    function changeVersion(nub) {
      version.value = nub
    }

    return {
      name,
      version,
      change: changeInfo,
      firstName: firstName,
      changeVersion
    }
  },
  components: {FrameworkInfo}
}
</script>
