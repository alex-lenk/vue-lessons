<template>
  <div class="container" v-cloak>
    <div class="card">
      <h2></h2>

      <button class="btn" @click="modal = true">Позвонить</button>
    </div>
  </div>

  <teleport to="body">
    <app-modal
      v-if="modal"
      @close-modal="modal = false"
    />
  </teleport>
</template>

<script>
import AppModal from "./components/AppModal";

export default {
  data() {
    return {
      modal: false
    }
  },
  methods: {},
  components: {AppModal}
}
</script>
