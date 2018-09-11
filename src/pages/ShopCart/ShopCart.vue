<!--  -->
<template>
  <div class="shopCart">
    <div class="shopCart_header">
      <span class="title">购物车</span>
      <span class="coupon">领券</span>
    </div>
    <div class="service">
      <ul class="service_list">
        <li>
          <span class="circle"></span>
          <span class="service_title">30天无忧退货</span>
        </li>
        <li>
          <span class="circle"></span>
          <span class="service_title">48小时快速退款</span>
        </li>
        <li>
          <span class="circle"></span>
          <span class="service_title">满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="shopCart_main">
      <div class="shopCart_img"></div>
      <div class="shopCart_add">去添加点什么吧</div>
      <div class="shopCart_login">登录</div>
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
  .shopCart
    .shopCart_header
      width 100%
      height (88/$rem)
      background-color #ffffff
      line-height (88/$rem)
      display flex
      >.title
        font-size (36/$rem)
        margin-left (300/$rem)
        color #333333
      >.coupon
        font-size (30/$rem)
        float right
        margin-left (220/$rem)
        color #B4282D
    .service
      .service_list
        padding (0 30/$rem)
        overflow hidden
        height (70/$rem)
        display flex
        justify-content space-between
        align-items center  
        li
          height (36/$rem)
          display flex
          flex 1
          align-items center
          &:last-of-type
            justify-content flex-end
          &:nth-of-type(2)
            justify-content center
          .circle
            width (10/$rem)
            height (10/$rem)
            background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png')
            background-size 100%
            vertical-align middle
            justify-content center
          .service_title
            font-size (24/$rem)
            color #666666
            margin-left (10/$rem)
    .shopCart_main
      display flex
      flex-direction column
      margin-top (400/$rem)
      display flex
      justify-content center
      align-items center
      .shopCart_img
        width (248/$rem)
        height (248/$rem)
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png')
        background-size 100%
      .shopCart_add
        font-size (28/$rem)
        color #999999
        margin-bottom (50/$rem)
      .shopCart_login
        font-size (30/$rem)
        width (480/$rem)
        height (92/$rem)
        background-color #b4282d
        text-align center
        line-height (92/$rem)
        color #ffffff
</style>