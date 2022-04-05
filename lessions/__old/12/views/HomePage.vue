<template>
  <appAlert
    v-if="simpleAlert"
    title="it is work"
    type="danger"
    @close="close"
  />
  <div class="card">
    <h1>
      Vue Composition Api
    </h1>

    <small>data, methods, computed, watch</small>

    <div class="form-control">
      <input type="text" v-model="firstName">
    </div>

    <button class="btn" @click="change">Изменить</button>

    <button class="btn danger" @click="toggle">{{ simpleAlert ? 'закрыть' : 'показать'}} сообщение</button>
  </div>

      <FrameworkInfo
        :name="name"
        :version="version"
        @change-version="changeVersion"
      />

</template>

<script>
import {provide, reactive, ref, watch} from 'vue';
import AppAlert from "../AppAlert";
import FrameworkInfo from '../FrameworkInfo';
import {useAlert} from "../use/alert";

export default {
  components: {FrameworkInfo, AppAlert},
  setup() {
    const {alert: simpleAlert, close, toggle} = useAlert()
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
      changeVersion,
      toggle,
      close,
      simpleAlert
    }
  },
  name: "HomePage"
}
</script>
