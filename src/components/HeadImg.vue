<template>
	<div class="head-img">
		<div class="pic">
			<img src="../assets/999.jpg" alt="">
		</div>
	</div>
</template>

<script>

</script>

<style lang='less'>
	.head-img {
		width:100%;
		height:285px;
		position: relative;
		background:url('../assets/bg.jpg');
		background-size: cover;
		
		.pic {
			position: absolute;
			width: 140px;
			height: 140px;
			overflow: hidden;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			border: solid 6px #FEDC70;
			border-radius: 15px;
		}
		img {
			width: 100%;
		}
	}
</style>
