import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
// import VueAMap from 'vue-amap';
// import { AMapManager } from 'vue-amap';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import TopNav from '@/components/Topnav.vue'
import SideNav from '@/components/SideNav.vue'
import Cattype from '@/components/style_tag/cat_type.vue'
import Hotprosmall from '@/components/style_tag/hotpro_small.vue'
import Goodadvise from '@/components/style_tag/good_advise.vue'
import Secondpage from '@/components/style_tag/second_page.vue'
import adminSideNav from '@/components/adminSideNav.vue'





Vue.config.productionTip = false

//启用eleui
Vue.use(ElementUI);

// 头部全局组件
Vue.component("top-nav",TopNav)
Vue.component('sid-nav',SideNav)
Vue.component('cat-type',Cattype)
Vue.component('hotpro-small',Hotprosmall)
Vue.component('good-advise',Goodadvise)
Vue.component('second-page',Secondpage)
Vue.component('adminsid-nav',adminSideNav)



// axios.defaults.baseURL='http://localhost:47'
axios.defaults.baseURL='http://192.168.7.171:47'
Vue.prototype.axios=axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
