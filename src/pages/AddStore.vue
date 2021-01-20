<template>
	<div class="add-store">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<div class="info-list">
			<mt-field 
				label="店名" 
				placeholder="请输入餐厅名称"
				:disableClear="true"
				:value="store"
				type="text">
			</mt-field>
			<mt-field 
				label="街道门牌号" 
				placeholder="请输入街道门牌号" 
				type="text"
				:value="address"
				:disableClear="true"
				@click.native="popupVisible = true">
				</mt-field>
			<mt-field 
				label="城市"
				:value="c_city"
				placeholder="请选择城市"
				:readonly="true"
				@click.native="popupCity = true"
				type="text">
				<i class="el-icon-arrow-right"></i>
				</mt-field>
			<mt-field 
				label="州"
				:value="c_country"
				placeholder="请选择州"
				:readonly="true"
				@click.native="popupCountry = true"
				type="text">
				<i class="el-icon-arrow-right"></i>
				</mt-field>
			<mt-field 
				label="邮编"
				type="text"
				placeholder="请输入邮编">
			</mt-field>
			<mt-field
				label="电话"
				type="text"
				placeholder="8888888">
			</mt-field>
			<mt-popup
			  v-model="popupCity"
			  :visibleItemCount= 5
			  position="bottom">
			  <div class="pop-title">
				<span @click="popupCity = false" style="color: #8A8989;">取消</span>
				<span @click="setCity()" style="color: #C12BE2;">确认</span>
			  </div>
			  <mt-picker :slots="city" @change="selectCity" ></mt-picker>
			</mt-popup>
			<mt-popup
			  v-model="popupCountry"
			  :visibleItemCount= 5
			  position="bottom">
			  <div class="pop-title">
				<span @click="popupVisible = false" style="color: #8A8989;">取消</span>
				<span @click="setCountry()" style="color: #C12BE2;">确认</span>
			  </div>
			  <mt-picker :slots="country" @change="selectCountry" ></mt-picker>
			</mt-popup>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	export default {
		data() {
		  return {
			  'titleName':'添加我的门店',
			  popupCity:false,
			  popupCountry:false,
			  city:[{
			  	flex: 1,
			  	values:['北京','上海','广州','河北','河南','安徽','福建'],
			  	textAlign:'center',
			  }],
			  country:[{
			  	flex: 1,
			  	values:['东城区','西城区','海淀区','朝阳区','门头沟区','石景山区','丰台区'],
			  	textAlign:'center',
			  }],
			  s_city:"",
			  c_city:"",
			  s_country:"",
			  c_country:"",
			  store:"",
			  address:'',
		  }
		},
		components:{
			HeaderBar
		},
		methods: {
			selectCity(picker,values){
				this.s_city = picker.getValues()[0]
			},
			setCity(){
				this.c_city = this.s_city
				this.popupCity = false
			},
			selectCountry(picker,values){
				this.s_country = picker.getValues()[0]
			},
			setCountry(){
				this.c_country = this.s_country
				this.popupCountry = false
			}
		}
	}
</script>

<style lang="less">
	.add-store {
		.info-list {
			padding: 17vmin 0;
			min-height: calc(100vh - 17vmin);
			background-color: #F5F5F5;
			.mint-popup {
				width: 100%;
				border-radius: 2.7vmin 2.7vmin 0px 0px;
				.pop-title {
					display: flex;
					justify-content: space-between;
					padding: 3vmin 4vmin;
					margin-bottom: 3vmin;
				}
			}
			.mint-field {
				width: 100%;
				height: 13vmin;
				font-size: 3.8vmin;
				font-weight: 400;
				.mint-cell-text, .mint-field-core {
					color: #999999;
				}
				.mint-cell-wrapper {
					padding: 0 6vmin;
					font-size: 3.8vmin;
					background-image: none;
					border-bottom: 1px solid #F5F5F5;
					.mint-cell-title {
						text-align: left;
					}
				}
			}
		}
	}
</style>
