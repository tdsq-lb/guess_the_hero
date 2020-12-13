<template>
	<view class="index">
		<view class="page-section">
			<view class="page-section-spacing">
				<swiper class="swiper" :autoplay="true" :interval="2000" :duration="500" circular>
					<swiper-item>
						<image src="../../static/images/index_1.jpg" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/images/index_2.jpg" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/images/index_3.jpg" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- navbar -->
		<view class="navbar">
			<view :class="{active:index == 0}" @click="handleNavBar(0)">KDA</view>
			<view :class="{active:index == 1}" @click="handleNavBar(1)">神龙尊者</view>
			<view :class="{active:index == 2}" @click="handleNavBar(2)">奥德赛</view>
		</view>
		<view class="index_container">
			<block v-if="index == 0">
				<view class="item1"><span @click="handleBtn">立即挑战</span></view>
				<view class="item2"><span>立即挑战</span></view>
				<view class="item3"><span>立即挑战</span></view>
				<view class="item4"><span>立即挑战</span></view>
				<view class="item5"><span>立即挑战</span></view>
			</block>
			<block v-if="index == 1">
				<span>神龙尊者</span>
			</block>
			<block v-if="index == 2">
				<span>奥德赛</span>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0
			}
		},
		created() {
			// uni.showLoading({
			// 	title: '加载中',
			// });
		},
		methods: {
			handleNavBar(e) {
				this.index = e
			},
			handleBtn() {
				uni.navigateTo({
					url: '../start/start'
				});
			},
			imageLoad(e) {
				console.log(e.detail, '背景图片加载完成 =====>>>>')
				uni.hideLoading();
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifdef H5 */
	.page-section-spacing /deep/ .uni-swiper-slide-frame {
		margin: 0px 20px;
		width: 90% !important;
	}

	/* #endif */

	.index {
		width: 100%;
		height: 100%;
		position: relative;
		box-sizing: border-box;

		.page-section {
			height: 360rpx;
			padding: 20rpx 0;
		}

		.swiper {

			height: 360rpx;

			swiper-item {
				padding: 0 10rpx;
				box-sizing: border-box;

				image {
					border-radius: 20rpx;
				}
			}

			/* #ifdef MP-WEIXIN */
			swiper-item {
				margin: 0px 20px;
				width: 90% !important;
			}

			/* #endif */
			/* #ifdef MP-TOUTIAO */
			swiper-item {
				margin: 0px 20px;
				width: 90% !important;
			}

			/* #endif */

		}

		.navbar {
			width: 100%;
			height: 70rpx;
			line-height: 70rpx;
			padding: 0 20rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-around;

			// background-color: red;
			view {
				font-size: 30rpx;
				width: 20%;
				text-align: center;
			}

			.active {
				font-size: 35rpx;
				color: #fd364e;
				border-bottom: 4rpx solid #fd364e;
			}
		}

		.index_container {
			width: 100%;
			height: auto;
			padding: 20rpx;
			padding-top: 0;
			box-sizing: border-box;

			view {
				width: 100%;
				height: 120rpx;
				background-color: #6064d6 !important;
				border-radius: 15rpx;
				display: flex;
				align-items: center;
				padding-right: 20rpx;
				box-sizing: border-box;
				margin: 20rpx 0;

				span {
					margin-left: auto;
					display: block;
					color: #f5d185;
					font-size: 25rpx;
					width: 200rpx;
					height: 60rpx;
					line-height: 60rpx;
					border: 2rpx solid #f5d185;
					background: rgba(0, 0, 0, .65);
					text-align: center;
				}
			}

			.item1 {
				background: url(../../static/images/side-bar-on.png) no-repeat -20px -339px;
			}

			.item2 {
				background: url(../../static/images/side-bar-on.png) no-repeat -20px -87px;
			}

			.item3 {
				background: url(../../static/images/side-bar-on.png) no-repeat -20px -149px;
			}

			.item4 {
				background: url(../../static/images/side-bar-on.png) no-repeat -20px -213px;
			}

			.item5 {
				background: url(../../static/images/side-bar-on.png) no-repeat -20px -23px;
			}
		}
	}
</style>
