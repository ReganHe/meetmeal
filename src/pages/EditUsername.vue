<template>
	<div class="edit-user">
		<HeaderBar :titleName="titleName"></HeaderBar>
		<mt-field 
		class="username"
		label="用户名"
		placeholder="请输入用户名" >
		</mt-field>
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
				'titleName':'用户名',
			}
		},
		methods: {
		}
	}
</script>

<style lang="less">
	@import "../css/global.less";
	.edit-user {
		height: 100vh;
		background-color: #F5F5F5;
		overflow: hidden;
		.username {
			box-sizing: border-box;
			margin-top:16vmin;
			.mint-cell-wrapper {
				padding: 3vmin 4vmin;
				background-image: none;
			}
		}
	}
</style>
