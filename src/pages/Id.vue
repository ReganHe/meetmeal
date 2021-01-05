<template>
	<div class="id">
		<div class="title">
			<i class="el-icon-arrow-left" @click="back()"></i>
			身份认证
			<div class="save">保存</div>
		</div>
		<div class="list-info">
			<mt-field 
				label="真实姓名" 
				placeholder="请添加你的真实姓名" 
				type="text">
				<i class="el-icon-arrow-right"></i>
			</mt-field>
			<mt-field 
				v-model="birthday"
				label="生日"
				placeholder="请添加你的生日,例如:19900101"
				@blur.native.capture="checkBirth"
				type="number">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
		</div>
		<div class="tips">为保证平台社区的安全和个人信息安全，
		需至少 上传一份政府颁发的驾照/护照/身份证/签证照片 
		<a href="">了解更多</a></div>
		<el-dialog
		class="popUp"
		:visible.sync="Visible2"
		width="70%"
		top="35vh">
			<p style="color: #C12BE2;text-align: center;font-size: 5vmin;">{{this.msg}}</p>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				birthday:"",
				Visible2:false,
				msg:""
			};
		},
		methods: {
			//格式化补0,类型为字符串
			addZero(num, n) {
				return (Array(n).join(0) + num).slice(-n);
			},
			//校验日期
			checkBirth() {
				var nowYear = new Date().getFullYear() - 19,
					nowMonth = new Date().getMonth() + 1,
					nowDay = new Date().getDate(),
					fullTime = nowYear + this.addZero(nowMonth,2) + this.addZero(nowDay,2);
					if (this.birthday.length == 8) {
						if (this.birthday.slice(4,6) <= 12) {
							if (this.birthday.slice(6,8) <= 31) {
								if (this.birthday >= fullTime) {
									this.msg = "年龄小于19岁，无法认证"
									this.birthday = ""
									this.Visible2 = true
								}
							} else {
								this.msg = "日期格式错误"
								this.birthday = ""
								this.Visible2 = true
							}
						}else{
							this.msg = "月份格式错误"
							this.birthday = ""
							this.Visible2 = true
						}
					} else {
						this.msg = "格式错误"
						this.birthday = ""
						this.Visible2 = true
					}
			},
			back () {
				this.$router.go(-1)
			},
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';
	
	.id {
		height: 100vh;
		background-color:  #F5F5F5;
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
		.list-info{
			padding-top: 20vmin;
			width: 100%;
			.mint-field {
				width: 100%;
				height: 13vmin;
				font-size: 3.8vmin;
				font-weight: 400;
				.mint-cell-text, .mint-field-core {
					color: #999999;
				}
				.mint-cell-wrapper {
					padding-left: 4vmin;
					font-size: 3.8vmin;
					.mint-cell-title{
						text-align: left;
					}
				}
			}
		}
		.tips {
			padding: 10vmin 5vmin;
			font-size: 4.3vmin;
			font-weight: 400;
			color: #333333;
			line-height: 7.3vmin;
			a {
				color: #387EF5;
				text-decoration: underline;
			}
		}
		.popUp{
			.el-dialog {
				border-radius: 4vmin;
				height: 30vmin;
				.el-dialog__body {
					padding: 0;
				}
			.el-dialog__header {
				.el-dialog__headerbtn {
					right: 1.5vmin;
					top: 2vmin;
				}
				.el-icon{
					font-size: 7vmin;
					font-weight: 400;
					color: #111111;
					}
				}
			}
		}
	}
	
</style>
