import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/Home/Home.vue'),
    name: 'home'
  }, {
    path: '/gestion',
    component: require('./components/Gestion/Gestion.vue'),
    name: 'gestion'
  }, {
    path: '*',
    redirect: '/'
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue'))
})
