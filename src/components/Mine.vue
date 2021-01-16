<template>
	<div class="mine">
		<div class="m-header">
			<div class="my-info">我的</div>
			<el-dropdown trigger="click">
				<i class="el-icon-setting"></i>
				<el-dropdown-menu slot="dropdown" class="mine-drop">
				    <el-dropdown-item>
						<router-link to="messages">消息通知</router-link>
					</el-dropdown-item>
				    <el-dropdown-item>服务条款</el-dropdown-item>
				    <el-dropdown-item>退出登录</el-dropdown-item>
				  </el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="con">
			<div class="h-img">
				<p>{{person.name}}</p>
				<p>我的拍卖号:V{{person.bidAcco}}</p>
				<div class="head">
					<img :src=person.img alt="">
				</div>
			</div>
			<div class="list">
				
				<div class="left" @click="goEdit()">
					<i class="el-icon-user-solid"></i>
					<p>编辑资料</p>
				</div>
				
				<div class="right" @click="goPay()">
					<i class="el-icon-s-finance"></i>
					<p>我的钱包</p>
				</div>
			</div>
			<div class="list">
				<div class="left">
					<i class="el-icon-map-location"></i>
					<p>餐遇店名地址</p>
				</div>
				<div class="right">
					<i class="el-icon-question"></i>
					<p>帮助</p>
				</div>
			</div>
			<div class="list">
				<div class="left">
					<i class="el-icon-s-order"></i>
					<p>反馈</p>
				</div>
				<div class="right">
					<i class="el-icon-circle-plus"></i>
					<p>发布空闲时间</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getMine} from '../api/mine.js'
	export default {
		data () {
			return{
				person:[],
			}
		},
		mounted() {
			getMine().then(resp => {
				this.person = resp.data.data[0]
			})
		},
		methods:{
			goEdit(){
				this.$store.commit('changePage','mine')
				this.$router.push({path:'/edit'})
			},
			goPay(){
				this.$store.commit('changePage','mine')
				this.$router.push({path:'/my-wallet'})
			}
		}
	}
	
</script>

<style lang="less">
	@import '../css/global.less';
	body {
		a {
			text-align: center;
			text-decoration: none;
			color: #333333;
		}
		.mine-drop {
			left: 64.5vmin !important;
		}
		.el-popper[x-placement^=bottom] {
			margin: 0;
		}
		.el-popper{
			width: 35vmin;
			margin: 0;
			padding: 0;
			.popper__arrow {
				display: none !important;
			}
			.el-dropdown-menu__item {
				font-size: 3.8vmin;
				font-weight: 400;
				color: #333333;
				border-bottom: 1px solid #D9D8D8;
				text-align: center;
			}
			li {
				white-space: nowrap;
			}
		}
	}
	
	.mine {
		.mm-width;
		width: 100%;
		height: calc(100vh - 36vmin);
		.m-header {
			.mm-width;
			box-sizing: border-box;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 4vmin;
			height: @h-height;
			line-height: @h-height;
			color: @base-color;
			font-size: 4.6vmin;
			position: fixed;
			top: 0;
			background-color: #FFFFFF;
			.el-icon-setting {
				font-size: 5vmin;
				color: @base-color;
			}
		}
		.con {
			margin-top: @h-height;
			margin-bottom: 10vmin;
			height: 100%;
			.h-img{
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-start;
				padding-left: 18.9vmin;
				padding-top: 3vmin;
				background: url('../assets/m-bg.png') no-repeat;
				background-size: 100% 100%;
				font-size: 4.8vmin;
				margin-bottom: 2vmin;
				color: white;
				height: 30%;
				p {
					margin: 2vmin 0;
					padding: 0;
				}
				.head {
					height: 17vmin;
					width: 17vmin;
					border-radius: 50%;
					overflow: hidden;
					background-size: cover;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			.list {
				padding: 0 5vmin;
				display: flex;
				justify-content: space-between;
				font-size: 3.8vmin;
				font-weight: normal;
				height: 22%;
				p {
					margin: 2.5vmin 0;
					padding: 0;
				}
				i {
					font-weight: 600;
					font-size: 8.5vw;
					background: linear-gradient(-39deg, #68029C, #CE6EE2);
					-webkit-background-clip: text;
					color: transparent;
				}
				.left , .right {
					width: 50%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					border-bottom: 2px solid #E7E9F8;
				}
				.right {
					border-left: 2px solid #E7E9F8;
				}
			}
		}
	}
</style>
