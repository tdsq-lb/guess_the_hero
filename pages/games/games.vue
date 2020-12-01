<template>
	<view class="games">
		<yuan />
		<!-- <lolProgress ref='progress' :currentPercent='currentPercent' :iscorrectColor="iscorrectColor"></lolProgress>
		<view class="games-player">
			
			<view class="games-player-progress">
				
			</view>
		</view> -->
	</view>
</template>

<script>
	import lolProgress from '../../component/Progress.vue'
	import yuan from '../../component/yuan.vue'
	export default {
		data() {
			return {
				currentPercent: 0, // 当前百分比
				iscorrectColor: "#67c23a", // "#f56c6c"
				toJSON: '',
			}
		},
		created() {

		},
		mounted() {
			// this.$refs.progress.init()
		},
		components: {
			lolProgress,
			yuan
		},
		methods: {
			handleBtn() {
				this.currentPercent += 20
				this.$refs.progress.init()
			}
		},

	}
</script>

<style lang="scss" scoped>
	.games {
		width: 100%;
		height: 100%;
		background-color: #007AFF;

		.games-player {
			width: 40vw;
			height: 40vw;
			border-radius: 50%;
			border: 10rpx solid #ccc;
			position: absolute;
			left: 50%;
			top: 100rpx;
			transform: translate(-50%);

			// .games-player-progress {
			// 	width: 100%;
			// 	height: 100%;
			// 	border: 10rpx solid;
			// }
		}
	}
</style>
