<template>
	<div class="register">
		<HeadImg/>
		<div class="r-title">
			<p>注册账号</p>			
		</div>
		<div class="reg">
			<el-form
			:ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="120px"
			hide-required-asterisk>
				<el-form-item class="input-sty" 
				label="用户名" prop="user">
					<el-input v-model="ruleForm.phone" placeholder="请输入用户名"></el-input>
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
				<el-form-item class="input-sty" label="密码" prop="old">
					<el-input v-model="ruleForm.old" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item class="input-sty" label="确认密码" prop="new">
					<el-input v-model="ruleForm.new" placeholder="请确认密码"></el-input>
				</el-form-item>
					<el-button class="button" type="primary">注册账号</el-button>	
			</el-form>
			
		</div>
	</div>
</template>

<script>
	import HeadImg from '../components/HeadImg.vue'
	
	export default {
		components:{
			HeadImg
		},
		data () {
			return {
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
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: 'blur',
						}],
					code: [{
							required: true,
							message: '请输入验证码',
							trigger: 'blur',
						}],
					old: [{
							required: true,
							message: '请输入原密码',
							trigger: 'blur',
						}],
					new: [{
							required: true,
							message: '请确认密码',
							trigger: 'blur',
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
			}
		}
	}
</script>

<style lang='less'>
	.register {
		.r-title {
			text-align: center;
			height: 31px;
			font-size: 32px;
			font-weight: bold;
			color: #C12BE2;
			margin-top: 30px;
			padding: 0 30px;
			p {
				width: 100%;
				padding: 30px 0;
				border-bottom: solid 1px #E4E4E4;
			}
		}
		.reg {
			margin: 130px 55px 0 55px;
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
				font-size: 26px;
				font-weight: bold;
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
	}
</style>
