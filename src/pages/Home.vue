/* eslint-disable */
<template>
	<div class="home">
		<div class="header">
			<div class="type">
				<div class="auction" >
					<img src="../assets/auction_icon.gif" alt="">
					<span class="finish">拍卖中</span>
					<span class="fin">已结束</span>
				</div>
				<div><i class="el-icon-search"></i></div>
			</div>
			<div class="day">
				<div>全部</div>
				<div>今天</div>
				<div>明后天</div>
				<div>本周末</div>
				<div>将结束</div>
			</div>
		</div>
		<section>
			<ul class="items">
				<li class="item">
					<div class="picture"></div>
					<div class="info">
						<p>
							<span class="title">今日晚餐</span>
							<span class="time">1.5小时</span>
						</p>
						<p class="count-down">
							<img src="../assets/count_down.jpg" alt="" />
							距结束
							<span class="left-time">12:30:59</span>
						</p>
						<p class="location">
							<img src="../assets/location_icon.jpg" alt="" />
							上海市
						</p>
						<p class="price">
							<span>当前价</span>
							<span class="unit">$</span>
							<span class="value">60</span>
							<span>(V00851)</span>
						</p>
						<p><button class="order-button">我要竞拍</button></p>
					</div>
				</li>
				<li class="item">
					<div class="picture"></div>
					<div class="info">
						<p>
							<span class="title">今日晚餐</span>
							<span class="time">1.5小时</span>
						</p>
						<p class="count-down">
							<img src="../assets/count_down.jpg" alt="" />
							距结束
							<span class="left-time">12:30:59</span>
						</p>
						<p class="location">
							<img src="../assets/location_icon.jpg" alt="" />
							上海市
						</p>
						<p class="price">
							<span>当前价</span>
							<span class="unit">$</span>
							<span class="value">60</span>
							<span>(V00851)</span>
						</p>
						<p><button class="order-button">我要竞拍</button></p>
					</div>
				</li>
				<li class="item">
					<div class="picture"></div>
					<div class="info">
						<p>
							<span class="title">今日晚餐</span>
							<span class="time">1.5小时</span>
						</p>
						<p class="count-down">
							<img src="../assets/count_down.jpg" alt="" />
							距结束
							<span class="left-time">12:30:59</span>
						</p>
						<p class="location">
							<img src="../assets/location_icon.jpg" alt="" />
							上海市
						</p>
						<p class="price">
							<span>当前价</span>
							<span class="unit">$</span>
							<span class="value">60</span>
							<span>(V00851)</span>
						</p>
						<p><button class="order-button">我要竞拍</button></p>
					</div>
				</li>
				<li class="item">
					<div class="picture"></div>
					<div class="info">
						<p>
							<span class="title">今日晚餐</span>
							<span class="time">1.5小时</span>
						</p>
						<p class="count-down">
							<img src="../assets/count_down.jpg" alt="" />
							距结束
							<span class="left-time">12:30:59</span>
						</p>
						<p class="location">
							<img src="../assets/location_icon.jpg" alt="" />
							上海市
						</p>
						<p class="price">
							<span>当前价</span>
							<span class="unit">$</span>
							<span class="value">60</span>
							<span>(V00851)</span>
						</p>
						<p><button class="order-button">我要竞拍</button></p>
					</div>
				</li>
			</ul>
		</section>
		<Footer/>
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
	name: 'Home',
	data() {
		return {};
	},
	components: {
		Footer
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
	@import '../css/global.less';
	
	.home .header {
		position: fixed;
		padding: 2.6vw;
		box-sizing: border-box;
		top: 0;
		background-color: #FFFFFF;
		height: 19vw;
		width: 100%;
		color:@unpick-color;
		font-size: 3.73vw;
		.type {
			display: flex;
			justify-content: space-between;
		}
		.auction {
			.fin {
				margin-left: 10vw;
			}
			img {
				width: 4vw;
				height: 5vw;
			}
		}
		.day {
			display: flex;
			justify-content: flex-start;
			div {
				margin-right: 10px;
				padding: 2.6vw;
			}
		}
	}
	p {
		padding: 0;
		margin: 1.3vw 0;
	}
	img {
		vertical-align: top;
	}
	.items {
		margin-bottom: 150px;
	}
	.item {
		display: flex;
		text-align: right;
		margin: 2vw 0;
	}
	.item > * {
		width: 50%;
	}
	.item .picture {
		background-image: url(../assets/image.jpg);
		background-repeat: no-repeat;
		border-top-left-radius: 2vw;
		border-bottom-left-radius: 2vw;
	}
	.item .info {
		display: flex;
		flex-direction: column;
		border: 1px solid #69019c;
		border-left: none;
		border-top-right-radius: 1.3vw;
		border-bottom-right-radius: 1.3vw;
		padding-right: 2vw;
	}
	.item .title {
		font-size: 2.66vw;
	}
	.item .time {
		background-color: #69019c;
		background-image: linear-gradient(to bottom right, #d496e3, #b62aff);
		color: #fff;
		padding: 0.67vw 1.3vw;
		margin-left: 2vw;
		border-radius: 0.67vw;
	}
	.item .count-down,
	.item .location,
	.item .price {
		color: #888;
	}
	.item .count-down img {
		height: 2.66vw;
		margin-right: 1.3vw;
	}
	.item .count-down .left-time {
		color: #ff2f2f;
	}
	.item .location img {
		height: 3.33vw;
		margin-right: 1vw;
	}
	.item .unit,
	.item .value {
		color: #ff2f2f;
	}
	.item .value {
		font-weight: 600;
		font-size: 4vw;
		margin: 0 0.67vw;
	}
	.order-button {
		border: none;
		background-color: #69019c;
		background-image: linear-gradient(to bottom right, #d7a7e2, #b62aff);
		color: #fff;
		padding: 1.73vw 4vw;
		font-size: 2.4vw;
		border-radius: 1.3vw;
		box-shadow: 0px 3px #7605af;
	}
</style>
