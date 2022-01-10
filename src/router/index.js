import {createRouter, createWebHistory} from 'vue-router'
import Tasks from '../views/Tasks'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  }, {
    path: '/new',
    name: 'New',
    component: () => import('../views/New')
  }, {
    path: '/task/:id',
    name: 'Task',
    props: true,
    component: () => import('../views/Task')
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
