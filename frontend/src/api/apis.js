import { generalAxios } from './axios.js'

export const api = {
  getImg(data) {
    return generalAxios({
      url: "/plus",
      method: "post",
      data: data
    })
  },
}