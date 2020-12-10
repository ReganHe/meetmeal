import Mock from 'mockjs'


export default Mock.mock(
RegExp(process.env.VUE_APP_API_URL + '/rest/V1/product-list' + ".*"),
"get",{
	"code":0,
	"data|4":[{
		"id|+1":1,
		"distance|1-10.1":1,
		"age|1-80":1,
		"name":"@cname",
		"gender|1":["0","1"],
		"online|1":["0","1"],
		"title|1":["今日早餐","今日午餐","今日晚餐"],
		"take":"@float(0.5,2,1,1)",
		"countdown":"12:34:43",
		"local":"@province",
		"price|1-100":1,
		"time":"@time()",
		"img":"@image(500x500,@color)",
		"imgList":["@image(500x500,@color)","@image(500x500,@color)","@image(500x500,@color)"],
	}],
	"msg":"success,"
})