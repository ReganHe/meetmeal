<template>
	<div class="job-list">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<mt-checklist
		  title="复选框列表"
		  v-model="job"
		  :options="options">
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
					label: '选中禁用',
					value: '选中禁用的值',
					disabled: true
				  },
				  {
					label: '选项A',
					value: '值A'
				  },
				  {
					label: '选项B',
					value: '值B'
				  }
				],
				job: [],
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less">
	@import "../css/global.less";
	.job-list {
		height: 100vh;
		background-color: #F5F5F5;
		overflow: hidden;
		
	}
</style>
