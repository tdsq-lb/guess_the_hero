<template>
	<view class="content">
		<view class="title" @click="handleRemoveUser">
			重新绑定ID
		</view>
		<view class="head">
			<image class="head_avatar" :src="userdata.avatar" mode=""></image>
		</view>
		<view class="info">
			<text class="name">{{userdata.name}}</text>
			<text>{{userdata.area}}</text>
		</view>
	</view>
</template>

<script>
	import {
		isLogin
	} from '../../util/isLogin.js'
	export default {
		data() {
			return {
				userdata: null,
			}
		},
		created() {
			this.$data.userdata = isLogin()
		},
		methods: {
			// 删除用户
			handleRemoveUser() {
				uni.removeStorage({
					key: 'USER-INFO',
					success: (res) => {
						uni.redirectTo({
							url: '../index/index'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	// page {
	// 	height: 100%;
	// }

	.content {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(https://tdsq.top/static/images/user_bg.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 40rpx;
		box-sizing: border-box;
		// position: relative;

		.title {
			position: absolute;
			right: 40rpx;
			top: 0;
			color: #FFFFFF;
			font-size: 26rpx;
		}

		.head {
			width: 180rpx;
			height: 180rpx;
			margin: 0 auto;


			.head_avatar {
				width: 170rpx;
				height: 170rpx;
				border-radius: 50%;
				border: 4rpx solid #FFFFFF;
				box-sizing: border-box;
			}
		}

		.info {
			width: 100%;
			height: 100rpx;

			text {
				display: block;
				color: #FFFFFF;
				text-align: center;
				font-size: 30rpx;
				margin: 20rpx 0;
			}

			.name {
				font-size: 35rpx;
			}
		}
	}
</style>
