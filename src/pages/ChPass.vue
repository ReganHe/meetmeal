<template>
	<div class="login">
		<div class="head-img">
			<div class="pic">
				<img src="../assets/999.jpg" alt="">
			</div>
		</div>
		<div class="ch-type">
			<div @click="changeWay(show,s1)" :class="{'active':show}"><span>账号密码登录</span></div>
			<div @click="changeWay(show,s2)" :class="{'active':!show}"><span>手机验证码登录</span></div>
		</div>
		<div class="log-type">
			<div v-show="show">
				<el-form
				class="demo-ruleForm"
				:ref="ruleForm"
				:model="ruleForm"
				:rules="rules"
				label-width="100px"
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
				label-width="100px"
				hide-required-asterisk>
					<el-form-item class="input-sty" 
					label="手机号" prop="user">
						<el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<div  style="display: flex;justify-content: space-between;">
						<el-form-item class="input-sty code-sty" 
						label="验证码" 
						prop="passwd" >
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
			<a href="">忘记密码?</a>
			<a href="">快速注册</a>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				show:'true',
				s1: '1',
				s2: '2',
				ruleForm: {
					user: '',
					passwd: '',
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
			changeWay(show,status){	
				if (status == 1) {
					this.show = true
				}
				if (status == 2) {
					this.show = false
				}
			}
		}
	}
</script>

<style lang='less'>
	.login {
		.head-img {
			width:100%;
			height:285px;
			position: relative;
			background:url('../assets/bg.jpg');
			background-size: cover;
			.pic {
				position: absolute;
				width: 140px;
				height: 140px;
				overflow: hidden;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				border: solid 6px #FEDC70;
				border-radius: 15px;
			}
			img {
				width: 100%;
			}
		}
		.ch-type {
			display: flex;
			text-align: center;
			font-size: 28px;
			font-weight: bold;
			color: #999999;
			margin-top: 30px;
			padding: 0 30px;
			div {
				width: 50%;
				padding: 30px 0;
				border-bottom: solid 1px #E4E4E4;
				cursor: pointer;
			}
			.active {
				color: #C12BE2;
				span {
					    border-bottom: 5px solid;
					    padding-bottom: 25px;
				}
			}
		}
		.log-type {
			margin: 60px 55px 0 55px;
			.el-form-item__label {
				font-size: 23px !important;
				font-weight: bold !important;
				color: #333333 !important;
			}
			.input-sty {
				background-color: #F2F2F2;
				border-radius: 10px;
			}
			.el-form-item__label {
				line-height: 85px;
				text-align: left;
				padding-left: 10px;
			}
			.el-form-item__content {
				line-height: 85px;
			}
			.el-input__inner {
				border: none;
				background-color:#F2F2F2;				
				font-size: 18px;
				color: #BCBBC1;
			}
			.button {
				width: 100%;	
				height: 78px;
				margin-top: 65px;
				background: #C12BE2;
				border-radius: 10px;
				font-size: 31px;
				font-weight: bold;
				color: #FFFFFF;
			}
			.get-code {
				width: 222px;
				background: #C12BE2;
				border-radius: 10px;
				height: 85px;
				font-size: 28px;
				font-weight: bold;
				color: #FFFFFF;
				width: 43%;
			}
			.code-sty {
				width: 55%;
			}
		}
		.forget-pass {
			margin-top: 22px;
			display: flex;
			justify-content: space-between;
			padding: 0 55px;
			a {
				font-size: 28px;
				font-weight: bold;
				text-decoration: underline;
				color: #C12BE2;
			}
		}
	}
</style>
