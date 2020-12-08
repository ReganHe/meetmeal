<template>
	<div class="participant">
		<div class="title">
			<i class="el-icon-arrow-left"></i>
			参与人
		</div>
		<div class="part-info">
			<div class="user">
				<div class="h-img">
					<img src="../assets/999.jpg" alt="">
				</div>
				
				<div class="detail">
					<p>出价：80</p>
					<p>2小时前</p>
				</div>
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
		min-height: 100vh;
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
		.part-info {
			padding: 14vw 3vw 0 3vw;
			.user{
				background-color: #FFFFFF;
				width: 100%;
				height: 20vw;
				border-radius: 2vw;
				margin: 3vw 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 4vw;
				margin: 4vw 0;
				box-sizing: border-box;
				.h-img {
					width: 16vw;
					height: 16vw;
					overflow: hidden;
					border-radius: 50%;
					img {
						width: 100%;
					}
				}
			}
		}
	}
	
</style>
