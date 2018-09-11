<!--  -->
<template>
  <div class="shiwu_channels">
     <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in column" :key="index">
            <img :src="item.picUrl"/>
            <div class="topNum">{{item.articleCount}}</div>
            <div class="channel_title">{{item.title}}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import {mapState} from 'vuex'
export default {
  data () {
    return {
    };
  },
  mounted(){
    this.$store.dispatch('getColumn',()=>{
      this.$nextTick(()=>{
        new Swiper('.shiwu_channels .swiper-container',{
          slidesPerView: 'auto',
        })
      })
    })
  },
  computed: {
    ...mapState(['column'])
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
  .shiwu_channels
    width 100%
    height (286/$rem)
    padding (32/$rem 30/$rem 28/$rem)
    margin-bottom (20/$rem)
    background-color #ffffff
    box-sizing border-box
    .swiper-container
      width 100%
      height (226/$rem)
      font-size 0
      .swiper-wrapper
        font-size 0
        .swiper-slide
          width (164/$rem)
          height (210/$rem)
          margin-right (24/$rem)
          display flex
          flex-direction column
          // justify-content center
          position relative
          font-size 0
          img
            width 100%
            height (164/$rem)
            margin-bottom (22/$rem)
            border-radius (5/$rem)
          .topNum
            position absolute
            top 0
            right 0
            color #ffffff
            width (116/$rem)
            height (32/$rem)
            font-size (24/$rem)
            border-radius (5/$rem)
            background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/rbGradient-049c62dfb5.png')
            background-size 100%
            line-height (32/$rem)
            padding-right (5/$rem)
          .channel_title
            color #333333
            font-size (24/$rem)
            width 190/$rem
            height (24/$rem)
            line-height 1
            text-align center
</style>