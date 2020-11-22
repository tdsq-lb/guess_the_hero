<template>
	<view class="game">
		<image class="game-bg" src="https://tdsq.top/static/images/bg.jpg" mode="scaleToFill" lazy-load @load="imageLoad" />
		<!-- <view class="game-position">
			<view class="game-position-power">
				<Power ref="childPowerRef" />
			</view>
			<view class="game-position-times">
				<Select :selectNumber="selectNumber" />
			</view>
		</view> -->
		<view class="game-content">
			<view class="game-content-header">
				<image src="../../static/images/tetx.png" mode="scaleToFill"></image>
				<!-- <view class="game-content-header-tips" @click="handleVisible">
					<text class="iconfont icon-tishi"></text>提示
				</view> -->
			</view>
			<view class="game-content-image">
				<image src="https://tdsq.top/static/images/heroshow.png" mode="scaleToFill" lazy-load @load="imageLoad" v-show="isCorrect"></image>
				<view class="game-content-image-frame" v-show="!isCorrect">
					<image :src="getImgUrl(topicItem.images)" mode="scaleToFill" lazy-load></image>
					<!-- <view class="game-content-image-frame-Mask" v-show="isCorrect">
						<view v-show="item1" class="item left_top"></view>
						<view v-show="item2" class="item right_top"></view>
						<view v-show="item3" class="item left_bottom"></view>
						<view v-show="item4" class="item right_bottom"></view>
					</view> -->
				</view>
			</view>
			<view class="game-content-audio">
				<ImtAudio ref="mainindex" :src="audio[now]" @prev="now = now === 0?audio.length-1:now-1" @next="now = now === audio.length-1?0:now+1" />
			</view>
			<view class="game-content-options">
				<Options @handleSelectNumber="handleSelectNumber" @handleNextQuestion="handleNextQuestion" @handleShowMask="handleShowMask"
				 @handleHideMask="handleHideMask" :dataitem="selectNameArr" :answe="topicItem.name" />
			</view>
		</view>
	</view>
</template>

<script>
	import {
		checkIsLogin
	} from '../../util/util.js'
	import Power from 'component/power.vue'
	import Select from 'component/select-number.vue'
	import ImtAudio from 'component/imt-audio.vue'
	import Options from 'component/options-list.vue'
	export default {
		data() {
			return {
				isLogin: null,
				topicItem: {},
				selectNameArr: [], // 名称选项数组
				now: 0,
				audio: [],
				isCorrect: true, // 是否显示图片
				selectNumber: 3,
				refItem: 1,
				item1: true,
				item2: true,
				item3: true,
				item4: true
			}
		},
		components: {
			Power,
			Select,
			ImtAudio,
			Options
		},
		created() {
			this.initData()
			uni.showLoading({
				title: '加载中',
				mask: true
			});
		},
		methods: {
			// 选择次数 传递给Select子组件
			handleSelectNumber(val) {
				this.selectNumber = val
			},
			handleNextQuestion() {
				this.initData()
			},
			// 获取答题数据
			async initData() {
				this.isCorrect = true;
				const result = await this.$myRequest({
					url: `/api/topic`
				})
				console.log(result.data)
				this.topicItem = result.data.data
				this.selectNameArr = result.data.selectNameArr
				const data = result.data.data
				this.audio = []
				if (data.wav) {
					let than = this
					data.wav.forEach((item) => {
						const BASE_URL = 'https://tdsq.top/static/wav/'
						const srcwav = BASE_URL + item
						this.audio.push(srcwav)
					})
				}
			},
			// 提示
			handleVisible() {
				this.isLogin = checkIsLogin()
				if (this.isLogin) {
					if (this.refItem <= 4) {
						this['item' + this.refItem] = false
						this.refItem = this.refItem + 1
						// 提示减体力值
						// this.$refs.childPowerRef.handlePowerRef()
					}
				}
			},
			// 回答正确 显示图片
			handleShowMask() {
				this.isCorrect = false
			},
			// 下一题 隐藏图片 关闭提示的图片
			handleHideMask() {
				this.isCorrect = true
				this.refItem = 1
				for (let i = 4; i >= 1; i--) {
					console.log(i, '=================>>>')
					this['item' + i] = true
				}

			},
			getImgUrl(img) {
				if (img) {
					return `https://tdsq.top/static/lol_img/${img}`
				}
			},
			imageLoad(e) {
				console.log(e.detail,'背景图片加载完成 =====>>>>')
				uni.hideLoading();
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: black;
	}

	.game {
		// position: absolute;
		// background-image: url(https://tdsq.top/static/images/bg.jpg);
		background-repeat: no-repeat;
		background-size: 100%;
		width: 100%;
		height: 100%;

		.game-bg {
			width: 100%;
			height: 992rpx;
		}

		.game-position {
			width: 20%;
			height: 120rpx;
			position: absolute;
			left: 0;
			top: 40rpx;

			.game-position-power {
				display: flex;
				justify-content: center;
				width: 100%;
				height: 50%;
				font-size: 28rpx;
				line-height: 50rpx;
				color: #131516;
				background-image: url(https://tdsq.top/static/images/enemy_economic_lose.9.png);
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}

			.game-position-times {
				display: flex;
				justify-content: center;
				width: 100%;
				height: 50%;
				font-size: 28rpx;
				line-height: 50rpx;
				color: #131516;
				background-image: url(https://tdsq.top/static/images/enemy_ecnomic_win.9.png);
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
		}

		.game-content {
			width: 94%;
			height: 80%;
			// border-radius: 15rpx;
			border-top-left-radius: 15rpx;
			border-top-right-radius: 15rpx;
			background-color: #FFFFFF;
			position: absolute;
			bottom: 0;
			left: 3%;
			padding: 20rpx;
			box-sizing: border-box;
		}

		.game-content-header {
			width: 100%;
			height: 40rpx;
			display: flex;
			justify-content: space-between;

			.game-content-header-tips {
				width: 20%;
				height: 100%;
				text-align: center;
				font-size: 28rpx;
				line-height: 50rpx;
				color: #ba9a6c;
				background-image: url(https://tdsq.top/static/images/tips.png);
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
		}

		.game-content-image {
			width: 100%;
			height: 320rpx;
			border: 1px solid #ccb089;
			box-sizing: border-box;
			margin: 20rpx auto;
			padding: 5rpx;
			position: relative;

			.game-content-image-frame {
				width: 100%;
				height: 100%;
				border: 1px solid #ccb089;
				box-sizing: border-box;
				position: relative;

				.game-content-image-frame-Mask {
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;

					.item {
						width: 50%;
						height: 50%;
						// background-color: #000;
						position: absolute;
					}

					.left_top {
						left: 0;
						top: 0;
					}

					.right_top {
						right: 0;
						top: 0;
					}

					.left_bottom {
						left: 0;
						bottom: 0;
					}

					.right_bottom {
						right: 0;
						bottom: 0;
					}
				}
			}
		}

		.game-content-audio {
			// background-color: #555555;
		}

		.game-content-options {
			// background-color: #555555;
			margin: 20rpx 0;
		}

	}
</style>
