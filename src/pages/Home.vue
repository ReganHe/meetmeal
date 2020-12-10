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
		<div v-for="item in product" :key="item.id" class="content">
			<div class="with-img">
				<div class="bg">
					<img :src="item.img" alt="">
				</div>
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
				<el-button class="want-bid" @click="goTo(item.id)">我要竞拍</el-button>
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
			console.log(this.product[1].img)
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
		goTo (id) {
			this.$router.push({ path: `/join-bidding?id=${id}`})
		}
	}
};
</script>

<style lang='less' scoped>
	@import '../css/global.less';
	.home {
		padding-top: 26vmin;
		padding-bottom: 20vmin;
	}
	
	.home .header {
		position: fixed;
		padding: 2.6vmin;
		box-sizing: border-box;
		top: 0;
		background-color: #FFFFFF;
		height: 26vmin;
		width: 100%;
		color:@unpick-color;
		font-size: 3.73vmin;
		white-space: nowrap;
		background-color: #FFFFFF;
		z-index: 100;
		.mm-width;
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
				margin-left: 30.5vmin;
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
				.pic {
					width: 4vmin;
					height: 4vmin;
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
				margin-left: 10vmin;
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

	.home .content {
		width: 100%;
		padding-left: 3vmin;
		padding-right: 3vmin;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		margin-bottom: 3vmin;
		.with-img {
			width: 50%;
			height: 46vmin;	
			border-radius: 1.9vmin 0px 0px 1.9vmin;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			color: white;
			border: none;
			position: relative;
			overflow: hidden;
			.bg {
				width: 100%;
				height: 100%;
				overflow: hidden;
				position: absolute;
				z-index: -10;
				top: 0;
				img {
					width: 100%;
					height: 100%;
				}
			}
			i {
				font-size: 2.6vmin;
				margin: 1.6vmin;
			}
			.down {
				margin-right: auto;
				font-size: 2.9vmin;
				white-space: nowrap;
				display: flex;
				align-items: center;
				margin: 0.6vmin 1.5vmin;
				margin-right: auto;
				.status {
					height: 1.6vmin;
					width: 1.6vmin;
					background: #32EE13;
					border-radius: 50%;
				}
				.gender-bg {
					background: #FE6491;
					padding: 0.2vmin 0.5vmin;
					border-radius: 0.5vmin;
				}
				* {
					margin-left: 1vmin;
				}
			}
		}
		.info {
			width: 50%;
			border-radius: 0px 1.9vmin 1.9vmin 0px;
			border: 1px solid @base-color;
			border-left: none;
			height: 46vmin;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: space-between;
			font-size: 3.2vmin;
			color: @unpick-color;
			padding: 3.6vmin;
			box-sizing: border-box;
			.dinner {
				.d1 {
					font-size: 4vmin;
					font-weight: 600;
					color: #333333;
					margin-right: 3.5vmin;
				}
				.d2 {
					padding: 1vmin;
					font-size: 2.9vmin;
					color: white;
					border-radius: 1vmin;
					background: @button-sty;
				}
			}
			.time {
				.el-icon-timer {
					margin-right: 1vmin;
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
					font-size: 5.5vmin;
					color: @unpick-color;
					margin-right: 1vmin;
					span {
						font-size: 4vmin;
						color: @unpick-color;
					}
				}
			}
			.price {
				white-space: nowrap;
				.p2 {
					color: #FA5353;
					margin: 0 1.5vmin;
				}
				.p3 {
					color: #FA5353;
					font-size: 6.8vmin;
					font-weight: 600;
					margin-right: 1.2vmin;
				}
			}
			.want-bid {
				background: @button-sty;
				width: 21.6vmin;
				height: 8.7vmin;
				border: none;
				color: white;
				font-size: 2.9vmin;
				padding: 1.6vmin 2.6vmin;
				border-radius: 2vmin;
			}
		}
	}
</style>
