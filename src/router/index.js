import {createRouter, createWebHistory} from 'vue-router'
import New from '../views/New';
import Tasks from '../views/Tasks';

const routers = [{
  path: '/',
  component: Tasks
},{
  path: '/new',
  component: New
}]

export default createRouter({
  history: createWebHistory(),
  routes: routers,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
