<template>
  <div class="detail">
   
    <div> 
        <!-- 返回 -->
        <a class="goback" @click="goback()"><i class="iconfont icon-shouye"></i></a>
        <!-- 详情图  -->
        <div class="lists">
          <img  :src="infoData.cover_path"    />
        </div>
        <div>
          <p>商品简介</p>
          <p style="color:red">价格：{{infoData.price}}￥</p>
        </div>
        <!-- <div class="shopping_cart">加入购物车</div> -->
        <!-- <div class="buy">立即购买</div> -->
        <div>
          买家评论
        </div>
    </div>
    <!-- 底部栏 -->
    <div class="nav-bottom2">
      <div id="shop">
        <ul>
          <li @click="addShopping(infoData.id)">加入购物车</li>
          <li>立即购买</li>
        </ul>
      </div>   
    </div>
  </div>

</template>
<script>
import axios from 'axios';
// import { TABBAR_STATE, ADD_SHOPPING } from '@/type'
import { MessageBox } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
       infoData:[]
    }
  },
  methods:{
    goback:function(){
      window.history.go(-1)//历史跳转
      // this.$router.push('/home'); //路由跳转
    },
    getDetail: function (id) {
      axios.get('http://127.0.0.1:80/tp5/index.php/admin/sg').then(res => {
        params:{
          mId:id
        }
        // console.log(res)
        this.infoData = res.data[id-2];
      }).catch(error => {
        console.log(error)
      })
    },
    addShopping (id) {
      MessageBox.confirm('确定加入购物车?').then(action => {
        // this.$store.commit(ADD_SHOPPING, id)
        console.log('加入成功')
        console.log(id)
        this.$router.push('/shopCart');
         params:{
          mId:id
        }
      }).catch(error => {
        console.log('已取消')
      })
    }
    
  },
  mounted: function () {
    this.getDetail(this.$route.params.id);
    this.dataList = this.$route.params.data
    // this.$store.commit(TABBAR_STATE, false)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 引入样式 -->

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000;
}


#shop {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #f9f9f9;
}
#shop ul {
  display: flex;
}
#shop ul li {
  list-style: none;
  flex: 1;
  text-align: center;
  line-height: 50px;
}
</style>
