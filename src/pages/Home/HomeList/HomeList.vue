<!-- 首页各分类内容 -->
<template>
  <div>
    <div class="home_nav_item" v-for="(cate,index) in cateList" :key="index">
          <header class="nav_item_title">{{cate.name}}好物</header>
          <ul class="item_list">
            <li v-for="(item,index) in cate.itemList" :key="index">
              <div class="item_img">
                <img :src="item.listPicUrl"/>
                <div class="item_info">{{item.simpleDesc}}</div>
              </div>
              <div class="item_tips" v-if="item.promTag">
                <p>{{item.promTag}}</p>
              </div>
              <div class="item_name">{{item.name}}</div>
              <div class="item_price">￥<span>{{item.retailPrice}}</span></div>
            </li>
            <li class="more">
              <div class="more_text">
                <span>更多</span><span>{{cate.name}}好物</span>
              </div>
              <span class="more_icon"></span>
            </li>
          </ul>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
    };
  },
  components: {},

  computed: {
    ...mapState(['cateList'])
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
.home_nav_item
      width 100%
      background-color #fff
      margin-bottom (20/$rem)
      .nav_item_title
        height (120/$rem)
        text-align center
        line-height (120/$rem)
        color #333
        font-size (30/$rem)
      .item_list
        overflow hidden
        >li
          float left
          width 50%
          height (587/$rem)
          box-sizing border-box
          padding (0 10/$rem 33/$rem 20/$rem)
          &:nth-of-type(2n)
            padding (0 20/$rem 33/$rem 10/$rem)
          .item_img
            width (345/$rem)
            height (414/$rem)
            font-size 0
            >img
              width (345/$rem)
              background #f4f4f4
            .item_info
              width 100%
              height (69/$rem)
              background-color #F1ECE2
              font-size (24/$rem)
              color #9F8A60
              line-height (69/$rem)
              padding-left (10/$rem)
              box-sizing border-box
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
          .item_tips
            width (335/$rem)
            height (30/$rem)
            margin (20/$rem 0 0 4/$rem)
            padding-left (10/$rem)
            >p
              width (48/$rem)
              height (20/$rem)
              padding (5/$rem 16/$rem)
              background-color #f48f18
              color #ffffff
              font-size: (24/$rem);
              border-radius (3/$rem) 
              vertical-align middle
          .item_name
            height (48/$rem)
            margin-top (10/$rem)
            padding (0 10/$rem)
            font-size (26/$rem)
            color #333
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            line-height (48/$rem)
          .item_price
            height (32/$rem)
            padding (0 10/$rem)
            font-size (30/$rem)
            color #b4282d
        .more
          height (414/$rem)
          display flex
          align-items center
          justify-content center
          flex-direction column
          background-color #f4f4f4
          .more_text
            font-size (32/$rem)
            color #333
            margin-bottom (60/$rem)
          .more_icon
            width (67/$rem)
            height (67/$rem)
            background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goodGridMore-233aaf669a.png')
            background-size 100%
</style>