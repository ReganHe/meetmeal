<template>
	<div class="publish">
		<div class="p-header">
			发布餐遇
			<i class="el-icon-question"></i>
		</div>

		<div class="s-type">
			<carousel
			class="type"
			:pullDrag= "true"
			:items="1"
			:nav="false"
			:stagePadding="25"
			:dots="false"
			@changed="chImg()"
			>
			<div class="img-options">
				<img src="../assets/999.jpg" alt="">
				<p class="s-cn">早餐时间</p>
				<p class="s-en">Breakfast Time</p>
				</div>
			<div class="img-options">
				<img src="../assets/bg.jpg" alt="">
				<p class="s-cn">午餐时间</p>
				<p class="s-en">Lunch Time</p>
				</div>
			<div class="img-options">
				<img src="../assets/m-bg.jpg" alt="">
				<p class="s-cn">晚餐时间</p>
				<p class="s-en">Dinner Time</p>
				</div>
			</carousel>
		</div>
		<div class="p-cont">
			<el-button 
			class="but-sty" 
			icon="el-icon-caret-bottom"
			@click="timePop = true">选择竞拍时间/时长</el-button>
			<el-input
			    placeholder="您选择后自动生成具体时间"
			    v-model="input1">
			</el-input>
			<el-button 
			class="but-sty" 
			@click="localPop = true"
			icon="el-icon-caret-bottom">选择见面城市</el-button>
			<el-input
			    placeholder="使用当前定位城市（地区）"
			    prefix-icon="el-icon-location-outline"
			    v-model="input2">
			</el-input>
			<el-button @click="pricePop = true"
			class="but-sty" 
			icon="el-icon-caret-bottom">选择起拍价</el-button>
			<el-input
			    placeholder="请选择起拍价"
			    v-model="input3">
			</el-input>
			<div class="tip">
				拍卖结束时间为见面时间前3个小时，距离结束11:59:59
			</div>
			<div class="but-pub" >
				<el-button @click="publishPop = true" class="but-sty" style="text-align: center;" >发布</el-button>
			</div>
		</div>
		<mt-popup
			class="select-time"
		  v-model="timePop"
		  position="bottom">
		  <div class="pop-title">
			  <span @click="timePop = false">取消</span>
			  <span style="color: #333333;">见面开始时间</span>
			  <span @click="setTime()" style="color: #C12BE2;">确认</span>
		  </div>
		  <mt-picker class="s-day" 
		  :slots="slot1" 
		  :visibleItemCount = 3
		  @change="selectTime"></mt-picker>
		  <div style="width: 100%;text-align: center;">时长</div>
		  <mt-picker 
		  class="s-hour" 
		  :slots="slot2" 
		  @change="selectLong"
		  :visibleItemCount = 3></mt-picker>
		  <div style="width: 100%;text-align: center;font-size: 4vmin;margin: 4vmin 0;">
			{{s_day}} {{fin_hour}}:{{fin_min}} 结束</div>
		</mt-popup>
		<mt-popup
			class="select-local"
		  v-model="localPop"
		  position="bottom">
		  <div class="pop-title">
			  <span @click="localPop = false">取消</span>
			  <span style="color: #333333;">选择见面城市</span>
			  <span @click="setLocal()" style="color: #C12BE2;">确认</span>
		  </div>
		  <mt-picker class="s-local" 
		  :slots="local" 
		  :visibleItemCount = 5
		  @change="selectLocal"></mt-picker>
		</mt-popup>
		<mt-popup
			class="select-price"
		  v-model="pricePop"
		  position="bottom">
		  <div class="pop-title">
			  <span @click="pricePop = false">取消</span>
			  <span @click="setPrice()" style="color: #C12BE2;">确认</span>
		  </div>
		  <mt-picker class="s-price" 
		  :slots="price" 
		  :visibleItemCount = 5
		  @change="selectPrice"></mt-picker>
		</mt-popup>
		<mt-popup
		  v-model="publishPop"
		  class="publish-pop">
			<div class="pic">
				<i class="el-icon-position"></i>
			</div>
			<p class="pub-title">发布订单</p>
			<div class="pub-con">
				<p>日期：10/28/2019 (星期一)</p>
				<p>时长：2小时（21:00-23:00)</p>
				<p>城市：San Jose</p>
				<p>起拍价：$30</p>
				<el-button class="but">确认发布</el-button>
			</div>
			<div class="close" @click="publishPop = false"><i class="el-icon-circle-close"></i></div>
		</mt-popup>
		<mt-popup
		  v-model="depositPop"
		  class="deposit-pop">
			<p class="dep-title">为保证竞拍真实性和双方利益<br>竞拍人和参拍人均需支付竞拍保证金</p>
			<p class="sub-title">参拍保证金<span style="color:#13A500;">退还规则</span></p>
			<p class="p-con">1.参拍后没有最终胜出，在参拍倒计时结束后48小 时之内退还给参拍人。<br>
			 2.参拍后能够按时见面并完成订单，此保证金可以 在支付</p>
			<p class="sub-title">参拍保证金<span style="color:#D31515;">扣除规则</span></p>
			<p class="p-con">1.参拍胜出后，强制取消订单。或没有在约定的时 间与竞拍人见面，经核实后扣除竞拍保证金。</p>
			<p class="p-con" style="text-align: center;">参拍保证金为：$12/次/人</p>
			<p class="p-con">成为餐遇VIP ，则不需要每次支付参拍保证金祥见VIP 规则。</p>
			<el-button class="but b-left" @click="depositPop = false">取消</el-button>
			<el-button class="but b-right">支付参拍保证金</el-button>
			</mt-popup>
	</div>
</template>

<script>
	import carousel from 'vue-owl-carousel';
	
	export default {
		data () {
			return {
				timePop: false,
				localPop: false,
				pricePop: false,
				publishPop: false,
				depositPop: true,
				input1: "",
				input2: "",
				input3:"",
				s_day: "",
				s_hour: "",
				s_minute: "",
				s_long:"",
				fin_hour:"00",
				fin_min: "00",
				s_local: "",
				s_price: "",
				slot1 : [{
					flex: 3,
					values: ['03月19日 星期二','03月20日 星期三', '03月21日 星期四',
					  '03月22日 星期五', '03月23日 星期六', '03月24日 星期日'],
					className: 'slot1',
					textAlign: 'left'
				},{
					flex: 1,
					values: ['01', '02', '03', '04', '05', '06'],
					className: 'slot2',
					textAlign: 'center'
				}, {
					divider: true,
					content: '时',
					className: 'divider',
					textAlign:'center',
				},{
					flex: 1,
					values: ['1', '2', '3', '4', '5', '10'],
					className: 'slot3',
					textAlign: 'center'
				},{
					divider: true,
					content: '分',
					className: 'divider',
					textAlign:'left',
				}],
				slot2: [{
					flex: 1,
					values: [0.5,1, 1.5,
					  2, 2.5, 3,3.5,4],
					className: 'slot1',
					textAlign: 'center'
				},{
					divider: true,
					content: '小时',
					className: 'divider',
					textAlign:'left',
				}],
				local: [{
					flex: 1,
					values: ["上海","广州","北京","南京","杭州","石家庄"],
					className: 'local',
					textAlign: 'center',
				}],
				price: [{
					divider: true,
					content: '$',
					className: 'divider',
					textAlign:'center',
				},{
					flex: 1,
					values: ["5","10","15","150","200","1000"],
					className: 'price',
					textAlign: 'center',
				}],
			};
		},
		components: {
			carousel
		},
		methods:{
			addZero(num, n) {
			    return (Array(n).join(0) + num).slice(-n);
			},
			selectTime (picker,values) {
				this.s_day = picker.getValues()[0];
				this.s_hour = picker.getValues()[1];
				this.s_minute = picker.getValues()[2];
				this.fin_min =  this.$options.methods.addZero(
				parseFloat(this.s_minute)+parseFloat(this.s_long,1)%1*60,2);
				this.fin_hour = this.$options.methods.addZero(
				parseInt(this.s_hour)+parseInt(this.s_long),2);
			},
			selectLong(picker,values) {
				this.s_long = picker.getValues()[0]
				this.fin_min =  this.$options.methods.addZero(
				parseFloat(this.s_minute)+parseFloat(this.s_long,1)%1*60,2);
				this.fin_hour = this.$options.methods.addZero(
				parseInt(this.s_hour)+parseInt(this.s_long),2);
			},
			setTime () {
				this.input1 = this.s_day + " " +this.fin_hour + ":"+ this.fin_min;
				this.timePop = false;
			},
			selectLocal(picker,values) {
				this.s_local = picker.getValues()[0];
			},
			setLocal() {
				this.input2 = this.s_local;
				this.localPop = false;
			},
			selectPrice(picker,values){
				this.s_price = picker.getValues()[0];
			},
			setPrice() {
				this.input3 = "$" + this.s_price;
				this.pricePop = false;
			},
			chImg() {
			}
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';

	.publish {
		padding-bottom: 20vmin;
		.p-header {
			line-height: 15vmin;
			height: @h-height;
			width: 100%;
			background-color: #FFFFFF;
			text-align: center;
			vertical-align: middle;
			display: inline-block;
			font-size: 4.5vmin;
			color: @base-color;
			position: fixed;
			background-color: #FFFFFF;
			z-index: 10;
			.el-icon-question {
				position: absolute;
				right: 5vmin;
				top: 5vmin;
				font-size: 5.5vmin;
			}
		}
		.s-type {
			padding: 18vmin 0 4vmin 0;
			.type {
				.img-options{
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					height: 38vmin;
					overflow: hidden;
					margin: 0 1vmin;
					border-radius: 2vmin;
					.s-cn, .s-en {
						margin: 1.5vmin 0;
						font-size: 6.7vmin;
						font-family: FZLanTingHeiS-UL-GB;
						font-weight: 400;
						color: #FFFFFF;
					}
					.s-en {
						font-size: 4vmin;
					}
					img {
						width: 100%;
						position: absolute;
						top: 0;
						z-index: -10;
					}
				}
			}
		}
		.p-cont{
			padding: 0 5vmin;
			.but-sty {
				width: 38vmin;
				position: relative;
				padding: 3vmin 0 3vmin 2vmin;
				text-align: left;
				background-color: #B72BFE;
				color: #FFFFFF;
				border: none;
				font-size: 3.5vmin;
				.el-icon-caret-bottom {
					position: absolute;
					right: 2vmin;
				}
			}
			.el-input {
				.el-input__icon {
					color: #B72BFE;
					font-size: 6vmin;
				}
			}
			.but-sty,.el-input {
				border-radius: 1.5vmin;
				margin-bottom: 3vmin;
			}
			.tip {
				margin-top: 6.8vmin;
				font-size: 3.4vmin;
				font-family: PingFang SC;
				font-weight: 400;
				color: #999999;
			}
			.but-pub {
				text-align: center;
				margin-top: 7.5vmin;
			}
		}
		.select-time , .select-local , .select-price{
			width: 100%;
			.mm-width;
			border-radius: 2.6vmin 2.6vmin 0 0;
			padding: 0 6.5vmin;
			box-sizing: border-box;
			.picker-slot {
				font-size: 4.2vmin !important;
				font-weight: 400;
				color: #8A8989;
			}
			.picker-selected ,.divider {
				font-size: 4.8vmin;
				font-weight: 400;
				color: #151414;
			}
			.pop-title {
				display: flex;
				justify-content: space-between;
				padding: 3vmin 0;
				margin-bottom: 3vmin;
			}
		}
		.select-time {
			.s-day {
				.slot1 {
					width: 40%;
					overflow:visible;
					margin-right: 5vmin;
					.picker-item {
						width: 45vmin;
					}
				}
				.slot2 {
					.picker-item {
						width: 15vmin;
					}
				}
				.slot3 {
					.picker-item {
						width: 15vmin;
					}
				}
			}
			.s-hour {
				.picker-items {
					margin: 0 auto;
					width: 22vmin;
				}
			}
		}
		.select-price {
			.picker-items {
				width: 23vmin;
				margin: 0 auto;
			}
		}
		.publish-pop {
			border-radius: 1.5vmin;
			text-align: center;
			width: 75vmin;
			height: 91vmin;
			.pic {
				font-size: 20vmin;
			}
			.pub-title {
				font-size: 4.5vmin;
				font-weight: normal;
				color: #B928FD;
			}
			.pub-con {
				padding: 0 10vmin;
				text-align: left;
				font-size: 3.7vmin;
				font-family: Adobe Heiti Std;
				font-weight: normal;
				color: #333333;
				line-height: 3.7vmin;
				.but {
					width: 100%;
					height: 10.6vmin;
					background: #B928FD;
					border-radius: 1.5vmin;
					color: #FFFFFF;
				}
			}
			.close {
				position: absolute;
				bottom: -13vmin;
				font-size: 8.7vmin;
				color: #ffffff;
				left: 33vmin;
			}
		}
		.deposit-pop {
			padding: 2.5vmin;
			width: 85vmin;
			height: 127vmin;
			font-size: 4.3vmin;
			text-align: center;
			border-radius: 2vmin;
			p {
				margin: 0 0 5vmin 0;
			}
			.dep-title {
				color: #BF28FE;
				font-weight: 600;
			}
			.sub-title {
				color: #333333;
			}
			.p-con {
				font-size: 3.8vmin;
				font-weight: 400;
				color: #666666;
				text-align: left;
				line-height: 6vmin;
			}
			.but {
				width: 35.5vmin;
				height: 13vmin;
				border-radius: 7vmin;
			}
			.b-left {
				border: 1px solid #BA2CEF;
				color: #BA2CEF;
			}
			.b-right {
				background: #B928FD;
				border: 1px solid #BA2CEF;
				color: #FFFFFF;
			}
		}
	}
</style>
