import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Categorys from '../pages/Categorys/Categorys.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'
// import MessageLogin from '../pages/Login/MessageLogin.vue'
// import EmailLogin from '../pages/Login/EmailLogin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shiwu',
      component:Shiwu,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/categorys',
      component:Categorys,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shopcart',
      component:ShopCart,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      // children:[
      //   {
      //     path:'/profile/message',
      //     component:MessageLogin
      //   },
      //   {
      //     path:'/profile/email',
      //     component:EmailLogin
      //   },
      //   {
      //     path:'',
      //     redirect:'/profile'
      //   }
      // ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
