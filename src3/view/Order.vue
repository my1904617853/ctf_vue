<template>
  <div id="main">
    <ul>
      <li v-for="(data,index) in shopping_count"
          :key="index">
        <img :src="data.image"
             alt=""
             width="100px">
        <p class="goods_name">{{data.name}}</p>
        <p>数量: {{data.number}} 件</p>

      </li>
    </ul>

  </div>
</template>

<script>
export default {
  mounted () {
    if (this.$store.state.Goods_dataList.length === 0) {
      this.$store.dispatch("GetGoodsAction")
    }
  },
  computed: {
    shopping_count () {
      let dataList = []
      this.$store.state.Goods_dataList.map(item => {
        this.$store.state.shopping.forEach(element => {
          if (item.id == element) {
            dataList.push(item)
          }
        })
      })
      return dataList
    }
  }
}
</script>

<style lang="" scoped>
#main {
  width: 100%;
  margin-bottom: 50px;
}
#main ul li {
  width: 100%;
  height: 150px;
  border-bottom: 1px solid;
  /* padding: 25px 50px; */
}
img {
  margin: 25px 50px;
  float: left;
}
.goods_name {
  margin: 25px 50px;
}
</style>