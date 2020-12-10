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
			<el-button class="chat" @click="dialogVisible = true"><p>文字聊天</p><p style="font-size: 2.4vmin;margin-top: 1vmin;">0.1 $/条</p></el-button>
			<el-button class="join">参与竞拍</el-button>
		</div>
		<el-button class="float">
			<i class="el-icon-chat-line-round"></i>
			<p>30s</p>
		</el-button>
		<el-dialog
			class="pop-up"
			:visible.sync="dialogVisible"
			width="70%"
			top="24vh">
			<i class="el-icon-error"></i>
			<p>您当前的Coin不足,无法开始聊天</p>
			<el-button>去充值</el-button>
		</el-dialog>
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
				dialogVisible: false
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
			padding: 0 4.6vmin;
			.p-title {
				font-size: 3.2vmin;
				font-weight: 400;
				color: #B4B4B4;
				margin: 2.5vmin 0;
			}
			.each {
				padding: 2vmin 0;
				border-bottom: 2px solid #F6F6F6;
				font-size: 4vmin;
				color: #434343;
				.option {
					color: #858585;
					margin-right: 9vmin;
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
				margin-right: 12vmin;
			}
			.join {
				background: #B629FF;
			}
			.el-button {
				color: white;
				font-size: 3.7vmin;
				padding: 0;
				height: 11vmin;
				width: 27vmin;
				border-radius: 7vmin;
			}
		}
		.float {
			width: 14vmin;
			height: 14vmin;
			border-radius: 50%;
			color: white;
			background: #4CA4FF;
			position: fixed;
			bottom: 15vh;
			right: 5vmin;
			padding: 0;
			.el-icon-chat-line-round {
				font-size: 6vmin;
			}
		}
		p {
			margin: 0;
			padding: 0;
		}
		.pop-up {
			text-align: center;
			.el-dialog {
				border-radius: 4vmin;
				height: 60vmin;
				.el-dialog__body {
					padding: 0;
				}
			.el-dialog__header {
				.el-dialog__headerbtn {
					right: 1.5vmin;
					top: 2vmin;
				}
				.el-icon{
					font-size: 7vmin;
					font-weight: 400;
					color: #111111;
					}
				}
			}
			.el-icon-error {
				font-size: 12.5vmin;
				color: #FF5767;
			}
			p {
				margin: 10vmin 0;
				font-size: 3.7vmin;
				font-weight: normal;
				color: #666666;
			}
			.el-button {
				width: 33vmin;
				height: 10vmin;
				color: white;
				background: #B629FF;
				border-radius: 5vmin;
			}
		}
	}
</style>
