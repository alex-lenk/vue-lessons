<template>
  <the-navbar/>
  <div class="container with-nav">
    <router-view/>
  </div>
</template>

<script>
import {ref} from 'vue'
import TheNavbar from './components/TheNavbar'

export default {
  setup() {

    return {
    }
  },
  components: {
    TheNavbar
  }
}
</script>
