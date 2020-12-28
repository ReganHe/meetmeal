<template>
	<div class="mint-footer">
		<mt-tab-container class="page-tabbar-container" v-model="selected">
			<mt-tab-container-item id="home">
				<Main/>
			</mt-tab-container-item>
			<mt-tab-container-item id="order-release" timeout="3000">
				<vue-lazy-component>
					<OrderRelease/>
				</vue-lazy-component>
			</mt-tab-container-item>
			<mt-tab-container-item id="publish">
				<vue-lazy-component>
					<Publish/>
				</vue-lazy-component>
			</mt-tab-container-item>
			<mt-tab-container-item id="msg">
				暂无页面设计
			</mt-tab-container-item>
			<mt-tab-container-item id="mine" timeout="5000">
				<vue-lazy-component>
				<Mine/>
				</vue-lazy-component>
			</mt-tab-container-item>
		</mt-tab-container>
		
		<div class="f-bg">
			<mt-tabbar v-model="selected" >
				<mt-tab-item id="home" @click.native="ch_page('home')">
					<img v-if="pageType != 'home'" slot="icon" src="../assets/home.png">
					<img v-if="pageType == 'home'" slot="icon" src="../assets/home_active.jpg">
					首页
				</mt-tab-item>
				<mt-tab-item id="order-release" @click.native="ch_page('order-release')">
					<img v-if="pageType != 'order-release'" slot="icon" src="../assets/order_icon.gif">
					<img v-if="pageType == 'order-release'" slot="icon" src="../assets/order_active.jpg">
					订单
				</mt-tab-item>
			  <mt-tab-item class="add" id="publish" @click.native="ch_page('publish')">
				<div>
					<el-button class="but">+</el-button>
				</div>
			  </mt-tab-item>
			  <mt-tab-item id="msg" @click.native="ch_page('msg')">
				<img v-if="pageType != 'msg'" slot="icon" src="../assets/message_icon.gif">
				<img v-if="pageType == 'msg'" slot="icon" src="../assets/message_icon.gif">
				消息
			  </mt-tab-item>
			  <mt-tab-item id="mine" @click.native="ch_page('mine')">
				<img v-if="pageType != 'mine'" slot="icon" src="../assets/me_icon.gif">
				<img v-if="pageType == 'mine'" slot="icon" src="../assets/me_icon.gif">
				我的
			  </mt-tab-item>
			</mt-tabbar>
		</div>
	</div>
</template>

<script>
	import Main from '../components/Main.vue';
	import OrderRelease from '../components/OrderRelease.vue';
	import Publish from '../components/Publish.vue'
	import Mine from '../components/Mine.vue';
	export default {
		data() {
		  return {
			selected: 'home',
			pageType: 'home',
		  };
		},
		components:{
			Main,
			Publish,
			OrderRelease,
			Mine,
		},
		mounted(){
			let page = this.$route.query.page
			if (!page){
				this.pageType = 'home'
			}else {
				this.ch_page(page)
				this.selected = page
			}
		},
		methods:{
			ch_page (page) {
				this.$store.commit('changePage',page)
				this.pageType = page
				this.selected = page
			},
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';
	.mint-footer {
		.f-bg {
			margin: 0;
			padding: 0;
			width: 100%;
			height: 25vmin;
			.mm-width;
			background: url(../assets/footer_bg.png) no-repeat;
			background-size: 100% 100%;
			height: 21vmin;
			position: fixed;
			bottom: 0;
			.mint-tabbar {
				align-items: flex-end;
				justify-content: space-between;
				background-color:transparent;
				height: 0;
				> .mint-tab-item.is-selected {
					background-color:transparent;
					.mint-tab-item-label {
						font-size: 2.93vmin;
						font-weight: 600;
						color: #701284;
						font-size: 3vmin;
					}
				}
				.mint-tab-item {
					padding-bottom: 2vmin;
					.mint-tab-item-icon {
						width: 7vmin;
						height: 8vmin;
					}
					.mint-tab-item-label {
						font-size: 3vmin;
					}
				}
				img {
					
				}
				.add {
					display: flex;
					align-items: center;
					justify-content: center;
					.mint-tab-item-icon {
						display: none;
					}
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
		}
	}
</style>
