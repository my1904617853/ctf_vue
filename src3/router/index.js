import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Find from '@/view/Find'
import Order from '@/view/Order'
import Myself from '@/view/Myself'
import GoodsInfo from '@/view/home/GoodsInfo'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '*',
      redirect: "/home"
    },
    {
      path: '/home',
      name: '/home',
      component: Home
    },
    {
      path: '/find',
      name: '/Find',
      component: Find
    },
    {
      path: '/order',
      name: '/Order',
      component: Order
    },
    {
      path: '/myself',
      name: '/Myself',
      component: Myself
    },
    {
      path: '/goodsinfo/:data',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
  ]
})
