/* eslint-disable */
<template>
	<div class="home">
		<div class="header">
			<div class="auction" :class="{'pick-up':fin}">
				<div class='sty'>
					<div v-if="fin" class="pic"><img src="../assets/auction_icon.gif" alt=""></div>
					<div v-else class="pic"><img src="../assets/auction_icon.gif" alt=""></div>
					<div class="on-sale" @click="changeStyle(1)">拍卖中</div>
					<div class="fin" @click="changeStyle(2)">已结束</div>
					<div class="search"><i class="el-icon-search"></i></div>
				</div>
			</div>
			<div class="day">
				<div :class="{'day-sty':dayType == 1}" @click="changeDay(1)">全部</div>
				<div :class="{'day-sty':dayType == 2}" @click="changeDay(2)">今天</div>
				<div :class="{'day-sty':dayType == 3}" @click="changeDay(3)">明后天</div>
				<div :class="{'day-sty':dayType == 4}" @click="changeDay(4)">本周末</div>
				<div :class="{'day-sty':dayType == 5}" @click="changeDay(5)">将结束</div>
			</div>
		</div>
		<div class="content">
			<div class="with-img">
				<i class="el-icon-location-outline">1.8 Mile</i>
			</div>
			<div class="info"></div>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
	@import '../css/global.less';
	.home {
		padding-top: 26vw;
	}
	
	.home .header {
		position: fixed;
		padding: 2.6vw;
		box-sizing: border-box;
		top: 0;
		background-color: #FFFFFF;
		height: 26vw;
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
				margin-top: 3.86vw ;
				border-radius: 10px;
				margin-left: 30.5vw;
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
				.pic {
					width: 4vw;
					height: 4vw;
					overflow: hidden;
					img {
						width: 100%;
					}
				}
				.search {
					margin-left: auto;
					color: @base-color;
				}
			}
		}
		.pick-up {
			&::after {
				margin-left: 10vw;
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

	.home .content {
		width: 100%;
		padding-left: 3vw;
		padding-right: 3vw;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		.with-img {
			width: 50%;
			height: 46vw;
			background: url(../assets/img.jpg) no-repeat scroll left center / 100% 46vw;	
			border-radius: 1.9vw 0px 0px 1.9vw;
		}
		.info {
			width: 50%;
			border-radius: 0px 1.9vw 1.9vw 0px;
			border: 1px solid @base-color;
			border-left: none;
			height: 46vw;
		}
	}
</style>
