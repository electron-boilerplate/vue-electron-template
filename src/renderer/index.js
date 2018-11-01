import Vue from 'vue'

import 'bulma-addons/bulma.sass'
import 'bulma-pro/bulma.sass'

import './style/main.sass'
import './style/animations.sass'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(require('vue-electron'))

/* eslint-disable no-new */
new Vue({
  components: {
    App,
  },
  router,
  store,
  template: '<App/>',
}).$mount('#app')

/* Enable webpack hot reloading */
if (module.hot) {
  module.hot.accept()
}