let baseUrl_config={
	development:"http://127.0.0.1",
	uat:"http://192.168.11.75",
	production:"http://192.167.1.19",
}
let port={
	development:8000,
	uat:8118,
	production:8888,
}
function baseUrlsplitJoint(){
	 for(let key in baseUrl_config){
	 	baseUrl_config[key]+=":"
	 	baseUrl_config[key]+=port[key]
	 }
}
baseUrlsplitJoint()
let baseUrl =baseUrl_config[process.env.NODE_ENV]
export {
	baseUrl
}