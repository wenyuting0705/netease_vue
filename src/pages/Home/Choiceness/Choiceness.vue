<!-- 专题精选 -->
<template>
  <div class="choiceness">
          <header class="choiceness_title">
            <span class="title_text">专题精选</span>
            <span class="title_icon"></span>
          </header>
          <!-- 专题精选轮播图 -->
          <div class="choiceness_slide">
              <div class="swiper-container">
                <div class="swiper-wrapper" ref="swiper">
                    <div class="inner_item swiper-slide" v-for="(topic,index) in topicList" :key="index">
                      <img :src="topic.itemPicUrl"/>
                      <div class="swiper_item_title"> 
                        <div class="title_text">{{topic.subtitle}}</div>
                        <div class="item_title_price">
                          <span>{{topic.priceInfo}}</span>
                          <span>元起</span>
                        </div>
                      </div>
                      <div class="swiper_item_info">{{topic.title}}</div>
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
    this.$store.dispatch('getTopicList',()=>{
      this.$nextTick(()=>{
       let mySwiper = new Swiper('.choiceness_slide .swiper-container',{
         slidesPerView: 'auto',
         spaceBetween: 25,
       })
        const dis = this.$refs.swiper.clientWidth
        console.log(dis)
        mySwiper.setTranslate(-dis)
      })
    })
  },
  computed: {
    ...mapState(['topicList'])
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
    .choiceness
      width 100%
      height (563/$rem)
      margin-bottom (20/$rem)
      background-color #fff
      .choiceness_title
        height (110/$rem)
        display flex
        text-align center
        justify-content center
        line-height (110/$rem)
        font-size (30/$rem)
        color #333
        .title_icon
          width (30/$rem)
          height (30/$rem)
          background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png')
          background-size 100%
          margin-top (38/$rem)
          margin-left (10/$rem)
      .choiceness_slide
        padding (0 30/$rem 36/$rem)
        overflow hidden
        .swiper-container
          .swiper-wrapper
            width (575/$rem)
            margin-left 0
            .swiper-slide
            .inner_item
              width (575/$rem) !important
              height (417/$rem)
              margin-right (21/$rem)
              img
                width 100%
                height (322/$rem)
                border-radius (8/$rem)
                margin-bottom (16/$rem)
              .swiper_item_title
                font-size (28/$rem)
                height (40/$rem)
                display flex
                color #333
                .title_text
                  width (405/$rem)
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                .item_title_price
                  margin-left (40/$rem)
                  color #b4282d
                  float right 
                  display flex
              .swiper_item_info
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: (24/$rem);
                color: #7F7F7F;
    
</style>