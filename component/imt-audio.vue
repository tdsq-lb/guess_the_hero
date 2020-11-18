<template>
	<view class="imt-audio">
		<view class="audio-wrapper">
			<slider class="audio-slider" :activeColor="color" disabled block-size="10" :value="current" :max="100"></slider>
		</view>
		<view class="audio-control-wrapper" :style="{color}">
			<view class="audio-control audio-control-prev" v-if="control" :style="{borderColor:color}" @click="prev">&#xe601;</view>
			<view class="audio-control audio-control-switch" :class="{audioLoading:loading}" :style="{borderColor:color}" @click="audio.paused?play():audio.pause()">{{loading?'&#xe600;':(paused?'&#xe865;':'&#xe612;')}}</view>
			<view class="audio-control audio-control-next" v-if="control" :style="{borderColor:color}" @click="next">&#xe601;</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				audio: uni.createInnerAudioContext(),
				current: 0, //当前进度(s)
				paused: true, //是否处于暂停状态
				loading: false, //是否处于读取状态
				timer: ''
			}
		},
		props: {
			src: String, //音频链接
			autoplay: Boolean, //是否自动播放
			continue: Boolean, //播放完成后是否继续播放下一首，需定义@next事件
			control: {
				type: Boolean,
				default: true
			}, //是否需要上一曲/下一曲按钮
			color: {
				type: String,
				default: '#169af3'
			} //主色调
		},
		methods: {
			// 返回放到给父组件 销毁 this.audio
			destroy() {
				console.log('执行了这里')
				this.audio.seek(0)
				this.audio.destroy()

			},
			//返回prev事件
			prev() {
				this.$emit('prev')
			},
			//返回next事件
			next() {
				this.$emit('next')
			},
			//格式化时长
			format(num) {
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(
					Math.floor(num % 60)).length) + Math.floor(num % 60)
			},
			//点击播放按钮
			play() {
				this.audio.play()
				this.loading = true
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
			this.audio.obeyMuteSwitch = false
			//音频进度更新事件
			this.audio.onTimeUpdate(() => {
				this.timer = setInterval(() => {
					this.current = (this.audio.currentTime / this.audio.duration) * 100
					if (this.current >= 100) {
						clearInterval(this.timer)
					}
				})
			})
			//  音频错误事件
			this.audio.onError((res) => {
				this.current = 0
				console.log(res.errMsg, 'res.errMsg ==== >>>.');
				console.log(res.errCode, 'res.errCode ==== >>>.');
			})
			//音频播放事件
			this.audio.onPlay(() => {
				this.paused = false
				this.loading = false
			})
			//音频暂停事件
			this.audio.onPause(() => {
				this.paused = true
			})
			//音频结束事件
			this.audio.onEnded(() => {
				clearInterval(this.timer)
				// this.current = 0
				this.paused = true
				console.log('播放结束 ========>>>', this.current)
			})
			//音频完成更改进度事件
			this.audio.onSeeked(() => {
				this.seek = false
			})
		},
		beforeDestroy() {
			this.audio.destroy()
		},
		watch: {
			src: function(src, old) {
				this.audio.src = src
				this.current = 0
			}
		},
	}
</script>

<style lang="scss">
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
		// background-color: #555555;
		padding: 15rpx 0;
		border-radius: 20upx;
	}

	.audio-wrapper {
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.audio-slider {
		flex: 1;
		margin: 0;
	}

	.audio-control-wrapper {
		margin-top: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "icon" !important;
	}

	.audio-control {
		font-size: 20rpx;
		line-height: 1;
		border: 2upx solid;
		border-radius: 50%;
		padding: 16rpx;
		box-sizing: border-box;
	}

	.audio-control-next {
		transform: rotate(180deg);
	}

	.audio-control-switch {
		margin: 0 100rpx;
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
