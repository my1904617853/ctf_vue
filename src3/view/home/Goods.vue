<template>
  <div id="goods">
    <ul>
      <li v-for="(data,index) in this.$store.state.Goods_dataList"
          :key="index">
        <img :src="data.image"
             alt=""
             width="100px"
             height="100px"
             @click="handleClick(data)">
        <p>现价: {{data.now}}</p>
        <p>原价: {{data.before}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      dataList: [],
    }
  },
  methods: {
    //动态路由传参
    handleClick (data) {
      data = JSON.stringify(data)
      this.$router.push({ name: 'GoodsInfo', params: { data: data } })
    }
  },
  mounted () {
    if (this.$store.state.Goods_dataList.length === 0) {
      console.log('第一次进入')
      this.$store.dispatch("GetGoodsAction")
    } else {
      console.log("使用缓存", this.$store.state.Goods_dataList)
      // console.log("使用缓存", this.Goods_dataList_count)
    }

  },
  computed: {
    ...mapGetters(["Goods_dataList_count"])
  },
}
</script>

<style  scoped>
#goods ul li {
  width: 50%;
  height: 100px;
  float: left;
  list-style: none;
  text-align: center;
  margin: 30px auto;
}
</style>