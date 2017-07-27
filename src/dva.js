import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)
let store = new Vuex.Store()
const registerModule = model => {
  model.namespaced = true
  store.registerModule(model.namespace, model)
}

const routes = [{
  path: '/',
  component: resolve => require.ensure([], () => {
    registerModule(require('./models/app.js').default)
    resolve(require('./routes/App.vue'))
  }, 'routes'),
  children: [{
    path: '/',
    component: resolve => require.ensure([], () => {
      registerModule(require('./models/dashboard.js').default)
      resolve(require('./routes/Dashboard.vue'))
    }, 'routes')
  }]
}]

export default {
  router: new VueRouter({
    routes
  }),
  store: store
}
