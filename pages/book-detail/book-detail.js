// pages/book-detail/book-detail.js
import {
  BookModel
} from '../../models/book.js'
const bookModel = new BookModel()
Page({

  /**
   * Page initial data
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const bid = options.bid
    const detail = bookModel.getDetail(bid)
    const comments = bookModel.getComments(bid)
    const likeStatus = bookModel.getLikeStatus(bid)
    detail.then(res => {
      this.setData({
        book: res
      })
    })

    comments.then(res => {
      this.setData({
        comments: res
      })
    })

    likeStatus.then(res => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums
      })
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