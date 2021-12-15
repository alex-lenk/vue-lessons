<template>
  <header class="navbar">
    <div><strong>Vue composition</strong></div>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/reusable">Переиспользовать</router-link>
      </li>
      <li>
        <router-link to="/vuex">Vuex Page</router-link>
      </li>
    </ul>
  </header>

  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>
