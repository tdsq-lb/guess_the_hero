<template>
	<view>
		{{count}}
	</view>
</template>

<script>
	import {
		setTimeStamp,
		getTimeStamp,
		setPower,
		getPower
	} from '../util/power_util.js'
	export default {
		data() {
			return {
				count: '',
				timer: ''
			}
		},
		created() {
			const power = getPower()
			if (!power) {
				setPower(5)
				this.$data.count = getPower()
			}
			this.$data.count = power
			if (this.$data.count !== 5) {
				const currentTime = Date.parse(new Date()) //	当前时间
				const second = parseInt(((currentTime - getTimeStamp()) / 1000) / 60)
				let num = parseInt(second / 2)
				this.$data.count += num
				this.timers()
			}

		},
		methods: {
			handlePowerRef() {
				const count = this.$data.count - 1
				if (count >= 0) {
					this.$data.count = count
					this.timers()
					
					setTimeStamp()
					setPower(this.$data.count)
				} else {
					uni.showModal({
						showCancel: false,
						content: '体力不足',
						confirmText: '确定',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							}
						}
					});
				}
			},
			AddPower() {
				let count = this.$data.count
				if (count == 5) {
					clearInterval(this.timer)
				} else {
					this.$data.count = count + 1
					console.log(this.$data.count, '加体力=============>>>>>')
					setTimeStamp()
					setPower(this.$data.count)
				}
			},
			timers() {
				clearInterval(this.timer)
				this.timer = setInterval(this.AddPower, 10000)
			}
		},
		mounted() {

		},
		beforeDestroy() {
			clearInterval(this.timer);
		}
	}
</script>

<style lang="scss">
</style>
