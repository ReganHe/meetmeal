//转换年份为90后80后
function convertYear(year){
	let str= year.substring(2,3)
	return str + "0后"
}

export{convertYear}