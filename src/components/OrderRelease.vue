<template>
	<div class="order-release">
		<div class="header">
			<div class="auction" :class="{'pick-up':fin}">
				<div class='sty'>
					<div class="on-sale" @click="changeStyle(1)">参与订单</div>
					<div class="fin" @click="changeStyle(2)">发布订单</div>
				</div>
			</div>
			<div v-if="fin" class="day">
				<div :class="{'day-sty':dayType == 1}" @click="changeDay(1)">参拍中</div>
				<div :class="{'day-sty':dayType == 2}" @click="changeDay(2)">待见面</div>
				<div :class="{'day-sty':dayType == 3}" @click="changeDay(3)">已结束</div>
			</div>
			<div v-if="!fin" class="day">
				<div :class="{'day-sty':dayType == 1}" @click="changeDay(1)">发布中</div>
				<div :class="{'day-sty':dayType == 2}" @click="changeDay(2)">待见面</div>
				<div :class="{'day-sty':dayType == 3}" @click="changeDay(3)">见面中</div>
				<div :class="{'day-sty':dayType == 4}" @click="changeDay(4)">已结束</div>
			</div>
		</div>
		<div v-if="fin" class="body">
			<div v-if="dayType == 1" >
				<div v-for="item in order" class="list">
					<div class="l1">
						<div class="info">
							<i v-if="item.gender == 0" class="el-icon-female gender-bg">{{item.age}}</i>
							<i v-if="item.gender == 1" class="el-icon-male gender-bg" style="background: #3182FD;">{{item.age}}</i>
							<span style="color:black;">{{item.name}}</span>
						</div>
						<div class="l-time">距结束:<span class="sty-color">{{item.countdown}}</span></div>
					</div>
					<p>时间：（21:00-23:00）{{item.take}}小时</p>
					<div class="l3">
						<p>起拍价：${{item.staPrice}}</p>
						<p>我出价：${{item.myPrice}}</p>
					</div>					
					<div class="l4">
						<div class="last-price">
							当前价：<span class="sty-color">${{item.curPrice}}</span>
						</div>
						<div class="check-person sty-color" >
							再次出价
						</div>
					</div>
				</div>
			</div>
			<div v-if="dayType == 2">
				<div class="list">
					<div class="l1">
						<div class="info">
							<i class="el-icon-male gender-bg">18</i>
							<span style="color:black;">上海刘亦菲</span>
						</div>
						<div class="l-time">距见面:<span class="sty-color">12:21:21</span></div>
					</div>
					<p>时间：（21:00-23:00）2小时</p>
					<p>地址：Trump Tower at Century City</p>
					<div class="l4">
						<div class="last-price">
							当前价：<span class="sty-color">$60</span>
						</div>
						<div class="check-person sty-color" style="text-decoration: none;" >
							最终价：<span class="sty-color">$85</span>
						</div>
					</div>
				</div>
			</div>
			<div v-if="dayType == 3">
				<div class="list">
					<div class="l1">
						<div class="info">
							<i class="el-icon-male gender-bg">18</i>
							<span style="color:black;">上海刘亦菲</span>
						</div>
						<div class="l-time">已结束</div>
					</div>
					<p>时间：（21:00-23:00）2小时</p>
					<div class="page2">
						<p>地址：Trump Tower at Century City</p>
					</div>
					<div class="l4">
						<span>起拍价：$50</span>
						<span>最终价：<span class="sty-color">$80</span></span>
						<div class="info">
							<i class="el-icon-male gender-bg">18</i>
							<span style="color:black;">上海刘亦菲</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="!fin" class="body">
			<div v-if="dayType == 1" >
				<div class="list">
					<div class="l1">
						<div class="info">
							<i class="el-icon-male gender-bg">18</i>
							<span style="color:black;">上海刘亦菲</span>
						</div>
						<div class="l-time">距结束:<span class="sty-color">12:21:21</span></div>
					</div>
					<p>时间：（21:00-23:00）2小时</p>
					<p>起拍价：$30</p>
					<div class="l4">
						<div class="last-price">
							当前价：<span class="sty-color">$60</span>
						</div>
						<router-link to="/participant">
							<div class="check-person sty-color" >
								查看参与人
							</div>
						</router-link>
					</div>
				</div>
			</div>
			<div v-if="dayType == 2">
				<div class="list">
					<div class="l1">
						<div class="info">
							<i class="el-icon-male gender-bg">18</i>
							<span style="color:black;">上海刘亦菲</span>
						</div>
						<div class="l-time">距见面:<span class="sty-color">12:21:21</span></div>
					</div>
					<p>时间：（21:00-23:00）2小时</p>
					<div class="page2">
						<p>地址：Trump Tower at Century City</p>
						<span>最终价：<span class="sty-color">$80</span></span>
					</div>
					<div class="l4">
						<div class="last-price">
							当前价：<span class="sty-color">$60</span>
						</div>
						<div class="check-person sty-color" >
							开始见面
						</div>
					</div>
				</div>
			</div>
			<div v-if="dayType == 3">
				<div class="list">
					<div class="l1">
						<div class="info">
							<i class="el-icon-male gender-bg">18</i>
							<span style="color:black;">上海刘亦菲</span>
						</div>
						<div class="l-time">距结束:<span class="sty-color">12:21:21</span></div>
					</div>
					<p>时间：（21:00-23:00）2小时</p>
					<p>地址：Trump Tower at Century City</p>
					<div class="l4">
						<div class="last-price">
							起拍价：<span class="sty-color">$50</span>
						</div>
						<span>最终价：<span class="sty-color">$60</span></span>
						<div class="check-person sty-color" >
							见面结束
						</div>
					</div>
				</div>
			</div>
			<div v-if="dayType == 4">
				<div class="list">
					<div class="l1">
						<div class="info">
							<i class="el-icon-male gender-bg">18</i>
							<span style="color:black;">上海刘亦菲</span>
						</div>
						<div class="l-time">已结束</div>
					</div>
					<p>时间：（21:00-23:00）2小时</p>
					<div class="page2">
						<p>地址：Trump Tower at Century City</p>
						<span>最终价：<span class="sty-color">$80</span></span>
					</div>
					<div class="l4">
						<span>起拍价：$50</span>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
	import {getOrder} from '../api/product.js';
	
	export default {
		name: 'Home',
		data() {
			return {
				fin: true,
				dayType: 1,
				order: [],
			};
		},
		mounted(){
			getOrder().then(resp => {
				this.order = resp.data.data
			})
		},
		methods:{
			changeStyle (num) {
				if (num == 1) {
					this.fin = true;
					this.dayType = 1;
				}
				if (num == 2) {
					this.fin = false;
					this.dayType = 1;
				}
			},
			changeDay (num) {
				this.dayType = num;
			}
		}
	}
</script>

<style lang='less'>
	@import '../css/global.less';
	.order-release {
		padding-bottom: 20vmin;
		.header {
			position: fixed;
			padding: 2.6vmin;
			box-sizing: border-box;
			top: 0;
			background-color: #FFFFFF;
			height: 25vmin;
			width: 100%;
			color:@unpick-color;
			font-size: 3.73vmin;
			white-space: nowrap;
			.auction {
				width: 100%;
				&::after {
					content: '';
					width: 2.7vmin;
					height: 0.9vmin;
					background-color: @base-color;
					display: block;
					margin-top: 2.8vmin ;
					border-radius: 10px;
					margin-left: 32vmin;
				}
				.sty {
					display: flex;
					align-items: center;
					.on-sale {
						font-size: 3.6vmin;
					}
					.fin {
						margin-left: 10vmin;
						color: @base-color;
						font-size: 4.5vmin;
					}
				}
			}
			.pick-up {
				&::after {
					margin-left: 7vmin;
				}
				.sty {
					.on-sale {
						color: @base-color;
						font-size: 4.5vmin;
					}
					.fin {
						color: @unpick-color;
						font-size: 3.6vmin;
					}
					.pic {
						width: 5vmin;
						height: 5vmin;
					}
				}
			}
			.day {
				display: flex;
				justify-content: flex-start;
				margin-top: 2vmin;
				div {
					margin-right: 10px;
					padding: 1.6vmin;
				}
				.day-sty {
					background-color: #F1F1F1;
					border-radius: 3vmin;
				}
			}
		}
		.body{
			margin-top: 25vmin;
			width: 100%;
			.list {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 42vmin;
				background: #F1F1F1;
				box-sizing: border-box;
				margin: 3vh 3vmin;
				font-size: 3.7vmin;
				font-weight: 400;
				color: @unpick-color;
				padding: 3vmin;
				border-radius: 2vmin;
				p {
					margin: 0;
					padding: 0;
				}
				.sty-color {
					color: @base-color;
				}
				.l1 {
					display: flex;
					justify-content: space-between;
					.gender-bg {
						background: @female-color;
						padding: 0.5vmin 0.5vmin;
						border-radius: 1vmin;
						color: white;
						margin-right: 2vmin;
					}
				}
				.l3 {
					display: flex;
					justify-content: space-between;
				}
				.l4 {
					display: flex;
					justify-content: space-between;
					.check-person {
						text-decoration: underline;
					}
					.gender-bg {
						background: @female-color;
						padding: 0.5vmin 0.5vmin;
						border-radius: 1vmin;
						color: white;
						margin-right: 2vmin;
					}
				}
				.page2 {
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>
