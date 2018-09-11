<!-- 新品首发 -->
<template>
  <div class="new_goods">
    <header class="new_header">
      <div>新品首发</div>
      <div class="lookAll">
        查看全部
        <span></span>
      </div>
    </header>
    <div class="new_goods_container">
      <ul ref="newGoodsList">
        <li v-for="(newItem,index) in newItemList" :key="index">
          <div class="new_goods_img">
            <img :src="newItem.listPicUrl">
          </div>
          <div class="new_goods_tags" v-if="newItem.itemTagList.length">
            <p v-for="(tag,index) in newItem.itemTagList" :key="index">
              {{tag.name}}
            </p>
          </div>
          <div class="new_goods_name"><span>{{newItem.name}}</span></div>
          <div class="new_goods_info"><span>{{newItem.simpleDesc}}</span></div>
          <div class="new_goods_price">￥{{newItem.retailPrice}}</div>
          <div class="productPlace" v-if="newItem.productPlace">
            {{newItem.productPlace}}
          </div>
        </li>
        <li class="more_new_goods">
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
    ...mapState(['newItemList'])
  },
  mounted(){
    this.$store.dispatch('getNewItem',()=>{
      this.$nextTick(()=>{
        this._initNewGoodsScroll()
      })
    })
    
  },
  methods: {
    _initNewGoodsScroll(){
      const lis = document.querySelectorAll('.new_goods_container>ul>li')
      let liWidth = 0;
      for(let i = 0;i<lis.length;i++){
        liWidth = lis[i].clientWidth
      }
      const liSize = lis.length
      const ulWidth = (liWidth + 31)*liSize / 50 +'rem'
      this.$refs.newGoodsList.style.width = ulWidth
      // console.log(lis)
       console.log(liWidth,liSize,ulWidth)
      new BScroll('.new_goods_container',{
      click:true,
      scrollX:true
    })
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';

    .new_goods
      width 100%
      background-color #ffffff
      margin-bottom (15/$rem)
      .new_header
        width 100%
        height (260/$rem)
        display flex
        flex-direction column
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png')
        background-size 100%
        color #8BA0B6
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
          background-color #D8E5F1
          line-height (56/$rem)
          span 
            display inline-block
            width (10/$rem)
            height (22/$rem)
            background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png')
            background-size 100%
      .new_goods_container
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
            position relative
            .new_goods_img
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
            .new_goods_name
              height (33/$rem)
              margin (10/$rem 0)
              font-size (28/$rem)
              color #333333
            .new_goods_info
              height (30/$rem)
              font-size (26/$rem)
              color #7f7f7f
              margin-bottom (20/$rem)
            .new_goods_price
              height (27/$rem)
              font-size (28/$rem)
              color #b4282d
            .new_goods_tags
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
          .more_new_goods
            width (280/$rem)
            height (280/$rem)
            border (8/$rem) solid #F4F4F4
            line-height (280/$rem)
            text-align center 
            font-size (30/$rem)
            color #666
            box-sizing border-box
          .productPlace
            width (40/$rem)
            border (1/$rem) solid #b4a078
            position absolute
            font-size (24/$rem)
            margin (10/$rem 0 0 10/$rem)
            padding (12/$rem 8/$rem)
            color #b4a078
            transform scale(.8)
            box-sizing border-box
            text-align center
</style>