<template>
	<div class="job-list">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<el-checkbox-group 
		v-model="checkedJobs"
		:min="0"
		:max="1"
		@change="chJobs()">
			<el-checkbox v-for="job in options" :label="job" :key="job.value">
				{{job.label}}
			</el-checkbox>
		</el-checkbox-group>
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
				titleName:'职业',
				checkedJobs:[],
				options:[
				  {
					label: '学生',
					value: '1',
				  },
				  {
					label: '收银员',
					value: '2'
				  },
				  {
					label: '服务员',
					value: '3'
				  }
				],
			}
		},
		methods: {
			chJobs() {
				
			}
		}
	}
</script>

<style lang="less">
	@import "../css/global.less";
	.job-list {
		width: 100%;
		.mm-width;
		height: 100vh;
		background-color: #F5F5F5;
		overflow: hidden;
		.el-checkbox-group {
			margin: 20vmin 0;
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
	}
</style>
