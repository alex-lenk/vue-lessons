<template>
  <div class="card">
    <p>
      Название: <strong>{{ name }}</strong>
    </p>
    <p>
      Версия: <strong>{{ version }} ({{ doubleVersion }})</strong>
    </p>

    <button class="btn warning" @click="changeToThree">Вернуть обратно</button>
  </div>
</template>

<script>
import {inject, computed} from 'vue'

export default {
  emits: ['change-version'],

  setup(props, context) {
    function change() {
      context.emit('change-version', 3)
    }

    const version = inject('version')

    return {
      name: inject('name'),
      version: version,
      changeToThree: change,
      doubleVersion: computed(() => version.value * 2)
    }
  }
  /*  computed: {
      doubleVersion() {
        return this.version * 2
      }
    },*/
}
</script>
