<template>
  <div>
    <!--上-->
    <div class="index-category">
      <div class="category"
           v-for="(lists,i) in lists"
           :key="i">
        <i class="iconfont"
           :class="lists.icon"
           :style="{background:lists.color}"></i>
        <label>{{lists.title}}</label>
      </div>
    </div>
    <!--中-->
    <div class="banner">
      <!-- <img src="../assets/img/1.jpg" /> -->
      <img v-for="(img,i) in imgs" :src="img" v-show="num == i" :key="i"/>
      <div class="banner-circle">
        <ul>
          <!-- <li  class="selected"></li> -->
          <li v-for="(value,i) in imgs" :class="{'selected':num == i}" :key="i"></li>
        </ul>
      </div>
    </div>
    <!--下-->
    <div class="index-main">
      <ul>
        <li class="lists"
            v-for="(item,i) in items"
            :key="i">
          <router-link :to="'detail/'+item.id">
            <img :src="item.cover_path"
                 width="150"
                 height="150" />
          </router-link>
          <label>
            <p><b>商品名：{{item.name}}</b></p>
            <b class="discount">售价：{{item.price}}</b>
            <!-- <span class="price-text">{{item.name}}</span> -->

            <!-- <span class="price-text">原价:1000</span> -->
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      lists: [
        { title: '美食', icon: 'icon-meishi-', color: '#c060ff' },
        { title: '生活用品', icon: 'icon-shenghuoyongpin', color: '#FF3399' },
        { title: '鞋子', icon: 'icon-shenghuoyongpin-', color: '#CC99CC' },
        { title: '电器', icon: 'icon-dianqi', color: '#33CCFF' },
        { title: '服饰', icon: 'icon-fushi', color: '#fa66b6' },
        { title: '床上用品', icon: 'icon-chuangshangyongpin', color: '#2060ff' },
        { title: '海外购物', icon: 'icon-haiwaigou', color: '#33FFCC' },
        { title: '更多精品', icon: 'icon-gengduo', color: '#fa69b9' }
      ],
      items: [],
      num:0,
      imgs: [//用数组存放要轮播的图片
          require('../assets/img/1.jpg'),
          require('../assets/img/2.jpg'),
          require('../assets/img/3.jpg'),
          require('../assets/img/4.jpg'),
          require('../assets/img/5.jpg'),
          require('../assets/img/6.jpg'),
          
      ],
    }
  },
  methods: {
    getLists: function () {
      axios.get('http://127.0.0.1:80/tp5/index.php/admin/sg').then(res => {
        // console.log(res)
        this.items = res.data;
      }).catch(error => {
        console.log(error)
      })
    },
    autoPlay:function(){//num递增，num等于图片总数时回到第一张，其递增有下面的定时器实现
                const _self=this;
                _self.num++;
                if(_self.num == this.imgs.length){
                    _self.num=0;
                }
            },
            play:function(){//每隔一秒执行autoPlay，使得num递增
                setInterval(this.autoPlay,1200);
            }
  },
  mounted: function () {
    this.getLists();
    this.play();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
