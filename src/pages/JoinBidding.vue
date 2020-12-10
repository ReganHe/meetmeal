<template>
	<div class="join-bidding">
		<Poster/>
		<div class="price">
			<span>当前价: 
				<span class="symbol">$</span>
				<span class="num">60</span>
			</span>
			<span>起拍价:50</span>
			<span class="user">
				出价人:
				<span class="account">V00851</span>
			</span>
		</div>
		<div class="detail">
			<div class="dinner">
				<span class="d1">晚餐</span>
				<span class="d2">(10/28/2019 21:00-23:00）</span>
				<span class="d3">1.5小时</span>
			</div>
			<div class="local">
				<i class="el-icon-location"></i>
				<div>上海市 <span>（具体地址成功竞拍后获得）</span></div>
			</div>
			<div class="time">
				<i class="el-icon-timer"> 距结束</i>
				<span class="count-down">12:30:59</span>
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
			<el-button class="confirm"  @click="dialogVisible = true">确认出价</el-button>
		</div>
		<el-dialog
			class="pop-up"
			:visible.sync="dialogVisible"
			width="70%"
			top="24vh">
		  <div class="pic">
			  <div class="img"><img src="../assets/img.jpg" alt=""></div>
		  </div>
		  <div class="user-info">
			  <span>上海刘亦菲</span>
			  <span class="age">
				  <i class="el-icon-male gender-bg">18</i>
			  </span>
		  </div>
		  <div class="price-info">
				<p>起拍价: $50</p>
				<p>当前价: <span class="i1">$</span><span class="i2">60</span></p>
				<p>加价: <span class="i3">$</span>
					<span class="i4">5</span>
					<span class="i6">出价人:</span>
					<span class="i7">V00866</span>
				</p>
				<div class="p-time">
					<i class="el-icon-timer"> 距结束</i>
					<span class="count-down">12:30:59</span>
				</div>
		  </div>
		  <div class="note">
			  <p>第一次参拍，需支付$12元保证金</p>
			  <p>详情见保证金退还及扣除规则</p>
		  </div>
		  <el-button class="bid-but">确认参与竞拍</el-button>
		</el-dialog>
	</div>
</template>

<script>
	import Poster from '../components/Poster.vue'
	import {getProductInfo} from '../api/product.js'
	
	export default {
		components:{
			Poster
		},
		data () {
			return {
				count: 0,
				dialogVisible: false,
				index: 0,
				info: [],
			}
		},
		mounted () {
			this.index = this.$route.query.index
			getProductInfo().then(resp => {
				this.info = resp.data.data[this.index]
				console.log(this.info)
			})
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
		}
	}
</script>

<style lang='less'>
	@import '../css/global.less';
	.join-bidding {
		width: 100%;
		.price {
			height: 7vh;
			white-space: nowrap;
			padding: 2.5vmin 3.5vmin;
			border-bottom: 1px solid #F1F1F1;
			color: @unpick-color;
			font-size: 3.2vmin;
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
				.d1 {
					margin-right: 2vmin;
					font-weight: 400;
				}
				.d2 {
					font-size: 4vmin;
					color: @unpick-color;
					margin-right: 12vmin;
				}
				.d3 {
					padding: 1vmin 2vmin;
					background: @button-sty;
					font-size: 3.33vmin;
					color: white;
					border-radius: 5px;
					margin-left: auto;
				}
			}
			.local {
				display: flex;
				font-size: 5vmin;
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
				.el-icon-timer {
					font-weight: 400;
				}
				.count-down {
					color: @bid-color;
					margin-left: 2vmin;
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
					background-color: #FE6491;
					border-radius: 1vmin;
					font-size: 3.7vmin;
					color: white;
					margin-left: 3vmin;
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
	}
</style>