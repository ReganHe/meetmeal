import axios from 'axios';

function productListApi(){
	axios({
		method: 'post',
		url: '/rest/V1/product-list'
	}).then(resp => {
		console.log(resp)
	})
}

export  {productListApi}