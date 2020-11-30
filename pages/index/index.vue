<template>
	<view>
		<button class="index" @click="handleBtn" type="default">首页点击开始</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleBtn(){
				uni.navigateTo({
				    url: '../start/start'
				});
			}
		}
	}
</script>

<style lang="scss">
	.index {
		width: 300rpx;
		height: 100rpx;
		color: #000000;
		margin: 50% auto;
	}
</style>
