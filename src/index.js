import Vue from 'vue'
import router from './router'

let app = document.createElement('div')
document.body.appendChild(app)
new Vue({
  router,
  render: h => h('router-view')
}).$mount(app)
