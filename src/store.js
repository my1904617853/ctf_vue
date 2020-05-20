import Vue from 'vue'
import Vuex from 'vuex' //状态管理
import axios from 'axios'
import { TABBAR_STATE, ADD_SHOPPING } from '@/type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Goods_dataList: [],
    Tabbar_isshow: true,
    //假设为用户已经登录,shopping为用户的购物车,通过请求数据得到
    shopping: [5, 1, 3, 4] //数组内是商品的id,通过id添加到购物车

  },
  getters: {
    //对State状态的处理加工
    //一次显示几条
    Goods_dataList_count (state) {
      return state.Goods_dataList.filter((item, index) => index < 4)
    }
  },
  actions: {
    GetGoodsAction (state) {
      // console.log('获取数据')
      axios({
        url: "http://127.0.0.1/tp5/index.php/index/index/showimage",
        method: "get"
      }).then(res => {
        // 因为没有数据可以用, 所以自己伪造
        let newlist = []
        let new_id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        let new_name = ["物品1", "物品2", "物品3", "物品4", "物品5", "物品6", "物品7", "物品8", "物品9", "物品10"]
        //对axios获取到的图片地址进行加工
        res.data = res.data.map(val => { return 'http://127.0.0.1/' + val })
        //将数据整合放入数组中
        for (let i = 0; i < res.data.length; i++) {
          newlist.push({
            id: new_id[i],
            now: Math.floor(Math.random() * 100),
            before: Math.floor(Math.random() * 100),
            image: res.data[i],
            name: new_name[i],
            number: Math.floor(Math.random() * 50),
          })
        }
        // console.log(newlist)
        this.state.Goods_dataList = newlist
        // console.log(this.state.Goods_dataList)


      })
    }
  },
  mutations: {
    [TABBAR_STATE] (state, payload) {
      state.Tabbar_isshow = payload
    },
    [ADD_SHOPPING] (state, payload) {
      let have = false
      state.shopping.map(res => res == payload ? have = true : '')
      if (have == false) {
        console.log('添加购物车之前', state.shopping)
        state.shopping.push(payload)
        console.log('已添加')
        console.log('添加购物车之后', state.shopping)
      } else {
        console.log('购物车中已经有了', state.shopping, payload)
      }
    }
  }
})