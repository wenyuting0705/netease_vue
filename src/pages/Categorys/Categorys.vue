<!--  -->
<template>
  <div class="categorys">
    <div class="cate_search">
      <Search/>
    </div>
    <MenuList/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Search from '../../components/Search/Search'
import MenuList from './MenuList/MenuList'

export default {
  data () {
    return {
    };
  },
  components: {
    Search,
    MenuList,
  },

  computed: {},

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
  @import '../../common/stylus/mixins.styl';
    .categorys
      position relative
      .cate_search
        bottom-border-1px(#e4e4e4)
        height (88/$rem)
        padding (15/$rem 30/$rem)
        background-color #ffffff
        box-sizing border-box
        position fixed
        top 0
        left 0
        z-index 99
        width 100%
</style>