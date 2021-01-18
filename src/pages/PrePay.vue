<template>
	<div class="pre-pay">
		<div class="title">
			<i class="el-icon-arrow-left" @click="back()"></i>
			<span style="font-size: 5vmin;">预付竞拍保证金</span>
			<div class="el-icon-question"></div>
		</div>
		<div class="pay-money">
			<el-radio v-model="money" label="15" border>$15</el-radio>
			<el-radio v-model="money" label="20" border>$30</el-radio>
			<el-radio v-model="money" label="45" border>$45</el-radio>
			<el-radio v-model="money" label="60" border>$60</el-radio>
			<el-radio v-model="money" label="90" border>$90</el-radio>
			<el-radio v-model="money" label="120" border>$120</el-radio>
			<el-radio v-model="money" label="150" border>$150</el-radio>
			<el-radio v-model="money" label="180" border>$180</el-radio>
			<el-radio v-model="money" label="210" border>$210</el-radio>
		</div>
		<div class="now-pay" @click="goPay()">立即预付</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				money:"15",
			};
		},
		methods: {
			back () {
				this.$router.go(-1)
			},
			goPay() {
			}
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';
	
	.pre-pay {
		height: 100vh;
		.title {
			background: #ffffff;
			width: 100%;
			position: fixed;
			top: 0;
			text-align: center;
			height: @h-height;
			font-size: 5.6vmin;
			vertical-align: middle;
			line-height: @h-height;
			font-weight: 600;
			.mm-width;
			z-index: 10;
			.el-icon-arrow-left{
				position: absolute;
				left:5vmin;
				top: 4.5vmin;
				font-weight: 600;
			}
			.el-icon-question {
				position: absolute;
				right: 5vmin;
				top: 4.5vmin;
				font-size: 6vmin;
				font-weight: 400;
				color: @base-color;
			}
		}
		.pay-money {
			padding: 20vmin 0 0 5.5vmin;
			color: #666666;
			.el-radio__inner {
				display: none;
			}
			.el-radio{
				width: 26vmin;
				height: 23vmin;
				margin-right: 5.5vmin;
				margin-bottom: 7vmin;
				box-sizing: border-box;
				text-align: center;
				vertical-align: middle;
				.el-radio__label{
					font-size: 4.8vmin;
					padding: 0;
				}
				.is-bordered+.el-radio.is-bordered {
					color: @base-color;
				}
			}
			.is-bordered {
				padding: 8.5vmin 8vmin 0 6vmin;
			}
			.el-radio.is-bordered+.el-radio.is-bordered {
				margin-left: 0;
			}
			.el-radio.is-bordered.is-checked {
				border-color: @base-color;
			}
			.el-radio__input.is-checked+.el-radio__label{
				color: @base-color;
			}
		}
		.now-pay{
			height: 13vmin;
			position: fixed;
			bottom: 0;
			background-color: @base-color;
			color: #FFFFFF;
			width: 100%;
			.mm-width;
			text-align: center;
			line-height: 13vmin;
			vertical-align: middle;
			font-size: 3.8vmin;
		}
	}
</style>
