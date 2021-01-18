import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/iview.js'
import './plugins/element.js'
import vuetify from './plugins/vuetify';
import './plugins/ant-design-vue.js'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
