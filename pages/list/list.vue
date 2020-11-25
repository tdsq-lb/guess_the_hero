<template>
	<view class="list">
		<view class="list-banner">
			<image src="https://tdsq.top/static/images/banner.png" lazy-load mode="scaleToFill" @load="imageLoad"></image>
		</view>
		<view class="list-content">
			<view class="list-content-item" v-for="(item,index) in data" :key="item.id">
				<view class="list-content-item-user">
					<image class="avatar" :src="(getImgUrl(item.avatar))" lazy-load mode="scaleToFill" :data-index="index" @error="imageError"></image>
					<text class="name">{{item.name}}</text>
				</view>
				<view class="list-content-item-answer">
					{{item.answer}}
				</view>
			</view>
		</view>
		<!-- <view class="list-rule">

		</view> -->
	</view>
</template>

<script>
	import {
		getImgUrl
	} from '../../util/util.js'
	export default {
		data() {
			return {
				data: []
			}
		},
		onShow() {
			console.log('重新显示  ================== >>>>')
			this.initData()
		},
		created() {
			this.initData()
			uni.showLoading({
				title: '加载中',
				mask: true
			});
		},
		methods: {
			async initData() {
				const result = await this.$myRequest({
					url: '/api/ranking'
				})
				this.data = result.data
			},
			// 图片加载发生错误
			imageError(e) {
				const index = e.target.dataset.index;
				this.data[index].photo = 'no_anchor_living.png'
			},
			getImgUrl(img) {
				let errimg = 'no_anchor_living.png'
				if (img === errimg) {
					return `/static/images/${img}`
				} else {
					return `https://cdn.tgp.qq.com/lol/images/resources/usericon/${img}`
				}
			},
			imageLoad(e) {
				console.log('背景图片加载完成 =====>>>>')
				uni.hideLoading();
			}
		}
	}
</script>

<style lang="scss">
	.list {
		width: 100%;
		height: auto;
	}

	.list-banner {
		width: 100%;
		height: 330rpx;
	}

	.list-content {
		height: auto;
		margin-bottom: 200rpx;

		.list-content-item {
			margin: 15rpx 20rpx;
			display: flex;
			justify-content: space-between;
			padding: 10rpx 0;
			border-bottom: 2rpx solid #e6e6e6;
			box-sizing: border-box;

			.list-content-item-user {
				flex: 2;
				display: flex;
				align-items: center;

				.avatar {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					border: 4rpx solid #ba9a6c;
					box-sizing: border-box;
				}

				.name {
					font-size: 28rpx;
					margin-left: 20rpx;
				}
			}

			.list-content-item-answer {
				flex: 1;
				line-height: 80rpx;
				text-align: center;
			}
		}

		// .list-rule{

		// }
	}
</style>
