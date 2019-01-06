// components/navi/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * Component initial data
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png',
  },

  /**
   * Component methods
   */
  methods: {
    onLeft (event) {
      if (!this.properties.latest) {
        this.triggerEvent('left', {}, {})
      }
    },
    onRight (event) {
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
