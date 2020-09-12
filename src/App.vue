<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  /**
   * 钩子函数，当前还未挂载，即未渲染至html,常用来初始化数据
   */
  created() {
    getSeller().then(seller=> {
      this.seller = seller
    })
  },
  components: {
    VHeader
  }
}
</script>

<style lang="stylus"></style>
