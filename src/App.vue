<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	import login from './pages/Login.vue'
	
	export default{
		name:'app',
		components:{
			
		}
	}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
	}
</style>
