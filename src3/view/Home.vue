<template>
  <div>
    <Menu></Menu>
    <HomeSwiper></HomeSwiper>
    <Goods></Goods>
  </div>
</template>

<script>
import Menu from './home/Menu'
import HomeSwiper from './home/HomeSwiper'
import Goods from './home/Goods'
export default {
  components: {
    Menu,
    HomeSwiper,
    Goods
  }
}
</script>