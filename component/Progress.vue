<template>
	<view style="position: relative;">
		<view>
			<canvas :style="{ backgroundColor: canvasStyle.canvasBgColor }" style="display: block; z-index: 0; width: 100%; height: 70vw"
			 canvas-id="progress">
			</canvas>
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
			// 最终百分比
			currentPercent: {
				type: Number
			},
			// 圆点颜色
			iscorrectColor: {
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
				Dots: [{
						percent: 0 // 百分比
					},
					{
						percent: 20 // 百分比
					},
					{
						percent: 40
					},
					{
						percent: 60
					},
					{
						percent: 80
					},
					{
						percent: 100
					},
					{
						percent: 120
					},
					{
						percent: 140
					},
					{
						percent: 160
					},
					{
						percent: 180
					}
				],
				canvasStyle: {
					canvasBgColor: '#23253a', // canvas背景颜色
					configure: {
						color: '#3a384d', // 配置背景颜色
						circleWidth: 5, // 配置背景圆圈半径
						lineWidth: 3, // 配置背景圆线条的宽度
					},
					current: {
						color: '#f19756', // 最终背景颜色
						circleWidth: 5, // 最终背景圆圈半径
						lineWidth: 3, // 最终背景圆线条的宽度
					}
				},
			}
		},
		methods: {
			// 初始化
			init() {
				const screenWidth = uni.getSystemInfoSync().screenWidth
				this.radius = (screenWidth / 2) * .6
				this.circleX = screenWidth / 2
				this.circleY = ((screenWidth) / 2) * .7
				this.ctx = uni.createCanvasContext('progress', this)
				this.circleLoading = setInterval(() => {
					this.loading()
				}, 20)
			},
			// 绘制圆点
			drawSmallCircle(cx, cy, r, color) {
				this.ctx.beginPath()
				this.ctx.lineWidth = 1
				this.ctx.fillStyle = color
				this.ctx.arc(cx, cy, r, 0, Math.PI * 2)
				this.ctx.closePath()
				this.ctx.fill()

			},
			// 绘制默认进度条
			configureSector(cx, cy, r) {
				this.ctx.beginPath()
				this.ctx.lineWidth = this.canvasStyle.configure.lineWidth
				this.ctx.strokeStyle = this.canvasStyle.configure.color
				this.ctx.arc(cx, cy, r, 0, Math.PI * 2)
				this.ctx.stroke()
			},
			// 绘制已完成进度条
			currentSector(cx, cy, r, startAngle, endAngle, anti) {
				this.ctx.beginPath()
				this.ctx.lineWidth = this.canvasStyle.current.lineWidth
				this.ctx.strokeStyle = this.canvasStyle.current.color
				this.ctx.lineCap = "round"
				this.ctx.arc(cx, cy, r, startAngle, Math.PI * (1 + endAngle / 100), false)
				this.ctx.stroke()
			},
			// 刷新
			loading() {
				if (this.process >= this.currentPercent) {
					clearInterval(this.circleLoading)
				}

				// 清除canvas内容
				this.ctx.clearRect(0, 0, this.circleX * 2, this.circleY * 2)

				// 绘制默认进度条
				this.configureSector(this.circleX, this.circleY, this.radius)

				// 绘制默认进度条圆点
				for (let i of this.Dots) {
					this.drawSmallCircle(
						this.circleX + Math.sin(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * this.radius,
						this.circleY + Math.cos(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * this.radius,
						this.canvasStyle.configure.circleWidth,
						this.canvasStyle.configure.color
					)
				}

				// 绘制已完成进度条
				this.currentSector(this.circleX, this.circleY, this.radius, Math.PI * 1, this.process)

				// 绘制已完成进度条圆点和数值文字
				for (let i of this.Dots) {
					if (this.process >= i.percent) {
						this.drawSmallCircle(
							this.circleX + Math.sin(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * this.radius,
							this.circleY + Math.cos(((2 * Math.PI) / 360) * (-90 + -i.percent * 1.8)) * this.radius,
							this.canvasStyle.current.circleWidth,
							this.iscorrectColor,
						)
					}
				}

				// 控制结束时动画的速度
				if (this.process / this.currentPercent > 0.9) {
					this.process += 0.3
				} else if (this.process / this.currentPercent > 0.8) {
					this.process += 0.55
				} else if (this.process / this.currentPercent > 0.7) {
					this.process += 0.75
				} else {
					this.process += 1.0
				}
				this.ctx.draw(true, () => {
					this.$emit('onFinish')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
