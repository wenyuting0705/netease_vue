<!--  -->
<template>
  <div class="footer_nav"> 
      <div :class="{on:'/home'===$route.path}" @click="goto('/home')">
        <span class="icon home"></span>
        <span>首页</span>
      </div>
      <!-- <router-link class="nav_item" to="/home">
        <span class="icon home"></span>
        <span>首页</span>
      </router-link> -->
      <div :class="{on:'/shiwu'===$route.path}" @click="goto('/shiwu')">
        <span class="icon shiwu"></span>
        <span>识物</span>
      </div>
      <div :class="{on:'/categorys'===$route.path}" @click="goto('/categorys')">
        <span class="icon categorys"></span>
        <span>分类</span>
      </div>
      <div :class="{on:'/shopcart'===$route.path}" @click="goto('/shopcart')">
        <span class="icon shopcart"></span>
        <span>购物车</span>
      </div>
     <div :class="{on:'/profile'===$route.path}" @click="goto('/profile')">
        <span class="icon profile"></span>
        <span>个人</span>
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

  methods: {
    goto(path){
      this.$router.push(path)
    }
  }
}

</script>
<style lang='stylus' rel="stylesheet/stylus" scope>
@import '../../common/stylus/mixins.styl';
  .footer_nav
    position fixed
    left 0
    bottom 0
    width 100%
    height (98/$rem)
    display flex
    align-items center     
    background-color #ffffff 
    z-index 99
    div
      flex 1
      display flex
      flex-direction column
      align-items center
      font-size (2/$rem)
      color #666
      .icon
        width (40/$rem)
        height (40/$rem)
        background-image url('./img/nav.png')
        background-size 100%
        background-repeat no-repeat
        margin (10/$rem)
      .home
        background-position 0 (-250/$rem)
      .shiwu
        background-position 0 (-350/$rem)
      .categorys
        background-position 0 (-150/$rem)
      .shopcart
        background-position 0 (-50/$rem)
      .profile
        background-position 0 (-450/$rem)
      &.on
        color #b4282d
        .home
          background-position 0 (-200/$rem)
        .shiwu
          background-position 0 (-300/$rem)
        .categorys
          background-position 0 (-100/$rem)
        .shopcart
          background-position 0 0
        .profile
          background-position 0 (-400/$rem)
       
</style>