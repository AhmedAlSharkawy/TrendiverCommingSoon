import Vue from 'vue'
//import '/node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'
import UFNavBar from './userFlow/sharedComponents/UFNavBar.vue'


Vue.component('UF-NavBar', UFNavBar);

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')