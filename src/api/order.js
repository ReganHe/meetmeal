import axios from 'axios';

function getPublish(){
	return axios({
		method: 'get',
		url: '/rest/publish',
		// params: {
		// }
	})
}

function getPart(){
	return axios({
		method: 'get',
		url: '/rest/partPerson',
		// params: {
		// }
	})
}

function getToMeet(){
	return axios({
		method: 'get',
		url: '/rest/toMeet',
		// params: {
		// }
	})
}

function getPartFin(){
	return axios({
		method: 'get',
		url: '/rest/partFinOrder',
		// params: {
		// }
	})
}



export  {getPublish,getPart,getToMeet,getPartFin}