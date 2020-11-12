export const isLogin = () => {
	var islogin = {}
	try {
		const value = uni.getStorageSync('USER-INFO');
		if (value) {
			islogin = value;
		} else {
			uni.showModal({
				showCancel: false,
				content: '还未登陆，请先登陆',
				confirmText: '确定',
				success: function(res) {
					if (res.confirm) {
						uni.redirectTo({
							url: '../index/index'
						})
					}
				}
			});
			islogin = false
		}
	} catch (e) {
		// error
	}
	return islogin
}
