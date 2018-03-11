import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
  
})
