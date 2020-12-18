<template>
	<CountDown
	:endTime="endTime"
	></CountDown>
</template>

<script>
	import CountDown from '../components/CountDown.vue';
	
	export default {
		data () {
			return {
				endTime:"2020-12-19"
			}
		},
		components:{
			CountDown,
		}
	}
</script>

<style>
</style>
