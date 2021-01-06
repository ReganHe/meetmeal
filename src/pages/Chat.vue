<template>
	<div class="chat">
		<div class="h-chat">
			<i class="el-icon-arrow-left" @click="goBack()"></i>
			<div class="name">{{chatList.name}}</div>
			<el-dropdown trigger="click">
				<i class="el-icon-more"></i>
				<el-dropdown-menu slot="dropdown">
				    <el-dropdown-item>
						置顶聊天
					</el-dropdown-item>
				    <el-dropdown-item>设置备注名</el-dropdown-item>
				    <el-dropdown-item>举报该用户</el-dropdown-item>
					<el-dropdown-item>加入黑名单</el-dropdown-item>
					<el-dropdown-item>清除聊天记录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
		<div class="c-list">
			<div v-for="item in chatList.Msg" class="con">
				<div v-if="item.id == 1" class="firend">
					<div class="h-img">
						<img :src=chatList.img alt="">
					</div>
					<div class="status"></div>
					<div class="info">
						<div class="time">{{item.time}}</div>
						<div class="msg">
							{{item.msg}}
						</div>
					</div>
				</div>
				<div v-if="item.id == 2" class="mine">
					<div class="h-img">
						<img :src=chatList.mineImg alt="">
					</div>
					<div class="info">
						<div class="time">{{item.time}}</div>
						<div class="msg">
							{{item.msg}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="input">
			<div><img src="../assets/mic.png" alt=""></div>
			<el-input v-model="input" placeholder="请输入内容"></el-input>
			<div><img src="../assets/smile.png" alt=""></div>
			<div><img src="../assets/add-circle.png" alt=""></div>
		</div>
	</div>
</template>

<script>
	import {getChatList} from '../api/msg.js'
	
	export default {
		data(){
			return {
				input:"",
				chatList:[],
			}
		},
		mounted() {
			var mid = this.$route.query.mid
			getChatList().then(resp => {
				let data = resp.data.data
				var chat = data.find(
					function(item, index) {
						if (item.mid == mid){
							return item
						}
					}
				)
				this.chatList = chat
			});
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
	.chat {
		.h-chat {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 4.1vmin;
			height: @h-height;
			.mm-width;
			position: fixed;
			box-sizing: border-box;
			width: 100%;
			background-color: #FFFFFF;
			z-index: 10;
			.name {
				font-size: 4.7vmin;
				font-weight: 400;
				color: #1D1E2C;
			}
			i {
				font-size: 6vmin;
				line-height: @h-height;
			}
		}
		.c-list {
			padding: 16vmin 0;
			min-height: 100vh;
			box-sizing: border-box;
			background-color: #EDEDED;
		}
		.con {
			.firend,.mine {
				display: flex;
				justify-content: flex-start;
				align-items: flex-end;
				position: relative;
				.h-img {
					width: 11vmin;
					height: 11vmin;
					overflow: hidden;
					border-radius: 50%;
					margin: 0 2vmin;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.status {
					width: 3.2vmin;
					height: 3.2vmin;
					background-color: #2EE22E;
					border: 0.4vmin solid #FFFFFF;
					border-radius: 50%;
					position: absolute;
					bottom: -0.5vmin;
					left: 9vmin;
				}
				.info {
					width: 70vmin;
					.time {
						text-align: center;
						color: #69707F;
						font-size: 3.2vmin;
						margin: 3vmin;
					}
					.msg{
						border-radius: 4.3vmin 4.3vmin 4.3vmin 1vmin;
						padding: 3.2vmin 4.2vmin;
						font-size: 3.7vmin;
						line-height: 5.6vmin;
						color: #FFFFFF;
						background-color: @base-color;
					}
				}
			}
			.mine {
				flex-direction: row-reverse;
				.msg {
					border-radius: 4.3vmin 4.3vmin 1vmin 4.3vmin !important;
					background: #F7F7FB !important;
					color: #1D1E2C !important;
				}
			}
		}
		.input {
			position: fixed;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 15vmin;
			background-color: #F8F8F8;
			.mm-width;
			width: 100%;
			padding: 0 2.5vmin;
			box-sizing: border-box;
			div {
				width: 6.9vmin;
				height: 6.9vmin;
				overflow: hidden;
				img {
					width: 100%;
				}
			}
			.el-input {
				background-color: #FFFFFF;
				width: 68vmin;
				height: 11vmin;
				.el-input__inner:focus {
					border-color: #C0C4CC;
				}
			}
		}
	}
</style>
