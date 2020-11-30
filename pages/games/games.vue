<template>
	<view class="games">
		<lolProgress ref='progress' :configureData='configureData' :currentPercent='currentPercent' :canvasStyle='canvasStyle'>
			<view class='games-content'>
				<button type="default" @click="handleBtn">按钮</button>
			</view>
		</lolProgress>
	</view>
</template>

<script>
	import lolProgress from '../../components/Yumcc-DiDiProgress/index.vue'
	export default {
		data() {
			return {
				configureData: [{
						percent: 5, // 百分比
						label: '白银', // 文字(等级用)
						num: 100 // 数值(显示用)
					},
					{
						percent: 23, // 百分比
						label: '黄金', // 文字(等级用)
						num: 150 // 数值(显示用)
					},
					{
						percent: 41, // 百分比
						label: '白金', // 文字(等级用)
						num: 300 // 数值(显示用)
					},
					{
						percent: 59, // 百分比
						label: '钻石', // 文字(等级用)
						num: 800 // 数值(显示用)
					},
					{
						percent: 77, // 百分比
						label: '黄金', // 文字(等级用)
						num: 1800 // 数值(显示用)
					},
					{
						percent: 95, // 百分比
						label: '黑金', // 文字(等级用)
						num: 3800 // 数值(显示用)
					}
				],
				// 当前百分比
				currentPercent: 0,
				// 绘制配置
				canvasStyle: {
					canvasBgColor: '#23253a', // canvas背景颜色
					percentText: { // 百分比文字样式
						color: '#FFF',
						fontSize: 11
					},
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
				}
			}
		},
		mounted() {
			this.$refs.progress.init()
		},
		components: {
			lolProgress
		},
		methods: {
			handleBtn() {
				console.log('1111',this.currentPercent)
				this.currentPercent += 10
			}
		}
	}
</script>

<style lang="scss" scoped>
	.games {
		width: 100%;
		height: 100%;

		.games-content {
			color: #FFF;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}
</style>
