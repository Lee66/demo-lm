function isTelphoneNum(telNum) {
	var telphoneNumPat = /^0d{2}-d{7,8}|0d{3}-d{7,8}$/;
	var matchArray = telNum.match(telphoneNumPat);
	if(matchArray != null) {
		return true;
	}
}
//手机号
function isMobilephoneNum(mobileNum) {
	var mobilephoneNumPat = /^1[34578]\d{9}$/;
	var matchArray = mobileNum.match(mobilephoneNumPat);
	if(matchArray != null) {
		return true;
	}
}
//纯数字
function isDigital(str) {
	var digitalPot = /^d*$/;
	var matchArray = str.match(digitalPot);
	if(matchArray != null) {
		return true;
	}
}
//身份证
function card(id) {
	var Wi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
	var ai = "10X98765432";
	var sum = 0
	var ssum = 0;
	for(var i = 0; i < 17; i++) {
		ssum = eval(Wi[i] * id.charAt(i));
		sum = ssum + sum;
	}
	var modNum = sum % 11;
	if(ai.charAt(modNum) == id.charAt(17)) {
		return true;
	}
}

