<template>
	<div class="join-bidding">
		<router-link :to="{path:'profile?uid=' + info.uid}" class="poster">
			<div class="img">
				<div style="display: flex;align-items: center;color: #FFFFFF;font-size: 3.67vmin;">
					<div class="back" @click="goBack()">
						<i class="el-icon-arrow-left"></i>
					</div>
					<p>{{info.job}}</p>
				</div>
				<mt-swipe 
				:auto="4000" 
				:show-indicators="false"
				@change="handleChange">
					<mt-swipe-item v-for="item in imgList">
						<div class="roll"><img :src="item" alt=""></div>
					</mt-swipe-item>
				</mt-swipe>
				<div class="bottom">
					<div class="page">{{perNum}}/{{total}}</div>
					<div v-if="info.online == 1" class="down">
						<div  class="status"></div>
						<span>在线</span>
						<i v-if="info.gender == 0" class="el-icon-female gender-bg">{{convertAge(info.age)}}</i>
						<i v-if="info.gender == 1" class="el-icon-male gender-bg" 
							style="background: #3182FD;">{{convertAge(info.age)}}</i>
						<div>{{info.name}}</div>
					</div>
					<div v-if="info.online == 0" class="down">
						<div  class="status" style="background: #999999;"></div>
						<span>离线</span>
						<i v-if="info.gender == 0" class="el-icon-female gender-bg">{{convertAge(info.age)}}</i>
						<i v-if="info.gender == 1" class="el-icon-male gender-bg" 
							style="background: #3182FD;">{{convertAge(info.age)}}</i>
						<div>{{info.name}}</div>
					</div>
				</div>
			</div>
		</router-link>
		<div class="price">
			<span>当前价: 
				<span class="symbol">$</span>
				<span class="num">{{info.price}}</span>
			</span>
			<span>起拍价:{{info.staPrice}}</span>
			<span class="user">
				出价人:
				<span class="account">V00851</span>
			</span>
		</div>
		<div class="detail">
			<div class="dinner">
				<span class="d1">{{info.minTitle}}</span>
				<span class="d2">({{info.fullTime}}）</span>
				<span class="d3">{{info.take}}小时</span>
			</div>
			<div class="local">
				<i class="el-icon-location"></i>
				<div>{{info.local}}&nbsp;<span>（具体地址成功竞拍后获得）</span></div>
			</div>
			<div class="time">
				<i class="el-icon-timer"> 距结束</i>
				<span class="count-down">{{info.countdown}}</span>
			</div>
			<div class="information">参与竞拍并支付保证金，
			保证金为竞拍价20% 竞拍失败保证金自动 退回
			，竞盘成功后支付余额。</div>
		</div>
		<div class="bot-bar">
			<div class="alert">
				<i class="el-icon-alarm-clock"></i>
				<p>提醒</p>
			</div>
			<div class="adjust">
				<span class="a1">出价:</span>
				<el-button class="adj-but" @click="reduceCount()">-</el-button>
				<div class="adj-num">{{count}}</div>
				<el-button class="adj-but" @click="plusCount()">+</el-button>
			</div>
			<el-button class="confirm"  @click="popup()">确认出价</el-button>
		</div>
		<el-dialog
			class="pop-up"
			:visible.sync="Visible1"
			width="70%"
			top="24vh">
		  <div class="pic">
			  <div class="img"><img :src=info.img alt=""></div>
		  </div>
		  <div class="user-info">
			  <span>{{info.name}}</span>
			  <span class="age">
				  <i v-if="info.gender == 0" class="el-icon-female gender-bg">{{convertAge(info.age)}}</i>
				  <i v-if="info.gender == 1" class="el-icon-male gender-bg" 
				  style="background: #3182FD;">{{convertAge(info.age)}}</i>
				  
			  </span>
		  </div>
		  <div class="price-info">
				<p>起拍价: ${{info.staPrice}}</p>
				<p>当前价: <span class="i1">$</span><span class="i2">{{info.price}}</span></p>
				<p>加价: <span class="i3">$</span>
					<span class="i4">{{count}}</span>
					<span class="i6">出价人:</span>
					<span class="i7">V00866</span>
				</p>
				<div class="p-time">
					<i class="el-icon-timer"> 距结束</i>
					<span class="count-down">{{info.countdown}}</span>
				</div>
		  </div>
		  <div class="note">
			  <p>第一次参拍，需支付$12元保证金</p>
			  <p>详情见保证金退还及扣除规则</p>
		  </div>
		  <el-button class="bid-but">确认参与竞拍</el-button>
		</el-dialog>
		<el-dialog
		class="pop-no-log"
		:visible.sync="Visible2"
		width="70%"
		top="24vh">
			<p style="text-align: center;font-size: 10vmin;color: #C12BE2"><i class="el-icon-document-delete"></i></p>
			<p style="color: red;text-align: center;">暂未登录，请去登录</p>
			<el-button class="bid-but" @click="goLogIn()">去登陆</el-button>
		</el-dialog>
		<!-- 用户状态为已登录，非会员 -->
		<mt-popup
		  v-model="depositPop"
		  class="deposit-pop">
			<p class="dep-title">为保证竞拍真实性和双方利益<br>竞拍人和参拍人均需支付竞拍保证金</p>
			<p class="sub-title">参拍保证金<span style="color:#13A500;">退还规则</span></p>
			<p class="p-con">1.参拍后没有最终胜出，在参拍倒计时结束后48小 时之内退还给参拍人。<br>
			 2.参拍后能够按时见面并完成订单，此保证金可以 在支付</p>
			<p class="sub-title">参拍保证金<span style="color:#D31515;">扣除规则</span></p>
			<p class="p-con">1.参拍胜出后，强制取消订单。或没有在约定的时 间与竞拍人见面，经核实后扣除竞拍保证金。</p>
			<p class="p-con" style="text-align: center;">参拍保证金为：$12/次/人</p>
			<p class="p-con">成为餐遇VIP ，则不需要每次支付参拍保证金祥见VIP 规则。</p>
			<el-button class="but b-left" @click="depositPop = false">取消</el-button>
			<el-button class="but b-right">支付参拍保证金</el-button>
		</mt-popup>

	</div>
</template>

<script>
	import {getProductInfo} from '../api/product.js';
	import {convertYear} from '../util/time.js';
	
	export default {
		data () {
			return {
				count: 0,
				userStatus:'',
				Visible1: false,
				Visible2: false,
				depositPop: false,
				uid: 0,
				info: [],
				imgList:[],
				perNum: '1',
				total: '1',
			}
		},
		mounted () {
			this.userStatus = this.$route.query.status
			this.id = this.$route.query.id
			getProductInfo().then(resp => {
				let data = resp.data.data
				for ( let i in data ) {
					if ( this.id == data[i].id) {
						this.info = data[i]
						this.imgList = this.info.imgList
						this.total = this.imgList.length
					}
				}
			});
		},
		methods:{
			plusCount () {
				if (this.count >= 0) {
					this.count+=1
				}
			},
			reduceCount () {
				if (this.count > 0) {
					this.count-=1
				}
			},
			handleChange (index) {
				this.perNum = index + 1;
			},
			popup(){
				if (this.userStatus) {
					if (this.userStatus == 0) {
						this.Visible1 = true
					}
					if (this.userStatus == 1) {
						this.Visible2 = true
					}
					if (this.userStatus == 2) {
						this.depositPop = true
					}
				}
			},
			convertAge(year) {
				return convertYear(year)
			},
			goBack () {
				this.$router.go(-1)
			},
			goLogIn() {
				this.$router.push({path:'/login'})
			}
		}
	}
</script>

<style lang='less'>
	@import '../css/global.less';
	.join-bidding {
		width: 100%;
		.poster {
			.poster;
		}
		.price {
			height: 7vh;
			white-space: nowrap;
			padding: 2.5vmin 3.5vmin;
			border-bottom: 1px solid #F1F1F1;
			color: @unpick-color;
			font-size: 3.2vmin;
			.mm-width;
			.symbol,.num {
				color: @price-color;
				font-size: 5vmin;
				font-weight: 600;
				margin-right: 1vmin;
			}
			.num {
				font-size: 8vmin;
				margin-right: 4vmin;
			}
			.user {
				font-size: 3.6vmin;
				margin-left: 23vmin;
				.account {
					color: @bid-color;
				}
			}
		}
		.detail {
			height: 27vh;
			width: 100%;
			padding: 3.4vmin 3.4vmin;
			font-size: 5vmin;
			color: #333333;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			box-sizing: border-box;
			.dinner {
				position: relative;
				width: 100%;
				margin-bottom: 2vw;
				.d1 {
					margin-right: 2vmin;
					font-weight: 400;
				}
				.d2 {
					font-size: 4vmin;
					color: @unpick-color;
				}
				.d3 {
					padding: 1vmin 2vmin;
					background: @button-sty;
					font-size: 3.33vmin;
					color: white;
					border-radius: 5px;
					margin-left: auto;
					position: absolute;
					right: 0;
				}
			}
			.local {
				display: flex;
				font-size: 5vmin;
				margin-bottom: 1vw;
				white-space: nowrap;
				.el-icon-location {
					line-height: 7vmin;
				}
				div {
					font-weight: 400;
					margin-left: 1vmin;
				}
				span {
					font-size: 4vmin;
					color: @unpick-color;
				}
			}
			.time {
				line-height: 7vmin;
				margin-bottom: 1vw;
				.el-icon-timer {
					font-weight: 400;
				}
				.count-down {
					color: @bid-color;
					margin-left: 1vmin;
				}
			}
			.information {
				font-size: 3.5vmin;
				color: @unpick-color;
			}
		}
		.bot-bar {
			width: 100%;
			height: 8vh;
			display: flex;
			justify-content: space-between;
			position: fixed;
			bottom: 0;
			border-top: 1px solid #F1F1F1;
			background-color: #FFFFFF;
			.mm-width;
			.alert {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: @bid-color;
				margin-left: 7vmin;
				.el-icon-alarm-clock {
					font-size: 6vmin;
				}
				p {
					margin: 0;
					font-size: 3vmin;
				}
			}
			.adjust {
				display: flex;
				align-items: center;
				color: @unpick-color;
				font-size: 4vmin;
				.a1 {
					margin-right: 2vmin;
				}
				.adj-but {
					color: white;
					height: 7vmin;
					width: 7vmin;
					padding: 0;
					background: @bid-color;
					font-size: 6vmin;
				}
				.adj-num {
					width: 10vmin;
					text-align: center;
					padding: 0.5vmin 0;
					border: 1px solid #F1F1F1;
					border-radius: 5px;
					margin: 0 1vmin;
					line-height: 6vmin;
					font-size: 6vmin;
					color: @bid-color;
				}
			}
			.confirm {
				color: white;
				font-size: 5vmin;
				border-radius: 0;
				border: 1px solid @bid-color;
				background-color: @bid-color;
			}
		}
		.pop-up {
			.el-dialog {
				border-radius: 4vmin;
				height: 98vmin;
				.el-dialog__body {
					padding: 0;
				}
			.el-dialog__header {
				.el-dialog__headerbtn {
					right: 1.5vmin;
					top: 2vmin;
				}
				.el-icon{
					font-size: 7vmin;
					font-weight: 400;
					color: #111111;
				}
			}
			.user-info {
				color: @bid-color;
				font-size: 4.3vmin;
				text-align: center;
				font-weight: 600;
				width: 100%;
				padding-bottom: 3vmin;
				border-bottom: 1px solid #E1E1E1;
				.age {
					padding: 0.5vmin 1vmin;
					border-radius: 1vmin;
					font-size: 3.7vmin;
					color: white;
					margin-left: 3vmin;
					.gender-bg {
						background: #FE6491;
						padding: 0.6vmin 0.8vmin;
						border-radius: 1.5vmin;
					}
				}
			}
			.price-info {
					font-size: 3.2vmin;
					color: @unpick-color;
					text-align: center;
					p {
						margin: 2vmin 0;
					}
					.i1 {
						font-size: 7vmin;
						color: @price-color;
						margin: 0 1vmin;
						font-weight: 600;
					}
					.i2 {
						font-size: 10vmin;
						color: @price-color;
						font-weight: 600;
					}
					.i3 {
						font-size: 4.5vmin;
						color: @price-color;
						margin: 0 0.5vmin;
					}
					.i4 {
						font-size: 5vmin;
						color: @price-color;
					}
					.i6 {
						font-size: 4vmin;
						margin-left: 2vmin;
					}
					.i7 {
						font-size: 5vmin;
						color: @bid-color;
						margin-left: 0.5vmin;
					}
					.p-time {
						font-size: 5.5vmin;
						margin: 5vmin 0;
						.el-icon-timer {							
							color: #333333;
						}
						.count-down {
							color: @bid-color;
							margin-left: 1vmin;
						}
					}
				}
				.note {
					font-size: 3vmin;
					color: @unpick-color;
					padding-left: 4vmin;
					margin: 4vmin 0;
					p {
						margin: 2vmin 0;
					}
				}
				.pic {
					display: flex;
					justify-content: center;
					height: 4vmin;
					.img {
						width: 20vmin;
						height: 20vmin;
						overflow: hidden;
						border-radius: 50%;
						transform: translateY(-90%);
						img {
							width: 100%;
							height: 100%;
						}
					}
				}
				.bid-but {
					width: 91.5%;
					margin: 0 3vmin;
					color: white;
					background: @bid-color;
					box-shadow: 0px 3px 9px 1px rgba(255, 184, 0, 0.23);
					border-radius: 6vmin;
					padding: 3vmin 0;
					font-size: 4.3vmin;
				}
			}
		}
		.pop-no-log {
			.el-dialog {
				border-radius: 4vmin;
				height: 65vmin;
				.el-dialog__body {
					padding: 0;
				}
			.el-dialog__header {
				.el-dialog__headerbtn {
					right: 1.5vmin;
					top: 2vmin;
				}
				.el-icon{
					font-size: 7vmin;
					font-weight: 400;
					color: #111111;
					}
				}
			}
			.bid-but {
				width: 91.5%;
				margin: 0 3vmin;
				color: white;
				background: @bid-color;
				box-shadow: 0px 3px 9px 1px rgba(255, 184, 0, 0.23);
				border-radius: 6vmin;
				padding: 3vmin 0;
				font-size: 4.3vmin;
			}
		}
		.deposit-pop {
			padding: 2.5vmin;
			width: 85vmin;
			height: 127vmin;
			font-size: 4.3vmin;
			text-align: center;
			border-radius: 2vmin;
			p {
				margin: 0 0 5vmin 0;
			}
			.dep-title {
				color: #BF28FE;
				font-weight: 600;
			}
			.sub-title {
				color: #333333;
			}
			.p-con {
				font-size: 3.8vmin;
				font-weight: 400;
				color: #666666;
				text-align: left;
				line-height: 6vmin;
			}
			.but {
				width: 35.5vmin;
				height: 13vmin;
				border-radius: 7vmin;
			}
			.b-left {
				border: 1px solid #BA2CEF;
				color: #BA2CEF;
			}
			.b-right {
				background: #B928FD;
				border: 1px solid #BA2CEF;
				color: #FFFFFF;
			}
		}
	}
</style>