import {createRouter, createWebHistory} from 'vue-router'
import New from './views/New';
import Home from './views/Home';
//import VuexPage from './views/VuexPage';

export const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: Home
  },{
    path: '/new',
    component: New
  }],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
