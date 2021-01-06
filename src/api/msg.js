import axios from 'axios';

function getMsgList(){
	return axios({
		method: "get",
		url: '/rest/msgList',
	})
}

function getChatList(){
	return axios({
		method: "get",
		url: '/rest/chatList',
	})
}

export{getMsgList,getChatList}