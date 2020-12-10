<template>
	<div class="poster">
		<div class="img">
			<div class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<mt-swipe 
			:auto="4000" 
			:show-indicators="false"
			@change="handleChange">
				<mt-swipe-item v-for="item in imgList">
					<div class="roll"><img src="../assets/999.jpg" alt=""></div>
				</mt-swipe-item>
			</mt-swipe>
			<div class="bottom">
				<div class="page">{{perNum}}/{{total}}</div>
				<div class="down">
					<div class="status"></div>
					<span>在线</span>
					<i class="el-icon-male gender-bg">18</i>
					<div>上海刘亦菲</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				imgList:[1,2,3],
				perNum: '1',
				total: '1',
			}
		},
		methods:{
			handleChange (index) {
				this.perNum = index + 1;
			}
		}
	}
</script>

<style lang='less'>
	
	.poster {
		.img {
			height: 54vh;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: relative;
			.back {
				margin: 7vmin 3.33vmin;
				.el-icon-arrow-left {
					padding: 2vmin;
					border-radius: 50%;
					background-color:rgba(7,7,7,0.2);
					font-size: 7vmin;
					color: white;
				}
			}
			.bottom {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				color: white;
				.down {
					margin-right: auto;
					font-size: 2.9vmin;
					white-space: nowrap;
					display: flex;
					align-items: center;
					margin: 0.6vmin 1.5vmin;
					margin-right: auto;
					font-size: 3.67vmin;
					margin-bottom: 2vmin;
					.status {
						height: 2vmin;
						width: 2vmin;
						background: #32EE13;
						border-radius: 50%;
					}
					.gender-bg {
						background: #FE6491;
						padding: 0.6vmin 0.8vmin;
						border-radius: 1.5vmin;
					}
					* {
						margin-left: 3vmin;
					}
				}
				.page {
					padding: 1vmin 3vmin;
					margin-right: 5vmin;
					margin-left: auto;
					border-radius: 5vmin;
					background-color:rgba(7,7,7,0.2);
				}
			}
			.mint-swipe {
				text-align: center;
				position: absolute;
				top: 0;
				height: 100%;
				width: 100%;
				top: 0;
				z-index: -10;
				.roll {
					img {
						width: 100%;
					}
				}
			}
		}
	}
	
</style>
