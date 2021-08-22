import { createRouter, createWebHistory } from 'vue-router'
import Employee from '../views/Employee.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/employee',
    component: Employee
  },
  {
    path: '/test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
