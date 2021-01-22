<template>
	<div class="profile">
		<div class="poster">
			<div class="img">
				<div class="back" @click="goBack()">
					<i class="el-icon-arrow-left"></i>
					<div style="width: 80%;color: #FFFFFF;display: flex;justify-content: space-between;">
						<span>{{info.job}}</span>
						<span >{{info.distance}} mile</span>
					</div>
				</div>
				<mt-swipe 
				:auto="4000" 
				:show-indicators="false"
				@change="handleChange">
					<mt-swipe-item v-for="item in imgList">
						<div class="roll"><img :src="item" alt=""></div>
					</mt-swipe-item>
				</mt-swipe>
				<div class="bottom">
					<div class="page">{{perNum}}/{{total}}</div>
					<div class="down">
						<i style="color:#FF9900 ;font-size:5vmin;" class="el-icon-star-on"></i>
						<span>{{info.score}}</span>
						<i v-if="info.gender == 0" class="el-icon-female gender-bg">{{convert(info.age)}}</i>
						<i v-if="info.gender == 1" class="el-icon-male gender-bg" 
							style="background: #3182FD;">{{convert(info.age)}}
						</i>
						<div>{{info.name}}</div>
					</div>
				</div>
			</div>
			<div class="p-title">
				详细信息
			</div>
		</div>
		<div class="info-list">
			<div v-for="item in info.info" :key="item.id" class="each">
				<p class="option">{{item.name}}</p>
				<p>{{item.value}}</p>
			</div>
		</div>
		<div class="p-bottom">
			<el-button v-if="isAlert == 1" class="join" @click="goBidding()">下次提醒</el-button>
			<el-button v-else class="join" @click="goBidding()">参与竞拍</el-button>
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
	import {getPerson} from '../api/product.js';
	import {convertYear} from '../util/time.js';
	
	export default {
		data () {
			return {
				dialogVisible: false,
				info:[],
				perNum: 1,
				total: 1,
				imgList:[],
				uid:"",
				isAlert:0,
			}
		},
		mounted () {
			this.uid = this.$route.query.uid
			this.isAlert = this.$route.query.isAlert
			getPerson().then( resp => {
				this.all_info = resp.data.data
				for (var p of this.all_info) {
					if (this.uid == p.uid) {
						this.info = p
						this.imgList = p.imgList
						this.total = p.imgList.length
					}
				}
			})
		},
		methods:{
			handleChange(index) {
				this.perNum = index + 1 ;
			},
			convert(year) {
				return convertYear(year)
			},
			goBidding(){
				this.$router.push({path:`/join-bidding?id=1`})
			},
			goBack(){
				this.$router.go(-1)
			} 
		}
	}
</script>

<style lang='less'>
	@import '../css/global.less';
	
	.profile {
		width: 100%;
		.poster {
			.mm-width;
			.poster;
			position: fixed;
			width: 100%;
			top:0;
			background-color: #FFFFFF;
			.p-title {
				font-size: 3.2vmin;
				font-weight: 400;
				color: #B4B4B4;
				margin: 2.5vmin 4.6vmin;
			}
		}
		.info-list {
			padding: 108vmin 4.6vmin 10vh 4.6vmin;
			.each {
				padding: 2vmin 0;
				border-bottom: 2px solid #F6F6F6;
				font-size: 4vmin;
				color: #434343;
				display: flex;
				.option {
					width: 20vmin;
					color: #858585;
					margin-right: 1vmin;
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
				font-size: 4.5vmin;
				padding: 0;
				height: 11vmin;
				width: 40vmin;
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
