<!--  -->
<template>
  <div class="menu_detail">
    <div>
      <div class="menu_img" :style="{backgroundImage:'url('+menuImg+')'}"></div>
      <ul class="menu_list">
        <li v-for="(menuDetail,index) in menuDetails" :key="index">
          <img :src="menuDetail.wapBannerUrl"/>
          <div class="name">{{menuDetail.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
    };
  },
  props:{
    menuDetails:Array,
    menuImg:String
  },
  mounted(){
    new BScroll('.menu_detail',{
          click:true,
        })
  },
  components: {},

  computed: {
    ...mapState(['categoryL1List'])
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
  @import '../../../common/stylus/mixins.styl';
  .menu_detail
    width (527/$rem)
    height (1200/$rem)
    margin-left (162/$rem)
    padding (30/$rem)
    background-color #ffffff
    border-left (1/$rem) solid #e4e4e4
    .menu_img
      width 100%
      height (192/$rem)
      margin-bottom (32/$rem)
      background-size 100%
    .menu_list
      overflow hidden
      li 
        width (144/$rem)
        height (216/$rem)
        margin-right (34/$rem)
        float left 
        display flex
        flex-direction column
        &:nth-of-type(3n)
          margin-right 0
        img 
          width (144/$rem)  
        .name
          font-size (24/$rem)
          color #333333
          text-align center      
</style>