import axios from 'axios'
import config from './../config'
import qs from 'querystring'

let generalAxios = axios.create({
  baseURL: config.baseUrl,
  // timeout: 1000,

  transformRequest: [function (data) {
    // 全局添加 userId 参数（post请求）
    // return qs.stringify(Object.assign(data, {userId: ''}))
    return qs.stringify(data)
  }],

})
let handleAxios = (instance) => {
  // 添加请求拦截器
  instance.interceptors.request.use(config => {
    // console.log(config,999999999999)
    // 在发送请求之前做些什么
    // config.headers['Authorization'] = JSON.parse(localStorage.getItem('access_token'))
    return config;
  }, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  })
  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  })

}
handleAxios(generalAxios)
export {
  generalAxios,
}