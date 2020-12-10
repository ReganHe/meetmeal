<template>
	<div class="title">
		<i class="el-icon-arrow-left" @click="back()"></i>
		{{titleName}}
	</div>
</template>

<script>
	export default {
		props: {
			'titleName': {default:''},
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
		font-size: 5.6vw;
		vertical-align: middle;
		line-height: @h-height;
		font-weight: 600;
		.mm-width;
		.el-icon-arrow-left{
			position: absolute;
			left:5vw;
			top: 4.5vw;
			font-weight: 600;
		}
	}
</style>
