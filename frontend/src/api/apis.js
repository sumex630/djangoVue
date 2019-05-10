export const api = {
  getImg(data) {
    return axios({
      url: "/plus",
      method: "post",
      data: data
    })
  },
}