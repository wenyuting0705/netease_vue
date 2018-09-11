<!--  -->
<template>
  <div class="shiwu_More">
    <header>
      <div>更多精彩</div>
    </header>
    <ul class="more_content">
      <li class="content_item" v-for="(item,index) in findMore" :key="index">
        <img :src="item.itemPicUrl"/>
        <div class="content_title">{{item.subTitle}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
    };
  },
  mounted(){
    this.$store.dispatch('getMore')
  },

  components: {},

  computed: {
    ...mapState(['findMore'])
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
.shiwu_More
  width (690/$rem)
  margin (0 30/$rem)
  header 
    width 100%
    height (140/$rem)
    font-size (26/$rem)
    line-height (120/$rem)
    text-align center
    color #333
    display flex
    align-items center
    &::before,&::after
      content ""
      height (1/$rem)
      width (264/$rem)
      background #d9d9d9
      display block
    div
      margin (0 24/$rem)
  .more_content
    width 100%
    .content_item
      width 100%
      height (498/$rem)
      box-sizing border-box
      margin-bottom (30/$rem)
      background #fff
      color #333
      padding (24/$rem)
      img 
        width 100%
        height (360/$rem)
      .content_title
        width 100%
        padding (28/$rem 0)
        font-size (26/$rem)
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
</style>