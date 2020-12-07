<template>
	<div class="paypage">
		<!--余额显示-->
		<div class="bal" >
			<p style="font-size: 20px; padding-top: 20px;">账户余额</p>
			<p style="font-size: 35px; padding-bottom: 50px;">100</p>
		</div>
		
		<!--余额充值-->
		<div>
			<p style="text-align: center;color: #808080;">-余额充值-</p>
		</div>
		
		<!--余额选择-->
		<div class="num">
			<div class="vertical-middle" >
				2
			</div>
		</div>
		<div class="num">
			<div class="vertical-middle" >
				10
			</div>
		</div>
		<div class="num"> 
			<div class="vertical-middle" >
				50
			</div>
		</div>
		<div class="num" >
			<div class="vertical-middle" >
				<p style="color: #A135FF;font-size: 8px;">送5美金</p>
			80
			</div>
			<div class="corner">
				<p>优惠</p>
			</div>
		</div>
		<div class="num" > 
			<div class="vertical-middle" >
				<p style="color: #A135FF;font-size: 8px;">送12美金</p>
				120
			</div>
			<div class="corner">
				<p>优惠</p>
			</div>
		</div>
		<div class="num" >
			<div class="vertical-middle" >
				<p style="color: #A135FF;font-size: 8px;">送28美金</p>		
				200
			</div>
			<div class="corner">
				<p>优惠</p>
			</div>
		</div>
		
		<!--充值按钮-->
		<el-button class="pay">立即充值</el-button>
	</div>
</template>

<script>
	export default{
		name:'Pay'
	}
</script>

<style scoped>
	.paypage .bal{
			position: relative;
			margin-left:2%;
			border-radius:10px;
			width:97%;
			text-align: center;
			background-color: #a135ff;
			color: white;
	}
	.paypage .num{
		position: relative;
		float: left;
		box-sizing: border-box;
		font-size: 20px;
		width: 31%;
		height: 100px;
		padding: 30px 47px;
		border:1px solid gray;
		text-align: center;
		border-radius: 6px;
		margin-left: 2%;
		color: #808080;
		margin-top: 25px;
		overflow: hidden;
	}
	.paypage .vertical-middle{
		position: absolute;
		width: 100%;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	.paypage .pay{
		position: fixed;
		bottom: 0px;
		left: 0px;
		right:0px;
		width: 100%;
		background-color: #A135FF;
		font-size: 25px;
		padding: 20px;
		text-align: center;
		color: white;
	}
	.paypage .corner{
		position: absolute;
		width: 80px;
		height: auto;
		background-color: #A135FF;
		color: white;
		font-size:5px ;
		transform: rotate(315deg) translateX(-17px) translateY(-13px);
		left: 0;
		top: 0;
		
	}
</style>
