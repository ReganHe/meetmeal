<template>
	<div class="my-wallet">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<div class="pay-list">
			<div class="con-1">
				<div class="bid-title">
					<div class="icon">
						<img src="../assets/auction_icon.gif" alt="">
					</div>
					竞拍保证金
				</div>
				<div class="have-pay">
					<p>竞拍保证金（$15次/人）</p>
					<div class="amount">$:&nbsp;&nbsp;12</div>
				</div>
				<div class="pay"  @click="goPrePay()">
					<p>预付竞拍保证金</p>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="con-2">
				<div class="way">
					<i class="el-icon-bank-card"></i>
					选择支付方式
				</div>
				<div class="pay-way" style="color: #C12BE2;">
					<i class="el-icon-success"></i>
					<p>PayPal 支付</p>
				</div>
				<div class="pay-way">
					<i class="el-icon-success"></i>
					<p>银行卡支付</p>
				</div>
				<div class="add" @click="goAddCard()">
					<p>添加支付方式</p>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="con-3">
				<div class="way">
					<i class="el-icon-edit-outline"></i>
					收支明细
				</div>
				<div class="income pay">
					<p>收入</p>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="expend pay">
					<p>支出</p>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	export default {
		components:{
			HeaderBar
		},
		data () {
			return{
				'titleName':'我的钱包',
			}
		},
		methods: {
			goAddCard(){
				this.$router.push({path:"/add-pay"})
			},
			goPrePay(){
				this.$router.push({path:"/pre-pay"})
			}
		}
	}
</script>

<style lang="less">
	@import "../css/global.less";
	.my-wallet {
		p{
			margin: 0;
			padding: 0;
		}
		.el-icon-arrow-right {
			font-size: 4vmin;
		}
		height: 100vh;
		overflow: hidden;
		.pay-list{
			padding: @h-height 6vmin 0 6vmin;
			font-size: 4.2vmin;
			.con-1,.con-3{
				.bid-title{
					display: flex;
					align-items: flex-end;
					color: @base-color;
					margin: 2vmin 0;
					.icon{
						width: 5vmin;
						height: 6vmin;
						margin-right: 2vmin;
					}
					img {
						width: 100%;
						height: 100%;
					}
				}
				.have-pay,.pay{
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 3.8vmin;
					color: #666666;
					padding: 4vmin 0;
					border-bottom: solid 1px #DCDCDC;;
					.amount {
						padding:1vmin 2vmin;
						border-radius: 3px;
						border:1px solid @base-color;
						color: @base-color;
					}
				}
			}
			.con-2{
				margin-top: 10vmin;
				.way {
					margin: 2vmin 0;
					color: @base-color;
					.el-icon-bank-card{
						font-size: 6vmin;
					}
				}
				.add,.pay-way{
					display: flex;
					align-items: center;
					padding: 4vmin 3vmin;
					border-bottom: solid 1px #DCDCDC;
					.el-icon-success{
						font-size: 5vmin;
						margin-right: 3vmin;
					}
				}
				.add {
					display: flex;
					justify-content: space-between;
					padding-right: 0;
				}
			}
			.con-3{
				margin-top: 10vmin;
				.way {
					margin: 2vmin 0;
					color: @base-color;
					.el-icon-edit-outline{
						font-size: 6vmin;
					}
				}
			}
		}
		
	}
</style>
