<template>
	<div class="safe-cert">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<div v-for="item in safetyType" class="safe-list">
			<div class="s-name">{{item.name}}</div>
			<div v-if="item.value == 1" class="s-stat">已认证</div>
			<div v-if="item.value == 0" class="s-stat">未认证</div>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	export default {
		components:{
			HeaderBar
		},
		data () {
			return{
				'titleName':'安全认证',
				'safetyType':[{"name":"手机号码认证","value":'0'},{'name':'手机号码认证','value':'0'},{'name':'手机号码认证','value':'1'}],
			}
		},
	}
</script>

<style lang="less">
	@import "../css/global.less";
	.safe-cert {
		height: 100vh;
		background-color: #F5F5F5;
		overflow: hidden;
		.safe-list {
			margin-top:18vmin;
			width: 100%;
			height: 12vmin;
			margin-bottom: 2px;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 4vmin;
			box-sizing: border-box;
			font-size: 3.7vmin;
			font-weight: 400;
			color: #1D1E2C;
			.s-stat {
				color: #999999;
			}
			.active {
				text-decoration: underline;
				color: #387EF5;
			}
		}
	}
</style>
