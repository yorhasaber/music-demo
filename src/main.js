import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import "@/mobile/flexible"
import "@/styles/reset.css"
import router from "@/router"; //导入路由对象


Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
