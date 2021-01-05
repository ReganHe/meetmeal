<template>
	<div class="msg-info">
		<div class="msg-header">
			<span>消息</span>
		</div>
		<div class="msg-list">
			<div class="detail">
				<div class="h-img">
					<img src="../assets/999.jpg" alt="">
				</div>
			</div>
			<div class="content">
				<div class="name">系统消息</div>
				<div class="msg">您充值的120钻石已经到账</div>
			</div>
			<div class="info">
				<div class="time">11-12</div>
				<div class="msg-num"><div>2</div></div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	@import '../css/global.less';
	
	.msg-info {
		padding-top: @h-height;
		.msg-header {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 4vmin;
			height: @h-height;
			line-height: @h-height;
			color: @base-color;
			font-size: 4.6vmin;
			position: fixed;
			top: 0;
		}
		.msg-list {
			display: flex;
			padding: 3.5vmin;
			.detail {
				justify-content: space-between;
				.h-img {
					height: 15vmin;
					width: 15vmin;
					overflow: hidden;
					border-radius: 50%;
					margin-right: 5.8vmin;
					img {
						width: 100%;
					}
				}
			}
			.content {
				padding: 2vmin 0;
				width: 60vmin;
				.name{
					font-size: 4vmin;
					color: #333333;
					margin-bottom: 1.5vmin;
				}
				.msg{
					font-size: 3.2vmin;
					color: #9F9F9F;
				}
			}
			.info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				padding: 2.5vmin 0;
				.time {
					font-size: 3.2vmin;
					color: #6A6A6A;
				}
				.msg-num {
					font-size: 3.2vmin;
					text-align: center;
					div {
						width: 4vmin;
						height: 4vmin;
						background-color: #E4614F;
						border-radius: 50%;
						line-height: 4vmin;
						vertical-align: middle;
						text-align: center;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>
