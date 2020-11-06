<template>
	<view class="content">
		<view class="head">
			<view class="tips" @click="handleVisible">
				<text class="iconfont icon-tishi"></text>提示
			</view>
		</view>
		<view class="banner">
			<image src="../../static/images/big1000.jpg" mode="scaleToFill" lazy-load></image>
			<view class="mask" v-show="isCorrect">
				<view :class="visible === 1 ? 'display' : 'mask_item left_top'"></view>
				<view :class="visible === 2 ? 'display' : 'mask_item right_top'"></view>
				<view :class="visible === 3 ? 'display' : 'mask_item left_bottom'"></view>
				<view :class="visible === 4 ? 'display' : 'mask_item right_bottom'"></view>
			</view>
		</view>
		<view class="audioBox">
			<view class="progress_bar_box">
				<view class="progress_bar">
					<view class="schedule" :style="{width:audioSchedule}"></view>
				</view>
			</view>
			<view class="onplay_box">
				<view class="iconfont" :class="btnIconfont" @click="handleAudio"></view>
			</view>
		</view>
		<view class="main">
			<input type="text" :value="value" placeholder="请输入英雄名称" @confirm="handleInput" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCorrect: true,
				visible: 0,
				audioSchedule: '0%',
				btnIconfont: 'icon-bofang1',
				value: ''
			}
		},
		methods: {
			handleVisible() {
				this.$data.visible = Math.ceil(Math.random() * 4)
			},
			handleAudio() {
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = '/static/audio/anni.mp3';
				innerAudioContext.onPlay(() => {
					this.$data.btnIconfont = 'icon-bofang'
					const timer = setInterval(() => {
						const number = innerAudioContext.currentTime / innerAudioContext.duration
						let perNumber = (number * 100).toFixed(2)
						if (perNumber >= 100) {
							clearInterval(timer)
						}
						perNumber += '%'
						this.$data.audioSchedule = perNumber
					})
					console.log('开始播放');
				});
				innerAudioContext.onEnded(() => {
					console.log('播放结束')
					this.$data.btnIconfont = 'icon-bofang1'
					this.$data.audioSchedule = '0%'
				})
				innerAudioContext.onError((res) => {
					console.log(res.errMsg);
					console.log(res.errCode);
				})
			},
			handleInput(e) {
				console.log(e.detail.value)
				if (e.detail.value == '安妮') {
					this.$data.isCorrect = false
					uni.showModal({
						showCancel: false,
						content: '答案正确',
						confirmText: '下一题',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							}
						}
					});
				} else {
					uni.showModal({
						showCancel: false,
						content: '请输入正确答案',
						confirmText: '确定',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							}
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	.content {
		position: absolute;
		background-image: url(https://i.loli.net/2020/11/06/W6XJaI7SfxbR8Vc.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		padding: 20rpx 50rpx;
		box-sizing: border-box;

		.head {
			width: 100%;
			height: 40rpx;
			position: relative;

			.tips {
				width: 20%;
				height: 100%;
				border-bottom: 1px solid #b18733;
				box-sizing: border-box;
				color: #FFFFFF;
				text-align: center;
				letter-spacing: 4rpx;
				font-size: 28rpx;
				position: absolute;
				right: 0;
			}
		}

		.banner {
			width: 100%;
			height: 320rpx;
			border: 1px solid #b18733;
			box-sizing: border-box;
			margin: 20rpx 0;
			position: relative;

			image {
				width: 100%;
				height: 100%;
			}

			.mask {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;

				.mask_item {
					width: 50%;
					height: 50%;
					background-color: #000;
					position: absolute;
				}

				.left_top {
					left: 0;
					top: 0;
				}

				.right_top {
					right: 0;
					top: 0;
				}

				.left_bottom {
					left: 0;
					bottom: 0;
				}

				.right_bottom {
					right: 0;
					bottom: 0;
				}

				.display {
					display: none;
				}
			}
		}

		.audioBox {
			width: 100%;
			height: 150rpx;
			background-color: #FFFFFF;
			border-radius: 15rpx;
			margin: 20rpx auto;
			padding: 20rpx 50rpx;
			box-sizing: border-box;

			.progress_bar_box {
				width: 100%;
				height: 35%;
				display: flex;
				align-items: center;
				// background-color: #b4afb4;

				.progress_bar {
					width: 100%;
					height: 5rpx;
					background-color: #d8d8d8;
					border-radius: 2rpx;

					.schedule {
						height: 100%;
						background-color: #1890ff;
						border-radius: 2rpx;
					}
				}
			}

			.onplay_box {
				width: 100%;
				height: 65%;
				text-align: center;
				// background-color: #8f8d8f;

				.iconfont {
					color: #1890ff;
					font-size: 80rpx;
				}
			}
		}

		.main {
			width: 100%;
			height: 60rpx;

			input {
				width: 100%;
				height: 100%;
				border: 1rpx solid #999999;
				text-align: center;
				color: #FFFFFF;
			}
		}
	}
</style>
