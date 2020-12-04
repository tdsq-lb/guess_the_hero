<template>
	<view class="games">
		<view class="games-progress">
			<lolProgress ref='progress' :currentPercent='currentPercent'></lolProgress>
		</view>
		<view class="games-player">
			<player ref="player" :audioUrl="audioUrl"></player>
		</view>
		<view class="games-option">
			<view @click="handleOptions(item,index)" v-for="(item,index) in optionArray" :key="index" :class="isactive == index ? isanswe:''">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	import lolProgress from '../../component/Progress.vue'
	import player from '../../component/player.vue'
	export default {
		data() {
			return {
				currentPercent: 0, // 当前百分比
				toJSON: '',
				audioUrl: '', // 音频链接
				optionArray: [], // 选项组
				answe: "", // 正确答案
				isanswe: '',
				isactive: 0
			}
		},
		created() {
			this.getAudio()
		},
		mounted() {
			this.$refs.progress.init()
			this.$refs.player.init()
		},
		components: {
			lolProgress,
			player
		},
		methods: {
			async getAudio() {
				const result = await this.$myRequest({
					url: `/api/topic`
				})
				const num = Math.floor(Math.random() * (4 - 0) + 0)
				this.audioUrl = this.staticUrl(`wav/${result.data.data.wav[num]}`)
				console.log(this.audioUrl)
				this.optionArray = result.data.selectNameArr
				this.answe = result.data.data.name
			},
			// 回答正确或错误 初始化 canvas 播放器
			initialization(e) {
				if (e) {
					this.currentPercent += 20
				}
				this.$refs.progress.init()
				this.$refs.player.init()
				this.isactive = 0
				this.isanswe = ''
				this.getAudio()
				if (this.currentPercent >= 200) {
					uni.showModal({
						content: '挑战胜利',
						confirmText: "获取奖励",
						success: (res) => {
							console.log('用户点击了确定')
						}
					})
				}

			},
			handleOptions(e, index) {
				console.log(e, index, '===========>>>')
				this.isactive = index
				if (this.answe == e) {
					this.isanswe = "correct"
					uni.showModal({
						content: '答案正确',
						confirmText: "下一题",
						success: (res) => {
							this.initialization(1)
							console.log('用户点击了确定')
						}
					})
				} else {
					this.isanswe = "error"
					uni.showModal({
						content: '答案错误',
						confirmText: "确定",
						success: (res) => {
							this.initialization(0)
							console.log('用户点击了确定')
						}
					})
				}
			}
		},

	}
</script>

<style lang="scss" scoped>
	.games {
		width: 100%;
		height: 100%;
		background-color: #23253a;

		.games-progress {
			width: 100%;
			height: 70vw;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 9;
		}

		.games-player {
			width: 100%;
			height: 70vw;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 10;
		}

		.games-option {
			width: 90%;
			height: 400rpx;
			background-color: #FFFFFF;
			border-radius: 12rpx;
			margin: 0 auto;
			padding: 20rpx;
			box-sizing: border-box;
			position: relative;
			top: 50%;

			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			text-align: center;

			view {
				width: 30%;
				font-size: 25rpx;
				margin: 15rpx 0;
				border: 1rpx solid #bcbcbc;
				padding: 12rpx 0;
				box-sizing: border-box;
				border-radius: 15rpx;
				background-repeat: no-repeat;
				background-size: 100% 100%;

			}

			.correct {
				background-color: #007AFF;
			}

			.error {
				background-color: red
			}
		}
	}
</style>
