import Mock from 'mockjs'

export default Mock.mock( process.env.VUE_APP_API_URL + '/rest/V1/product-list', {
	'name': 123
})