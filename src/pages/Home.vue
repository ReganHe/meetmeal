/* eslint-disable */
<template>
	<div class="home">
		<div class="header">
			<div class="auction" :class="{'pick-up':fin}">
				<div class='sty'>
					<div v-if="fin" class="pic"><img src="../assets/auction_icon.gif" alt=""></div>
					<div v-else class="pic"><img src="../assets/auction_icon.gif" alt=""></div>
					<div class="on-sale" @click="changeStyle(1)">拍卖中</div>
					<div class="fin" @click="changeStyle(2)">已结束</div>
					<div class="search"><i class="el-icon-search"></i></div>
				</div>
			</div>
			<div class="day">
				<div :class="{'day-sty':dayType == 1}" @click="changeDay(1);productListApi()">全部</div>
				<div :class="{'day-sty':dayType == 2}" @click="changeDay(2)">今天</div>
				<div :class="{'day-sty':dayType == 3}" @click="changeDay(3)">明后天</div>
				<div :class="{'day-sty':dayType == 4}" @click="changeDay(4)">本周末</div>
				<div :class="{'day-sty':dayType == 5}" @click="changeDay(5)">将结束</div>
			</div>
		</div>
		<div v-for="(item,index) in product" :key="index" class="content">
			<div class="with-img">
				<i class="el-icon-location-outline">{{item.distance}} Mile</i>
				<div v-if="item.online == 1" class="down">
					<div  class="status"></div>
					<span>在线</span>
					<i v-if="item.gender == 0" class="el-icon-female gender-bg">{{item.age}}</i>
					<i v-if="item.gender == 1" class="el-icon-male gender-bg" style="background: #3182FD;">{{item.age}}</i>
					<div>{{item.name}}</div>
				</div>
				<div v-if="item.online == 0" class="down">
					<div  class="status" style="background: #999999;"></div>
					<span>离线</span>
					<i v-if="item.gender == 0" class="el-icon-female gender-bg">{{item.age}}</i>
					<i v-if="item.gender == 1" class="el-icon-male gender-bg" style="background: #3182FD;">{{item.age}}</i>
					<div>{{item.name}}</div>
				</div>
			</div>
			<div class="info">
				<div class="dinner">
					<span class="d1">{{item.title}}</span>
					<span class="d2">{{item.take}}小时</span>
				</div>
				<div class="time">
					<i class="el-icon-timer">&nbsp;距结束</i>
					<span class="count-down">{{item.time}}</span>
				</div>
				<div class="local">
					<i class="el-icon-location"></i>
					<div>{{item.local}}</div>
				</div>
				<div class="price">
					<span class="p1">当前价</span>
					<span class="p2">$</span>
					<span class="p3">{{item.price}}</span>
					<span class="p4">(V00851)</span>
				</div>
				<el-button class="want-bid" @click="goTo(index)">我要竞拍</el-button>
			</div>
		</div>
		<Footer/>
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';
import {productListApi} from '../api/product.js';
import '../api/mock/index.js';

export default {
	name: 'Home',
	data() {
		return {
			fin: true,
			dayType: 1,
			product: [],
		};
	},
	components: {
		Footer
	},
	mounted(){
		productListApi().then(resp =>{
			this.product = resp.data.data
		})
	},
	methods:{
		changeStyle (num) {
			if (num == 1) {
				this.fin = true;
			}
			if (num == 2) {
				this.fin = false;
			}
		},
		changeDay (num) {
			this.dayType = num;
		},
		goTo (index) {
			this.$router.push({ path: `/join-bidding?index=${index}`})
		}
	}
};
</script>

<style lang='less' scoped>
	@import '../css/global.less';
	.home {
		padding-top: 26vw;
		padding-bottom: 20vw;
	}
	
	.home .header {
		position: fixed;
		padding: 2.6vw;
		box-sizing: border-box;
		top: 0;
		background-color: #FFFFFF;
		height: 26vw;
		width: 100%;
		color:@unpick-color;
		font-size: 3.73vw;
		white-space: nowrap;
		.mm-width;
		.auction {
			width: 100%;
			&::after {
				content: '';
				width: 2.7vw;
				height: 0.9vw;
				background-color: @base-color;
				display: block;
				margin-top: 2.8vw ;
				border-radius: 10px;
				margin-left: 30.5vw;
			}
			.sty {
				display: flex;
				align-items: center;
				.on-sale {
					font-size: 3.6vw;
				}
				.fin {
					margin-left: 10vw;
					color: @base-color;
					font-size: 4.5vw;
				}
				.pic {
					width: 4vw;
					height: 4vw;
					overflow: hidden;
					img {
						width: 100%;
					}
				}
				.search {
					margin-left: auto;
					color: @base-color;
				}
			}
		}
		.pick-up {
			&::after {
				margin-left: 10vw;
			}
			.sty {
				.on-sale {
					color: @base-color;
					font-size: 4.5vw;
				}
				.fin {
					color: @unpick-color;
					font-size: 3.6vw;
				}
				.pic {
					width: 5vw;
					height: 5vw;
				}
			}
		}
		.day {
			display: flex;
			justify-content: flex-start;
			margin-top: 2vw;
			div {
				margin-right: 10px;
				padding: 1.6vw;
			}
			.day-sty {
				background-color: #F1F1F1;
				border-radius: 3vw;
			}
		}
	}

	.home .content {
		width: 100%;
		padding-left: 3vw;
		padding-right: 3vw;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		margin-bottom: 3vw;
		.with-img {
			width: 50%;
			height: 46vw;
			background: url(../assets/img.jpg) no-repeat scroll left center / 100% 46vw;	
			border-radius: 1.9vw 0px 0px 1.9vw;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			color: white;
			border: none;
			i {
				font-size: 2.6vw;
				margin: 1.6vw;
			}
			.down {
				margin-right: auto;
				font-size: 2.9vw;
				white-space: nowrap;
				display: flex;
				align-items: center;
				margin: 0.6vw 1.5vw;
				margin-right: auto;
				.status {
					height: 1.6vw;
					width: 1.6vw;
					background: #32EE13;
					border-radius: 50%;
				}
				.gender-bg {
					background: #FE6491;
					padding: 0.2vw 0.5vw;
					border-radius: 0.5vw;
				}
				* {
					margin-left: 1vw;
				}
			}
		}
		.info {
			width: 50%;
			border-radius: 0px 1.9vw 1.9vw 0px;
			border: 1px solid @base-color;
			border-left: none;
			height: 46vw;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: space-between;
			font-size: 3.2vw;
			color: @unpick-color;
			padding: 3.6vw;
			box-sizing: border-box;
			.dinner {
				.d1 {
					font-size: 4vw;
					font-weight: 600;
					color: #333333;
					margin-right: 3.5vw;
				}
				.d2 {
					padding: 1vw;
					font-size: 2.9vw;
					color: white;
					border-radius: 1vw;
					background: @button-sty;
				}
			}
			.time {
				.el-icon-timer {
					margin-right: 1vw;
				}
				.count-down {
					color: #FA5353;
				}
			}
			.local {
				display: flex;
				flex-direction: row;
				align-items: center;
				.el-icon-location {
					font-size: 5.5vw;
					color: @unpick-color;
					margin-right: 1vw;
					span {
						font-size: 4vw;
						color: @unpick-color;
					}
				}
			}
			.price {
				.p2 {
					color: #FA5353;
					margin: 0 1.5vw;
				}
				.p3 {
					color: #FA5353;
					font-size: 6.8vw;
					font-weight: 600;
					margin-right: 1.2vw;
				}
			}
			.want-bid {
				background: @button-sty;
				width: 21.6vw;
				height: 8.7vw;
				border: none;
				color: white;
				font-size: 2.9vw;
				padding: 1.6vw 2.6vw;
				border-radius: 2vw;
			}
		}
	}
</style>
