<template>
	<view class="content">
		<view class="head">
			<view class="power">
				<Power ref="powerRef" />
			</view>
			<view class="tips" @click="handleVisible">
				<text class="iconfont icon-tishi"></text>提示
			</view>
		</view>
		<view class="banner">
			<image :src="getImgUrl(topicItem.images)" mode="scaleToFill" lazy-load></image>
			<view class="mask" v-show="isCorrect">
				<view :class="visible === 1 ? 'display' : 'mask_item left_top'"></view>
				<view :class="visible === 2 ? 'display' : 'mask_item right_top'"></view>
				<view :class="visible === 3 ? 'display' : 'mask_item left_bottom'"></view>
				<view :class="visible === 4 ? 'display' : 'mask_item right_bottom'"></view>
			</view>
		</view>
		<ImtAudio ref="mainindex" :src="audio[now]" @prev="now = now === 0?audio.length-1:now-1" @next="now = now === audio.length-1?0:now+1" />
		<!-- 	<view class="audioBox">
			<view class="progress_bar_box">
				<view class="progress_bar">
					<view class="schedule" :style="{width:audioSchedule}">
						<view class="dots" :style="{left:audioLeft}"></view>
					</view>
				</view>
			</view>
			<view class="onplay_box">
				<view class="iconfont" :class="btnIconfont" @click="handleAudio"></view>
			</view> -->
		<Options :dataitem="selectNameArr" :answe="topicItem.name" @nextQuestion="nextQuestion" />

		<!-- </view> -->
		<!-- <view class="main">
			<input type="text" :value="value" placeholder="请输入英雄名称" @focus="handleIsLogin" @input="handleInputValue" @confirm="handleInput" />
		</view> -->
	</view>
</template>

<script>
	import {
		isLogin
	} from '../../util/isLogin.js'
	import Power from 'component/power.vue'
	import ImtAudio from '../../component/imt-audio.vue'
	import Options from '../../component/options-list.vue'
	export default {
		data() {
			return {
				isLogin: null,
				topicItem: {},
				selectNameArr: [], // 名称选项数组
				now: 0,
				audio: [],
				isCorrect: true,
				visible: 0,
				audioSchedule: '0%',
				audioLeft: '0%',
				btnIconfont: 'icon-bofang1',
				value: '',
				isplay: true,
			}
		},
		components: {
			Power,
			ImtAudio,
			Options
		},
		created() {
			this.initData()
		},
		methods: {
			nextQuestion() {
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
				// console.log(data,'data ===========>>>')
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
				console.log(this.audio, '111111111111111111111111111111111')
				this.$data.isLogin = isLogin()
				if (this.$data.isLogin) {
					this.$refs.powerRef.handlePowerRef()
					this.$data.visible = Math.ceil(Math.random() * 4)
				}
			},
			// 语言播放
			handleAudio() {
				this.$data.isLogin = isLogin()
				const islogin = this.$data.isLogin
				const ispaly = this.$data.isplay
				if (islogin && ispaly) {
					this.$data.isplay = false
					const innerAudioContext = uni.createInnerAudioContext();
					innerAudioContext.autoplay = true;
					innerAudioContext.src = this.getAudioUrl();
					innerAudioContext.onPlay(() => {
						this.$data.btnIconfont = 'icon-bofang'
						console.log('开始播放');
					});
					innerAudioContext.onTimeUpdate(() => {
						const number = innerAudioContext.currentTime / innerAudioContext.duration
						let perNumber = (number * 100).toFixed(2)
						perNumber += '%'
						this.$data.audioLeft = perNumber
						this.$data.audioSchedule = perNumber
					})
					innerAudioContext.onEnded(() => {
						console.log('播放结束')
						this.$data.isplay = true
						this.$data.btnIconfont = 'icon-bofang1'
						console.log(this.$data.audioSchedule, '1111111111111')
						this.$data.audioSchedule = '0%'
						console.log(this.$data.audioSchedule, '2222222222222222')
						this.$data.audioLeft = '0%'
					})
					innerAudioContext.onError((res) => {
						console.log(res.errMsg);
						console.log(res.errCode);
					})
				}
			},
			// 输入框聚焦时触发，判断是登陆
			handleIsLogin(e) {
				this.$data.isLogin = isLogin()
			},
			// 输入时触发，动态绑定输入框的value值
			handleInputValue(e) {
				this.$data.value = e.detail.value
			},
			// 点击完成按钮时触发 判断输入值是否正确
			handleInput(e) {
				const userid = this.$data.isLogin.id
				console.log(userid)
				const name = this.$data.topicItem.name
				const value = e.detail.value
				const istrue = name.includes(value)
				if (istrue) {
					this.$data.isCorrect = false;
					const result = this.$myRequest({
						url: `/api/answer?userid=${userid}`
					})
					uni.showModal({
						showCancel: false,
						content: '答案正确',
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定');
								this.$refs.mainindex.destroy();
								this.$data.value = ''
								this.initData()
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
			},
			getImgUrl(img) {
				if (img) {
					return `https://tdsq.top/static/images/${img}`
				}
			},
			getAudioUrl() {
				const BASE_URL = 'https://tdsq.top/static/wav/'
				const audiourl = this.$data.topicItem.wav
				if (audiourl) {
					return BASE_URL + audiourl
				}
			},
		}
	}
</script>

<style lang="scss">
	.content {
		position: absolute;
		background-image: url(https://tdsq.top/static/images/game_bg.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		padding: 20rpx 50rpx;
		box-sizing: border-box;

		.head {
			width: 100%;
			height: 40rpx;
			color: #FFFFFF;
			display: flex;
			position: relative;

			.power {}

			.tips {
				width: 20%;
				height: 100%;
				border-bottom: 1px solid #b18733;
				box-sizing: border-box;
				color: #FFFFFF;
				text-align: center;
				letter-spacing: 4rpx;
				font-size: 28rpx;
				position: absolute;
				right: 0;
			}
		}

		.banner {
			width: 100%;
			height: 320rpx;
			border: 1px solid #b18733;
			box-sizing: border-box;
			margin: 20rpx 0;
			position: relative;

			image {
				width: 100%;
				height: 100%;
			}

			.mask {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;

				.mask_item {
					width: 50%;
					height: 50%;
					background-color: #000;
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

				.display {
					display: none;
				}
			}
		}

		.audioBox {
			width: 100%;
			height: 150rpx;
			background-color: #FFFFFF;
			border-radius: 15rpx;
			margin: 20rpx auto;
			padding: 20rpx 50rpx;
			box-sizing: border-box;

			.progress_bar_box {
				width: 100%;
				height: 35%;
				display: flex;
				align-items: center;
				// background-color: #b4afb4;

				.progress_bar {
					width: 100%;
					height: 5rpx;
					background-color: #d8d8d8;
					border-radius: 2rpx;
					position: relative;

					.schedule {
						width: 100%;
						height: 100%;
						background-color: #1890ff;
						border-radius: 2rpx;
						transition: all .2s;
					}

					.dots {
						width: 10rpx;
						height: 10rpx;
						background-color: red;
						border-radius: 50%;
						position: absolute;
						left: 50rpx;
						top: -3rpx;
						transition: width .2s;
					}
				}
			}

			.onplay_box {
				width: 100%;
				height: 65%;
				text-align: center;
				// background-color: #8f8d8f;

				.iconfont {
					color: #1890ff;
					font-size: 80rpx;
				}
			}
		}

		.main {
			width: 100%;
			height: 60rpx;

			input {
				width: 100%;
				height: 100%;
				border: 1rpx solid #999999;
				text-align: center;
				color: #FFFFFF;
			}
		}
	}
</style>
