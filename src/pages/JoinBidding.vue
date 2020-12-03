<template>
	<div class="join-bidding">
		<div class="img">
			<div class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="bottom">
				<div class="page">1/3</div>
				<div class="down">
					<div class="status"></div>
					<span>在线</span>
					<i class="el-icon-male gender-bg">18</i>
					<div>上海刘亦菲</div>
				</div>
			</div>
		</div>
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
				<span>出价:</span>
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
		  <div class="tip">
			  <div class="img"><img src="../assets/img.jpg" alt=""></div>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				count: 0,
				dialogVisible: false
			}
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
		.img {
			height: 54vh;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background: url(../assets/img.jpg) no-repeat scroll left center / 100% 100%;
			.back {
				margin: 7vw 3.33vw;
				.el-icon-arrow-left {
					padding: 2vw;
					border-radius: 50%;
					background-color:rgba(7,7,7,0.2);
					font-size: 7vw;
					color: white;
				}
			}
			.bottom {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				color: white;
				.down {
					margin-right: auto;
					font-size: 2.9vw;
					white-space: nowrap;
					display: flex;
					align-items: center;
					margin: 0.6vw 1.5vw;
					margin-right: auto;
					font-size: 3.67vw;
					margin-bottom: 2vw;
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
						margin-left: 3vw;
					}
				}
				.page {
					padding: 1vw 3vw;
					margin-right: 5vw;
					margin-left: auto;
					border-radius: 5vw;
					background-color:rgba(7,7,7,0.2);
				}
			}
		}
		.price {
			height: 7vh;
			white-space: nowrap;
			padding: 2.5vw 3.5vw;
			border-bottom: 1px solid #F1F1F1;
			color: @unpick-color;
			font-size: 3.2vw;
			.symbol,.num {
				color: @price-color;
				font-size: 5vw;
				font-weight: 600;
				margin-right: 1vw;
			}
			.num {
				font-size: 8vw;
				margin-right: 4vw;
			}
			.user {
				font-size: 3.6vw;
				margin-left: 23vw;
				.account {
					color: @bid-color;
				}
			}
		}
		.detail {
			height: 27vh;
			width: 100%;
			padding: 3.4vw 3.4vw;
			font-size: 5vw;
			color: #333333;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			box-sizing: border-box;
			.dinner {
				.d1 {
					margin-right: 2vw;
					font-weight: 400;
				}
				.d2 {
					font-size: 4vw;
					color: @unpick-color;
					margin-right: 13vw;
				}
				.d3 {
					padding: 1vw 2vw;
					background: @button-sty;
					font-size: 3.33vw;
					color: white;
					border-radius: 5px;
					margin-left: auto;
				}
			}
			.local {
				display: flex;
				font-size: 5vw;
				el-icon-location {
					line-height: 7vw;
				}
				div {
					font-weight: 400;
					margin-left: 1vw;
				}
				span {
					font-size: 4vw;
					color: @unpick-color;
				}
			}
			.time {
				line-height: 7vw;
				.el-icon-timer {
					font-weight: 400;
				}
				.count-down {
					color: @bid-color;
					margin-left: 2vw;
				}
			}
			.information {
				font-size: 3.5vw;
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
			span {
				margin-right: 2vw;
			}
			.alert {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: @bid-color;
				margin-left: 7vw;
				.el-icon-alarm-clock {
					font-size: 8.5vw;
				}
				p {
					margin: 0;
					font-size: 2vw;
					transform: scale(0.8);
				}
			}
			.adjust {
				display: flex;
				align-items: center;
				color: @unpick-color;
				font-size: 4vw;
				.adj-but {
					color: white;
					height: 7vw;
					width: 7vw;
					padding: 0;
					background: @bid-color;
					font-size: 6vw;
					line-height: 6vw;
				}
				.adj-num {
					width: 10vw;
					text-align: center;
					border: 1px solid #F1F1F1;
					border-radius: 5px;
					margin: 0 1vw;
					height: 7vw;
					font-size: 5vw;
					color: @bid-color;
				}
			}
			.confirm {
				color: white;
				font-size: 5vw;
				border-radius: 0;
				border: 1px solid @bid-color;
				background-color: @bid-color;
			}
		}
		.pop-up {
			.el-dialog {
				border-radius: 30px !important;
			}
			.el-dialog__header {
				.el-dialog__headerbtn {
				}
			}
			.tip {
				display: flex;
				justify-content: center;
				.img {
					width: 20vw;
					height: 20vw;
					overflow: hidden;
					border-radius: 50%;
					transform: translateY(-130%);
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			
		}
	}
</style>
