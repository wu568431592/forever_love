import axios from 'axios'
import { Toast } from 'antd-mobile'

export function fetch (options) {
  return new Promise((resolve, reject) => {
    let instance = axios.create({
      baseURL: 'http://localhost:8888',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
    })

    instance.interceptors.request.use(function (response) {
      // 请求拦截
      Toast.loading('加载中...',0)
      return response
    }, function (error) {
      console.log('error 请求拦截 : ', error)
      return Promise.reject(error)
    })
    instance(options)
      .then(response => {
        const res = response.data
        if (res.code !== 200) {
          reject(res)
        }
        Toast.hide()
        resolve(res)
      })
      .catch(error => {
        Toast.hide()
        console.log('error', error) // for debug
        reject(error)
    })
  })
}
