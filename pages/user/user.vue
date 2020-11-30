<template>
	<view class="user">
		<image class="user-bg" :src="this.imgSrc('bg.jpg')" mode="scaleToFill" lazy-load @load="imageLoad" />
		<view class="user-content">
			<image class="user-content-image" :src="this.imgSrc('bg-msg.png')" mode="scaleToFill" lazy-load @load="imageLoad" />
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
						<view class="box2-img">
							<image :src="getRankImgSrc(userdata.flexible_SET_of_row)" lazy-load mode="scaleToFill" @error="imageError"></image>
						</view>
						<view class="box2-rank">
							{{userdata.flexible_SET_of_row}}
						</view>
					</view>
				</view>
			</view>
			<button open-type="share" class="forward">
				<!-- #ifdef MP-WEIXIN -->
				转发给微信好友
				<!-- #endif -->
				<!-- #ifdef MP-TOUTIAO -->
				转发给好友
				<!-- #endif -->
			</button>
		</view>
	</view>
</template>

<script>
	import {
		isLogin
	} from '../../util/util.js'
	export default {
		onShow: function(options) {
			const istrue = isLogin()
			if (istrue) {
				this.islogin = true
				this.userdata = Object.assign(this.userdata, isLogin())
			} else {
				this.islogin = false
			}
		},
		data() {
			return {
				userdata: {
					area: '',
					name: '',
					avatar: '',
					flexible_SET_of_row: ''
				},
				islogin: true
			}
		},
		// #ifdef MP-TOUTIAO 
		onShareAppMessage(option) {
			return {
				title: '台词猜英雄',
				desc: '英雄联盟听台词猜英雄，赢免费皮肤',
				path: '/pages/user/user', // ?后面的参数会在转发页面打开时传入onLoad方法
				// imageUrl: 'https://e.com/e.png', // 支持本地或远程图片，默认是小程序 icon
				// templateId: '这是开发者后台设置的分享素材模板id',
				success() {
					console.log('转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调');
				},
				fail() {
					console.log('转发发布器调起失败');
				}
			}
		},
		// #endif
		// #ifdef MP-WEIXIN
		onShareAppMessage: function() {
			return {
				title: '英雄联盟听台词猜英雄',
				path: '/pages/user/user',
				success: function(res) {}
			}
		},
		// #endif 
		created() {
			uni.showLoading({
				title: '加载中',
			});
			const istrue = isLogin()
			if (istrue) {
				this.islogin = true
				this.userdata = Object.assign(this.userdata, isLogin())
			} else {
				this.islogin = false
			}

		},
		methods: {
			// 登录
			handleIsLogin() {
				uni.navigateTo({
					url: '../login/login'
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
									uni.navigateTo({
										url: '../login/login'
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
			},
			imageLoad(e) {
				console.log(e.detail, '背景图片加载完成 =====>>>>')
				uni.hideLoading();
			},
			getRankImgSrc(e) {
				if (e) {
					const rank = e.substring(0, 2)
					let flexible = '/static/images/'
					switch (rank) {
						case '黑铁':
							flexible = flexible + 'icon_ht.png'
							break;
						case '青铜':
							flexible = flexible + 'icon-qt.png'
							break;
						case '白银':
							flexible = flexible + 'icon-by.png'
							break;
						case '黄金':
							flexible = flexible + 'icon-hj.png'
							break;
						case '铂金':
							flexible = flexible + 'icon-bj.png'
							break;
						case '钻石':
							flexible = flexible + 'icon-zs.png'
							break;
						case '大师':
							flexible = flexible + 'icon-ds.png'
							break;
						case '宗师':
							flexible = flexible + 'icon-zongs.png'
							break;
						case '王者':
							flexible = flexible + 'icon-wz.png'
							break;
						default:
							return '/static/images/no_anchor_living.png'
					}
					return flexible
				}
			}
		}
	}
</script>

<style lang="scss">
	.user {
		width: 100%;
		height: 100%;
		position: relative;

		.user-bg {
			width: 100%;
			height: 992rpx;
		}

		.user-content {
			width: 100%;
			height: 800rpx;
			position: absolute;
			top: 200rpx;
			left: 0;

			.user-content-image {
				width: 100%;
				height: 100%;
			}

			.reset {
				position: absolute;
				right: 10rpx;
				top: 20rpx;
				color: #c4a264;
				font-size: 28rpx;
				height: 50rpx;
				line-height: 50rpx;
			}
		}

		.user-bg-content {
			position: absolute;
			left: 50%;
			top: 80rpx;
			transform: translate(-50%);
			background-image: url(https://tdsq.top/static/images/sprite-img_01.png);
			background-size: 100% 100%;
			width: 440rpx;
			height: 550rpx;
		}

		.forward {
			width: 70%;
			height: 100rpx;
			background-image: url(../../static/images/ycfcx.png);
			background-size: 100% 100%;
			color: #FFFFFF;
			text-align: center;
			line-height: 100rpx;
			font-size: 32rpx;
			position: absolute;
			left: 50%;
			bottom: 0%;
			transform: translate(-50%);
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

				.box2-img {
					width: 100rpx;
					height: 100rpx;
					margin: 0 auto;

					image {
						border-radius: 50%;
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
</style>
