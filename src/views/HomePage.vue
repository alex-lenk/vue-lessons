<template>
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

      <FrameworkInfo
        :name="name"
        :version="version"
        @change-version="changeVersion"
      />

</template>

<script>
import FrameworkInfo from '../FrameworkInfo';
import {provide, reactive, ref, watch} from 'vue';

export default {
  components: {FrameworkInfo},
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

    provide('name', name)
    provide('version', version)

    return {
      change: changeInfo,
      firstName: firstName,
      changeVersion
    }
  },
  name: "HomePage"
}
</script>
