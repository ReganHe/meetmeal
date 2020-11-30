import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login.vue'
import ChPass from '../pages/ChPass.vue'
import Pay from '../pages/Pay.vue'

Vue.use(Router)

const router = new Router({
	mode:'history',
	routes:[
		{
			path: '/',
			component: Login,
			meta: {
				requireAuth: false,
				title: 'login'
			}
		},
		{
			path: '/ch-pass',
			name: 'ch-pass'
			component: ChPass,
			meta: {
				requireAuth: false,
				title: 'ch-pass'
			}
		},
		{
			path: '/pay',
			component: Pay,
			meta: {
				requireAuth: false,
				title: 'pay'
			}
		}
	]
})

export default router