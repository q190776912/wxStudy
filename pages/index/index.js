//index.js
import heroList from '../../data/lol_duowan.js'
//获取应用实例
const app = getApp()

Page({
  data: {
    heroList
  },
  toDetial(event) {
    wx.navigateTo({
      url: `/pages/details/details?id=${event.currentTarget.dataset.id}`,
    })
  }
})
