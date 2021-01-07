<template>
	<div class="add-pay">
		<HeaderBar :titleName="titleName" @click.native="back()"></HeaderBar>
		<div class="pay-list">
			<div class="method">
				<div class="icon"><img src="../assets/visa.png" alt=""></div>
				<p>添加Visa卡</p>
				<i class="el-icon-arrow-right"></i>
			</div>
			<div class="method">
				<div class="icon"><img src="../assets/paypal.png" alt=""></div>
				<p>添加PayPal</p>
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	export default {
		data() {
		  return {
			  'titleName':'添加支付方式',
		  }
		},
		components:{
			HeaderBar
		},
		methods: {
			back () {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';
	
	.add-pay {
		.pay-list {
			padding-top: @h-height;
			.method {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 4vmin;
				padding: 2vmin 5vmin;
				border-bottom: 1px solid #D3D3D3;
				border-top: 1px solid #D3D3D3;
				box-sizing: border-box;
				width: 100%;
				.mm-width;
				height: 15vmin;
				.icon{
					height: 10vmin;
					width: 12vmin;
					overflow: hidden;
					img {
						width: 100%;
						height: 100%;
					}
				}
				p {
					font-size: 4vmin;
					color: #000000;
					text-align: left;
					font-weight: 500;
				}
			}
		}
	}

	
</style>
