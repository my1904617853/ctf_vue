<template>
  <div id="main">
    <img :src="dataList.image"
         alt=""
         width="100%">
    <p>现价: {{dataList.now}} 元</p>
    <p>原价: {{dataList.before}} 元</p>
    <p>数量: {{dataList.number}} 件</p>

    <div id="shop">
      <ul>
        <li @click="addShopping(dataList.id)">加入购物车</li>
        <li>立即购买</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { TABBAR_STATE, ADD_SHOPPING } from '@/type'
import { MessageBox } from 'mint-ui'

export default {
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    addShopping (id) {
      MessageBox.confirm('确定加入购物车?').then(action => {
        this.$store.commit(ADD_SHOPPING, id)
      })
    }
  },
  mounted () {
    console.log(JSON.parse(this.$route.params.data))
    this.dataList = JSON.parse(this.$route.params.data)
    this.$store.commit(TABBAR_STATE, false)

  },
  beforeDestroy () {
    this.$store.commit(TABBAR_STATE, true)
  }
}
</script>

<style  scoped>
#mian {
  margin-bottom: 50px;
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