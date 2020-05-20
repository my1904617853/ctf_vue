<template>
  <div class="find">
    <div>
        <ul >
          <li>商品1</li>
          <li>商品2</li>
          <li>商品3</li>
          <li>商品4</li>
          <li>商品5</li>
          <li>商品6</li>
          <li>商品7</li>
          <li>商品8</li>
        </ul>
    </div>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0;
  width: 100%;
  height: 40px;;
  /* border-top:1px solid rgb(41, 40, 40); */
  border-bottom:1px solid darkgray;
  margin-bottom: 2px;;
}
a {
  color: #42b983;
}
</style>
