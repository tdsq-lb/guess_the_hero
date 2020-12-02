<template>
	<view class="games">
		<lolProgress ref='progress' :currentPercent='currentPercent'></lolProgress>
		<view class="games-player">
			<player :audioUrl="audioUrl" />
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
				this.optionArray = result.data.selectNameArr
				this.answe = result.data.data.name
			},
			handleBtn() {
				this.currentPercent += 20
				this.$refs.progress.init()
			},
			handleOptions(e, index) {
				console.log(e,index,'===========>>>')
				this.isactive = index
				if (this.answe == e) {
					this.isanswe = "correct"
					// uni.showModal({
					// 	content: '答案正确',
					// 	confirmText: "下一题",
					// 	success: (res) => {
					// 		console.log('用户点击了确定')
					// 	}
					// })
				} else {
					this.isanswe = "error"
					// uni.showModal({
					// 	content: '答案错误',
					// 	confirmText: "确定",
					// 	success: (res) => {
					// 		console.log('用户点击了确定')
					// 	}
					// })
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

		.games-player {
			width: 300rpx;
			height: 300rpx;
			position: absolute;
			left: 50%;
			top: 110rpx;
			transform: translate(-50%);
		}

		.games-option {
			width: 90%;
			height: 400rpx;
			background-color: #FFFFFF;
			border-radius: 12rpx;
			margin: 0 auto;
			padding: 20rpx;
			box-sizing: border-box;

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
				background-color:#007AFF;
			}

			.error {
				background-color: red
			}
		}
	}
</style>
