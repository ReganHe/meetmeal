import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login.vue'

Vue.use(Router)

const router = new Router({
	mode:'history',
	routes:[
		{
			path: '/login',
			component: Login,
			meta: {
				requireAuth: false,
				title: 'login'
			}
		}
	]
})

export default router