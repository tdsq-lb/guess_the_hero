<template>
	<view class="content">
		<view class="banner">
			<image src="../../static/images/927_2020091625641414.jpg" mode=""></image>
		</view>
		<view class="box">
			<view class="item" v-for="(item,index) in data" :key="item.id">
				<view class="item-user">
					<image class="rank" :src="(getImgUrl(index,0))" mode=""></image>
					<image class="avatar" :src="(getImgUrl(item.photo,1))" mode=""></image>
					<text class="name">{{item.name}}</text>
				</view>
				<text class="answer">
					{{item.week_topic}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: []
			}
		},
		created() {
			this.initData()
		},
		methods: {
			async initData() {
				const result = await this.$myRequest({
					url: '/api/ranking'
				})
				this.$data.data = result.data
			},
			getImgUrl(img, e) {
				let imgurl = null;
				if (e) {
					imgurl = `https://cdn.tgp.qq.com/lol/images/resources/usericon/${img}`
				} else {
					imgurl = `/static/images/tft_rank_${img + 1}.png`
				}
				return imgurl
			},
		}
	}
</script>

<style lang="scss">
	page {
		height: auto;
	}

	.content {
		width: 100%;
		height: 100%;
		background-color: #fde9b4;

		image {
			width: 100%;
			height: 100%;
		}

		.banner {
			width: 100%;
			height: 350rpx;
			margin-bottom: 20rpx;
		}

		.box {
			width: 90%;
			height: auto;
			margin: 20rpx auto;
			background-color: #FFFFFF;
			padding: 10rpx;

			.item {
				width: 100%;
				height: 100rpx;
				// background-color: red;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.item-user {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.rank {
						width: 45rpx;
						height: 60rpx;
					}

					.avatar {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						margin: 0 20rpx;
					}

					.name {
						font-size: 30rpx;
					}
				}

				.answer {
					// flex: 1;
				}


			}
		}
	}
</style>
