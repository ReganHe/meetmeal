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
			@changed="chImg(index)"
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
			chImg(index) {
				console.log(111)
			}
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';

	.publish {
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
	}
</style>
