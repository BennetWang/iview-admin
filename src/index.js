import Vue from 'vue'
import iView from 'iview'
import dva from './dva'
import './themes/index.scss'
if (process.env.NODE_ENV !== 'production') {
  require('./mock')
}

Vue.use(iView)
dva.router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})
dva.router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
})

let app = document.createElement('div')
document.body.appendChild(app)
new Vue({
  ...dva,
  render: h => h('router-view')
}).$mount(app)
