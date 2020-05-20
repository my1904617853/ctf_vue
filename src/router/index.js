import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Fine from '@/components/Fine'
import More from '@/components/More'
import Mine from '@/components/Mine'
import Detail from '@/components/Detail'
import ShopCart from '@/components/ShopCart'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/fine',
      name: 'Fine',
      component: Fine,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/more',
      name: 'More',
      component: More,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart,
      meta: {
        keepAlive: true
      }
    }

    
    
  ]
})
