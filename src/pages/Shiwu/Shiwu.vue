<!--  -->
<template>
  <div class="shiwu_container">
    <HeaderCom/>
    <div class="scroll_container">
      <div class="scroll_wrapper">
        <ShiwuSwiper/>
        <Channels/>
        <Recommends/>
        <TenFifteen/>
        <Zhen/>
        <Look/>
        <More/>
      </div>
    </div>
     <div class="gotoTop" v-show="isShowArrow" @click="toTop"></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import ShiwuSwiper from './ShiwuSwiper/ShiwuSwiper'
import Channels from './Channels/Channels'
import Recommends from './Recommends/Recommeds'
import TenFifteen from './TenFifteen/TenFifteen'
import Zhen from './Zhen/Zhen'
import Look from './Look/Look'
import More from './More/More'
export default {
  data () {
    return {
      isShowArrow:false
    };
  },
  mounted(){
    this._initShiwuScroll()
  },
  components: {
    HeaderCom,
    ShiwuSwiper,
    Channels,
    Recommends,
    TenFifteen,
    Zhen,
    Look,
    More,
  },
  methods: {
    _initShiwuScroll(){
      const showArrEle = document.querySelector('.tenFifteen')
      this.shiwuScroll = new BScroll('.scroll_container',{
        click:true,
        scrollY:true,
        probeType:3
      })
      const top = showArrEle.offsetTop
      this.shiwuScroll.on('scroll',({x,y})=>{
        if(-y >= top){
          this.isShowArrow = true
        }else{
          this.isShowArrow = false
        }
      })
    },
    toTop(){
      this.shiwuScroll.scrollTo(0, 0, 300)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../common/stylus/mixins.styl';
.scroll_container
  margin-top (87/$rem)
  height (1100/$rem)
  .scroll_wrapper
    margin-bottom (40/$rem)
.gotoTop
    position fixed
    width (82/$rem)
    height (82/$rem)
    right (23/$rem)
    bottom (120/$rem)
    z-index 5000
    background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png')
    background-size 100% 
</style>