<!--  -->
<template>
  <div class="messageLogin">
    <input type="tel" maxlength="11" placeholder="请输入手机号" v-model="phone" @blur="showAlert"/><br/>
    <input type="tel" maxlength="6" placeholder="请输入短信验证码" v-model="code" @blur="showAlert"/><br/>
    <input type="text" placeholder="请输入邮箱" v-model="email" @blur="showAlert"/><br/>
    <input type="password" placeholder="密码" v-model="pwd" @blur="showAlert"/><br/>
    <button>登录</button>
    <button>其他登录方式</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone:'',
      code:'',
      email:'',
      pwd:''
    };
  },

  components: {},

  computed: {
    isRightPhone(){
      return /^1\d{10}$/.test(this.phone)
    },
    isRightCode(){
      return /^\d{6}$/.test(this.code)
    },
    isRightEmail(){
      return /^\w{5,15}@\w{2,8}\.com$/.test(this.email)
    },
    isRightPwd(){
      return /^\w{6,18}$/.test(this.pwd)
    }
  },

  methods: {
    showAlert(){
      if(!this.isRightPhone){
        console.log('手机号格式错误')
      }else if(!this.isRightCode){
        console.log('验证码格式错误')
      }else if(!this.isRightEmail){
        console.log('邮箱格式错误')
      }else if(!this.pwd){
        console.log('密码格式错误')
      }else{
        console.log('right')
      }
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../common/stylus/mixins.styl';
  .messageLogin
    margin-top (200/$rem)
    font-size (40/$rem)
    input 
      margin-bottom (40/$rem)
      height (50/$rem)
</style>