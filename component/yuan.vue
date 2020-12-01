<template>
	<view class="yuan">
		<canvas canvas-id="schedule" style="display: block; z-index: 0; width: 100%; height: 70vw"></canvas>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				ctx: null
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.ctx = uni.createCanvasContext('schedule', this)
				setInterval(() => {
					this.aa()
				}, 20)
			},
			aa() {
				console.log('111111111')
					this.ctx.beginPath()
				this.ctx.arc(100, 75, 50, 0, 2 * Math.PI)
				this.ctx.lineWidth = 2
				this.ctx.strokeStyle = 'red'
				this.ctx.stroke()
			}

		}
	}
</script>
