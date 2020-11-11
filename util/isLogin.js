export const isLogin = () => {
	var islogin = {}
	uni.getStorage({
		key: 'USER-INFO',
		success: (res) => {
			islogin = res.data
		},
		fail: (err) => {
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
		},
	});
	return islogin
}
