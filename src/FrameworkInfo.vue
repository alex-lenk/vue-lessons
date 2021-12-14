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
import {ref, reactive, toRefs, isRef, isReactive, computed, watch} from 'vue'

export default {
  props: ['name', 'version'],
  emits: ['change-version'],

  setup(props, context) {
    function change() {
      context.emit('change-version', 3)
    }

    return {
      changeToThree: change,
      doubleVersion: computed(() => props.version * 2)
    }
  }
  /*  computed: {
      doubleVersion() {
        return this.version * 2
      }
    },*/
}
</script>
