<template>
  <div class="modal-backdrop" @click="$emit('close-modal')"></div>
  <div class="modal">
    <h3>Заголовок модального окна</h3>

    <p>
      Управляемый светильник-люстра, пульт дистанционного управления, батарейка - 2 шт, комплект крепежа, инструкция,
      упаковка
    </p>


    <button class="btn primary" @click="$emit('close-modal')">Закрыть</button>
  </div>
</template>

<script>
export default {
  emits: ['close-modal'],
  name: "AppModal"
}
</script>

<style scoped>

</style>
