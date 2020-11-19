<template>
	<view class="content">
		<view class="head">
			<image src="../../static/images/logo-public.png" mode=""></image>
		</view>
		<view class="main">
			<view class="option">
				<view class="option_item">
					<input type="text" placeholder="游戏ID" v-bind:value="gameId" @input="handleInputValue">
				</view>
				<view class="option_item">
					<picker class="option_item_txt" mode="selector" :range="array" @change="handleSelect">
						<view>{{array[server]}}</view>
					</picker>
				</view>
				<view class="option_item">
					<view class="start" @click="handleStart">
						点击开始
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gameId: '',
				array: ['请选择大区', '艾欧尼亚', '比尔吉沃特', '祖安', '诺克萨斯', '班德尔城', '德玛西亚', '皮尔特沃夫', '战争学院', '弗雷尔卓德', '巨神峰', '雷瑟守备', '无畏先锋',
					'裁决之地', '黑色玫瑰', '暗影岛', '恕瑞玛', '钢铁烈阳', '水晶之痕', '均衡教派', '扭曲丛林', '教育专区', '影流', '守望之海', '征服之海', '卡拉曼达', '巨龙之巢',
					'皮城警备', '男爵领域'
				],
				server: 0,
			}
		},
		methods: {
			handleInputValue(e) {
				this.$data.gameId = e.detail.value
			},
			handleSelect(e) {
				const selectIndex = e.detail.value
				this.$data.server = selectIndex
			},
			async handleStart() {
				const gameId = this.$data.gameId
				const server = this.$data.server
				if (gameId && server) {
					const result = await this.$myRequest({
						url: `/api/userinfo?gameid=${gameId}&server=${server}`
					})
					if (result.data.id > 0) {
						uni.setStorage({
							key: 'USER-INFO',
							data: result.data,
							success: () => {
								uni.showToast({
									icon: "none",
									title: '登陆成功',
									duration: 2000
								});
								console.log(result.data, '<<<<<<<<<<<==============(result)')
								uni.switchTab({
									url: '/pages/user/user'
								})
							}
						});
					} else {
						uni.showModal({
							showCancel: false,
							content: '改账户不存在',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
								}
							}
						});
					}

				} else {
					uni.showModal({
						showCancel: false,
						content: '请输入游戏ID或游戏大区',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							}
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	.content {
		position: absolute;
		background-image: url(https://tdsq.top/static/images/index_bg.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100%;
		height: 100%;

		.head {
			image {
				width: 334rpx;
				height: 120rpx;
				margin: 0 auto;
				display: block
			}
		}

		.main {
			position: absolute;
			width: 100%;
			left: 0;
			top: 50%;

			.option {
				width: 468rpx;
				margin: 0 auto;
				padding: 10px 0;

				.option_item {
					width: 100%;
					height: 70rpx;
					position: relative;
					margin: 0 0 16px;
					text-align: center;

					input {
						width: 100%;
						height: 100%;
						background-color: rgba(255, 255, 255, .25);
						text-align: center;
						color: #ddd;
						line-height: 35px;
						font-size: 14px;
					}

					.option_item_txt {
						width: 100%;
						height: 100%;
						background-color: rgba(255, 255, 255, .25);
						text-align: center;
						color: #ddd;
						line-height: 35px;
						font-size: 14px;
					}

					.start {
						width: 100%;
						height: 92rpx;
						background: url(../../static/images/ycfcx.png) no-repeat;
						background-size: 100%;
						display: inline-block;
						text-align: center;
						color: #fff;
						font-size: 18px;
						font-weight: 600;
						letter-spacing: 3px;
						line-height: 92rpx;
					}
				}
			}
		}

		.uni-input-placeholder {
			color: #ddd;
		}
	}
</style>
