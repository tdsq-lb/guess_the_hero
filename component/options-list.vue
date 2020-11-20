<template>
	<view class="option-list">
		<view @click="handleItem(item)" class="item" v-for="(item,index) in dataList" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	import {
		isLogin
	} from '../util/util.js'
	export default {
		data() {
			return {
				userInfo: null, //	用户信息
				dataList: [],
				isanswe: '',
				selectNumber: 3
			}
		},
		props: {
			dataitem: Array, // 名称数组
			answe: String //正确答案
		},
		created() {},
		methods: {
			handleItem(e) {
				// 次数限定
				if (this.selectNumber >= 1) {
					this.selectNumber = this.selectNumber - 1
					this.$emit('handleSelectNumber', this.selectNumber);
					// --------------------------------------
					this.userInfo = isLogin()
					const userid = this.userInfo.id
					if (this.isanswe == e) {
						const result = this.$myRequest({
							url: `/api/answer?userid=${userid}`
						})
						this.$emit('handleShowMask')
						uni.showModal({
							showCancel: false,
							content: '答案正确',
							confirmText: '下一题',
							success: (res) => {
								if (res.confirm) {
									console.log('用户点击确定');
									this.$emit('handleNextQuestion')
									this.selectNumber = 3
									this.$emit('handleSelectNumber', this.selectNumber);
									this.$emit('handleHideMask')
								}
							}
						});
					} else {
						uni.showModal({
							showCancel: false,
							content: '请输入正确答案',
							confirmText: '确定',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
								}
							}
						});
					}
				} else {
					uni.showModal({
						title: '提示',
						content: '你没有了选择次数,是否选择看广告增加次数',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定');
								this.selectNumber = 3
								this.$emit('handleSelectNumber', this.selectNumber);
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}

			}
		},
		watch: {
			dataitem: function(src, old) {
				this.dataList = src
			},
			answe: function(src, old) {
				this.isanswe = src
			}
		}
	}
</script>

<style lang="scss">
	.option-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		text-align: center;

		.item {
			width: 30%;
			font-size: 25rpx;
			margin: 15rpx 0;
			border: 1rpx solid #bcbcbc;
			padding: 12rpx 0;
			box-sizing: border-box;
			border-radius: 15rpx;
			// background-image: url(https://tdsq.top/static/images/tft_battle_rank_tier_0.png);
			background-repeat: no-repeat;
			background-size: 100% 100%;

		}
	}
</style>
