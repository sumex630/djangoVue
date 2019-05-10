const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'
const PUBLICPATH = process.env.NODE_ENV === 'production' ? './' : '/'


module.exports = {
  // baseUrl: BASE_URL,
  // publicPath: PUBLICPATH,
  devServer: {
    port: 19050
    // 代理
    // proxy: 'http://localhost:2222'
  },
  outputDir: 'dist/' + process.env.NODE_ENV,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },

  // 打包时不生成 .map文件、
  // produceSourceMap: false
}