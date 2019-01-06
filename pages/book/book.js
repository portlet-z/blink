// pages/book/book.js
import {
  BookModel
} from '../../models/book.js'

const bookModel = new BookModel()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // const hotList = bookModel.getHotList()
    // hotList.then(res => {
    //   console.log(res)
    //   bookModel.getMyBookCount().then(res => {
    //     console.log(res)
    //   })
    // })
    bookModel.getHotList()
      .then(res => {
        console.log(res)
        return bookModel.getMyBookCount()
      })
      .then(res => {
        console.log(res)
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

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})