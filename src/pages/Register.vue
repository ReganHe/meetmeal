<template>
	<div class="register">
		<HeadImg/>
		<div class="r-title">
			<p>注册账号</p>			
		</div>
		<div class="reg">
			<el-form ref="ruleForm" v-loading="formLoading"
			:model="ruleForm"
			:rules="rules"
			label-width="17vmin"
			hide-required-asterisk>
				<el-form-item class="input-sty" 
				label="用户名" prop="user">
					<el-input v-model="ruleForm.user" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<div  style="display: flex;justify-content: space-between;">
					<el-form-item class="input-sty code-sty" 
					label="验证码" 
					prop="code" >
						<el-input type="text" autocomplete="off" v-model="ruleForm.code" 
						placeholder="请输入验证码"></el-input>
					</el-form-item>
						<el-button class="get-code">获取验证码</el-button>
				</div>
				<el-form-item class="input-sty" label="密码" prop="old">
					<el-input type="password" v-model="ruleForm.old" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item class="input-sty" label="确认密码" prop="new">
					<el-input type="password" v-model="ruleForm.new" placeholder="请确认密码"></el-input>
				</el-form-item>
					<el-button class="button" @click="register">注册账号</el-button>	
			</el-form>
			
		</div>
	</div>
</template>

<script>
	import HeadImg from '../components/HeadImg.vue'
	import {RegisterApi} from '../api/register.js'
	
	export default {
		components:{
			HeadImg
		},
		data () {
			var validatePass2 = (rule, value, callback) => {
					if (value !== this.ruleForm.old) {
					  callback(new Error('两次密码不一致'));
					} else {
					  callback();
					}
				};

			var checkPass = (rule, value, callback) => {
				if (value.match(/[A-Z]/g) && value.match(/[0-9]/g) 
					&& value.match(/[a-z]/g) && value.length >= 8) {
				  callback();
				} else {
				  callback(new Error('密码必须包含大小写和数字，且至少 8 个字符'));
				}
			}
			
			return {
				formLoading: false,
				show:'true',
				s1: '1',
				s2: '2',
				ruleForm: {
					user: '',
					passwd: '',
					code:'',
					old:'',
					new:''
				},
				rules: {
					user: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur',
						}],
					passwd: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur',
						}],
					code: [{
							required: true,
							message: '请输入验证码',
							trigger: 'blur',
						}],
					new: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur',
						}, {
							validator: validatePass2,
							trigger: 'blur'
						},{
							validator: checkPass,
							trigger: 'blur'
						}],
					old: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur',
						},{
							validator: checkPass,
							trigger: 'blur'
						}]
				}
			}
		},
		methods:{
			regWay(show,status){	
				if (status == 1) {
					this.show = true
				}
				if (status == 2) {
					this.show = false
				}
			},
			register () {
				this.$refs.ruleForm.validate(async (valid, obj)=> {
					if (valid) {
						this.formLoading = true
						let resp = await RegisterApi(this.ruleForm, () => {
							this.formLoading = false
							this.$message({
								type: 'success',
								message: '注册成功，请登录'
							})
							this.$router.push({path:'/login'})
						}, () => {
							this.formLoading = false
							this.$message({
								type: 'error',
								message: '注册失败，请重试'
							})
						})
					}
				})
				
			}
		}
	}
</script>

<style lang='less'>
	.register {
		.r-title {
			text-align: center;
			height: 4.1vmin;
			font-size: 4.2vmin;
			font-weight: bold;
			color: #C12BE2;
			margin-top: 4vmin;
			padding: 0 4vmin;
			p {
				width: 100%;
				padding: 4vmin 0;
				border-bottom: solid 1px #E4E4E4;
			}
		}
		.reg {
			margin: 17.3vmin 7.3vmin 0 7.3vmin;
			white-space: nowrap;
			.el-form-item__label {
				font-size: 3vmin !important;
				font-weight: bold !important;
				color: #333333 !important;
			}
			.input-sty {
				background-color: #F2F2F2;
				border-radius: 1.4vmin;
			}
			.el-form-item__label {
				line-height: 11.3vmin;
				text-align: left;
				padding-left: 1.4vmin;
			}
			.el-form-item__content {
				line-height: 11.3vmin;
			}
			.el-form-item__error {
				font-size: 1.6vmin;
			}
			.el-input__inner {
				border: none;
				background-color:#F2F2F2;				
				font-size: 3.5vmin;
				font-weight: bold;
				color: #BCBBC1;
			}
			.button {
				width: 100%;	
				height: 10.4vmin;
				margin-top: 8.6vmin;
				background: #C12BE2;
				border-radius: 1.4vmin;
				font-size: 4.1vmin;
				font-weight: bold;
				color: #FFFFFF;
			}
			.get-code {
				width: 29.6vmin;
				background: #C12BE2;
				border-radius: 1.4vmin;
				height: 11.3vmin;
				font-size: 3.7vmin;
				font-weight: bold;
				color: #FFFFFF;
				width: 43%;
			}
			.code-sty {
				width: 55%;
			}
		}
	}
</style>
