import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
		//首页，今天、明天、明后天、日期类型		
		dayType:"1",
		//底边栏切换页面的状态
		pageType:"home",
		selectPage:"home",
		//是否是已结束页面
		finType: "true",
		//订单页，切换状态
		orderType:"true",
		odayType:"1",
		joinType: "1",
		publishType: "1",
		//消息数量
		msgNum:2,
		orderNum:3,
    },
	mutations: {
		changePage(state,newVal) {
			state.pageType = newVal
		},
		changeSelect(state,newVal) {
			state.selectPage = newVal
		},
		changeDay(state,newVal) {
			state.dayType = newVal
		},
		changeStyle(state,newVal) {
			state.finType = newVal
		},
		changeOrder(state,newVal) {
			state.orderType = newVal
		},
		changeOrderDay(state,newVal) {
			state.odayType = newVal
		},
		//参拍中 待见面 已结束 状态
		changejoin(state,newVal) {
			state.joinType = newVal
		},
		//发布中 待见面 见面中 已结束 状态
		changepublish(state,newVal) {
			state.publishType = newVal
		},
		changeMsgNum(state,newVal) {
			state.msgNum = newVal
		},
		changeOrderNum(state,newVal) {
			state.orderNum = newVal
		}
	}
})

export default store