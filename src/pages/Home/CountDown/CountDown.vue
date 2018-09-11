<!-- 严选限时购 -->
<template>
   <div class="countDown">
          <div class="countDown_time">
            <div class="countDown_title">严选限时购</div>
            <div class="countDown_time_change">
              <span class="hours">01</span>
              <span class="colon">:</span>
              <span class="minutes">01</span>
              <span class="colon">:</span>
              <span class="second">01</span>
            </div>
            <div class="next_countdown">
                下一场10:00开始
            </div>
          </div>
          <div class="countDown_info">
            <div class="countDown_price">
              <span>￥216</span>
              <div>
                <span>￥</span><span class="oldPrice">239</span>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
    .countDown
      height (380/$rem)
      margin-bottom (20/$rem)
      padding (30/$rem 40/$rem 30/$rem 56/$rem)
      background-color #ffffff
      display flex
      .countDown_time
        width (334/$rem)
        height (320/$rem)
        padding-top (80/$rem)
        .countDown_title
          height (36/$rem)
          font-size (36/$rem)
          color #333
          letter-spacing (16/$rem) 
          margin-bottom (24/$rem)
        .countDown_time_change
          height (56/$rem)
          display flex
          .hours,.minutes,.second
            display inline-block
            width (62/$rem)
            height (56/$rem)
            background-color #444
            color #fff
            font-size (30/$rem)
            border-radius (5/$rem) 
            text-align center
            line-height  (56/$rem)
          .colon
            font-size (30/$rem)
            display inline-block
            color #333
            text-align center
            font-weight bold
            width (20/$rem)
            line-height  (56/$rem)
            margin 0 (4/$rem)
        .next_countdown
          height (24/$rem)
          margin-top (40/$rem)
          font-size (24/$rem)
          color #333
      .countDown_info
        width (320/$rem)
        height (320/$rem)
        background-image url('http://yanxuan.nosdn.127.net/5a07b6a1c9d8d5e039e8360d0f92c396.png?imageView&quality=85&thumbnail=330x330')
        background-size 100%
        position relative
        .countDown_price
          width (96/$rem)
          height (96/$rem)
          border-radius 50%
          background rgba(244,143,24,.95) 
          display flex
          flex-direction column
          text-align center 
          justify-content center
          color #fff
          font-size (27/$rem)
          position absolute
          right (20/$rem)
          bottom (30/$rem)
          .oldPrice
            &::before
              content ''
              width 55%
              height (1/$rem)
              background-color #fff
              position absolute
              top (60/$rem)
    
</style>