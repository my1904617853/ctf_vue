<template>
  <div class="nav-bottom">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <label>首页</label>
      </router-link>
      <router-link to="/fine">
        <i class="iconfont icon-faxian"></i>
        <label>发现</label>
      </router-link>
      <router-link to="/more">
        <i class="iconfont icon-tubiaolunkuo-"></i>
        <label>订单</label>
      </router-link>
      <router-link to="/mine">
        <i class="iconfont icon-wode"></i>
        <label>我的</label>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '发现'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
  color:red;
}
</style>
