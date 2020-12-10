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
		min-width: 320px;
		max-width: 768px;
		position: relative;
	}
</style>
