<template>
  <div id="app">
    <!--动态路由展示-->
    <router-view  />
    <!--导入组件底部导航-->
    <NavBotton v-if="$route.meta.keepAlive"/>
  </div>
</template>

<script>
/*导入组件*/
import NavBotton from './components/NavBotton'
export default {
  name: 'App',
  components: {
    NavBotton
  }
}
</script>

<style>
@import "./assets/index.css";
</style>
