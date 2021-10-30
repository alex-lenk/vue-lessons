<template>
  <div class="container" v-cloak>
    <div class="card">
      <h4>Создание директивы</h4>

      <div class="form-control">
        <label for="active-input">Активный</label>
        <input type="text" id="active-input" v-focus>
      </div>
    </div>
  </div>
</template>

<script>
import focusDirective from "./js/directives/focusDirective";

export default {
  directives: {
    focus: focusDirective
  }
}
</script>
