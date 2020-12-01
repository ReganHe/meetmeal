<template>
  <div class="footer">
    <ul>
      <li>
        <div v-if="pageType !== 1" @click="ch_page(1)">
			<img src="../assets/home.png" alt="home">
			<div class="h1"></div>
			<div>首页</div>
		</div>
        <router-link to="/home" v-if="pageType == 1">
          <img src="../assets/home_active.jpg" alt="home">
		  <div class="h1"></div>
          <div calss="bar-title">首页</div>
        </router-link>
      </li>
      <li>
		<div v-if="pageType !== 2" @click="ch_page(2)">
			<img src="../assets/order_icon.gif" alt="home">
			<div class="h1"></div>
			<div>订单</div>
		</div>
		<router-link to="/home" v-if="pageType == 2">
			<img src="../assets/order_active.jpg" alt="home">
			<div class="h1"></div>
			<div calss="bar-title">订单</div>
		</router-link>
      </li>
      <li class="add">
        <img src="../assets/add.png" alt="add"></li>
      <li>
        <div v-if="pageType !== 4" @click="ch_page(4)">
        	<img src="../assets/message_icon.gif" alt="home">
			<div class="h1"></div>
			<div>订单</div>
        </div>
        <router-link to="/home" v-if="pageType == 4">
        	<img src="../assets/home_active.jpg" alt="home">
			<div class="h1"></div>
        	<div calss="bar-title">订单</div>
        </router-link>
      </li>
      <li>
		<div v-if="pageType !== 5" @click="ch_page(5)">
			<img src="../assets/me_icon.gif" alt="home">
			<div class="h1"></div>
			<div>我的</div>
		</div>
		<router-link to="/home" v-if="pageType == 5">
			<img src="../assets/me_icon.gif" alt="home">
			<div class="h1"></div>
			<div calss="bar-title">我的</div>
		</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
		return {
			pageType: 1,
		}
	},
	methods:{
		ch_page (num) {
			this.pageType = num;
		}
	}
  }
</script>

<style>

.footer {
	margin: 0;
	padding: 0;
	position: fixed;
	bottom: 0;
	width: 100%;
	max-width: 1500px;
	min-width: 500px;
	padding-top: 10px;
	background: url(../assets/footer_bg.png) no-repeat;
	background-size: 100% 100%;
	background-position: -8px;
}
.footer img {
  max-width: 100%;
}
.footer .add img {
  border-radius: 50%;
}
.footer .icon {
  display: block;
}
.footer ul .bar-title {
	font-size: 22px;
	font-weight: 400;
	color: #C5C5C5;
	line-height: 9px;
}

.footer ul .h1 {
	height: 12px;
}

.footer ul {
	padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  list-style-type:none;
  font-size: 22px;
  font-weight: 400;
  color: #C5C5C5;
  line-height: 9px;
}
</style>
