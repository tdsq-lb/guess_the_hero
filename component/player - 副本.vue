<template>
	<view class="circleprogress">
		<!-- <view class="progresstext" @click="audio.paused?play():audio.pause()">{{count === 10 ? '&#xe600;':count}}</view> -->
		<view class="progresstext" @click="audio.paused?play():audio.pause()">
			<i v-show="istrue">{{count}}</i>
			<i v-show="!istrue" class="iconfont" :class="{audioLoading:loading}">{{loading?"&#xe7ba;":(paused?"&#xe60f;":"&#xe619;")}}</i>
		</view>
		<view class="wrapper">
			<view class="leftprogress" :style="{ transform: leftprogress}"></view>
		</view>
		<view class="wrapper">
			<view class="rightprogress" :style="{ transform: rightprogress}"></view>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			// 最终百分比
			audioUrl: {
				type: String
			}
		},
		data() {
			return {
				leftprogress: 'rotate(-45deg)',
				rightprogress: 'rotate(45deg)',
				count: 10,
				deg: 0,
				timer: '',
				audio: uni.createInnerAudioContext(),
				paused: true, //是否处于暂停状态
				loading: false, //是否处于读取状态
				istrue: false
			}
		},
		onLoad() {

		},
		created() {
			this.audio.obeyMuteSwitch = false //不遵循系统静音开关
			this.audio.onTimeUpdate(() => {
				const deg = ((Math.round(this.audio.currentTime) / Math.round(this.audio.duration)) * 100) / 100 * 360
				this.schedule(deg)
			})
			this.audio.onError((res) => {
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
			// 音频加载中事件
			this.audio.onWaiting((res) =>{
				console.log('onWaiting','======数据不足 加载中 ==========>>>')
				this.loading = true
				// this.audio.pause()
			})
			//音频结束事件
			this.audio.onEnded(() => {
				clearInterval(this.timer)
				this.paused = true
				this.text = ""
				this.istrue = true
				this.btn()
				console.log('播放结束 ========>>>')
			})
		},
		methods: {
			//点击播放按钮
			play() {
				this.audio.play()
				this.loading = true
			},
			btn() {
				if (this.count >= 10) {
					this.timer = setInterval(() => {
						--this.count;
						++this.deg;
						if (this.count <= 0) {
							clearInterval(this.timer)
							// this.leftprogress = 'rotate(-45deg)'
							// this.rightprogress = 'rotate(45deg)'
							// this.count = 10
							// this.deg = 0
						}
						const deg = (this.deg * 10) / 100 * 360
						this.schedule(deg)
					}, 1000)
				}
			},
			schedule(e) {
				if (e <= 180) {
					this.rightprogress = 'rotate(' + (45 + e) + 'deg)'
					this.leftprogress = 'rotate(' + (-45) + 'deg)'
				} else {
					this.rightprogress = 'rotate(' + (45 + 180) + 'deg)'
					this.leftprogress = 'rotate(' + (-45 + (e - 180)) + 'deg)'
				}
			}
		},
		watch: {
			audioUrl: function(audioUrl, old) {
				this.audio.src = audioUrl
			}
		}
	}
</script>

<style>
	i {
		font-style: normal;
	}

	.iconfont {
		font-size: 80rpx;
	}

	.circleprogress {
		width: 100%;
		height: 400rpx;
		display: flex;
		justify-content: center;
	}

	.circleprogress .progresstext {
		position: absolute;
		font-size: 80rpx;
		width: 300rpx;
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
		color: #409eff;
		/* background-color: red; */
	}

	.circleprogress .wrapper {
		width: 150rpx;
		height: 300rpx;
		overflow: hidden;
	}

	.circleprogress .leftprogress,
	.rightprogress {
		width: 260rpx;
		height: 260rpx;
		border: 20rpx solid #3a384d;
		border-bottom: 20rpx solid #7ef22e;
		border-radius: 50%;
		transition: ease-out .3s;

	}

	.circleprogress .leftprogress {
		border-right: 20rpx solid #7ef22e;
	}

	.circleprogress .rightprogress {
		border-left: 20rpx solid #7ef22e;
		margin-left: -152rpx;
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
