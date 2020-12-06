<template>
	<view class="start">
		<image class="start-bg" :src="this.staticUrl('images/start_bg.jpg')" mode="scaleToFill" lazy-load @load="imageLoad"></image>
		<view class="start-content">
			<view class="start-btn" @click="handleBtn">
				开始挑战
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
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			position: absolute;
			top: 60%;
			left: 50%;
			transform: translate(-50%, -60%);
			display: flex;
			justify-content: center;
		}

		.start-btn {
			width: 60%;
			height: 100%;
			background-image: url(../../static/images/login_btn_press.png);
			background-size: 100% 100%;
			background-repeat: no-repeat;
			color: #FFFFFF;
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
</style>
