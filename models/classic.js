import {HTTP} from '../util/http.js'
let http = new HTTP()
export class ClassicModel extends HTTP{
  getLatest(sCallback) {
    http.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}