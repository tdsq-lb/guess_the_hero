<template>
	<view class="imt-audio">
		<view class="audio-wrapper">
			<!-- <view class="audio-number">{{format(current)}}</view> -->
			<slider class="audio-slider" :activeColor="color" block-size="16" :value="current" :min="duration"></slider>
			<!-- <view class="audio-number">{{format(duration)}}</view> -->
			<!-- 	<view class="audio_slider">
				<view class="dots" :style="{width:current}"></view>
			</view> -->
		</view>
		<view class="audio-control-wrapper" :style="{color}">
			<view class="audio-control audio-control-prev" :style="{borderColor:color}" @click="prev">&#xe601;</view>
			<view class="audio-control audio-control-switch" :class="{audioLoading:loading}" :style="{borderColor:color}" @click="audio.paused?play():audio.pause()">{{loading?'&#xe600;':(paused?'&#xe865;':'&#xe612;')}}</view>
			<view class="audio-control audio-control-next" :style="{borderColor:color}" @click="next">&#xe601;</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				audio: uni.createInnerAudioContext(),
				current: 0, //当前进度(s)
				duration: 0, //总时长(s)
				paused: true, //是否处于暂停状态
				loading: false, //是否处于读取状态
				seek: false, //是否处于拖动状态
				now: 0 //	音频下标
			}
		},
		props: {
			src: Array, //音频链接
			color: {
				type: String,
				default: '#169af3'
			}, //主色调
		},
		methods: {
			//返回prev事件
			prev() {
				console.log(this.now)
				if (!this.now) {
					console.log('不能减')
				} else {
					--this.now
					this.play()
				}
				// this.$emit('prev')
			},
			//返回next事件
			next() {
				console.log(this.now)
				if (this.now >= 3) {
					console.log('不能加')
				} else {
					++this.now
					this.play()
				}
			},
			//格式化时长
			format(num) {
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(
					Math.floor(num % 60)).length) + Math.floor(num % 60)
			},
			//点击播放按钮
			play() {
				if (this.src.length > 0) {
					this.loading = true
					this.audio.src = this.getAudioUrl(this.src[this.now])
					this.loading = false
					this.audio.autoplay = true;
					this.audio.onPlay(() => {
						this.paused = false
					})
					this.audio.onWaiting(() => {
						this.paused = true
					})
					this.audio.onCanplay(() => {
						if (this.paused) {
							this.audio.play()
							this.paused = false
						}
					})
					this.audio.onTimeUpdate(() => {
						const number = this.audio.currentTime / this.audio.duration
						let perNumber = (number * 100)
						this.current = perNumber
					})
					// //音频暂停事件
					this.audio.onPause(() => {
						this.paused = true
					})
					this.audio.onEnded(() => {
						console.log('播放结束')
						this.current = 0
						this.duration = 0
						this.paused = true
					})
					// this.audio.onSeeked(() => {
					// 	console.log('音频完成 seek 操作事件')
					// 	this.seek = false
					// })
				}
			},
			// 获取src路径
			getAudioUrl(e) {
				const BASE_URL = 'https://tdsq.top/static/wav/'
				if (e) {
					return BASE_URL + e
				}
			},
		},
		created() {
			// 打开系统静音开关
			this.audio.obeyMuteSwitch = false
		},
		beforeDestroy() {
			this.audio.destroy()
		}
	}
</script>

<style>
	@font-face {
		font-family: 'icon';
		src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot');
		src: url('//at.alicdn.com/t/font_1104838_fxzimc34xw.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1104838_fxzimc34xw.woff') format('woff'),
			url('//at.alicdn.com/t/font_1104838_fxzimc34xw.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1104838_fxzimc34xw.svg#iconfont') format('svg');
	}

	.imt-audio {
		padding: 30upx 0;
		background: #fff;
		border-radius: 20upx;
	}

	.audio-wrapper {
		padding: 0 30rpx;
		display: flex;
		align-items: center;
	}

	.audio_slider {
		width: 100%;
		height: 5rpx;
		/* position: relative; */
		background-color: #d8d8d8;

	}

	.dots {
		/* width: 100%; */
		height: 100%;
		background-color: #1890ff;
	}

	.audio-number {
		width: 120upx;
		font-size: 24upx;
		line-height: 1;
		color: #333;
		text-align: center;
	}

	.audio-slider {
		flex: 1;
		margin: 0;
	}

	.audio-control-wrapper {
		margin-top: 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "icon" !important;
	}

	.audio-control {
		font-size: 32upx;
		line-height: 1;
		border: 4upx solid;
		border-radius: 50%;
		padding: 16upx;
	}

	.audio-control-next {
		transform: rotate(180deg);
	}

	.audio-control-switch {
		font-size: 40upx;
		margin: 0 100upx;
	}

	.audioLoading {
		animation: loading 2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes loading {
		to {
			transform: rotate(360deg);
		}
	}
</style>
