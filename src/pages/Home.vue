<template>
	<div class="mint-footer">
		<mt-tab-container class="page-tabbar-container" v-model="selected">
			<mt-tab-container-item id="t1">
				<Home/>
			</mt-tab-container-item>
			<mt-tab-container-item id="t2" timeout="3000">
				<vue-lazy-component>
					<OrderRelease/>
				</vue-lazy-component>
			</mt-tab-container-item>
			<mt-tab-container-item id="t3">
				tab3
			</mt-tab-container-item>
			<mt-tab-container-item id="t4">
				tab4
			</mt-tab-container-item>
			<mt-tab-container-item id="t5" timeout="5000">
				<vue-lazy-component>
				<Mine/>
				</vue-lazy-component>
			</mt-tab-container-item>
		</mt-tab-container>
		
		<div class="f-bg">
			<mt-tabbar v-model="selected" >
				<mt-tab-item id="t1" @click.native="ch_page(1)">
					<img v-if="pageType !== 1" slot="icon" src="../assets/home.png">
					<img v-if="pageType == 1" slot="icon" src="../assets/home_active.jpg">
					首页
				</mt-tab-item>
				<mt-tab-item id="t2" @click.native="ch_page(2)">
					<img v-if="pageType !== 2" slot="icon" src="../assets/order_icon.gif">
					<img v-if="pageType == 2" slot="icon" src="../assets/order_active.jpg">
					订单
				</mt-tab-item>
			  <mt-tab-item class="add" id="t3" @click.native="ch_page(3)">
				<div>
					<el-button class="but">+</el-button>
				</div>
			  </mt-tab-item>
			  <mt-tab-item id="t4" @click.native="ch_page(4)">
				<img v-if="pageType !== 4" slot="icon" src="../assets/message_icon.gif">
				<img v-if="pageType == 4" slot="icon" src="../assets/message_icon.gif">
				消息
			  </mt-tab-item>
			  <mt-tab-item id="t5" @click.native="ch_page(5)">
				<img v-if="pageType !== 5" slot="icon" src="../assets/me_icon.gif">
				<img v-if="pageType == 5" slot="icon" src="../assets/me_icon.gif">
				我的
			  </mt-tab-item>
			</mt-tabbar>
		</div>
	</div>
</template>

<script>
	import Home from '../components/Home.vue';
	import OrderRelease from '../components/OrderRelease.vue';
	import Mine from '../components/Mine.vue';
	export default {
		data() {
		  return {
			selected: 't1',
			pageType: 1,
		  };
		},
		components:{
			Home,
			OrderRelease,
			Mine,
		},
		methods:{
			ch_page (num) {
				this.pageType = num;
			},
			// go (num,page) {
			// 	if ( page != "/home") {
			// 		this.$router.push(page)
			// 	}
			// }
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
