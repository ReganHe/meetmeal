<template>
	<div class="participant">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<div v-for="item in partList">		
			<div class="part-info">
				<div v-show="partList.length != 0" class="user">
					<div class="user-info">
						<div class="h-img">
							<img :src="item.img" alt="">
						</div>
						<div class="info">
							<div class="name">
								<span>{{item.name}}</span>
								<i v-if="item.gender == 0" class="el-icon-female gender">
								{{convertAge(item.age)}}</i>
								<i v-if="item.gender == 1" class="el-icon-male gender" style="background: #3182FD;">
								{{convertAge(item.age)}}</i>
							</div>
							<div class="type">{{item.job}}</div>
						</div>
					</div>
					<div class="detail">
						<p class="sty">出价：{{item.price}}</p>
						<p>{{item.time}}小时前</p>
					</div>
				</div>
				<div v-show="false" class="no-part">
					<i class="el-icon-warning-outline" style="font-size: 21vmin;"></i>
					<p>暂无参与人</p>
				</div>
			</div>
		</div>
		<div v-show="partList.length = 0" class="p-bottom" @click="back()">
			<p>无合适参与人，放弃餐遇</p>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	import {getPart} from '../api/order.js';
	import {convertYear} from '../util/time.js'
	
	export default {
		data () {
			return{
				titleName:'参与人',
				partList:[],
				show: true,
			}
		},
		components:{
			HeaderBar
		},
		mounted(){
			getPart().then( resp => {
				this.partList = resp.data.data
			})
		},
		methods:{
			convertAge(year){
				return convertYear(year)
			}
 		}
	}
</script>

<style lang='less'>
	@import '../css/global.less';
	
	.participant {
		width: 100%;
		background-color: #F1F1F1;
		min-height: 100vh;
		padding-top: 15vmin;
		box-sizing: border-box;
		p {
			margin: 0;
			padding: 0;
		} 
		.part-info {
			padding: 0 3vmin;
			.user{
				background-color: #FFFFFF;
				width: 100%;
				height: 20vmin;
				border-radius: 2vmin;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 4vmin;
				margin: 4vmin 0;
				box-sizing: border-box;
				font-size: 4vmin;
				color: @unpick-color;
				.user-info{
					display: flex;
					.h-img {
						width: 16vmin;
						height: 16vmin;
						overflow: hidden;
						border-radius: 50%;
						img {
							width: 100%;
						}
					}
					.info {
						padding: 1.5vmin 0;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 5vmin;
						.name {
							font-weight: 500;
							color: #333333;
							.el-icon-male, .el-icon-female{
								padding: 0.5vmin;
								background-color: #3182FD;
								color: #FFFFFF;
								border-radius: 1.5vmin;
								margin-left: 2vmin;
							}
							.el-icom.female {
								background-color: #FE6491;
							}
							.gender {
								background: #FE6491;
								padding: 0.6vmin 0.8vmin;
								border-radius: 1.5vmin;
							}
						}
					}
				}
				.detail {
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					text-align: right;
					.sty {
						color: @base-color;
					}
				}
			}
			.no-part {
				margin-top: 50vmin;
				color: @base-color;
				text-align: center;
				font-size: 4vmin;
				p {
					margin-top: 4vmin;
				}
			}
		}
		.p-bottom {
			position: fixed;
			height: 15vmin;
			width: 100%;
			bottom: 0;
			text-align: center;
			background-color: #FFFFFF;
			color: @base-color;
			display: table;
			font-size: 4.3vmin;
			p {
				vertical-align: middle;
				display: table-cell;
			}
		}
	}
	
</style>
