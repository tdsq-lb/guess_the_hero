<template>
	<view class="start">
		<view class="start-content">
			<view class="start-the">
				<image src="https://game.gtimg.cn/images/lol/act/a20201030kda/m-bg6.jpg" mode="aspectFill"></image>
			</view>
			<view class="start-box">
				<image class="start-content-img" src="https://game.gtimg.cn/images/lol/act/a20201030kda/m-name5.png" mode=""></image>
				<view class="start-content-text">
					<p class="gold">79</p>
					<p class="price-qb">[ Q币 ] </p>
				</view>
				<view class="start-btn" @click="handleBtn">
					<image src="https://game.gtimg.cn/images/lol/act/a20201030kda/btn-buy.png" mode=""></image>
				</view>
			</view>
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
			// uni.showLoading({
			// 	title: '加载中',
			// });
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
		background-color: #000000;

		.start-content {
			width: 100%;
			height: 100%;
			overflow: hidden;

			.start-the {
				width: 100%;
				height: 100%;
				position: absolute;
				top: -14rpx;
			}

			.start-box {
				position: absolute;
				width: 100%;
				height: auto;
				top: 70%;
				transform: translate(0, -70%);

				.start-content-img {
					width: 60%;
					height: 120rpx;
					display: block;
				}

				.start-content-text {
					width: 250rpx;
					height: auto;
					margin-left: 200rpx;
					position: absolute;
					top: 80rpx;
					-webkit-background-clip: text;
					color: transparent;
					background-image: linear-gradient(#dbfde5, #a8b8fa);
					display: flex;
					align-items: center;

					.gold {
						font-size: 100rpx;
						font-weight: bold;
						margin-right: 20rpx;
					}

					.price-qb {
						font-size: 30rpx;
					}
				}

				.start-btn {
					width: 50%;
					height: 110rpx;
					margin: 200rpx auto 0;
					-webkit-animation-name: scaleDraw;
					/*关键帧名称*/
					-webkit-animation-timing-function: ease-in-out;
					/*动画的速度曲线*/
					-webkit-animation-iteration-count: infinite;
					/*动画播放的次数*/
					-webkit-animation-duration: 5s;
				}

				@keyframes scaleDraw {

					/*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
					0% {
						transform: scale(1);
						/*开始为原始大小*/
					}

					25% {
						transform: scale(1.1);
						/*放大1.1倍*/
					}

					50% {
						transform: scale(1);
					}

					75% {
						transform: scale(1.1);
					}
				}
			}
		}
	}
</style>
