<template>
	<div class="report">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<el-checkbox-group 
		v-model="checkedJobs"
		:min="0"
		:max="3"
		@change="chObj()">
			<el-checkbox v-for="obj in options" :label="obj" :key="obj.value">
				{{obj.label}}
			</el-checkbox>
		</el-checkbox-group>
		<div class="other">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="其他原因">
					<el-input maxlength="50" 
						rows="2"
						type="textarea" v-model="form.other" 
						placeholder="请输入其他原因,限50个字">
					</el-input>
				</el-form-item>
			</el-form>
		</div>
		<div style="text-align: center;margin-top: 10vmin;">
			<el-button  type="primary" class="button">立即提交</el-button>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	export default {
		components:{
			HeaderBar
		},
		data () {
			return{
				titleName:'举报投诉',
				checkedJobs:[],
				form:{
					other:"",
				},
				options:[
				  {
					label: '照片非本人或差距过大',
					value: '1',
				  },
				  {
					label: '饭托或酒托',
					value: '2'
				  },
				  {
					label: '欺诈骗钱',
					value: '3'
				  },
				  {
					label: '色情服务',
					value: '4'
				  },
				  {
					label: '推销广告或者产品',
					value: '5'
				  },
				  {
					label: '索要礼物',
					value: '6'
				  },
				],
			}
		},
		methods: {
			chObj() {
				
			}
		}
	}
</script>

<style lang="less">
	@import "../css/global.less";
	.report {
		width: 100%;
		.mm-width;
		height: 100vh;
		background-color: #F5F5F5;
		overflow: hidden;
		.el-checkbox-group {
			margin-top: 20vmin;
			margin-bottom: 10vmin;
			.el-checkbox {
				width: 100%;
				height: 11.7vmin;
				display: flex;
				flex-direction: row-reverse;
				justify-content: space-between;
				background-color: #FFFFFF;
				align-items: center;
				padding: 0 7vmin;
				box-sizing: border-box;
				border-bottom: 2px solid #F5F5F5;
				.el-checkbox__label {
					font-size: 4vmin;
					font-weight: 400;
					color: #1D1E2C;
				}
				.el-checkbox__input {
					.el-checkbox__inner{
						width: 5.6vmin;
						height: 5.6vmin;
						&::after {
							height: 3vmin;
							left: 2vmin;
							width: 1vmin;
						}
					}
				}
			}
		}
		.other {
			background: #FFFFFF;
			width: 100%;
			padding: 4vmin 0;
			.el-form .el-form-item {
				margin-bottom: 0;
			}
		}
		.button{
			width: 40vmin;
			color: #ffffff;
			background: @bid-color;
			box-shadow: 0px 3px 9px 1px rgba(255, 184, 0, 0.23);
			padding: 3vmin 0;
			font-size: 4.3vmin;
		}
	}
</style>
