<!--  -->
<template>
  <div class="recommends">
    <div class="rcmd_container">
      <header>严选甄品</header>
      <div class="mainPosItem">
        <div class="img_container" :style="{backgroundImage:'url('+zhenOne.picUrl+')'}">
          <div class="topic_tag">{{zhenOne.typeName}}</div>
        </div>
        <div class="topicInfo">
          <div class="info_title">
            <span class="title">{{zhenOne.title}}</span>
            <!-- <span>{{zhenOne.priceInfo}}元起</span> -->
          </div>
          <div class="info_desc">
            {{zhenOne.subtitle}}
          </div>
        </div>
      </div>
      <div class="minorPosItem">
        <div class="topicInfo">
          <!-- <div class="author_container">
            <div class="avatar" :style="{backgroundImage:'url('+zhenTwo.avatar+')'}"></div>
            <div class="nickName">{{zhenTwo.nickname}}</div>
          </div> -->
          <div class="title">{{zhenTwo.title}}</div>
          <div class="subTitle">{{zhenTwo.subtitle}}</div>
        </div>
        <div class="minorPic" :style="{backgroundImage:'url('+zhenTwo.picUrl+')'}">
          <div class="topic_tag">{{zhenTwo.typeName}}</div>
        </div>
      </div>
      <div class="minorPosItem">
        <div class="topicInfo">
          <!-- <div class="author_container">
            <div class="avatar" :style="{backgroundImage:'url('+zhenThree.avatar+')'}"></div>
            <div class="nickName">{{zhenThree.nickname}}</div>
          </div> -->
          <div class="title">{{zhenThree.title}}</div>
          <div class="subTitle">{{zhenThree.subtitle}}</div>
        </div>
        <div class="minorPic" :style="{backgroundImage:'url('+zhenThree.picUrl+')'}">
          <div class="topic_tag">{{zhenThree.typeName}}</div>
        </div>
      </div>
    </div>
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
    this.$store.dispatch('getZhenOne')
    this.$store.dispatch('getZhenTwo')
    this.$store.dispatch('getZhenThree')
  },
  components: {},

  computed: {
    ...mapState(['zhenOne','zhenTwo','zhenThree'])
  },

  methods: {}
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
@import '../../../common/stylus/mixins.styl';
  .recommends
    width (690/$rem)
    padding (0 30/$rem 10/$rem)
    background-color #ffffff
    margin-bottom (20/$rem)
    .rcmd_container
      width 100%
      >header
        width 100%
        height (120/$rem)
        text-align center 
        line-height (120/$rem)
        font-size (32/$rem)
      .mainPosItem
        width 100%
        height (572/$rem)
        margin-bottom (30/$rem)
        border (1/$rem) solid #d9d9d9
        border-radius (8/$rem)
        color #333333
        .img_container
          width 100%
          height (386/$rem)
          border-radius (8/$rem 8/$rem 0 0)
          background-size 100%
          position relative
          .topic_tag
            width (130/$rem)
            height (36/$rem)
            position absolute
            top (20/$rem)
            left (20/$rem)
            box-sizing border-box
            padding (0 16/$rem)
            border (1/$rem) solid #d9d9d9
            background-color rgba(255,255,255,.9)
            font-size (24/$rem)
            line-height (36/$rem)
            text-align center
            border-radius (36/$rem)
        .topicInfo
          width (648/$rem)
          height (95/$rem)
          padding (24/$rem 20/$rem 67/$rem)
          .info_title
            height (43/$rem)
            margin-bottom (19/$rem)
            display flex
            justify-content space-between
            align-items center
            font-size (34/$rem)
            >.title
              display inline-block
              width (350/$rem)
              margin-right (30/$rem)
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
          .info_desc
            height (33/$rem)
            color #7f7f7f
            font-size (24/$rem)
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
      .minorPosItem
        width (688/$rem)
        height (272/$rem)
        border (1/$rem) solid #d9d9d9
        border-radius (8/$rem)
        margin-bottom (30/$rem)
        color #333333
        display flex
        &:first-of-type
          >.minorPic
            width (224/$rem)
            height (223/$rem)
            background-size 100%
        >.topicInfo
          width (358/$rem)
          padding (0 30/$rem 0 20/$rem)
          display flex
          flex-direction column
          justify-content center
          align-items center
          .author_container
            width 100%
            height (48/$rem)
            margin-bottom (25/$rem)
            display flex
            .avatar
              width (46/$rem)
              height (46/$rem)
              margin-right (4/$rem)
              background-size 100%
              vertical-align middle
              border-radius:50%
            .nickName
              width (160/$rem)
              height (46/$rem)
              font-size (24/$rem)
              color #333333
              line-height (46/$rem)
          >.title
            width 100% 
            height (38/$rem)
            margin-bottom (14/$rem) 
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            font-size (32/$rem)
          >.subTitle
            width 100% 
            height (67/$rem) 
            color #7f7f7f
            font-size (24/$rem)
            line-height 1.5
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
        .minorPic
          width (280/$rem)
          height (272/$rem)
          border-radius (8/$rem)
          background-size 100%
          position relative
          .topic_tag
            height (36/$rem)
            position absolute
            top (20/$rem)
            left (20/$rem)
            box-sizing border-box
            padding (0 16/$rem)
            border (1/$rem) solid #d9d9d9
            background-color rgba(255,255,255,.9)
            font-size (24/$rem)
            line-height (36/$rem)
            text-align center
            border-radius (36/$rem)
</style>