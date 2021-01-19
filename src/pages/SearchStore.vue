<template>
	<div class="restaurant">
		<div class="headline">
			<div class="header">
				<i class="el-icon-arrow-left"></i>
				<p>餐遇门店地址</p>
				<p class="add">添加新门店</p>
			</div>
			<div class="search">
				<el-input
				size="small"
				  placeholder="请输入搜索内容"
				  v-model="search"
				  clearable
				  suffix-icon="el-icon-search">
				</el-input>
			</div>
			<div class="type">
				<div class="lunch" @click="changeType(1)" :class="{'is-select' : type == '1'}">
					午餐晚餐店
					<div  class="bottom"></div>
				</div>
				<div class="tea" @click="changeType(2)" :class="{'is-select' : type == '2'}">
					下午茶店
					<div class="bottom"></div>
				</div>
			</div>
		</div>
		<div class="store-list">
			<div v-show="type == '1'">
				<div class="store-info">
					<div class="store-name">
						海底捞HaiDiLao HotPot
					</div>
					<div class="address">
						<span class="s-title">地址：</span>
						<span class="info">19409 Stevens Creek Blvd Cupertino CA 95014</span>
					</div>
					<div class="phone">
						<span class="s-title">电话：</span>
						<span class="info">609-230-3117</span>
					</div>
					<div class="option">
						<el-button size="mini">删除</el-button>
						<el-button size="mini">编辑</el-button>
						<el-button size="mini" class="confirm">选定</el-button>
					</div>
				</div>
			</div>
			<div v-show="type == '2'">
				<div class="no-data">
					<div class="icon">
						<img src="../assets/none.png" alt="">
					</div>
				</div>
				<div v-show="false" class="store-info">
					<div class="store-name">
						海底捞HaiDiLao HotPot
					</div>
					<div class="address">
						<span class="s-title">地址：</span>
						<span class="info">19409 Stevens Creek Blvd Cupertino CA 95014</span>
					</div>
					<div class="phone">
						<span class="s-title">电话：</span>
						<span class="info">609-230-3117</span>
					</div>
					<div class="option">
						<el-button size="mini">删除</el-button>
						<el-button size="mini">编辑</el-button>
						<el-button size="mini" class="confirm">选定</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				search:"",
				type:"1",
			}
		},
		methods:{
			changeType(num){
				this.type = num
			}
		}
	}
</script>

<style lang="less">
	@import "../css/global.less";
	
	.restaurant {
		p {
			margin: 0;
		}
		.headline {
			height: 40vmin;
		}
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 4.2vmin;
			font-weight: 600;
			padding: 5vmin;
			.el-icon-arrow-left {
				width: 18vmin;
				font-size: 4vmin;
				font-weight: 900;
			}
			.add {
				width: 18vmin;
				font-size: 3.5vmin;
				color: @wallet-color;
				align-self: flex-end;
			}
		}
		.search {
			padding: 0 6vmin;
			.el-input{
				.el-input__inner {
					color: #666666;
					background-color: #F6F6F6;
					&:focus{
						border-color: @wallet-color;
					}
				}
				.el-input__suffix {
					color: @wallet-color;
				}
			}
		}
		.type {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1vmin;
			font-size: 4,5px;
			font-weight: 400;
			color: #999999;
			.lunch {
				margin-right: 20vmin;
				padding: 2vmin;
			}
			.lunch , .tea {
				.bottom {
					border-radius: 2px;
					height: 5px;
					background-color: #FFFFFF;
					width: 100%;
					margin-top: 2vmin;
				}
			}
			.is-select {
				color: @base-color;
				.bottom {
					background-color: @base-color;
					transform-origin: center center;
					transform: scale3d(0.2,1,0.2);
					transition: all 0.5s;
				}
			}
		}
		.store-list {
			height: calc(100vh - 40vmin);
			background-color: #F6F6F6;
			padding: 3vmin 4vmin 0 4vmin;
			font-size: 3.8vmin;
			.no-data {
				box-sizing: border-box;
				.icon{
					box-sizing: border-box;
					width: 40vmin;
					margin: auto;
					padding-top: 50%;
					overflow: hidden;
					img {
						width: 100%;
					}
				}				
			}
			.store-info {
				margin-bottom: 3vmin;
				padding: 4vmin 4vmin 0 4vmin;
				background-color: #FFFFFF;
				border-radius: 2vmin;
				.store-name{
					font-size: 4.5vmin;
					font-weight: 600;
					margin-bottom: 7vmin;
				}
				.address{
					margin-bottom: 5vmin;
				}
				.s-title {
					color: #999999;
				}
				.phone {
					margin-bottom: 3vmin;
				}
				.info {
					color: @base-color;
					text-decoration: underline;
				}
				.option {
					border-top: 1px solid #E5E5E5;
					padding: 2vmin 0;
					display: flex;
					justify-content: flex-end;
					.el-button{
						color: #999999;
						&:focus, &:hover {
							color: @base-color;
							border-color: @base-color;
							background-color: #FFFFFF;
						}
						&:active {
							color: white;
							border-color: @base-color;
							background-color: #C12BE2;
						}
					}
					.confirm {
						color: white;
						border-color: @base-color;
						background-color: #C12BE2;
						&:focus, &:hover {
							color: @base-color;
							border-color: @base-color;
							background-color: #C12BE2;
							color: white;
						}
					}
				}
			}
		}
	}
</style>
