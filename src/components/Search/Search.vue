<!--  -->
<template>
  <div class="search">
    <div class="search_icon"></div>
    <div class="search_text">搜索商品, 共13113款好物</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang='stylus' rel="stylesheet/stylus" scope>
@import '../../common/stylus/mixins.styl';
  .search
    width 100%
    height (56/$rem)
    border-radius (8/$rem)
    background-color #ededed
    text-align center
    display flex
    align-items center
    justify-content center
    .search_icon
      width (28/$rem)
      height (28/$rem)
      background-image url('../../../static/img/search_icon.png')
      background-size 100%
      background-repeat no-repeat
    .search_text
      height (56/$rem)
      color #666
      font-size (28/$rem)
      line-height (56/$rem)
</style>