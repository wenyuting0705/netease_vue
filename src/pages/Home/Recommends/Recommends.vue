<!-- 人气推荐 -->
<template>
         <div class="recommend">
          <header class="recommend_header">
            <div>人气推荐 · 好物精选</div>
            <div class="lookAll">
              查看全部
              <span></span>
            </div>
          </header>
          <div class="recommend_container">
            <ul ref="recommendList">
              <li v-for="(popularItem,index) in popularItemList" :key="index">
                <div class="recommend_img">
                  <img :src="popularItem.listPicUrl">
                </div>
                <div class="recommend_tags" v-if="popularItem.itemTagList.length">
                  <p v-for="(tag,index) in popularItem.itemTagList" :key="index">
                    {{tag.name}}
                  </p>
                </div>
                <div class="recommend_name"><span>{{popularItem.name}}</span></div>
                <div class="recommend_info"><span>{{popularItem.simpleDesc}}</span></div>
                <div class="recommend_price">￥{{popularItem.retailPrice}}</div>
              </li>
              <li class="more_recommends">
                <span>查看更多</span>
              </li>
            </ul>
          </div>
        </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
    ...mapState(['popularItemList'])
  },
  mounted(){
    this.$store.dispatch('getPopularItemList',()=>{
      this.$nextTick(()=>{
         this._initRecommendScroll()
      })
    })
  },
  methods: {
    _initRecommendScroll(){
      const lis = document.querySelectorAll('.recommend_container>ul>li')
      let liWidth = 0;
      for(let i = 0;i<lis.length;i++){
        liWidth = lis[i].clientWidth
      }
      const liSize = lis.length
      const ulWidth = (liWidth + 32)*liSize / 50 +'rem'
      this.$refs.recommendList.style.width = ulWidth
      // console.log(this.$refs.recommendList.clientWidth)
      new BScroll('.recommend_container',{
        click:true,
        scrollX:true
      })
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
    .recommend
      width 100%
      background-color #ffffff
      margin-bottom (15/$rem)
      .recommend_header
        width 100%
        height (260/$rem)
        display flex
        flex-direction column
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png')
        background-size 100%
        color #B4A078
        align-items center
        justify-content center
        margin-bottom (32/$rem)
        >div:first-of-type
          font-size (40/$rem)
        .lookAll
          width (240/$rem)
          height (56/$rem)
          font-size (30/$rem)
          margin-top (20/$rem)
          text-align center
          background-color #F4E9CB
          line-height (56/$rem)
          span 
            display inline-block
            width (10/$rem)
            height (22/$rem)
            background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexPopularArrow-fb701819de.png')
            background-size 100%
      .recommend_container
        width 100%
        height (480/$rem)
        overflow hidden
        >ul
          overflow hidden
          >li
            float left
            width (280/$rem)
            margin-left (30/$rem)
            display flex
            flex-direction column
            .recommend_img
              width (280/$rem)
              height (280/$rem)
              background-color #f4f4f4
              >img 
                width (280/$rem)
                height (280/$rem)
            div
              width (280/$rem)
              padding (0 10/$rem)
              box-sizing border-box
              span 
                display inline-block
                width (280/$rem)
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
            .recommend_name
              height (33/$rem)
              margin (10/$rem 0)
              font-size (28/$rem)
              color #333333
            .recommend_info
              height (30/$rem)
              font-size (26/$rem)
              color #7f7f7f
              margin-bottom (20/$rem)
            .recommend_price
              height (27/$rem)
              font-size (28/$rem)
              color #b4282d
            .recommend_tags
              height (40/$rem)
              margin-top (10/$rem)
              font-size (24/$rem)
              color #fff
              box-sizing border-box
              line-height (30/$rem)
              display flex
              >p
                width (110/$rem)
                height (40/$rem)
                padding (5/$rem 16/$rem )
                background-color #f48f18
                vertical-align middle
                box-sizing border-box
                border-radius (3/$rem) 
                transform scale(.8)
                text-align center
          .more_recommends
            width (280/$rem)
            height (280/$rem)
            border (8/$rem) solid #F4F4F4
            line-height (280/$rem)
            text-align center 
            font-size (30/$rem)
            color #666
            box-sizing border-box
    
</style>