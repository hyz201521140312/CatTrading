import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import Topnav from '@/components/Topnav.vue'



Vue.config.productionTip = false

//启用eleui
Vue.use(ElementUI);

// 头部全局组件
Vue.component("top-nav",Topnav)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
