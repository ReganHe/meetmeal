<template>
	<div class="message">
		<HeaderBar :titleName="titleName" @click.native="back()"></HeaderBar>
		<div class="type">
			<div class="push">
				推送消息
				<mt-switch v-model="value1">
				</mt-switch>
			</div>
			<div>订单或聊天消息</div>
			<div class="e-mail">
				电子邮箱
				<mt-switch v-model="value2">
				</mt-switch>
			</div>
			<div class="phone">
				手机短信
				<mt-switch v-model="value3">
				</mt-switch>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	
	export default {
		data () {
			return{
				titleName:'消息通知',
				value1:"",
				value2:"",
				value3:"",
			}
		},
		components:{
			HeaderBar
		},
		methods: {
			back () {
				this.$router.go(-1)
			},
		},
	}
</script>

<style lang="less">
	@import '../css/global.less';
	.message {
		background-color: #F5F5F5;
		height: 100vh;
		overflow: hidden;
		.type{
			box-sizing: border-box;
			margin-top: @h-height;
			div {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 4.7vmin;
				color: #333333;
				background-color: #FFFFFF;
				height: 15.5vmin;
				padding: 0 5.8vmin;
			}
			.push {
				margin-top: 16vmin;
				margin-bottom: 4vmin;
			}
			.mint-switch-label {
				display: none;
			}
			.mint-switch {
				.mint-switch-input:checked + .mint-switch-core {
					border-color: #701284;
					background-color: #701284;
				}
			}
		}
	}
</style>
