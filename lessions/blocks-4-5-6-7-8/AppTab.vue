<template>
  <div class="container" v-cloak>
    <div class="card">
      <app-async-component></app-async-component>

      <h2>Динамические и исинхронные приложения</h2>

      <app-button
        :color="tabOneColor"
        @action="active = 'one'"
      >One
      </app-button>

      <app-button
        :color="tabTwoColor"
        @action="active = 'two'"
      >Two
      </app-button>
    </div>

    <keep-alive>
      <component :is="tabExample"></component>
    </keep-alive>

  </div>
</template>

<script>
import AppButton from './AppButton'
import AppTextOne from './AppTextOne'
import AppTextTwo from './AppTextTwo'
import AppAsyncComponent from './AppAsyncComponent'

export default {
  data () {
    return {
      active: 'one' // two
    }
  },
  mounted () {
    setTimeout(() => {
      this.tabExample = 'New name'
    }, 1500)
  },
  computed: {
    /*    tabExample() {
          //if (this.active === 'one') {
            //return 'app-text-one'
          //} else {
            //return 'app-text-two'
          //}
          return 'app-text-' + this.active
        }, */
    tabExample: {
      get () {
        return 'app-text-' + this.active
      },
      set (value) {
        console.log('Component name' + value)
      }
    },
    tabOneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    tabTwoColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: {
    AppAsyncComponent,
    AppButton,
    AppTextOne,
    AppTextTwo
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
