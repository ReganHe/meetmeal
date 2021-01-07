<template>
	<div class="pay-method">
		<HeaderBar :titleName="titleName" @click.native="back()"></HeaderBar>
		<div class="pay-list">
			<div class="t2">支付方式</div>
			<div class="method">
				<div class="icon"><img src="../assets/visa.png" alt=""></div>
				<span>**** **** **** **** 3658</span>
				<i class="el-icon-arrow-right"></i>
			</div>
			<div class="method">
				<div class="icon"><img src="../assets/paypal.png" alt=""></div>
				<span>**** **** **** **** 34563</span>
				<i class="el-icon-arrow-right"></i>
			</div>
			<div class="add-bank" @click="goAddPay()">
				<i class="el-icon-plus"></i>
				<span>添加银行账号</span>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	export default {
		data() {
		  return {
			  'titleName':'支付方式',
		  }
		},
		components:{
			HeaderBar
		},
		methods: {
			back () {
				this.$router.go(-1)
			},
			goAddPay() {
				this.$router.push({path:'/add-pay'})
			}
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';
	
	.pay-method {
		.pay-list {
			padding-top: @h-height;
			.t2 {
				border-bottom: 1px solid #D3D3D3;
				font-size: 4.8vmin;
				margin-top: 4vmin;
				margin-left: 2vmin;
				padding-bottom: 2vmin;
			}
			.method {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 4vmin;
				padding: 2vmin 5vmin;
				border-bottom: 1px solid #D3D3D3;
				box-sizing: border-box;
				width: 100%;
				.mm-width;
				height: 15vmin;
				.icon{
					height: 10vmin;
					overflow: hidden;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			.add-bank {
				border-bottom: 1px solid #D3D3D3;
				box-sizing: border-box;
				padding: 4vmin 5vmin;
				i {
					font-size: 4.6vmin;
				}
				span {
					font-size: 4.6vmin;
					color: #000000;
				}
			}
		}
	}

	
</style>
