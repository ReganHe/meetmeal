import Mock from 'mockjs'

let homeList = Mock.mock({
	"code":0,
	"data|4":[{
		"id|+1":1,
		"uid|+1":1,
		"distance|1-10.1":1,
		"age|1-80":1,
		"name":"@cname",
		"gender|1":["0","1"],
		"online|1":["0","1"],
		"title|1":["今日早餐","今日午餐","今日晚餐"],
		"minTitle|1":["早餐","午餐","晚餐"],
		"take":"@float(0.5,2,1,1)",
		"countdown":"12:34:43",
		"local":"@province",
		"price|1-100":1,
		"staPrice|1-50":1,
		"time":"@time()",
		"fullTime":"@datetime(MM/dd/yyyy hh:mm-hh:mm)",
		"img":"@image(500x500,@color)",
		"imgList":["@image(500x500,@color)","@image(500x800,@color)","@image(200x500,@color)"],
	}],
	"msg":"success,"
})

let person  = Mock.mock({
	"code":0,
	"data|4":[{
		"uid|+1":1,
		"age|1-80":1,
		"name":"@cname",
		"gender|1":["0","1"],
		"online|1":["0","1"],
		"distance|1-10.1":1,
		"imgList":["@image(500x500,@color)","@image(500x500,@color)","@image(500x500,@color)"],
		"info":[
			{"name":"身高","value|150-200":1},
			{"name":"体重","value|40-80":1},
			{"name":"城市","value":"@province"},
			{"name":"职业","value":"@cword(2,4)"},
			{"name":"抽烟","value|1":["抽烟","不抽烟"]},
			{"name":"喝酒","value":"@cword(2),@cword(2)"},
			{"name":"爱好","value":"@cword(2)，@cword(3)，@cword(2)，@cword(2)"}],
	}],
	"msg":"success,"
})

let order = Mock.mock({
	"code":0,
	"data|4":[{
		"uid|+1":1,
		"distance|1-10.1":1,
		"age|1-80":1,
		"name":"@cname",
		"gender|1":["0","1"],
		"online|1":["0","1"],
		"take":"@float(0.5,2,1,1)",
		"countdown":"12:34:43",
		"local":"@province",
		"price|1-100":1,
		"staPrice|1-50":1, //起拍价
		"curPrice|40-70":1, //当前价
		"myPrice|30-60":1, //我出价
		"time":"@time()",
		"fullTime":"@datetime(MM/dd/yyyy hh:mm-hh:mm)",
		"img":"@image(500x500,@color)",
		"imgList":["@image(500x500,@color)","@image(500x800,@color)","@image(200x500,@color)"],
	}],
	"msg":"success,"
})

let todayList = Mock.mock({
	"code":0,
	"data|4":[{
		"uid|+1":1,
		"distance|1-10.1":1,
		"age|1-80":1,
		"name":"@cname",
		"gender|1":["0","1"],
		"online|1":["0","1"],
		"title|1":["今日早餐","今日午餐","今日晚餐"],
		"minTitle|1":["早餐","午餐","晚餐"],
		"take":"@float(0.5,2,1,1)",
		"countdown":"12:34:43",
		"local":"@province",
		"price|1-100":1,
		"staPrice|1-50":1,
		"time":"@time()",
		"fullTime":"@datetime(MM/dd/yyyy hh:mm-hh:mm)",
		"img":"@image(500x500,@color)",
		"imgList":["@image(500x500,@color)","@image(500x800,@color)","@image(200x500,@color)"],
	}],
	"msg":"success,"
})

let d1 = Mock.mock(RegExp(process.env.VUE_APP_API_URL + '/rest/V1/product-list' + ".*"),"get", homeList)
let d2 = Mock.mock(RegExp(process.env.VUE_APP_API_URL + '/rest/person' + ".*"),"get", person)
let d3 = Mock.mock(RegExp(process.env.VUE_APP_API_URL + '/rest/order' + ".*"),"get", order)
let d4 = Mock.mock(RegExp(process.env.VUE_APP_API_URL + '/rest/today' + ".*"),"get", todayList)

export default {d1,d2,d3,d4}