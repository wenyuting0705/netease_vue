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

import {
  reqHomeData,
  reqCategorysData,
  reqShiwuData
} from '../api'
export default {
  async getPolicyDescList({commit}){
    const result = await reqHomeData()
    const {policyDescList} = result.data
    commit(RECEIVE_POLICY_DESC_LIST,{policyDescList})
  },

  async getTagList({commit}){
    const result = await reqHomeData()
    const {tagList} = result.data
    commit(RECEIVE_TAGLIST,{tagList})
    console.log(result)
  },
  async getNewItem({commit},cb){
    const result = await reqHomeData()
    const {newItemList} = result.data
    commit(RECEIVE_NEW_ITEM,{newItemList})
    cb && cb()
  },
  async getPopularItemList({commit},cb){
    const result = await reqHomeData()
    const {popularItemList} = result.data
    commit(RECEIVE_POPULARITEMLIST,{popularItemList})
    cb && cb()
  },
  async getTopicList({commit},cb){
    const result = await reqHomeData()
    const {topicList} = result.data
    commit(RECEIVE_TOPLIST,{topicList})
    cb && cb()
  },
  async getCateList({commit},cb){
    const result = await reqHomeData()
    const {cateList} = result.data
    commit(RECEIVE_CATELIST,{cateList})
    cb && cb()
  },
  async getNewUserGift({commit},cb){
    const result = await reqHomeData()
    const {newUserGift} = result.data
    commit(RECEIVE_NEWUSERGIFT,{newUserGift})
    cb && cb()
  },
  async getCategoryL1List({commit},cb){
    const result = await reqCategorysData()
    const {categoryL1List} = result.data
    commit(RECEIVE_CATEGORYL1LIST,{categoryL1List})
    cb && cb()
  },
  async getBanner({commit},cb){
    const result = await reqShiwuData()
    const {banner} = result.data
    commit(RECEIVE_BANNER,{banner})
    cb && cb()
  },
  async getColumn({commit},cb){
    const result = await reqShiwuData()
    const {column} = result.data
    commit(RECEIVE_COLUMN,{column})
    cb && cb()
  },
  async getRecommendOne({commit}){
    const result = await reqShiwuData()
    const {recommendOne} = result.data
    commit(RECEIVE_RECOMMENDONE,{recommendOne})
  },
  async getRecommendTwo({commit}){
    const result = await reqShiwuData()
    const {recommendTwo} = result.data
    commit(RECEIVE_RECOMMENDTWO,{recommendTwo})
  },
  async getRecommendThree({commit}){
    const result = await reqShiwuData()
    const {recommendThree} = result.data
    commit(RECEIVE_RECOMMENDTHREE,{recommendThree})
  },
  async getTenfifteen({commit}){
    const result = await reqShiwuData()
    const {tenfifteen} = result.data
    commit(RECEIVE_TENFIFTEEN,{tenfifteen})
  },
  async getZhenOne({commit}){
    const result = await reqShiwuData()
    const {zhenOne} = result.data
    commit(RECEIVE_ZHENONE,{zhenOne})
  },
  async getZhenTwo({commit}){
    const result = await reqShiwuData()
    const {zhenTwo} = result.data
    commit(RECEIVE_ZHENTWO,{zhenTwo})
  },
  async getZhenThree({commit}){
    const result = await reqShiwuData()
    const {zhenThree} = result.data
    commit(RECEIVE_ZHENTHREE,{zhenThree})
  },
  async getYxLook({commit},cb){
    const result = await reqShiwuData()
    const {yxLook} = result.data
    commit(RECEIVE_YXLOOK,{yxLook})
    cb && cb()
  },
  async getMore({commit},cb){
    const result = await reqShiwuData()
    const {findMore} = result.data
    commit(RECEIVE_FINDMORE,{findMore})
    cb && cb()
  },
}