import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(Router)

const files = require.context('../pages', false, /\.vue$/);
let pages = [],rules = [];

files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
});

Object.keys(pages).forEach(item => {
  rules.push({
    path: '/'+item.replace(/[A-Z]/g, function(word){return '-'+word;}).replace('-', '')
		.toLowerCase(),
    component: pages[item],
	meta: {
		requireAuth: false,
		title: item
	}
  })
});

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
		...rules,
	]
})

export default router