<!--  -->
<template>
  <div class="header">
    <div class="header_con">
      <span class="header_home" @click="$router.replace('/home')"></span>
      <span class="header_logo"></span>
      <span class="header_search"></span>
      <span class="header_cart" @click="$router.replace('/shopcart')"></span>
    </div>
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
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../common/stylus/mixins.styl';
  .header
    bottom-border-1px(#e4e4e4)
    width 100%
    height (87/$rem)
    background-color #fafafa
    position fixed
    top 0
    left 0
    z-index 99
    display flex
    align-items center
    justify-content space-between
    .header_con
      padding (0 16/$rem 0 24/$rem)
      position relative
      display flex
      align-items center
      // justify-content space-between
      width (710/$rem)
      height 100%
      span
        background-image url('./img/header.png')
      .header_home
        width (48/$rem)
        height (44/$rem)
        background-position (0 -62/$rem)
        background-size 325%
      .header_logo
        width (172/$rem)
        height (54/$rem)
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
        background-position (0 -120/$rem)
        background-size 100%
      .header_search
        width (48/$rem)
        height (44/$rem)
        margin-left (510/$rem)
        background-size 330%
        background-position (-6/$rem -290/$rem)
      .header_cart
        width (48/$rem)
        height (44/$rem)
        margin-left (40/$rem)
        background-size 330%
        background-position (-6/$rem -6/$rem)
</style>