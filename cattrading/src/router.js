import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Salebuy from './views/Salebuy.vue'
import Knowledge from './views/Knowledge.vue'
import Variety from './views/Variety.vue'
import Contactus from './views/Contactus.vue'
import Aboutus from './views/Aboutus.vue'
import Reg from './views/Reg.vue'
import Login from './views/Login.vue'



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
      component: Reg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

    
  ]
})
