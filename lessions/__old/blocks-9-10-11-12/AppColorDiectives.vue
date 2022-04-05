<template>
  <div class="container" v-cloak>
    <div class="card" v-if="show">
      <h4 v-color:[typeStyle].blink.hover="myColor">Создание директивы</h4>

      <div class="form-control">
        <label for="active-input">Активный</label>
        <input type="text" id="active-input" v-focus>
      </div>

      <button class="btn" @click="myColor = 'darkblue'">поменять цвет</button>
      <button class="btn primary" @click="changeStyle">поменять ТИП</button>
    </div>
  </div>
</template>

<script>
import focusDirective from "./js/directives/focusDirective";
import colorsDirective from "./js/directives/colorsDirective";

export default {
  data() {
    return {
      myColor: 'darkred',
      typeStyle: 'color',
      show: true
    }
  },
  methods: {
    changeStyle() {
      this.typeStyle = this.typeStyle === 'color' ? 'backgroundColor' : 'color'
    }
  },
  mounted() {
/*    setTimeout(()=> {
      this.show = false
    }, 20000)*/
  },
  directives: {
    focus: focusDirective,
    color: colorsDirective
  }
}
</script>

<style scoped>
h4 {
  border: 1px solid transparent;
}
</style>
