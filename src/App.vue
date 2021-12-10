<template>
  <div id="app">
    <router-view />
    <h1>黑马头条</h1>
    <div>
      <i class="iconfont icon-dianzan"></i>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
</style>
