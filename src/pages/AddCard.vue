<template>
	<div class="add-card">
		<HeaderBar :titleName="titleName" @click.native="back()"></HeaderBar>
		<div class="card-info">
			<el-form label-position=top label-width="80px" :model="cardForm">
				<el-form-item label="卡号">
					<el-input 
					v-model="cardForm.cardNum"
					prefix-icon="el-icon-postcard"></el-input>
				</el-form-item>
				<div class="sty-1">
					<el-form-item label="失效期">
						<el-input v-model="cardForm.expDate"></el-input>
					</el-form-item>
					<div style="width: 33%;"></div>
					<el-form-item label="验证值">
						<el-input v-model="cardForm.cvv"></el-input>
					</el-form-item>
				</div>
				<el-form-item label="邮政编码">
					<el-input v-model="cardForm.zipCode"></el-input>
				</el-form-item>
				<!-- <el-form-item label="持卡人姓名">
					<el-input v-model="cardForm.name"></el-input>
				</el-form-item>
				<el-form-item label="账单地址">
					<el-input v-model="cardForm.address"></el-input>
				</el-form-item> -->
			</el-form>
		</div>
	</div>
</template>

<script>
	import HeaderBar from '../components/HeaderBar.vue';
	export default {
		data() {
		  return {
			  'titleName':'添加银行卡',
			  cardForm:{
				cardNum:"",
				expDate:"",
				cvv:"",
				zipCode:"",
				name:"",
				address:"",
			  }
		  }
		},
		components:{
			HeaderBar
		},
		methods: {
			back () {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less">
	@import '../css/global.less';
	
	.add-card {
		.card-info {
			padding: @h-height 6vmin;
			.el-form{
				.el-form-item{
					margin-bottom: 2vmin;
					.el-form-item__label {
						font-size: 4vmin;
						line-height: 4.8vmin;
						padding: 0 0 2vmin;
					}
					.el-form-item__content {
						height: 10vmin !important;
						line-height: 10vmin !important;
						.el-input__inner {
							height: 10vmin !important;
							line-height: 10vmin !important;
						}
						.el-icon-postcard {
							line-height: 10vmin !important;
							font-size: 7vmin;
						}
					}
					.el-input.is-active .el-input__inner, .el-input__inner:focus {
						border-color: @base-color;
					}
				}
				.sty-1 {
					display: flex;
					
				}
			}
		}
	}

	
</style>
