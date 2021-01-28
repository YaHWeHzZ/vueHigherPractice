export default {
	// 仅展示卡号前后四位，入参必须为string
	hiddenAcct(acct) {
		if (typeof acct != 'string' || acct === null || acct === '') {
			return '--';
		} else {
			return (
				acct.slice(0, 4) +
				' **** **** ' +
				acct.slice(acct.length - 4, acct.length)
			);
		}
	}
};