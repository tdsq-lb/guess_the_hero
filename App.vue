<script>
	export default {
		globalData: {
			select_number: 3
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		height: 100%;
	}

	image {
		width: 100%;
		height: 100%;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 1891359 */
		src: url('//at.alicdn.com/t/font_1891359_nvuxadp77u.eot');
		src: url('//at.alicdn.com/t/font_1891359_nvuxadp77u.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1891359_nvuxadp77u.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1891359_nvuxadp77u.woff') format('woff'),
			url('//at.alicdn.com/t/font_1891359_nvuxadp77u.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1891359_nvuxadp77u.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-jiazai1:before {
		content: "\e7ba";
	}

	.icon-zanting:before {
		content: "\e619";
	}

	.icon-icon_play:before {
		content: "\e60f";
	}

	.icon-zhongxin:before {
		content: "\e63f";
	}

	.icon-LOL-xiaguxianfeng:before {
		content: "\e662";
	}

	.icon-yingxiong:before {
		content: "\e60d";
	}

	.icon-tiaozhan:before {
		content: "\e6b3";
	}

	.icon-tishi:before {
		content: "\e66a";
	}
</style>
