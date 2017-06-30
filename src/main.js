// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App.vue'
import about from './components/about.vue'
import home from './components/home.vue'
import news from './components/news.vue'
import message from './components/message.vue'
import mDetail from './components/mDetail.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
//注册路由
var router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {path: '/', component: about},
    {path: '/about', component: about},
    {
      path: '/home',
      component: home,
      children: [
        {path: 'news', component: news},
        {
          path: 'message',
          component: message,
          children: [
            {path:'mdetail/:id', component: mDetail}
          ]
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
