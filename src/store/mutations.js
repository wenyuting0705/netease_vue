import {
  RECEIVE_POLICY_DESC_LIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEW_ITEM,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_TOPLIST,
  RECEIVE_CATELIST,
  RECEIVE_CATEGORYL1LIST,
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMENDONE,
  RECEIVE_RECOMMENDTWO,
  RECEIVE_RECOMMENDTHREE,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHENTWO,
  RECEIVE_ZHENONE,
  RECEIVE_ZHENTHREE,
  RECEIVE_YXLOOK,
  RECEIVE_FINDMORE,
  RECEIVE_NEWUSERGIFT
} from './mutations-types'

export default {
  [RECEIVE_POLICY_DESC_LIST](state,{policyDescList}){
    state.policyDescList = policyDescList
  },
  [RECEIVE_TAGLIST](state,{tagList}){
    state.tagList = tagList
  },
  [RECEIVE_NEW_ITEM](state,{newItemList}){
    state.newItemList = newItemList
  },
  [RECEIVE_NEWUSERGIFT](state,{newUserGift}){
    state.newUserGift = newUserGift
  },
  [RECEIVE_POPULARITEMLIST](state,{popularItemList}){
    state.popularItemList = popularItemList
  },
  [RECEIVE_TOPLIST](state,{topicList}){
    state.topicList = topicList
  },
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList = cateList
  },
  [RECEIVE_CATEGORYL1LIST](state,{categoryL1List}){
    state.categoryL1List = categoryL1List
  },
  [RECEIVE_BANNER](state,{banner}){
    state.banner = banner
  },
  [RECEIVE_COLUMN](state,{column}){
    state.column = column
  },
  [RECEIVE_RECOMMENDONE](state,{recommendOne}){
    state.recommendOne = recommendOne
  },
  [RECEIVE_RECOMMENDTWO](state,{recommendTwo}){
    state.recommendTwo = recommendTwo
  },
  [RECEIVE_RECOMMENDTHREE](state,{recommendThree}){
    state.recommendThree = recommendThree
  },
  [RECEIVE_TENFIFTEEN](state,{tenfifteen}){
    state.tenfifteen = tenfifteen
  },
  [RECEIVE_ZHENONE](state,{zhenOne}){
    state.zhenOne = zhenOne
  },
  [RECEIVE_ZHENTWO](state,{zhenTwo}){
    state.zhenTwo = zhenTwo
  },
  [RECEIVE_ZHENTHREE](state,{zhenThree}){
    state.zhenThree = zhenThree
  },
  [RECEIVE_YXLOOK](state,{yxLook}){
    state.yxLook = yxLook
  },
  [RECEIVE_FINDMORE](state,{findMore}){
    state.findMore = findMore
  }
}