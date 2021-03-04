import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.Kakao.init('c185378826c9743536515217fd3b8622');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
