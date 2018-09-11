<!--  -->
<template>
  <div class="home">
    <!-- 首页头部，logo以及搜索框 -->
    <div class="header_header_con">
      <div class="home_header clearfix">
        <img src="../../../static/img/logo/logo.png"/>
        <Search/>
      </div>
    <!-- 首页导航 -->
      <div class="home_nav">
        <ul class="home_nav_list" @click="handleClass">
          <li class="active">推荐</li>
          <li>居家</li>
          <li>鞋包配饰</li>
          <li>服装</li>
          <li>电器</li>
          <li>洗护</li>
          <li>饮食</li>
          <li>餐厨</li>
          <li>婴童</li>
          <li>文体</li>
          <li>特色区</li>
        </ul>
      </div>
    </div>
    <!-- 首页主体部分 -->
    <div class="home_main" ref="home">
      <div class="main_scroll">
          <!-- 首页轮播图 -->
        <div class="show_container">
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/58568bc29efac66da5419b040abe990c.jpg?imageView&quality=75&thumbnail=750x0"/></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a7e05880a9b809b88c4228504ff7d1eb.jpg?imageView&quality=75&thumbnail=750x0"/></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/aa6e9be1f19acad247ff59f1caee59e5.jpg?imageView&quality=75&thumbnail=750x0"/></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0"/></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/06b6c3d06bd35bcde539271aa96214c6.jpg?imageView&quality=75&thumbnail=750x0"/></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/423e0a203ca30c3ca3877521760ae1d3.jpg?imageView&quality=75&thumbnail=750x0"/></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/403e06775da33c355e8e3ff6ff35d77c.jpg?imageView&quality=75&thumbnail=750x0"/></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/0b53d08dee6ddca926b155b6e19c3250.jpg?imageView&quality=75&thumbnail=750x0"/></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <ul class="show_tips">
            <li v-for="(policyDesc,index) in policyDescList" :key="index">
              <!-- http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png -->
              <span class="tip_icon" :style="'backgroundImage:url('+policyDesc.icon+')'"></span>
              <span class="tip_text">{{policyDesc.desc}}</span>
            </li>
          </ul>
        </div>
        <!-- 品牌制造商直供 -->
        <BrandProvide/>
        <!-- 新品首发 -->
        <NewGoods/>
        <!-- 人气推荐 -->
        <Recommends/>
        <!-- 严选限时购 -->
        <CountDown/>
        <!-- 福利社 -->
        <div class="welfare"></div>
        <!-- 专题精选 -->
        <Choiceness/>
        <!-- 首页各分类内容 -->
        <HomeList/>
        <div class="home_footer">
          <div class="footer_container">
            <div class="footer_button">
              <span>下载APP</span>
              <span>电脑版</span>
            </div>
            <div class="company_info">
              <span>网易公司版权所有 © 1997-</span><span>2018</span><br/>
              <span>食品经营许可证：JY13301080111719</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gotoTop" v-show="isShowArrow" @click="toTop"></div>
    <!-- 主页弹框 -->
    <div class="newWapUserGiftModal" v-show="isShow">
      <div class="mask">
        <span class="close_btn" @click="isShow=false"></span>
        <div class="new_enjoy">
          <div class="enjoy_content">
            <div class="title">
              <span>—</span>
              新人专享礼
              <span>—</span>
            </div>
            <div class="subTitle">
                感谢使用网易严选, 已为你准备了一份专享礼
            </div>
            <div class="newUserItem">
              <div class="item_img">
                <img :src="newUserGift.itemPic"/>
              </div>
              <div class="content">
                  <div class="item_title">{{newUserGift.itemName}}</div>
                  <div class="item_brand">
                    <span>{{newUserGift.manuDesc}}</span>
                  </div>
                  <div class="item_price">
                    <span class="newPrice">￥{{newUserGift.retailPrice}}.00</span>
                    <span class="oldPrice">￥{{newUserGift.comparePrice}}.00</span>
                  </div>
              </div>
            </div>
            <div class="actCouponBtn">
              领券立减¥{{newUserGift.reducePrice}}.00
            </div>
            <div class="linkBtn">
              查看更多特惠商品
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import Search from '../../components/Search/Search'
import BrandProvide from './BrandProvide/BrandProvide'
import NewGoods from './NewGoods/NewGoods'
import Recommends from './Recommends/Recommends'
import CountDown from './CountDown/CountDown'
import Choiceness from './Choiceness/Choiceness'
import HomeList from './HomeList/HomeList'
export default {
  data () {
    return {
      policyDesc:{},
      isShow:false,
      isShowArrow:false
    };
  },

  components: {
    Search,
    BrandProvide,
    NewGoods,
    Recommends,
    CountDown,
    Choiceness,
    HomeList,
  },

  computed: {
    ...mapState(['policyDescList','newUserGift'])
  },
  mounted(){
    new BScroll('.home_nav',{
      click:true,
      scrollX:true
    })
    new Swiper('.show_container .swiper-container',{
      autoplay:true,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
     
    this._initMainScroll()
    this.$store.dispatch('getPolicyDescList')
    this.$store.dispatch('getTagList')
    this.$store.dispatch('getCateList')
    this.$store.dispatch('getNewUserGift',()=>{
      this.$nextTick(()=>{
        this.isShow = true
      })
    })
  },
  methods: {
    handleClass(event){
      const lis = document.querySelectorAll('.home_nav_list li')
      for(let i = 0;i<lis.length;i++){
        // lis[i].index = i
        lis[i].className = ''
      }
      // const currentLi = event.target
      event.target.className = 'active'
    },
    _initMainScroll(){
      const mainHeight = document.documentElement.clientHeight
      const showArrEle = document.querySelector('.new_goods_container')
      this.$refs.home.style.height = (mainHeight*2-258)/100 + 'rem'
      this.homeScroll = new BScroll('.home_main',{
        click:true,
        scrollY:true,
        probeType:3
      })
      const top = showArrEle.offsetTop
      this.homeScroll.on('scroll',({x,y})=>{
        if(-y >= top){
          this.isShowArrow = true
        }else{
          this.isShowArrow = false
        }
      })
    },
    toTop(){
      this.homeScroll.scrollTo(0, 0, 300)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../common/stylus/mixins.styl';
.home
  position relative
  .header_header_con
    width 100%
    background-color #ffffff
    margin-bottom (8/$rem)
    position fixed
    top 0
    left 0
    z-index 99
    .home_header
      padding (16/$rem 30/$rem)
      font-size 0
      display flex
      img 
        height (40/$rem)
        vertical-align middle
        padding-top (16/$rem)
        margin-right (50/$rem)
    .home_nav
      width 100%
      overflow hidden
      background-color #ffffff
      .home_nav_list
        padding 0 (30/$rem)
        height (50/$rem)
        width 15rem
        li
          float left
          height (60/$rem)
          margin-left (40/$rem)
          font-size (28/$rem)
          padding 0 (17/$rem)
          line-height (60/$rem)
          color #333
          &.active
            border-bottom (4/$rem) solid #b4282d
            color #b4282d
        li:first-of-type
          margin-left 0
  .home_main
    margin-top (160/$rem)
    margin-bottom (98/$rem)
    overflow hidden
    .show_container 
      background-color #ffffff
      margin-bottom (15/$rem)
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            img 
              width 100%
        .swiper-pagination
          .swiper-pagination-bullet
            display inline-block
            width 0.4rem
            height 0.04rem
            border-radius 0
            background #fff
            opacity 0.4
          .swiper-pagination-bullet-active
            background #fff
            opacity 1
      .show_tips
        width 100%
        height 0.72rem
        padding 0 0.4rem
        box-sizing border-box
        display flex
        >li
          float left 
          flex 1
          height 0.36rem
          margin 0.18rem 0
          display flex
          line-height 0.36rem
          .tip_icon
            width 0.32rem
            background-size 100%
            background-repeat no-repeat
            vertical-align middle
            margin-top 0.05rem
          .tip_text
            font-size 0.24rem
            height 0.32rem
            width 100%
            margin-left 0.1rem
    .welfare
      width 100%
      height (300/$rem)
      margin-bottom (20/$rem)
      background-image url('http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg')
      background-size 100%
    .home_footer
      width 100%
      height (245/$rem)
      background-color #414141
      .footer_container
        padding (54/$rem 20/$rem 28/$rem)
        .footer_button
          height (62/$rem)
          display flex
          align-items center
          text-align center
          span
            width (172/$rem)
            height (60/$rem)
            font-size (26/$rem)
            color #ffffff
            border (1/$rem) solid #999
            display inline-block
            line-height (60/$rem)
            vertical-align middle
            border-radius (4/$rem) 
            &:first-of-type
              margin (0 50/$rem 0 150/$rem)
        .company_info
          height (64/$rem)
          margin-top (36/$rem)
          font-size (24/$rem)
          color #999
          text-align center
          line-height (32/$rem)
  .gotoTop
    position fixed
    width (82/$rem)
    height (82/$rem)
    right (23/$rem)
    bottom (120/$rem)
    z-index 5000
    background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png')
    background-size 100% 
  .newWapUserGiftModal
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 999
    .mask
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background rgba(0,0,0,.5)
      .close_btn
        width (64/$rem)
        height (64/$rem)
        position fixed
        top (60/$rem)
        right (30/$rem)
        background-image url('../../../static/img/close.png')
        background-size 100%
        opacity .6
      .new_enjoy
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        width (630/$rem)
        height (692/$rem)
        .enjoy_content
          width 100%
          height 100%
          box-sizing border-box
          padding (30/$rem 24/$rem)
          border-radius (20/$rem)
          background #ffffff
          .title
            width 100%
            height (59/$rem)
            text-align center
            line-height (59/$rem)
            font-size (40/$rem)
            font-weight bold
            color #333 
            span 
              font-weight bold
          .subTitle
            width 100%
            height (36/$rem)
            margin-top (4/$rem)
            font-size (24/$rem)
            text-align center
            line-height (36/$rem)
          .newUserItem
            width 100%
            height (232/$rem)
            margin-top (50/$rem)
            background #f4f4f4
            border-radius (5/$rem)
            display flex
            .item_img
              width (232/$rem)
              height (232/$rem)
              img 
                width 100%
                height 100%
            .content
              width (342/$rem)
              height (146/$rem)
              padding (43/$rem 0)
              margin-left (8/$rem)
              .item_title
                width (280/$rem)
                height (41/$rem)
                font-size (26/$rem)
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                line-height (41/$rem)
              .item_brand
                width 100%
                height (36/$rem)
                margin-top (15/$rem)
                display flex
                span 
                  height (34/$rem)
                  padding (0 8/$rem)
                  border (1/$rem) solid #7f7f7f
                  border-radius (5/$rem)
                  font-size (24/$rem)
                  width auto
                  line-height (34/$rem)
              .item_price
                width 100%
                height (41/$rem)
                margin-top (20/$rem)
                font-size (26/$rem)
                display flex
                .newPrice
                  color #b4282d
                .oldPrice
                  color #999
                  position relative
                  text-decoration line-through
                  margin-left (8/$rem)
          .actCouponBtn
            width 100%
            height (88/$rem)
            margin-top (40/$rem)
            background #b4282d
            color #ffffff
            text-align center
            line-height (88/$rem)
            font-size (26/$rem)
            border-radius (5/$rem)
          .linkBtn
            width (580/$rem)
            height (86/$rem)
            border (1/$rem) solid #7F7F7F
            margin-top (24/$rem)
            color #333
            text-align center
            line-height (86/$rem)
            border-radius (5/$rem)
            font-size (26/$rem)
</style>  