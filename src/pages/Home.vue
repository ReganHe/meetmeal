/* eslint-disable */
<template>
	<div class="home">
		<div class="header">
			<div>
				<img src="../assets/auction_icon.gif" alt="">
				<span class="finish">已结束</span>
			</div>
			<div></div>
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
<style scoped>
	.home .header {
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		height: 80px;
		width: 100%;
	}
p {
	padding: 0;
	margin: 10px 0;
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
	margin: 15px 0;
}
.item > * {
	width: 50%;
}
.item .picture {
	background-image: url(../assets/image.jpg);
	background-repeat: no-repeat;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}
.item .info {
	display: flex;
	flex-direction: column;
	border: 1px solid #69019c;
	border-left: none;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	padding-right: 15px;
}
.item .title {
	font-size: 20px;
}
.item .time {
	background-color: #69019c;
	background-image: linear-gradient(to bottom right, #d496e3, #b62aff);
	color: #fff;
	padding: 5px 10px;
	margin-left: 15px;
	border-radius: 5px;
}
.item .count-down,
.item .location,
.item .price {
	color: #888;
}
.item .count-down img {
	height: 20px;
	margin-right: 10px;
}
.item .count-down .left-time {
	color: #ff2f2f;
}
.item .location img {
	height: 25px;
	margin-right: 8px;
}
.item .unit,
.item .value {
	color: #ff2f2f;
}
.item .value {
	font-weight: 600;
	font-size: 30px;
	margin: 0 5px;
}
.order-button {
	border: none;
	background-color: #69019c;
	background-image: linear-gradient(to bottom right, #d7a7e2, #b62aff);
	color: #fff;
	padding: 13px 30px;
	font-size: 18px;
	border-radius: 10px;
	box-shadow: 0px 3px #7605af;
}
</style>
