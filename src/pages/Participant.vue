<template>
	<div class="participant">
		<div class="title">
			<i class="el-icon-arrow-left"></i>
			参与人
		</div>
		<div class="part-info">
			<div class="user">
				
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang='less'>
	@import '../css/global.less';
	
	.participant {
		width: 100%;
		background-color: #F1F1F1;
		height: 50vh;
		.title {
			background: #ffffff;
			width: 100%;
			position: fixed;
			top: 0;
			height: 8vw;
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
		.part-info {
			padding: 11vw 5vw 0 5vw;
			.user{
				background-color: #FFFFFF;
				width: 100%;
				height: 19vw;
				border-radius: 2vw;
				margin: 3vw 0;
			}
		}
	}
	
</style>
