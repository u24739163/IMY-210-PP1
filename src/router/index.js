import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Files.vue'
import View from '../views/View.vue'
import BottomNav from '../components/bottomNav.vue'
import Style from '../views/Stylesheet.vue'
import Schema from '../views/Schema.vue'
  const routes = [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        bottomNav: BottomNav,
      }
    },
    {
      path: '/view',
      name: 'View',
      component: View
    },
    {
      path: '/stylesheet',
      name: 'Stylesheet',
      component: Style
    },
    {
      path: '/schema',
      name: 'Schema',
      component: Schema
    }
  ]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
