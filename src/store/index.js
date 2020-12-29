import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
		mainPage:"home",
		//首页，今天、明天、明后天、日期类型		
		dayType:"1",
		pageType:"home",
		finType: "true"
    },
	mutations: {
		changePage(state,newVal) {
			state.pageType = newVal
		},
		changeDay(state,newVal) {
			state.dayType = newVal
		},
		changeStyle(state,newVal) {
			state.finType = newVal
		}
	}
})

export default store