let baseUrl_config = {
  development: "http://192.168.11.231",
  production: "http://192.168.11.97",
}
let port = {
  development: 19999,
  production: 8089,
}
let needPort = {
  development: true,
  production: false
}
let path = {
  development: '',
  production: '/api/cerebral-infarction',
}

function baseUrlsplitJoint() {
  for (let key in baseUrl_config) {
    if (needPort[key]) {
      baseUrl_config[key] += ":"
      baseUrl_config[key] += port[key]
    }
    baseUrl_config[key] += path[key]
  }
}

baseUrlsplitJoint()

// 获取 当前环境 baseUrl_config中的值
let env = process.env.NODE_ENV
let baseUrl = baseUrl_config[env]
export {
  baseUrl,
}
