<template>
	<div class="edit">
		<div class="title">
			<i class="el-icon-arrow-left" @click="back()"></i>
			编辑资料
			<div class="save">保存</div>
		</div>
		
		<div class="upload-img">
			<div 
			@click="sheetVisible = true"
			v-for="count in pic_num" 
			:class="{pic1 : count == 1 , pic : count !== 1}">
				<i class="el-icon-circle-plus-outline"></i>
			</div>
			<mt-actionsheet
			  :actions="actions"
			  v-model="sheetVisible">
			</mt-actionsheet>
		</div>
		
		<div class="list-info">
			<div class="t2">基本资料(必填)</div>
			<router-link to="edit-username">
				<mt-field 
					label="用户名" 
					placeholder="请添加你的用户名"
					:readonly="true"
					:disableClear="true"
					:value="username"
					type="text">
					<i class="el-icon-arrow-right"></i>
				</mt-field>
			</router-link>
			<mt-field 
				label="生活年代" 
				placeholder="请添加你的生活年代" 
				type="text"
				:value="s_years"
				:readonly="true"
				:disableClear="true"
				@click.native="popupVisible = true">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="身高"
				placeholder="请添加你的身高"
				type="number">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="生活城市"
				placeholder="请添加你的生活城市"
				type="text">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="身份认证"
				type="text"
				placeholder="请添加你的身份认证">
				<i class="el-icon-arrow-right"></i></mt-field>
			<div class="t2">更多资料</div>
			<mt-field 
				label="我的声音"
				type="text"
				placeholder="请添加你的声音">
				<i class="el-icon-arrow-right"></i></mt-field>
			<router-link to="/job-list">
				<mt-field 
					label="职业"
					:readonly="true"
					:disableClear="true"
					type="text"
					placeholder="请添加你的职业">
					<i class="el-icon-arrow-right"></i>
				</mt-field>
			</router-link>
			<mt-field 
				label="爱好"
				type="text"
				placeholder="请添加你的爱好">
				<i class="el-icon-arrow-right"></i></mt-field>
			<router-link to="/safety-certificate">
				<mt-field 
					label="我的安全认证"
					:readonly="true"
					:disableClear="true"
					type="text"
					placeholder="请添加你的安全认证">
					<i class="el-icon-arrow-right"></i>
				</mt-field>
			</router-link>
			<mt-field 
				label="慈善捐助"
				:disabled="false" 
				type="text"
				placeholder="请添加你的慈善捐助">
				<i class="el-icon-arrow-right"></i></mt-field>
		</div>
		<mt-popup
		  v-model="popupVisible"
		  :visibleItemCount= 5
		  position="bottom">
		  <div class="pop-title">
			<span @click="popupVisible = false" style="color: #8A8989;">取消</span>
			<span @click="setYear()" style="color: #C12BE2;">确认</span>
		  </div>
		  <mt-picker :slots="year" @change="selectYear" ></mt-picker>
		</mt-popup>
	</div>
</template>

<script>
	export default {
		data() {
		  return {
			popupVisible: false,
			sheetVisible:false,
			pic_num: 6,
			username:"",
			c_years: "",
			s_years: "",
			actions:[{
				name:"从相册中挑选",
				},{
				name:"拍照"
			}],
			year:[{
				flex: 1,
				values:['70后','75后','80后','85后','90后','95后','00后'],
				className:'chYear',
				textAlign:'center',
				}],
			years:"",
		  };
		},
		methods: {
		  handleRemove(file, fileList) {
		  },
		  handlePictureCardPreview(file) {
		  },
		  back () {
			  this.$router.go(-1)
		  },
		  selectYear(picker,values){
			this.c_years = picker.getValues()[0]
		  },
		  setYear(){
		  	this.s_years = this.c_years
			this.popupVisible = false
			}
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';
	
	.edit {
		padding: 15vmin 0;
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
		.title {
			background: #ffffff;
			width: 100%;
			position: fixed;
			top: 0;
			text-align: center;
			height: @h-height;
			font-size: 5.6vmin;
			vertical-align: middle;
			line-height: @h-height;
			font-weight: 600;
			.mm-width;
			z-index: 10;
			.el-icon-arrow-left{
				position: absolute;
				left:5vmin;
				top: 4.5vmin;
				font-weight: 600;
			}
			.save {
				position: absolute;
				right: 5vmin;
				top: 0;
				font-size: 3.7vmin;
				font-weight: 400;
			}
		}
		.upload-img {
			height: 100vmin;
			.pic1 , .pic {
				float: left;
				overflow: hidden;
				width: calc(100vmin / 3 * 2);
				height: calc(100vmin / 3 * 2);
				border: 1px solid #ffffff;
				border-radius: 0;
				text-align: center;
				background: #f0f0f0;
				box-sizing: border-box;
				.el-icon-circle-plus-outline {
					line-height: calc(100vmin / 3 *2);
					font-size: 7vmin;
					color: #D1D1D1;
				}
			}
			.pic {
				float: right;
				width: calc(100vmin / 3);
				height: calc(100vmin / 3);
				.el-icon-circle-plus-outline {
					line-height: calc(100vmin / 3);
					font-size: 7vmin;
					color:#D1D1D1;
				}
			}
		}
		.list-info{
			width: 100%;
			margin-top: 1vmin;
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
			.t2 {
				padding: 3vmin 6vmin;
				color: #666666;
			}
		}
	}
	
</style>
