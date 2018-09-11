<!-- 品牌制造商直供 -->
<template>
  <div class="brand_provide">
          <header class="title">
            <span>品牌制造商直供</span>
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png"/>
          </header> 
          <div class="brand_content">
            <ul>
              <li v-for="(tag,index) in getTagList" :key="index">
                <div class="brand_text">
                  <div class="provider_name">{{tag.name}}</div>
                  <div class="price">{{tag.floorPrice}}元起</div>
                  <div class="new" v-show="tag.newOnShelf"></div>
                </div>
                <img :src="tag.picUrl"/>
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

  components: {
    
  },
  mounted(){
    
  },
  computed: {
    ...mapState(['tagList']),
    getTagList(){
      const tagListArr = this.tagList.slice(0,4)
      return tagListArr
    }
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
    .brand_provide
      width 100%
      background-color #ffffff
      margin-bottom (15/$rem)
      >header
        height 1.1rem
        font-size 0.35rem
        display flex
        align-items center
        color #333
        justify-content center
        img 
          width 0.3rem
          height 0.3rem
          margin-left 0.1rem
      .brand_content
        ul
          overflow hidden
          margin 0 0.2rem
          li
            float left
            position relative
            width (350/$rem)
            height (236/$rem)
            font-size (28/$rem)
            background-color #f4f4f4
            margin-bottom (8/$rem)
            .brand_text
              position absolute
              padding (20/$rem 0 0 20/$rem)
              color #333333
              .price
                margin (10/$rem 0)
              .new
                width (64/$rem)
                height (32/$rem)
                background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png')
                background-size 100%
            &:nth-of-type(1)
              margin-right (8/$rem)
            &:nth-of-type(3)
              margin-right (8/$rem)  
            img 
              width 100%
              height 100%
    
</style>