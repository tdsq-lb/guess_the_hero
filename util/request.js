// const BASE_URL = "https://tdsq.top"
const BASE_URL = "https://www.findobejects.cn"
// const BASE_URL = "http://localhost:3000"

export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			// title: '加载中'
		});
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			if (options) {
				data: options.data
			},
			// data: options.data || {},
			success: (res) => {
				uni.hideLoading();
				if (res.statusCode !== 200) {
					uni.showToast({
						icon: "none",
						title: "获取数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					icon: "none",
					title: "获取数据失败"
				})
				reject(err)
			}
		})
	})

}
