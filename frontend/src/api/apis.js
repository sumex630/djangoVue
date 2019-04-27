import { HttpRequest } from './axios.js'

export const api = {
  resHandle(res, target, failType) {
    return new Promise((resolve, reject) => {
      let statusF = res.data.ret == 0
      if (failType) {
        target.$message({
          message: res.data.message,
          type: statusF ? 'success' : failType
        });
      }
      if (statusF) {
        resolve(statusF);
      } else {
        reject(statusF);
      }
    })
  },
  getImg(data) {
    return HttpRequest({
      url: "/test_count",
      method: "post",
      data: data
    })
  },
}