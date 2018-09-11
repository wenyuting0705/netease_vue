<!--  -->
<template>
  <div class="banner_wrapper">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <img :src="item.picUrl"/>
            <div class="swiper_content" v-if="item.subTitle">
                <div class="swiper_subtitle">
                  <span>—</span>
                  {{item.subTitle}}
                  <span>—</span>
                </div>
                <div class="swiper_title">{{item.title}}</div>
                <div class="swiper_desc">{{item.desc}}</div>
            </div>
          </div>
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

  components: {},
  mounted(){
    this.$store.dispatch('getBanner',()=>{
      this.$nextTick(()=>{
        new Swiper('.banner .swiper-container',{
          slidesPerView: 'auto',
          loop:true
        })
      })
    })
  },
  computed: {
    ...mapState(['banner'])
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
  .banner_wrapper
    width 100%
    height (433/$rem) 
    background-color #ffffff
    display flex
    box-sizing content-box
    .banner
      width (690/$rem)
      height 100%
      margin (0 30/$rem)
      padding (24/$rem 0)
      display flex
      box-sizing content-box
      .swiper-container
        width 100%
        height 100%
        overflow visible 
        .swiper-slide
          padding (0 10/$rem)
          box-sizing border-box
          position relative
          height (385/$rem)
          img
            width (670/$rem)
            border-radius (10/$rem) 
          .swiper_content
            width (466/$rem)
            height (198/$rem)
            position absolute
            top 0
            bottom 0
            left 0
            right 0
            margin auto
            background-color rgba(255,255,255,.9)
            display flex
            flex-direction column
            align-items center
            justify-content center
            .swiper_subtitle
              font-size (24/$rem)
              color #7f7f7f
              line-height (30/$rem)
              transform scale(.8)
            .swiper_title
              color #333333
              font-size (32/$rem)
              margin-top (16/$rem)
              font-weight bold
              line-height (48/$rem)
            .swiper_desc
              color #333333
              font-size (24/$rem)
              margin-top (4/$rem)
              line-height (36/$rem)
</style>