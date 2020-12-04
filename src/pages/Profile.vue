<template>
	<div class="profile">
		<Poster/>
		<div class="info-list">
			<div class="p-title">
				详细信息
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
			<div class="each">
				<span class="option">城市</span>
				<span>上海</span>
			</div>
		</div>
		<div class="p-bottom">
			<el-button class="chat"><p>文字聊天</p><p style="font-size: 2.4vw;margin-top: 1vw;">0.1 $/条</p></el-button>
			<el-button class="join">参与竞拍</el-button>
		</div>
		<el-button class="float">
			<i class="el-icon-chat-line-round"></i>
			<p>30s</p>
		</el-button>
	</div>
</template>

<script>
	import Poster from '../components/Poster.vue'
	
	export default {
		components:{
			Poster
		},
		data () {
			return {
				
			}
		}
	}
</script>

<style lang='less'>
	.profile {
		width: 100%;
		.poster {
			.img {
				height: 51vh;
			}
		}
		.info-list {
			padding: 0 4.6vw;
			.p-title {
				font-size: 3.2vw;
				font-weight: 400;
				color: #B4B4B4;
				margin: 2.5vw 0;
			}
			.each {
				padding: 2vw 0;
				border-bottom: 2px solid #F6F6F6;
				font-size: 4vw;
				color: #434343;
				.option {
					color: #858585;
					margin-right: 9vw;
				}
			}
		}
		.p-bottom {
			height: 10vh;
			width: 100%;
			position: fixed;
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			background: white;
			.chat {
				background: #63BD37;
				margin-right: 12vw;
			}
			.join {
				background: #B629FF;
			}
			.el-button {
				color: white;
				font-size: 3.7vw;
				padding: 0;
				height: 11vw;
				width: 27vw;
				border-radius: 7vw;
			}
		}
		.float {
			width: 14vw;
			height: 14vw;
			border-radius: 50%;
			color: white;
			background: #4CA4FF;
			position: fixed;
			bottom: 15vh;
			right: 5vw;
			padding: 0;
			.el-icon-chat-line-round {
				font-size: 6vw;
			}
		}
		p {
			margin: 0;
			padding: 0;
		}
	}
</style>
