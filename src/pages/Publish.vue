<template>
	<div class="publish">
		<div class="p-header">
			发布餐遇
			<i class="el-icon-question"></i>
		</div>

		<div class="p-cont">
			<el-carousel :interval="4000" type="card" height="200px" >
				<el-carousel-item v-for="item in 3" :key="item">
				<h3 class="medium">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
			<el-button 
			class="but-sty" 
			icon="el-icon-caret-bottom"
			@click="drawer = true">选择竞拍时间/时长</el-button>
			<el-input
			    placeholder="您选择后自动生成具体时间"
			    v-model="input1">
			</el-input>
			<el-button class="but-sty" icon="el-icon-caret-bottom">选择见面城市</el-button>
			<el-input
			    placeholder="使用当前定位城市（地区）"
			    prefix-icon="el-icon-location-outline"
			    v-model="input2">
			</el-input>
			<el-button class="but-sty" icon="el-icon-caret-bottom">选择起拍价</el-button>
		</div>
		<el-drawer
		  title="我是标题"
		  :visible.sync="drawer"
		  :with-header="false"
		  direction="btt">
		  <span>我来啦!</span>
		</el-drawer>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				drawer: false,
				input1: "",
				input2: "",
			};
		}
	}
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
		.p-header {
			line-height: 15vmin;
			height: @h-height;
			width: 100%;
			background-color: #FFFFFF;
			text-align: center;
			vertical-align: middle;
			display: inline-block;
			font-size: 4.5vmin;
			color: @base-color;
			position: fixed;
			.el-icon-question {
				position: absolute;
				right: 5vmin;
				top: 5vmin;
				font-size: 5.5vmin;
			}
		}
		.p-cont {
			padding: 16vmin 10vmin 0 5vmin;
			.but-sty {
				width: 38vmin;
				position: relative;
				padding: 3vmin 0 3vmin 2vmin;
				text-align: left;
				background-color: #B72BFE;
				color: #FFFFFF;
				border: none;
				font-size: 3.5vmin;
				.el-icon-caret-bottom {
					position: absolute;
					right: 2vmin;
				}
			}
			.el-input {
				.el-input__icon {
					color: #B72BFE;
					font-size: 6vmin;
				}
			}
			.but-sty,.el-input {
				border-radius: 1.5vmin;
				margin-bottom: 3vmin;
			}
		}
	}
</style>
