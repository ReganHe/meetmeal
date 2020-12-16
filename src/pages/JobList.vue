<template>
	<div class="job-list">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<mt-checklist class="job"
		  v-model="job"
		  align="right"
		  @change="chJob"
		  :options="options"
		  :max="1">
		</mt-checklist>
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
				'titleName':'职业',
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
				job: [],
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			},
			chJob() {
				console.log(this.job)
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
		.job {
			width: 100%;
			margin-top: 20vmin;
			.mint-checkbox-core {
				border-radius: 0;
			}
			.mint-cell-wrapper {
				background-image: none;
				border-bottom: 2px solid #F5F5F5;
			}
		}
	}
</style>
