<!--  -->
<template>
  <div class="look">
    <header>严选LOOK</header>
    <div class="look_content">
      <div class="img_wrapper">
        <img :src="imgUrl"/>
      </div>
      <div class="topicInfo">
        <div class="author">
          <img :src="yxLook.avatar"/>
          <div class="nickName">{{yxLook.nickname}}</div>
        </div>
        <div class="look_desc">
          {{yxLook.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      imgUrl:''
    };
  },
  mounted(){
    this.$store.dispatch('getYxLook',()=>{
      this.$nextTick(()=>{
         this.imgUrl = this.yxLook.mediaList[0].pic.url
      })
    })
   
  },

  computed: {
    ...mapState(['yxLook']),
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
.look
  width 100%
  background #ffffff
  header 
    width 100%
    height (120/$rem)
    text-align center 
    line-height (120/$rem)
    font-size (32/$rem)
  .look_content
    width 100%
    .img_wrapper
      width 100%
      height (750/$rem) 
      >img 
        width (750/$rem)
        height (750/$rem) 
    .topicInfo
      width (690/$rem)
      height (204/$rem)
      padding (24/$rem 30/$rem 46/$rem)
      .author
        width 100%
        height (48/$rem)
        margin-bottom (24/$rem)
        display flex
        color #333
        font-size (24/$rem)
        line-height (48/$rem)
        img 
          width (46/$rem)
          height (46/$rem)
          border (1/$rem) solid #d9d9d9
          border-radius 50%
          margin-right (8/$rem)
          vertical-align middle
          .nickname
            height (48/$rem)
      .look_desc
        color #7f7f7f
        font-size (28/$rem)
        line-height 1.6
</style>