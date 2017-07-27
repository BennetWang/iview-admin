import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './routes/App'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App
  }
]

export default new VueRouter({
  routes
})
