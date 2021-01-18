<template>
	<div class="home">
		<div class="header">
			<div class="auction" :class="{'pick-up':finType}">
				<div class='sty'>
					<div v-if="finType" class="pic"><img src="../assets/auction_icon.gif" alt=""></div>
					<div v-else class="pic"><img src="../assets/auction_icon.gif" alt=""></div>
					<div class="on-sale" @click="changeStyle(1);getProductList()">拍卖中</div>
					<div class="fin" @click="changeStyle(2);getProductList()">已结束</div>
					<div class="filter" @click="drawer = true; showTip = true;value=['19','30']">
						<i class="el-icon-s-operation"></i>
					</div>
				</div>
			</div>
			<div class="day">
				<div v-show="finType" :class="{'day-sty':dayType == 1}" @click="changeDay(1);getProductList()">全部</div>
				<div v-show="finType" :class="{'day-sty':dayType == 2}" @click="changeDay(2);getTodayList()">今天</div>
				<div v-show="!finType" :class="{'day-sty':dayType == 1}" @click="changeDay(1);getProductList()">全部</div>
				<div v-show="!finType" :class="{'day-sty':dayType == 2}" @click="changeDay(2);getTodayList()">今天</div>
				<div v-show="finType" :class="{'day-sty':dayType == 3}" @click="changeDay(3)">明后天</div>
				<div v-show="finType" :class="{'day-sty':dayType == 4}" @click="changeDay(4)">三天后</div>
			</div>
		</div>
		<div v-if="finType == true && dayType == 1">
			<div v-for="item in product" :key="item.uid" class="content">
				<router-link :to="{path:'profile?uid=' + item.uid}" class="with-img">
					<div class="bg">
						<img :src="item.img" alt="">
					</div>
					<div class="head">
						<div class="job">{{item.job}}</div>
						<i class="el-icon-location-outline">{{item.distance}} Mile</i>
					</div>
					<div class="down">
						<i style="color:#FF9900 ;font-size:5vmin;" class="el-icon-star-on"></i>
						<span>{{item.score}}</span>
						<i v-if="item.gender == 0" class="el-icon-female gender-bg">{{convert(item.age)}}</i>
						<i v-if="item.gender == 1" class="el-icon-male gender-bg" 
							style="background: #3182FD;">{{convert(item.age)}}
						</i>
						<div>{{item.name}}</div>
					</div>
				</router-link>
				<div class="info">
					<div class="dinner">
						<span class="d1">{{item.title}}</span>
						<span class="d2">{{item.take}}小时</span>
					</div>
					<div class="time">
						<i class="el-icon-timer">&nbsp;距结束</i>
						<span class="count-down">
							<CountDown
								:endTime="endTime"
							></CountDown>
						</span>
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
					<div class="timeAndBut">
						<p>{{item.date}}</p>
						<el-button class="want-bid" @click="goTo(item.id)">我要竞拍</el-button>
					</div>
				</div>
			</div>
		</div>
		<div v-if="finType == true && dayType == 2">
			<div v-for="item in product" :key="item.uid" class="content">
				<router-link :to="{path:'profile?uid=' + item.uid}" class="with-img">
					<div class="bg">
						<img :src="item.img" alt="">
					</div>
					<div class="head">
						<div class="job">{{item.job}}</div>
						<i class="el-icon-location-outline">{{item.distance}} Mile</i>
					</div>
					<div class="down">
						<i style="color:#FF9900 ;font-size:5vmin;" class="el-icon-star-on"></i>
						<span>{{item.score}}</span>
						<i v-if="item.gender == 0" class="el-icon-female gender-bg">{{convert(item.age)}}</i>
						<i v-if="item.gender == 1" class="el-icon-male gender-bg" 
							style="background: #3182FD;">{{convert(item.age)}}
						</i>
						<div>{{item.name}}</div>
					</div>
				</router-link>
				<div class="info">
					<div class="dinner">
						<span class="d1">{{item.title}}</span>
						<span class="d2">{{item.take}}小时</span>
					</div>
					<div class="time">
						<i class="el-icon-timer">&nbsp;距结束</i>
						<span class="count-down">
							<CountDown
								:endTime="endTime"
							></CountDown>
						</span>
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
					<div class="timeAndBut">
						<p>{{item.date}}</p>
						<el-button class="want-bid" @click="goTo(item.id)">我要竞拍</el-button>
					</div>
				</div>
			</div>
		</div>
		<div v-if="finType == false && dayType == 1">
			<div v-for="item in product" :key="item.uid" class="content">
				<router-link :to="{path:'profile?uid=' + item.uid}" class="with-img">
					<div class="bg">
						<img :src="item.img" alt="">
					</div>
					<div class="head">
						<div class="job">{{item.job}}</div>
						<i class="el-icon-location-outline">{{item.distance}} Mile</i>
					</div>
					<div class="down">
						<i style="color:#FF9900 ;font-size:5vmin;" class="el-icon-star-on"></i>
						<span>{{item.score}}</span>
						<i v-if="item.gender == 0" class="el-icon-female gender-bg">{{convert(item.age)}}</i>
						<i v-if="item.gender == 1" class="el-icon-male gender-bg" 
							style="background: #3182FD;">{{convert(item.age)}}
						</i>
						<div>{{item.name}}</div>
					</div>
				</router-link>
				<div class="info">
					<div class="dinner">
						<span class="d1">{{item.title}}</span>
						<span class="d2">{{item.take}}小时</span>
					</div>
					<div class="time">
						<i class="el-icon-timer">&nbsp;距结束</i>
						<span class="count-down">
							<CountDown
								:endTime="endTime"
							></CountDown>
						</span>
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
					<div class="timeAndBut">
						<p>{{item.date}}</p>
						<el-button class="want-bid" @click="goTo(item.id)">我要竞拍</el-button>
					</div>
				</div>
			</div>
		</div>
		<div v-if="finType == false && dayType == 2">
			<div v-for="item in product" :key="item.uid" class="content">
				<router-link :to="{path:'profile?uid=' + item.uid}" class="with-img">
					<div class="bg">
						<img :src="item.img" alt="">
					</div>
					<div class="head">
						<div class="job">{{item.job}}</div>
						<i class="el-icon-location-outline">{{item.distance}} Mile</i>
					</div>
					<div class="down">
						<i style="color:#FF9900 ;font-size:5vmin;" class="el-icon-star-on"></i>
						<span>{{item.score}}</span>
						<i v-if="item.gender == 0" class="el-icon-female gender-bg">{{convert(item.age)}}</i>
						<i v-if="item.gender == 1" class="el-icon-male gender-bg" 
							style="background: #3182FD;">{{convert(item.age)}}
						</i>
						<div>{{item.name}}</div>
					</div>
				</router-link>
				<div class="info">
					<div class="dinner">
						<span class="d1">{{item.title}}</span>
						<span class="d2">{{item.take}}小时</span>
					</div>
					<div class="time">
						<i class="el-icon-timer">&nbsp;距结束</i>
						<span class="count-down">
							<CountDown
								:endTime="endTime"
							></CountDown>
						</span>
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
					<div class="timeAndBut">
						<p>{{item.date}}</p>
						<el-button class="want-bid" @click="goTo(item.id)">我要竞拍</el-button>
					</div>
				</div>
			</div>
		</div>
		<el-drawer
		:withHeader="false"
		:show-close="false"
		size="100%"
		:visible.sync="drawer"
		direction="rtl">
			<div style="background-color: #F5F5F5;height: 100%;">
				<div class="drawer-header">
					<p @click="closeDrawer()">取消</p>
					<p style="font-size: 5.5vmin;font-weight: 600;">筛选</p>
					<p>确定</p>
				</div>
				<p class="con" style="font-size: 4vmin;font-weight: 600;">性别筛选</p>
				<div style="background-color: #FFFFFF;padding: 3vmin 0;">
					<el-radio-group fill="#C12BE2" v-model="radio" size="small" class="con">
						<el-radio-button class="op" label="全部"></el-radio-button>
						<el-radio-button class="op" label="男"></el-radio-button>
						<el-radio-button class="op" label="女"></el-radio-button>
					</el-radio-group>
				</div>
				<p class="con" style="font-size: 4vmin;font-weight: 600;">年龄筛选</p>
				<div 
				style="background-color: #FFFFFF;padding: 4vmin 5vmin;
				font-size: 2vmin;display: flex;justify-content: space-between;">
					<span style="color: #606266;">年龄</span>
					<span style="color: #333333;font-weight: 600;">{{value[0]}}-{{value[1]}}岁</span>
				</div>
				<div class="silder-sty">
					<el-slider
					  v-model="value"
					  range
					  :show-tooltip="showTip"
					  :min="19"
					  :max="80">
					</el-slider>
				</div>
			</div>
		</el-drawer>
	</div>
</template>

<script>
import {productListApi,TodayListApi} from '../api/product.js';
import '../api/mock/index.js';
import CountDown from './CountDown.vue';
import {mapState} from 'vuex';
import {convertYear} from '../util/time.js';
export default {
	name: 'Home',
	computed:mapState({
				dayType: state => state.dayType,
				pageType: state => state.pageType,
				finType: state => state.finType,
			}),
	data() {
		return {
			value: [19, 80],
			product: [],
			radio:"男",
			endTime:"2021-03-31",
			drawer: false,
			showTip: true,
		};
	},
	components: {
		CountDown,
	},
	mounted(){
		productListApi().then(resp =>{
			this.product = resp.data.data
			this.$store.commit('changeStyle', true)
			this.$store.commit('changeDay',1)
		});
	},
	methods:{
		changeStyle (num) {
			if (num == 1) {
				this.$store.commit('changeStyle', true)
				this.$store.commit('changeDay',1)
			}
			if (num == 2) {
				this.$store.commit('changeStyle', false)
				this.$store.commit('changeDay',1)
			}
		},
		changeDay (num) {
			this.$store.commit('changeDay',num)
		},
		getProductList () {
			productListApi().then(resp =>{
				this.product = resp.data.data
			})
		},
		getTodayList () {
			TodayListApi().then(resp =>{
				this.product = resp.data.data
			})
		},
		convert(year) {
			return convertYear(year)
		},
		goTo (id) {
			this.$store.commit('changePage','home')
			this.$router.push({ path: `/join-bidding?id=${id}&status=0`})
		},
		closeDrawer(){
			this.drawer = false
			this.showTip = false;
		},
	}
};
</script>

<style lang='less'>
	@import '../css/global.less';
	.home {
		padding-top: 27vmin;
		padding-bottom: 20vmin;
		.el-drawer__wrapper{
			.el-drawer__body{
				.drawer-header{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 3vmin;
					background-color: #FFFFFF;
					box-sizing: border-box;
					p{
						font-size: 5vmin;
						margin: 0;
					}
				}
				.con {
					padding: 0 5vmin;
				}
				.op .el-radio-button__inner{
					border: 1px #DCDFE6 solid;
					border-radius: 1vmin;
					padding: 1.5vmin 5vmin;
				}
				.el-radio-button{
					margin-right: 5vmin;
				}
				.silder-sty {
					padding: 3vmin 6vmin;
					margin-top: 10vmin;
					.el-tooltip{
						border: 1px solid @base-color
					}
					.el-slider__bar {
						background-color: @base-color;
					}
				}
 			}
		}
	}
	body .el-tooltip__popper{
		border: 1px solid @base-color;
		width: 4vmin;
		height: 4vmin;
		min-width: 1vmin;
		padding: 2vmin;
		background: #ffffff !important;
		color: @base-color !important;
		white-space: nowrap;
		.popper__arrow{
			border-top-color:@base-color !important;
			&::after{
				border-top-color: #FFFFFF !important;
			}
		}
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
				.filter {
					margin-left: auto;
					color: @base-color;
					font-size: 5vmin;
					padding: 0 1vmin 0 3vmin;
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
			.head {
				font-size: 2.6vmin;
				display: flex;
				width: 100%;
				justify-content: space-between;
				padding: 1vmin 1.5vmin;
				box-sizing: border-box;
				align-items: center;
			}
			.down {
				font-size: 2.9vmin;
				white-space: nowrap;
				display: flex;
				align-items: center;
				margin: 1vmin 1.5vmin;
				margin-right: auto;
				.status {
					height: 1.6vmin;
					width: 1.6vmin;
					background: #32EE13;
					border-radius: 50%;
				}
				.gender-bg {
					background: #FE6491;
					padding: 0.8vmin;
					border-radius: 1.5vmin;
					margin: 0 2vmin;
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
			.timeAndBut{
				display: flex;
				align-items: center;
				width: 38vmin;
				justify-content: space-between;
				p {
					margin: 0;
					white-space: nowrap;
				}
			}
		}
	}
</style>
