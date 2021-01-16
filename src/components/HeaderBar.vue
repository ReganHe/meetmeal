<template>
	<div class="title">
		<i class="el-icon-arrow-left" @click="goBack()"></i>
		<span>{{titleName}}</span>
	</div>
</template>

<script>
	export default {
		props: {
			'titleName': {default:''},
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';
	
	.title {
		background: #ffffff;
		width: 100%;
		position: fixed;
		top: 0;
		text-align: center;
		height: @h-height;
		font-size: 5.6vmin;
		vertical-align: middle;
		font-weight: 600;
		.mm-width;
		span {
			line-height: @h-height;
			vertical-align: middle;
			font-size: 4vmin;
		}
		.el-icon-arrow-left{
			position: absolute;
			left:5vmin;
			top: 4.5vmin;
			font-weight: 600;
		}
	}
</style>
