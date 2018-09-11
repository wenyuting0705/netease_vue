<!--  -->
<template>
  <div class="profile">
    <HeaderCom/>
    <div class="profile_login" v-show="isShowProfile">
      <div class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
      </div>
      <div class="btn_wrap">
        <!-- 手机号登录 -->
        <div class="btn phone_login" @click="handleLogin">
          <span class="phone_icon"></span>
          <span class="phone_login_text">手机号码登录</span>
        </div>
        <!-- 邮箱登录 -->
        <div class="btn email_login">
          <span class="email_icon"></span>
          <span class="email_login_text">邮箱帐号登录</span>
        </div>
        <!-- 手机号注册 -->
        <div class="phone_regist">
          <span class="goRegist">手机号快捷注册</span>
          <span class="arrow"></span>
        </div>
      </div>
      <!-- 选择登录方式 -->
      <div class="login_selector">
        <div class="login_item">
          <span><i class="iconfont icon-changyonglogo28"></i></span>微信
        </div>
        <div class="login_item">
          <span><i class="iconfont icon-web-icon-"></i></span>QQ
        </div>
        <div class="login_item">
          <span><i class="iconfont icon-weibo"></i></span>微博
        </div>
      </div>
    </div>
    <!-- <MessageLogin v-show="isShowMessageLogin"/>
    <EmailLogin v-show="isShowEmailLogin"/> -->
  </div>
</template>

<script>
import HeaderCom from '../../components/HeaderCom/HeaderCom'
// import MessageLogin from '../Login/MessageLogin'
// import EmailLogin from '../Login/EmailLogin'
export default {
  data () {
    return {
      isShowMessageLogin:false,
      isShowEmailLogin:false,
      isShowProfile:true
    };
  },

  components: {
    HeaderCom,
    // MessageLogin,
    // EmailLogin
  },

  computed: {},

  methods: {
    handleLogin(){
      this.isShowMessageLogin=true
      this.isShowProfile = false
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../common/stylus/mixins.styl';
  .profile
    .profile_login
      width 100%
      height (700/$rem)
      .logo
        padding (160/$rem 0)
        height (90/$rem)
        text-align center
        img
          height 100%
      .btn_wrap
        width (670/$rem)
        height (290/$rem)
        padding (0 40/$rem)
        margin-bottom (205/$rem)
        .btn
          width (666/$rem)
          height (90/$rem)
          margin-bottom (32/$rem)
          border: (1/$rem) solid #b4282d;
          font-size (28/$rem)
          border-radius (4/$rem)
          vertical-align middle
          text-align center
          line-height (90/$rem)
          >span:first-of-type
            display inline-block
            width (40/$rem)
            height (40/$rem)
            margin-right (16/$rem)
            background-image url('./img/profile.png')
            background-size 100%
            vertical-align middle
        .phone_login
          background-color #b4282d
          color #ffffff
          .phone_icon
            background-position (0 -50/$rem)
        .email_login
          color  #b4282d
        .phone_regist
          color #333333
          width 100%
          font-size (28/$rem)
          text-align center
          .arrow
            display inline-block
            width (28/$rem)
            height (28/$rem)
            background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png')
            background-size 100%
            vertical-align middle
      .login_selector
        position absolute
        left 0
        bottom (80/$rem)
        width 100%
        height (40/$rem)
        text-align center 
        line-height (40/$rem)
        display flex
        justify-content center
        .login_item
          padding (0 40/$rem)
          font-size (28/$rem)
          color #7F7F7F
          border-right 1px solid #979797
          // width (100/$rem)
          &:last-of-type
            border-right 0
          span
            display inline-block
            width (40/$rem)
            height (40/$rem)
            background-image url('./img/profile.png')
            background-size 100%
            background-position (0 -150/$rem)
            vertical-align middle
            margin-right (5/$rem)
            .iconfont
              font-size (38/$rem)
    
</style>