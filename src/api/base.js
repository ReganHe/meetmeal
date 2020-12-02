import axios from 'axios';

axios.defaults.withCredentials = true

const serve = axios.create({
	// http://www.meetmeal.us/rest/V1/customers
	baseURL: process.env.VUE_APP_API_URL,
})

export default serve