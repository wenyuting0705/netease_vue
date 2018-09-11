<!--  -->
<template>
  <div class="cate_container">
    <div class="menu_container">
      <ul class="menu_wrapper">
        <li v-for="(categoryL1,index) in categoryL1List" :key="index" @click="handleClass" 
            :class="{active:currentIndex===index}">
          {{categoryL1.name}}
        </li>
      </ul>
    </div>
    <MenuDetailList :menuDetails="menuDetails" :menuImg='menuImg'/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import MenuDetailList from '../MenuDetailList/MenuDetailList'
export default {
  data () {
    return {
     currentIndex:0,
     menuDetails:[],
     menuImg:''
    };
  },
  mounted(){
    this.$store.dispatch('getCategoryL1List',()=>{
      this.$nextTick(()=>{
        new BScroll('.menu_container',{
          click:true,
        })
        this._initMenuDetails()
      })
    })
   
  },
  components: {
     MenuDetailList
  },

  computed: {
    ...mapState(['categoryL1List']),
  },

  methods: {
    handleClass(event){
      const lis = document.querySelectorAll('.menu_wrapper li')
      for(let i = 0;i<lis.length;i++){
        lis[i].index = i
        lis[i].className = ''
      }
      const currentLi = event.target
      this.currentIndex=currentLi.index
      lis[this.currentIndex].className = 'active'
      this._initMenuDetails()
    },
    _initMenuDetails(){
      this.menuDetails = this.categoryL1List[this.currentIndex].subCateList
      this.menuImg = this.categoryL1List[this.currentIndex].wapBannerUrl
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
  @import '../../../common/stylus/mixins.styl';
.cate_container
  margin (90/$rem 0 100/$rem 0)
  .menu_container
    position fixed
    left 0
    top (88/$rem)
    width (162/$rem)
    height (1280/$rem)
    overflow hidden
    background-color #ffffff
    .menu_wrapper
      padding-top (40/$rem)
      padding-bottom (138/$rem)
      li
        height (50/$rem)
        font-size (28/$rem)
        color #333333
        text-align center
        position relative
        line-height (50/$rem)
        margin-top (40/$rem)
        &:first-of-type
          margin-top 0
        &.active
          color #ab2b2b
          font-size (28/$rem)
          &::before
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: .08rem;
            background-color: #ab2b2b;
</style>