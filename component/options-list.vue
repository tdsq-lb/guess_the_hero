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
	} from '../util/isLogin.js'
	export default {
		data() {
			return {
				userInfo: null, //	用户信息
				dataList: [],
				isanswe: ''
			}
		},
		props: {
			dataitem: Array, // 名称数组
			answe: String //正确答案
		},
		created() {
			// console.log(this.dataitem,'============>>>>')
		},
		methods: {
			handleItem(e) {
				this.userInfo = isLogin()
				const userid = this.userInfo.id
				console.log(this.isanswe, '正确答案')
				if (this.isanswe == e) {
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
								this.$emit('nextQuestion')
								// this.$parent.initData()
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
			}
		},
		watch: {
			dataitem: function(src, old) {
				this.dataList = src
				console.log(this.dataitem, '============>>>>')
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
			width: 33%;
			background-color: red;
			padding: 15rpx 15rpx;
			box-sizing: border-box;
			color: #FFFFFF;
			margin: 5rpx 0;

		}
	}
</style>
