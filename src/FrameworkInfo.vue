<template>
  <div class="container">
    <div class="card">
      <h1>
        Vue Composition Api
      </h1>

      <small>data, methods, computed, watch</small>

      <hr>

      <p>
        Название: <strong>{{ name }}</strong>
      </p>

      <p>
        Версия: <strong>{{ version }} ({{ doubleVersion }})</strong>
      </p>

      <div class="form-control">
<!--        <input type="text" ref="textInput">-->
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, isRef, isReactive, computed, watch} from 'vue'

export default {
  setup() {
    const name = ref('VueJs')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    const framework = reactive({
      name: 'VueJs',
      version: 3
    })

    const doubleVersion = computed(() => version.value * 2)

    watch([doubleVersion, name], (newValue, oldValue) => {
      console.log('new version: ', newValue[0])
      console.log('new name: ', newValue[1])
      console.log('old version: ', oldValue[0])
      console.log('old name: ', oldValue[1])
    })

    function changeInfo() {
      name.value = 'Vue JS!'
      version.value = 4
    }

    return {
      name: name,
      version: version,
      change: changeInfo,
      doubleVersion
      /*      name: framework.name,
            version: framework.version,*/
      //framework: framework,
    }
    /*
    const framework = ref({
      name: ref('VueJs'),
      version: ref(3)
    })

    function changeInfo() {
      console.log(framework.value.name)
      console.log(framework.value.version)
      framework.value.name = 'Vue JS!'
      framework.value.version = 4
    }

    return {
      name: framework.value.name,
      version: framework.value.version,
      framework: framework,
      change: changeInfo
    }
    * */
  }
  /*  data() {
      return {
        name: 'VueJS',
        version: 3
      }
    },
    methods: {
      changeInfo() {
        this.name = 'Vue JS!'
        this.version = 4
      }
    }*/
}
</script>
