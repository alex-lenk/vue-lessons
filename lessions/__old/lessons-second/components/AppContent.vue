<template>
  <div>
    <component
      v-for="item in resume"
      :key="item.id"
      :is="'content-' + item.typeBlock"
      :id="'block-' + item.id"
      v-bind="{valueBlock: item.valueBlock}"
    />
  </div>
</template>

<script>
import ContentTitle from './include/ContentTitle'
import ContentSubtitle from './include/ContentSubtitle'
import ContentAvatar from './include/ContentAvatar'
import ContentText from './include/ContentText'

export default {
  props: ['resume'],
  components: {
    ContentTitle,
    ContentSubtitle,
    ContentAvatar,
    ContentText
  },
  name: 'AppContent'
}
</script>

<style scoped>

</style>
