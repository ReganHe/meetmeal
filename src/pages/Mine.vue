<template>
	<div class="mine">
		<div class="m-header">
			<div class="my-info">我的</div>
			<i class="el-icon-setting"></i>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	@import '../css/global.less';
	
	.mine {
		.m-header {
			height: @h-height;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 4.5vmin;
			color: @base-color;
			padding: 0 4vmin;
		}
	}
</style>
