import Vue from 'vue'
import App from './App.vue'

Vue.config.ignoredElements = ['wc-webcomponent']
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
