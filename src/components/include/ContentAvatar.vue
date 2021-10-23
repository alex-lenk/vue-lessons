<template>
  <div class="avatar">
    <img :src="$attrs.valueBlock" class="avatar__img" alt="">
  </div>
</template>

<script>
export default {
  name: 'ContentAvatar'
}
</script>

<style scoped lang="scss">
.avatar {
  display: flex;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
