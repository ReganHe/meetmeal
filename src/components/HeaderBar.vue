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
	.title {
		background: #ffffff;
		width: 100%;
		position: fixed;
		top: 0;
		text-align: center;
		font-size: 5.6vw;
		padding: 3vw 0;
		font-weight: 600;
		.el-icon-arrow-left{
			position: absolute;
			left:5vw;
			top: 4.5vw;
			font-weight: 600;
		}
	}
</style>
