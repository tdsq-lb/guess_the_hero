<template>
	<view class="content">
		<view class="head">
			<image class="head_avatar" src="https://cdn.tgp.qq.com/lol/images/resources/usericon/898.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;

		.head {
			width: 100%;
			height: 300rpx;
			background-color: red;
			position: relative;

			.head_avatar {
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
				box-sizing: border-box;
				border: 8rpx solid wheat;
				position: absolute;
				top: 90%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
</style>
