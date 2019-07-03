// 从routers中分离 上/侧导航
export const getMainmenu = (routes) => {

}

// 深拷贝
export const deepCopy = (obj) => {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepCopy(obj[key]); //递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

// 处理路由
// export const handleRouter = (routers, )

