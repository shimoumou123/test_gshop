import Vue from 'vue'
import App from './App'
import store from './store'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index'
Vue.config.productionTip = false




//应用插件
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
