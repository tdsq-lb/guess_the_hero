<template>
	<view class="index">
		<image class="index-bg" src="https://game.gtimg.cn/images/lol/act/img/skin/big157035.jpg" mode="aspectFill" lazy-load
		 @load="imageLoad">
			<view class="title">台词猜英雄，得免费皮肤</view>
			<view class="index-content">

			</view>
			<!-- 	<button class="index" @click="handleBtn" type="default">首页点击开始</button> -->
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
					url: '../start/start'
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
	.index {
		width: 100%;
		height: 100%;
		position: relative;
		background-color: #16193d;

		.index-bg {
			width: 100%;
			height: 600rpx;
		}

		.title {
			width: 100%;
			position: absolute;
			top: 40%;
			left: 50%;
			transform: translate(-50%,-40%);
			text-align: center;
			font-family: cursive;
			font-size: 50rpx;
			font-weight: bold;
			// letter-spacing: 5px;
			color: #f5d185;
			cursor: pointer;
			text-shadow: 0px 0px 2px #686868,
				0px 1px 1px #ddd,
				0px 2px 1px #d6d6d6,
				0px 3px 1px #ccc;
			-webkit-transition: all .1s linear;
			transition: all .1s linear;
		}
	}
</style>
