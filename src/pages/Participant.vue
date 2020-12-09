<template>
	<div class="participant">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<div class="part-info">
			<div v-show="true" class="user">
				<div class="user-info">
					<div class="h-img">
						<img src="../assets/999.jpg" alt="">
					</div>
					<div class="info">
						<div class="name">
							<span>开心麻花</span>
							<i class="el-icon-male">18</i>
						</div>
						<div class="type">投资人</div>
					</div>
				</div>
				<div class="detail">
					<p class="sty">出价：80</p>
					<p>2小时前</p>
				</div>
			</div>
			<div v-show="false" class="no-part">
				<i class="el-icon-warning-outline" style="font-size: 21vw;"></i>
				<p>暂无参与人</p>
			</div>
		</div>
		<div v-show="true" class="p-bottom">
			<p>无合适参与人，放弃餐遇</p>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	export default {
		data () {
			return{
				'titleName':'参与人',
			}
		},
		components:{
			HeaderBar
		},
		methods:{
			back () {
				this.$router.go(-1)
			}
 		}
	}
</script>

<style lang='less'>
	@import '../css/global.less';
	
	.participant {
		width: 100%;
		background-color: #F1F1F1;
		min-height: 100vh;
		p {
			margin: 0;
			padding: 0;
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
				font-size: 4vw;
				color: @unpick-color;
				.user-info{
					display: flex;
					.h-img {
						width: 16vw;
						height: 16vw;
						overflow: hidden;
						border-radius: 50%;
						img {
							width: 100%;
						}
					}
					.info {
						padding: 1.5vw 0;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 5vw;
						.name {
							font-weight: 500;
							color: #333333;
							.el-icon-male,el-icom.female{
								padding: 0.5vw;
								background-color: #3182FD;
								color: #FFFFFF;
								border-radius: 1.5vw;
								margin-left: 2vw;
							}
							.el-icom.female {
								background-color: #FE6491;
							}
						}
					}
				}
				.detail {
					padding: 1.5vw 0;
					text-align: right;
					.sty {
						color: @base-color;
					}
				}
			}
			.no-part {
				margin-top: 50vw;
				color: @base-color;
				text-align: center;
				font-size: 4vw;
				p {
					margin-top: 4vw;
				}
			}
		}
		.p-bottom {
			position: fixed;
			height: 15vw;
			width: 100%;
			bottom: 0;
			text-align: center;
			background-color: #FFFFFF;
			color: @base-color;
			display: table;
			font-size: 4.3vw;
			p {
				vertical-align: middle;
				display: table-cell;
			}
		}
	}
	
</style>
