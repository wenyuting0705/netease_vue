<template>
  <div id="app">
    <!-- <div class="entry">
      <div class="entry_page">
        <img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg"/>
        <img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg"/>
      </div>
      <div class="entry_link">
        <img src="http://yanxuan.nosdn.127.net/d600f8c56fc184e199aa389e09fb2ff9.jpg"/>
      </div>
    </div> -->
      <router-view/>
    <FooterNav v-show="$route.meta.showFooter"/>   
  </div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav'
export default {
  components:{
    FooterNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body,html 
  background-color #f4f4f4
  height 100%
  width 100%
  overflow hidden
html 
  font-size 50px
  // .entry_page
  //   >img 
  //     width 100%
  //     vertical-align top 
  // .entry_link
  //   >img 
  //     width 100%
  //     vertical-align top 
</style>
