<!--  -->
<template>
  <div class="tenFifteen">
      <header>十点一刻</header>
      <div class="tenFifteen_swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in tenfifteen" :key="index">
              <div class="tf_subtitle">
                <span>—</span>
                  今日话题
                <span>—</span>
              </div>
              <div class="tf_title">{{item.title}}</div>
              <div class="tf_desc">{{item.desc}}</div>
              <div class="joinInfo">
                <div class="inner">
                  <div class="avatars">
                    <div class="avatar">
                      <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48"/>
                    </div>
                    <div class="avatar">
                      <img :src="item.participantAvatar[1]"/>
                    </div>
                    <div class="avatar">
                      <img :src="item.participantAvatar[2]"/>
                    </div>
                    <div class="avatar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div class="join">{{item.participantNum}}人参与话题</div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="look_more">
                查看全部话题
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
export default {
  data () {
    return {
    };
  },

  components: {},

  mounted(){
    this.$store.dispatch('getTenfifteen',()=>{
      this.$nextTick(()=>{
        new Swiper('.tenFifteen_swiper .swiper-container',{
          slidesPerView: 'auto',
        })
      })
    })
  },
  computed: {
    ...mapState(['tenfifteen'])
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
  .tenFifteen
    width (690/$rem)
    height (531/$rem)
    margin-bottom (20/$rem)
    padding (0 30/$rem 40/$rem 30/$rem)
    background #ffffff
    >header
      width 100%
      height (120/$rem)
      text-align center 
      line-height (120/$rem)
      font-size (32/$rem) 
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          width (500/$rem)
          height (294/$rem)
          padding (38/$rem 40/$rem 79/$rem)
          margin-right (30/$rem)
          background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png')
          background-size 100%
          position relative
          &:last-child
            width (560/$rem)
            height (364/$rem)
            border (10/$rem) solid #e6e6e6
            padding 0
            margin 0
            .look_more
              width (192/$rem)
              height (38/$rem)
              position absolute
              top 0
              bottom 0
              left 0
              right 0
              margin auto
              font-size (26/$rem)
              color #7f7f7f
              span
                width (30/$rem)
                height  (30/$rem)
                background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/circle-right-arrow-3d59025cb6.png')
                display inline-block
                background-size 100%
          .tf_subtitle
            font-size (24/$rem)
            color #7f7f7f
            line-height (30/$rem)
            transform scale(.8)
            text-align center
            margin-bottom (40/$rem)
          .tf_title
            color #333333
            font-size (32/$rem)
            font-weight bold
            line-height (48/$rem)
            text-align center
            margin-bottom (14/$rem)
          .tf_desc
            color #333333
            font-size (24/$rem)
            margin-top (4/$rem)
            line-height (36/$rem) 
            text-align center
          .joinInfo
            height (48/$rem)
            width (500/$rem)
            text-align center 
            position absolute
            bottom (79/$rem)
            .inner
              overflow hidden
              height (48/$rem)
              width (360/$rem)
              display flex
              margin-left (80/$rem)
              .avatars
                width (176/$rem)
                margin-right (16/$rem)
                height (48/$rem)
                overflow hidden
                .avatar
                  width (46/$rem)
                  height (46/$rem)
                  border-radius 50%
                  margin-left (-5/$rem)
                  float left 
                  &:first-of-type
                    margin-left 0
                  >img 
                    width 100% 
                    display block
                    border-radius 50%
                  &:last-child
                    background #d9d9d9
                    display flex
                    align-items center
                    justify-content center
                    span 
                      width (6/$rem)
                      height (6/$rem)
                      background #ffffff
                      margin-right (4/$rem) 
              .join
                font-size (24/$rem)
                color #7f7f7f
                float left
                height (48/$rem)
                line-height (48/$rem)
</style>