import axios from 'axios';

function getMine(){
	return axios({
		method: "get",
		url: '/rest/mine',
	})
}


export{getMine}