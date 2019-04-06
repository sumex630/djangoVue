import axios from 'axios'
import config from './../config'
import qs from 'querystring'

let generalAxios = axios.create({
  baseURL: config.baseUrl,
  timeout: 1000,
  headers: {},
  transformRequest: [function (data) {
    return qs.stringify(data);
  }],
})
// 添加请求拦截器
generalAxios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
generalAxios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export {
  generalAxios
}