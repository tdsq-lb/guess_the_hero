<template>
	<view class="user">
		<view class="user-bg">
			<view class="reset" @click="handleRemoveUser">
				<text class="iconfont icon-zhongxin"></text>
				<text>重新绑定ID</text>
			</view>
			<view class="user-bg-content">
				<view class="avatar">
					<view class="avatar1" v-if="!islogin"></view>
					<view class="avatar2" v-if="islogin">
						<image :src="userdata.avatar" lazy-load mode="scaleToFill" @error="imageError"></image>
					</view>
				</view>
				<view class="box">
					<view class="box1" v-if="!islogin">
						<view class="box1-text">
							您尚未登陆
						</view>
						<view class="box1-btn" @click="handleIsLogin">
							点击登录
						</view>
					</view>
					<view class="box2" v-if="islogin">
						<view class="box2-name">
							<text>{{userdata.area}}</text>
							<text>{{userdata.name}}</text>
						</view>
						<view class="box2-rank">
							{{userdata.flexible_SET_of_row}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		isLogin
	} from '../../util/util.js'
	export default {
		data() {
			return {
				userdata: null,
				islogin: true
			}
		},
		created() {
			const istrue = isLogin()
			if (istrue) {
				this.islogin = true
				this.userdata = isLogin()
			} else {
				this.islogin = false
			}

		},
		methods: {
			// 登录
			handleIsLogin() {
				uni.redirectTo({
					url: '../index/index'
				})
			},
			// 删除用户
			handleRemoveUser() {
				uni.showModal({
					title: '提示',
					content: '是否重新绑定ID',
					success: function(res) {
						if (res.confirm) {
							uni.removeStorage({
								key: 'USER-INFO',
								success: (res) => {
									uni.redirectTo({
										url: '../index/index'
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			// 图片加载发生错误
			imageError(e) {
				this.userdata.avatar = '/static/images/no_anchor_living.png'
			}
		}
	}
</script>

<style lang="scss">
	.user {
		width: 100%;
		height: 100%;
		background-image: url(https://tdsq.top/static/images/bg.jpg);
		background-repeat: no-repeat;
		background-size: 100%;

		.user-bg {
			width: 100%;
			height: 100%;
			background-image: url(https://tdsq.top/static/images/bg-msg.png);
			background-repeat: no-repeat;
			background-size: 100%;
			background-position: 0 180rpx;
			position: relative;

			.reset {
				position: absolute;
				right: 10rpx;
				top: 200rpx;
				color: #c4a264;
				font-size: 28rpx;
				height: 50rpx;
				line-height: 50rpx;
				// background-color: black;
			}

			.user-bg-content {
				position: absolute;
				left: 50%;
				top: 250rpx;
				transform: translate(-50%);
				background-image: url(https://tdsq.top/static/images/sprite-img_01.png);
				background-size: 100% 100%;
				width: 440rpx;
				height: 550rpx;
			}



			.avatar {
				position: absolute;
				top: -90rpx;
				left: 50%;
				transform: translate(-50%);

				.avatar1 {
					background-image: url(../../static/images/sprite-img_04.png);
					background-size: 100% 100%;
					width: 360rpx;
					height: 150rpx;

				}

				.avatar2 {
					background-image: url(../../static/images/sprite-img_06.png);
					background-size: 100% 100%;
					width: 360rpx;
					height: 150rpx;
					position: relative;

					image {
						width: 130rpx;
						height: 130rpx;
						border-radius: 50%;
						display: block;
						position: absolute;
						z-index: -1;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}
				}


			}

			.box {
				width: 320rpx;
				height: 70%;
				margin: 0 auto;
				margin-top: 60rpx;
				padding: 10rpx;
				box-sizing: border-box;
				position: relative;
				text-align: center;

				.box1 {
					color: #FFFFFF;
					font-size: 30rpx;

				}

				.box1-text {
					margin-top: 100rpx;
				}

				.box1-btn {
					background-image: url(../../static/images/sprite-img_11.png);
					background-size: 100% 100%;
					width: 226rpx;
					height: 88rpx;
					line-height: 88rpx;
					margin: 80rpx auto 0;
					font-weight: bold;
				}

				.box2 {
					// background-color: black;
					padding: 20rpx 0;
					box-sizing: border-box;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.box2-name {
						color: #95a0ad;
						font-size: 35rpx;

						text {
							display: block;
							padding: 10rpx;
						}
					}

					.box2-rank {
						color: #FFFFFF;
						font-size: 35rpx;
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
