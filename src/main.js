import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);
Vue.config.productionTip = false



Vue.loadScript("/assets/js/jquery.min.js")
  .then(() => {
    // Script is loaded, do something
  })
  .catch(() => {
    // Failed to fetch script
  })
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#main-wrapper')