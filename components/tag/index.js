// components/tag/index.js
Component({
  /**
   * Component properties
   */
  options: {
    multipleSlots: true //使 slot 生效
  },

  externalClasses: [
    'tag-class'
  ],

  properties: {
    text: String
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    onTap (event) {
      this.triggerEvent('tapping', {
        text: this.properties.text
      })
    }
  }
})
