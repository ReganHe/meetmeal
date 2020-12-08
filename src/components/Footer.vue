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
        	<img src="../assets/home_active.jpg" alt="home">
			<div class="h1"></div>
        	<div calss="bar-title">消息</div>
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

<style lang='less'>

.footer {
	margin: 0;
	padding: 0;
	position: fixed;
	bottom: 0;
	width: 100%;
	padding-top: 1.3vw;
	background: url(../assets/footer_bg.png) no-repeat;
	background-size: 100% 100%;
	.add {
		div {
			width: 15vw;
			height: 15vw;
			background: linear-gradient(-39deg, rgba(104, 2, 156, 0.26), rgba(206, 110, 226, 0.26));
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			.but {
				width: 11.7vw;
				height: 11.7vw;
				background: linear-gradient(-39deg, #68029C, #CE6EE2);
				border-radius: 50%;
				color: white;
				font-size: 9.6vw;
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
.footer ul .bar-title {
	font-size: 2.93vw;
	font-weight: 400;
	color: #C5C5C5;
	line-height: 1.2vw;
}

.footer ul .h1 {
	height: 1.6vw;
}

.footer ul {
	padding: 0 6.66vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  list-style-type:none;
  font-size: 2.93vw;
  font-weight: 400;
  color: #C5C5C5;
  height: 12.67vw;
  line-height: 1.2vw;
  li {
	  width: 7vw;
	  height: 10vw;
	  div {
		white-space: nowrap;
	  }
  }
  .add {
	  width: 15vw;
	  height: 15vw;
  }
  a {
  	text-decoration: none;
  }
}
</style>
