import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/login.vue'
import ChPass from '../pages/ChPass.vue'
import Pay from '../pages/Pay.vue'
import Register from '../pages/Register.vue'

Vue.use(Router)

const router = new Router({
	mode:'history',
	routes:[
		{
			path: '/',
			component: Home,
			meta: {
				requireAuth: false,
				title: 'home'
			}
		},
		{
			path: '/ch-pass',
			name: 'ch-pass',
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
		},
		{
			path: '/change-pass',
			component: ChPass,
			meta: {
				requireAuth: false,
				title: 'pay'
			}
		},
		{
			path: '/reg',
			component: Register,
			meta: {
				requireAuth: false,
				title: 'pay'
			}
		}
	]
})

export default router