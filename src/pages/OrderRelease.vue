<template>
	<div class="order-release">
		<div class="header">
			<div class="auction" :class="{'pick-up':fin}">
				<div class='sty'>
					<div class="on-sale" @click="changeStyle(1)">参与订单</div>
					<div class="fin" @click="changeStyle(2)">发布订单</div>
				</div>
			</div>
			<div class="day">
				<div :class="{'day-sty':dayType == 1}" @click="changeDay(1)">发布中</div>
				<div :class="{'day-sty':dayType == 2}" @click="changeDay(2)">待见面</div>
				<div :class="{'day-sty':dayType == 3}" @click="changeDay(3)">见面中</div>
				<div :class="{'day-sty':dayType == 4}" @click="changeDay(4)">已结束</div>
			</div>
		</div>
		<div class="body">
			<div class="list">
				<div class="l1">
					<div class="info">
						<i class="el-icon-male gender-bg">18</i>
						<span style="color:black;">上海刘亦菲</span>
					</div>
					<div class="l-time">距结束:<span class="sty-color">12:21:21</span></div>
				</div>
				<p>时间：（21:00-23:00）2小时</p>
				<p>起拍价：$30</p>
				<div class="l4">
					<div class="last-price">
						当前价：<span class="sty-color">$60</span>
					</div>
					<div class="check-person sty-color" >
						查看参与人
					</div>
				</div>
			</div>
		</div>
		<Footer/>
	</div>	
</template>

<script>
	import Footer from '../components/Footer.vue';
	export default {
		name: 'Home',
		data() {
			return {
				fin: true,
				dayType: 1,
				
			};
		},
		components: {
			Footer
		},
		methods:{
			changeStyle (num) {
				if (num == 1) {
					this.fin = true;
				}
				if (num == 2) {
					this.fin = false;
				}
			},
			changeDay (num) {
				this.dayType = num;
			}
		}
	}
</script>

<style lang='less'>
	@import '../css/global.less';
	.order-release {
		.header {
			position: fixed;
			padding: 2.6vw;
			box-sizing: border-box;
			top: 0;
			background-color: #FFFFFF;
			height: 12vh;
			width: 100%;
			color:@unpick-color;
			font-size: 3.73vw;
			white-space: nowrap;
			.auction {
				width: 100%;
				&::after {
					content: '';
					width: 2.7vw;
					height: 0.9vw;
					background-color: @base-color;
					display: block;
					margin-top: 2.8vw ;
					border-radius: 10px;
					margin-left: 32vw;
				}
				.sty {
					display: flex;
					align-items: center;
					.on-sale {
						font-size: 3.6vw;
					}
					.fin {
						margin-left: 10vw;
						color: @base-color;
						font-size: 4.5vw;
					}
				}
			}
			.pick-up {
				&::after {
					margin-left: 7vw;
				}
				.sty {
					.on-sale {
						color: @base-color;
						font-size: 4.5vw;
					}
					.fin {
						color: @unpick-color;
						font-size: 3.6vw;
					}
					.pic {
						width: 5vw;
						height: 5vw;
					}
				}
			}
			.day {
				display: flex;
				justify-content: flex-start;
				margin-top: 2vw;
				div {
					margin-right: 10px;
					padding: 1.6vw;
				}
				.day-sty {
					background-color: #F1F1F1;
					border-radius: 3vw;
				}
			}
		}
		.body{
			margin-top: 14vh;
			width: 100%;
			.list {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 42vw;
				background: #F1F1F1;
				box-sizing: border-box;
				margin: 3vh 3vw;
				font-size: 3.7vw;
				font-weight: 400;
				color: @unpick-color;
				padding: 3vw;
				border-radius: 2vw;
				p {
					margin: 0;
					padding: 0;
				}
				.sty-color {
					color: @base-color;
				}
				.l1 {
					display: flex;
					justify-content: space-between;
					.gender-bg {
						background: @female-color;
						padding: 0.5vw 0.5vw;
						border-radius: 1vw;
						color: white;
						margin-right: 2vw;
					}
				}
				.l4 {
					display: flex;
					justify-content: space-between;
					.check-person {
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>
