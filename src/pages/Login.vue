<template>
	<div class="login">
		<HeadImg/>
		<div class="ch-type">
			<div @click="changeWay(1)" :class="{'active':show}"><span>账号密码登录</span></div>
			<div @click="changeWay(2)" :class="{'active':!show}"><span>手机验证码登录</span></div>
		</div>
		<div class="log-type">
			<div v-show="show">
				<el-form
				class="demo-ruleForm"
				:ref="ruleForm"
				:model="ruleForm"
				:rules="rules"
				label-width="15vw"
				hide-required-asterisk>
					<el-form-item class="input-sty" 
					label="用户名" prop="user">
						<el-input v-model="ruleForm.user" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item class="input-sty" 
					label="密码" 
					prop="passwd" >
						<el-input type="password" 
						autocomplete="off" 
						v-model="ruleForm.passwd" 
						placeholder="请输入密码"></el-input>
					</el-form-item>
					
						<el-button class="button" type="primary">登录</el-button>
					
				</el-form>
			</div>
			<div v-show="!show">
				<el-form
				:ref="ruleForm"
				:model="ruleForm"
				:rules="rules"
				label-width="15vw"
				hide-required-asterisk>
					<el-form-item class="input-sty" 
					label="手机号" prop="user">
						<el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<div  style="display: flex;justify-content: space-between;">
						<el-form-item class="input-sty code-sty" 
						label="验证码" 
						prop="code" >
							<el-input type="password" 
							autocomplete="off" 
							v-model="ruleForm.code" 
							placeholder="请输入验证码"></el-input>
						</el-form-item>
							<el-button class="get-code" type="primary">获取验证码</el-button>
					</div>
						<el-button class="button" type="primary">登录</el-button>	
				</el-form>
			</div>
		</div>
		<div class="forget-pass">
			<router-link to='/change-pass'>忘记密码?</router-link>
			<router-link to='/register'>快速注册</router-link>
		</div>
	</div>
</template>

<script>
	import HeadImg from '../components/HeadImg.vue'
	
	export default {
		components:{
			HeadImg,
		},
		data () {
			return {
				show:'true',
				ruleForm: {
					user: '',
					passwd: '',
					code:'',
					phone:'',
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
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: 'blur',
						}],
					code: [{
							required: true,
							message: '请输入验证码',
							trigger: 'blur',
						}]
				}
			}
		},
		methods:{
			changeWay(num){	
				if (num == 1) {
					this.show = true
				}
				if (num == 2) {
					this.show = false
				}
			}
		}
	}
</script>

<style lang='less'>
	@import '../css/global.less';
	
	.login {
		.ch-type {
			display: flex;
			text-align: center;
			font-size: 3.7vw;
			font-weight: bold;
			color: @unpick-color;
			margin-top: 4.5vw;
			padding: 0 4.5vw;
			div {
				width: 50%;
				padding: 4.5vw 0;
				border-bottom: solid 1px #E4E4E4;
				cursor: pointer;
			}
			.active {
				color: @base-color;
				span {
					    border-bottom: 0.67vw solid;
					    padding-bottom: 3.34vw;
				}
			}
		}
		.log-type {
			margin: 8vw 7.34vw 0 7.34vw;
			.el-form-item__label {
				font-size: 3vw !important;
				font-weight: bold !important;
				color: #333333 !important;
			}
			.input-sty {
				background-color: #F2F2F2;
				border-radius: 1vw;
			}
			.el-form-item__label {
				line-height: 11.3vw;
				text-align: left;
				padding-left: 1.3vw;
			}
			.el-form-item__content {
				line-height: 11.3vw;
			}
			.el-input {
				width: 90%;
			}
			.el-input__inner {
				border: none;
				background-color:#F2F2F2;				
				font-size: 2.4vw;
				color: #BCBBC1;
				height: 5.4vw;
				line-height: 5.4vw;
			}
			.button {
				width: 100%;	
				height: 10.4vw;
				margin-top: 8.67vw;
				background: @base-color;
				border-radius: 1.34vw;
				font-size: 4vw;
				font-weight: bold;
				color: #FFFFFF;
				border: @base-color;
			}
			.get-code {
				width: 29.5vw;
				background: @base-color;
				border-radius: 1.34vw;
				border: @base-color;
				height: 11.34vw;
				font-size: 3.73vw;
				font-weight: bold;
				color: #FFFFFF;
				width: 43%;
			}
			.code-sty {
				width: 55%;
			}
		}
		.forget-pass {
			margin-top: 2.93vw;
			display: flex;
			justify-content: space-between;
			padding: 0 7.34vw;
			a {
				font-size: 3.73vw;
				font-weight: bold;
				text-decoration: underline;
				color: @base-color;
				cursor: pointer;
			}
		}
	}
	
</style>
