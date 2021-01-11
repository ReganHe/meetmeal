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
          <img src="../assets/home_active.png" alt="home">
		  <div class="h1"></div>
          <div class="bar-title">首页</div>
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
			<div class="bar-title">订单</div>
		</router-link>
      </li>
      <li class="add">
        <div>
			<el-button class="but">+</el-button>
		</div>
      <li>
        <div v-if="pageType !== 4" @click="ch_page(4)">
        	<img src="../assets/message_icon.gif" alt="home">
			<div class="h1"></div>
			<div>消息</div>
        </div>
        <router-link to="/home" v-if="pageType == 4">
        	<img src="" alt="home">
			<div class="h1"></div>
        	<div class="bar-title">消息</div>
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
			<div class="bar-title">我的</div>
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

<style lang='less'>
@import '../css/global.less';

.footer {
	margin: 0;
	padding: 0;
	position: fixed;
	bottom: 0;
	width: 100%;
	padding-top: 1.3vmin;
	background: url(../assets/footer_bg.png) no-repeat;
	background-size: 100% 100%;
	.mm-width;
	.add {
		div {
			width: 15.5vmin;
			height: 15vmin;
			background: linear-gradient(-39deg, rgba(104, 2, 156, 0.26), rgba(206, 110, 226, 0.26));
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			.but {
				width: 11.7vmin;
				height: 11.7vmin;
				background: linear-gradient(-39deg, #68029C, #CE6EE2);
				border-radius: 50%;
				color: white;
				font-size: 9.6vmin;
				padding: 0;
			}
		}
	}
}
.footer img {
  max-width: 100%;
}
.footer .icon {
  display: block;
}
.footer .bar-title {
	font-size: 2.93vmin;
	font-weight: 400;
	color: #701284;
	line-height: 1.2vmin;
}

.footer ul .h1 {
	height: 1.6vmin;
}

.footer ul {
	padding: 0 6.66vmin;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  list-style-type:none;
  font-size: 2.93vmin;
  font-weight: 400;
  color: #C5C5C5;
  height: 12.67vmin;
  line-height: 1.2vmin;
  li {
	  width: 7vmin;
	  height: 10vmin;
	  div {
		white-space: nowrap;
	  }
  }
  .add {
	  width: 15vmin;
	  height: 15vmin;
  }
  a {
  	text-decoration: none;
  }
}
</style>
