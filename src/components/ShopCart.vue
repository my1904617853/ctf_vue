<template>
  <div class="detail"> 
        <!-- 返回 -->
        <a class="goback" @click="goback()"><i class="iconfont icon-shouye"></i></a>
       <!-- 购物车列表 -->
       <h1>商城购物车</h1>
       <div class="warp">
        <div class="all">全选:<input type="checkbox" :checked="isCheckedAll" @click="changeCheckedAll"></div>
        <div  class="good-item" v-for="(info,i) in infoData" :key="i">
          <input type="checkbox" v-model="info.isChecked">
         <label>名称：</label><span v-text="info.name"></span>
         <label>单价：</label><span v-text="info.price"></span>
         <label>数量:</label> 
                  <button @click="minus(info.id)">-</button>
                     <span v-text="info.count">info.count</span>
                  <button @click="add(info.id)">+</button>
          <!-- <label>小结：</label><span v-text="goods.price * goods.count"></span><br> -->
          <button @click="delGoods(info.id)">删除</button>
        </div>
       <div style="color:red"> 总价：<span v-text="sumPrice"></span>元</div>
      </div>
  </div>

</template>

<script>
import axios from 'axios';
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
    add:function(id){
      //商品个数增加
      this.infoData.forEach((item,index)=>{
            if(item.id == id){
              item.count++
            }
      })
    },
    minus:function(id){
      //商品个数减少
       this.infoData.forEach((item,index)=>{
            if(item.id == id){
              if(item.count>=2){
                item.count--
              }
            }
      })
    },
    changeCheckedAll:function(){
        var flag = !this.isCheckedAll
        this.infoData.forEach(item => item.isChecked = flag)
    },
    delGoods:function(id){
      this.infoData = this.infoData.filter(item => item.id == id ? false : true)
    },
    getDetail: function (id) {
      axios.get('http://127.0.0.1:80/tp5/index.php/admin/sg').then(res => {
        // console.log(res)
        this.infoData = res.data;
      }).catch(error => {
        console.log(error)
      })
    },
  },
  computed:{
    // 总价
    sumPrice(){
      var price = 0
      this.infoData.forEach(item =>{
          if(item.isChecked){
            price = price + item.price * item.count
          }
      })
      return price
    },
    isCheckedAll(){
      return this.infoData.every(item =>item.isChecked)
    },
    
  },
  mounted:function(){
     this.getDetail();
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.nav-bottom2 {
    height: 50px;
    position: fixed;
    bottom: 0;
    background: #f9f9f9;
    border-top: 1px solid #f4f4f4;
    width: 100%;
    padding-top: 5px;
}
.nav-bottom2 > a {
    display: inline-block;
    width: 42%;
    float: left;
}
.nav-bottom2 i {
    font-size:22px;
}
.nav-bottom2 label {
    display: block;
    float: left;
}
.warp{
  width: 90%;
  background: antiquewhite;
  margin: 20px auto;
  padding: 15px 30px;
}
.good-item{
  margin: 25px 0;
  background: rgb(228, 230, 225);
  width: 100%;
  line-height: 10px;
}
.good-item label{
  color: brown;
  /* padding-left: 15px; */
}
.all{
  float: left;
}
</style>
