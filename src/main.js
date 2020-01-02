import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import animated from 'animate.css' //引入animate.css动画插件

Vue.config.productionTip = false
Vue.use(animated)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
