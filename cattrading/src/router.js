import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Salebuy from './views/Salebuy.vue'
import Knowledge from './views/Knowledge.vue'
import Variety from './views/Variety.vue'
import Contactus from './views/Contactus.vue'
import Aboutus from './views/Aboutus.vue'
import reg from './views/reg.vue'
import login from './views/login.vue'
import adminlogin from './views/adminlogin.vue'
import adminhome from './views/adminhome.vue'
import userhome from './views/userhome.vue'
import Catdetail from './views/Catdetail.vue'
import firstpage from './components/style_tag/first_page.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/salebuy',
      name: 'salebuy',
      component: Salebuy
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    },  
     {
      path: '/variety',
      name: 'variety',
      component: Variety
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: Contactus
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/adminlogin',
      name: 'adminlogin',
      component: adminlogin
    },
    {
      path: '/userhome',
      name: 'userhome',
      component: userhome
    },
    {
      path:'/firstpage',
      name:'firstpage',
      component:firstpage
    },
     {
      path: '/catdetail',
      name: 'catdetail',
      component: Catdetail
    },
     {
      path: '/adminhome',
      name: 'adminhome',
      component: adminhome
    }


    
  ]
})
