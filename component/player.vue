<template>
	<view style="position: relative;">
		<view>
			<canvas style="display: block;width: 100%; height: 70vw;" canvas-id="player">
			</canvas>
		</view>
		<view class="progresstext" @click="audio.paused?play():audio.pause()">
			<i v-show="status">{{count}}</i>
			<i v-show="!status" class="iconfont" :class="{audioLoading:Read}">{{Read?"&#xe7ba;":(paused?"&#xe60f;":"&#xe619;")}}</i>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			contentWidth: function() {
				return this.radius * 1.5
			}
		},
		props: {
			audioUrl: {
				type: String
			}
		},
		data() {
			return {
				toJSON: '',
				process: 0.0, // 当前进度
				circleX: 0, // 中心x坐标
				circleY: 0, // 中心y坐标
				radius: 0, // 圆环半径
				ctx: null,
				// 圆点颜色
				iscorrectColor: "#67c23a",
				canvasStyle: {
					canvasBgColor: '#23253a', // canvas背景颜色
					configure: {
						color: '#3a384d', // 配置背景颜色
						circleWidth: 10, // 配置背景圆圈半径
						lineWidth: 10, // 配置背景圆线条的宽度
					},
					current: {
						color: '#f19756', // 最终背景颜色
						circleWidth: 10, // 最终背景圆圈半径
						lineWidth: 10, // 最终背景圆线条的宽度
					}
				},
				currentPercent: 0, //最终百分比
				timer: '',
				count: 10, // 倒计时 计数
				status: false, // 状态切换  播放状态  倒计时状态
				audio: uni.createInnerAudioContext(),
				paused: true, //是否处于暂停状态
				Read: false, //是否处于读取状态
			}
		},
		created() {
			this.audio.obeyMuteSwitch = false // 不遵循系统静音开关
			this.audio.onTimeUpdate(() => {
				this.drawCircle(Math.round(this.audio.currentTime) / Math.round(this.audio.duration))
			})
			this.audio.onError((res) => {
				console.log(res, '音频播放错误 =========>>>')
			})
			this.audio.onPlay(() => {
				this.paused = false
				this.Read = false
			})
			//音频暂停事件
			this.audio.onPause(() => {
				this.paused = true
			})
			//音频结束事件
			this.audio.onEnded(() => {
				this.paused = true
				this.status = true
				this.countdown()
				console.log('音频播放结束 =====================>>>>')
			})
		},
		methods: {
			//点击播放按钮
			play() {
				this.audio.play()
				this.Read = true
			},
			// 初始化
			init() {
				clearInterval(this.timer)
				this.status = false
				this.count = 10
				this.paused = true
				const screenWidth = uni.getSystemInfoSync().screenWidth
				this.ctx = uni.createCanvasContext('player', this) // 初始化圆形
				this.radius = (screenWidth / 2) * .4
				this.circleX = screenWidth / 2
				this.circleY = ((screenWidth) / 2) * .7
				this.drawCircle(0)
			},
			// 倒计时
			countdown() {
				if (this.status) {
					let num = 1
					this.timer = setInterval(() => {
						--this.count;
						this.drawCircle(num -= 0.1)
						if (this.count <= 0) {
							clearInterval(this.timer)
							this.status = false
							this.count = 10
							uni.showModal({
								title: '提示',
								content: '挑战失败',
								success: (res) => {
									if (res.confirm) {
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
					}, 1000)
				}
			},
			// 圆形
			drawCircle(percentage) {
				this.ctx.save()
				console.log(this.ctx, '====111111111111 ====>>>')
				this.ctx.beginPath();
				this.ctx.arc(this.circleX, this.circleY, this.radius, 0, Math.PI * 2, false);
				this.ctx.lineWidth = 10;
				this.ctx.strokeStyle = "#F0F0F0";
				this.ctx.stroke()
				this.ctx.beginPath();
				this.ctx.arc(this.circleX, this.circleY, this.radius, Math.PI * 3 / 2, (Math.PI * 3 / 2 + Math.PI * 2 / 180 +
						percentage * Math.PI * 2),
					false);
				this.ctx.lineWidth = 10;
				this.ctx.strokeStyle = "#EEBD44";
				this.ctx.stroke();
				this.ctx.restore()
				this.ctx.draw()
			}
		},
		watch: {
			audioUrl: function(audioUrl, old) {
				this.audio.src = audioUrl
			}
		}
	}
</script>

<style lang="scss" scoped>
	i {
		font-style: normal;
		font-size: 80rpx;
	}

	.progresstext {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: 200rpx;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
		color: #409eff;
		// background-color: red;
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
