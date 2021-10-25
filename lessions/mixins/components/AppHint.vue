<template>
  <div class="container" v-cloak>
    <app-alert
      v-if="alert"
      type="warning"
      text="Attention text"
      title="Оповещение!"
      @close="alert = false"
    />

    <div class="card">
      <button class="primary btn" @click="toggleAlert">
        {{ alert ? 'Закрыть сообщение' : 'Показать сообщение'}}
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert'
import alertMixin from '../alertMixin'

export default {
  mixins: [alertMixin],
  components: {
    AppAlert
  }
}
</script>
