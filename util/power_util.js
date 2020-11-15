export const setTimeStamp = () => {
	try {
		uni.setStorageSync('SET-TIMESTAMP', Date.parse(new Date()));
	} catch (e) {
		// error
	}
}
export const getTimeStamp = () => {
	try {
		const value = uni.getStorageSync('SET-TIMESTAMP');
		if (value) {
			return value
		}
	} catch (e) {
		// error
	}
}

export const setPower = (data) => {
	try {
		uni.setStorageSync('SET-POWER', data);
	} catch (e) {
		// error
	}
}
export const getPower = () => {
	try {
		const value = uni.getStorageSync('SET-POWER');
		// if (value) {
		// 	return value
		// }else{
		// 	return 0
		// }
		return value
	} catch (e) {
		// error
	}
}
