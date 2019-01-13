// pages/book/book.js
import {
  BookModel
} from '../../models/book.js'

import {random} from '../../util/common.js'

const bookModel = new BookModel()

Page({

  /**
   * Page initial data
   */
  data: {
    books: [],
    searching: false,
    more: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    bookModel.getHotList()
      .then(res => {
        this.setData({
          books: res
        })
      })
  },

  onSearching (event) {
    this.setData({
      searching: true
    })
  },

  onCancel (event) {
    this.setData({
      searching: false
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    this.setData({
      more: random(16)
    })
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})