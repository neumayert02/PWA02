import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
