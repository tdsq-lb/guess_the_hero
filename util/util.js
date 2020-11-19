export const isLogin = () => {
	try {
		const value = uni.getStorageSync('USER-INFO');
		if (value) {
			return value;
		}
	} catch (e) {
		// error
	}
}
export const checkIsLogin = () => {
	try {
		const value = uni.getStorageSync('USER-INFO');
		if (value) {
			return value;
		} else {
			uni.showModal({
				title: '提示',
				content: '您还未登录，请先登录',
				success: function(res) {
					if (res.confirm) {
						uni.redirectTo({
							url: '../index/index'
						})
					} else if (res.cancel) {
						console.log('用户取消了登录');
					}
				}
			});
		}
	} catch (e) {
		// error
	}
}
