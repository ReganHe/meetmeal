<template>
	<div class="publish">
		<div class="p-header">
			发布餐遇
			<i class="el-icon-question"></i>
		</div>
		<div class="p-cont">
			<el-carousel :interval="4000" type="card" height="200px">
				<el-carousel-item v-for="item in 3" :key="item">
				<h3 class="medium">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	@import '../css/global.less';
	
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
	
	.publish {
		background-color: #999999;
		height: 100vh;
		.p-header {
			line-height: 15vw;
			width: 100%;
			background-color: #FFFFFF;
			text-align: center;
			vertical-align: middle;
			display: inline-block;
			font-size: 4.5vw;
			color: @base-color;
			position: fixed;
			.el-icon-question {
				position: absolute;
				right: 5vw;
				top: 5vw;
				font-size: 5.5vw;
			}
		}
		.p-cont {
			padding-top: 15vw;
		}
	}
</style>
