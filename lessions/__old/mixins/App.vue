<template>
  <div class="container" v-cloak>
    <app-alert
      v-if="alert"
      text="Attention text"
      title="Оповещение!"
      @close="alert = false"
    />
    <app-hint />

    <div class="card">
      <button class="primary btn" @click="toggleAlert">
        {{ alert ? 'Закрыть' : 'Показать'}} сообщение
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert'
import AppHint from './components/AppHint'
import alertMixin from './alertMixin'

export default {
  mixins: [alertMixin],
  components: { AppAlert, AppHint }
}
</script>
