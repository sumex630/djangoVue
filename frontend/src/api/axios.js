import axios from 'axios'
import {
  baseURL
} from '@/config'

class HttpRequest {
  // 每一个类的默认方法
  constructor(baseUrl = config.baseUrl) {
    this.baseUrl = baseURL
    this.queue = {}
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      timeout: 1000,
      headers: {
        // 
      }
    }
    return config
  }

  // 创建拦截器
  interceptors(instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      // 在发送请求之前做些什么
      if (!Object.keys(this.queue.length)) {
        // 添加 全局的loading
        // Spin.show()
      }
      this.queue[url] = true
      return config;
    }, error => {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      delete this.queue[url]
      return response;
    }, function (error) {
      // 对响应错误做点什么
      delete this.queue[url]
      return Promise.reject(error);
    });
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)

    return instance(options)
  }

}

export default HttpRequest
