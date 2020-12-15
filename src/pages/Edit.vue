<template>
	<div class="edit">
		<div class="title">
			<i class="el-icon-arrow-left" @click="back()"></i>
			编辑资料
			<div class="save">保存</div>
		</div>
		<div class="upload-img">
			<el-upload  v-for="count in pic_num" :class="{pic1 : count == 1 , pic : count !== 1}"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  list-type="picture-card"
			  :on-preview="handlePictureCardPreview"
			  :on-remove="handleRemove">
			  <i class="el-icon-plus"></i>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
		</div>
		<div class="list-info">
			<div class="t2">基本资料(必填)</div>
			<mt-field 
				label="用户名" 
				placeholder="请添加你的用户名" 
				type="text">
				<i class="el-icon-arrow-right"></i>
			</mt-field>
			<mt-field 
				label="生活年代" 
				placeholder="请添加你的生活年代" 
				type="text">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="身高"
				placeholder="请添加你的身高"
				type="number">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="生活城市"
				placeholder="请添加你的生活城市"
				type="text">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="身份认证"
				type="text"
				placeholder="请添加你的身份认证">
				<i class="el-icon-arrow-right"></i></mt-field>
			<div class="t2">更多资料</div>
			<mt-field 
				label="我的声音"
				type="text"
				placeholder="请添加你的声音">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="职业"
				type="text"
				placeholder="请添加你的职业">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="爱好"
				type="text"
				placeholder="请添加你的爱好">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="我的安全认证"
				type="text"
				placeholder="请添加你的安全认证">
				<i class="el-icon-arrow-right"></i></mt-field>
			<mt-field 
				label="慈善捐助"
				:disabled="false" 
				type="text"
				placeholder="请添加你的慈善捐助">
				<i class="el-icon-arrow-right"></i></mt-field>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
		  return {
			dialogImageUrl: '',
			dialogVisible: false,
			pic_num: 6,
		  };
		},
		methods: {
		  handleRemove(file, fileList) {
			console.log(file, fileList);
		  },
		  handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		  },
		  back () {
			  this.$router.go(-1)
		  }
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';
	
	.edit {
		padding-top: 15vmin;
		.title {
			background: #ffffff;
			width: 100%;
			position: fixed;
			top: 0;
			text-align: center;
			height: @h-height;
			font-size: 5.6vmin;
			vertical-align: middle;
			line-height: @h-height;
			font-weight: 600;
			.mm-width;
			z-index: 10;
			.el-icon-arrow-left{
				position: absolute;
				left:5vmin;
				top: 4.5vmin;
				font-weight: 600;
			}
			.save {
				position: absolute;
				right: 5vmin;
				top: 0;
				font-size: 3.7vmin;
				font-weight: 400;
			}
		}
		.upload-img {
			.pic1 {
				float: left;
				.el-upload {
					width: calc(100vmin / 3 * 2);
					height: calc(100vmin / 3 * 2);
					border: 1px solid #ffffff;
					border-radius: 0;
				}
				.el-icon-plus {
					line-height: calc(100vmin / 3 *2);
					transform: translateY(-2vmin);
				}
			}
			.pic {
				float: right;
				.el-upload {
					width: calc(100vmin / 3);
					height: calc(100vmin / 3);
					border: 1px solid #ffffff;
					border-radius: 0;
				}
				.el-icon-plus {
					line-height: calc(100vmin / 3);
					transform: translateY(-2vmin);
				}
			}
		}
		.list-info{
			width: 100%;
			.mint-field {
				width: 100%;
				height: 13vmin;
				font-size: 3.8vmin;
				font-weight: 400;
				.mint-cell-text, .mint-field-core {
					color: #999999;
				}
				.mint-cell-wrapper {
					padding-left: 4vmin;
				}
			}
			.t2 {
				padding: 3vmin 4vmin;
				color: #666666;
			}
		}
	}
	
</style>
