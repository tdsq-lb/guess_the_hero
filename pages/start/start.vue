<template>
	<view class="start">
		<image class="start-bg" :src="this.imgSrc('start_bg.jpg')" mode="scaleToFill" lazy-load @load="imageLoad"></image>
		<view class="start-content">
			<button @click="handleBtn">点击开始</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		created() {
			uni.showLoading({
				title: '加载中',
			});
		},
		methods: {
			handleBtn() {
				uni.navigateTo({
					url: '../games/games'
				});
			},
			imageLoad(e) {
				console.log(e.detail, '背景图片加载完成 =====>>>>')
				uni.hideLoading();
			},
		}
	}
</script>

<style lang="scss">
	.start {
		width: 100%;
		height: 100%;
		position: relative;

		.start-bg {
			width: 100%;
			height: 100%;
		}

		.start-content {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;

			button {
				margin: 50% auto;
			}
		}
	}
</style>
