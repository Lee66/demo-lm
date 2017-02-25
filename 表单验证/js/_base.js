  define(function() {
	
	/* prompt start */
	var iprompt = function() {};
	var i_callback = function() {};
	iprompt.prototype = {
		alert: function(message , callback) {
			if(typeof(callback) == 'function') {
				i_callback = callback;
			}
			//创建span
			var ipromptSpan = document.createElement("span");
			ipromptSpan.innerHTML = message;
			//创建p
			var ipromptP = document.createElement("p");
			ipromptP.appendChild(ipromptSpan);
			//创建divBox--确定按钮
			var alertOKBtn = document.createElement("span");
			alertOKBtn.innerHTML = "确定";
			//给divBox添加class名称
			alertOKBtn.className = "alertOKBtn";
			//创建divBox--提示内容框
			var ipromptBox = document.createElement("div");
			//给divBox添加class名称
			ipromptBox.className = "ipromptBox  zoomIn  animated";
			ipromptBox.appendChild(ipromptP);
			ipromptBox.appendChild(alertOKBtn);
			//创建div
			var ipromptDiv = document.createElement("div");
			//给div添加class名称
			ipromptDiv.className = "iprompt";
			ipromptDiv.zIndex = "10000";
			//全部添加到class名称为ipromptDiv的div中
			ipromptDiv.appendChild(ipromptBox);
			//将div节点添加到body中
			document.getElementsByTagName("body")[0].appendChild(ipromptDiv);
			//关闭滚动条
			document.getElementsByTagName("html")[0].setAttribute("style", "overflow: hidden;")

		},
		confirm: function(message, callback) {
			if(typeof(callback) == 'function') {
				i_callback = callback;
			}
			//创建span
			var ipromptSpan = document.createElement("span");
			ipromptSpan.innerHTML = message;
			//创建p
			var ipromptP = document.createElement("p");
			ipromptP.appendChild(ipromptSpan);
			//创建divBox--取消按钮
			var confirmCancelBtn = document.createElement("span");
			confirmCancelBtn.innerHTML = "取消";
			//给divBox添加class名称
			confirmCancelBtn.className = "confirmCancelBtn";
			//创建divBox--确定按钮
			var confirmOKBtn = document.createElement("span");
			confirmOKBtn.innerHTML = "确定";
			//给divBox添加class名称
			confirmOKBtn.className = "confirmOKBtn";
			//创建divBox--提示内容框
			var ipromptBox = document.createElement("div");
			//给divBox添加class名称
			ipromptBox.className = "ipromptBox  zoomIn  animated";
			ipromptBox.appendChild(ipromptP);
			ipromptBox.appendChild(confirmCancelBtn);
			ipromptBox.appendChild(confirmOKBtn);
			//创建div
			var ipromptDiv = document.createElement("div");
			//给div添加class名称
			ipromptDiv.className = "iprompt";
			//全部添加到class名称为ipromptDiv的div中
			ipromptDiv.appendChild(ipromptBox);
			//将div节点添加到body中
			document.getElementsByTagName("body")[0].appendChild(ipromptDiv);
			//关闭滚动条
			document.getElementsByTagName("html")[0].setAttribute("style", "overflow: hidden;")
		},
		bubble: function(message) {
			document.getElementsByClassName("bubble")[0] && document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("bubble")[0]);
			var bubbleSpan = document.createElement("span");
			bubbleSpan.innerHTML = message;
			//创建p
			var bubbleP = document.createElement("p");
			bubbleP.className = "bubble zoomIn animated";
			bubbleP.appendChild(bubbleSpan);
			//将div节点添加到body中
			document.getElementsByTagName("body")[0].appendChild(bubbleP);
			setTimeout('document.getElementsByClassName("bubble")[0] && document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("bubble")[0])', 2000);
		},
		confirmClose: function() {
			document.getElementsByTagName("html")[0].removeAttribute("style", "overflow: hidden;");
			//清除节点
			document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("iprompt")[0]);
			return false;
		},
//		alertClose: function() {
////			var ele=document.getElementsByTagName("html")[0];
////			if(ele.style.overflow=="hidden")
//			document.getElementsByTagName("html")[0].removeAttribute("style", "overflow: hidden;");
//			//清除节点
//			document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("iprompt")[0]);
//		},
		success: function(callback) {
			document.getElementsByTagName("html")[0].removeAttribute("style", "overflow: hidden;");
			//清除节点
			document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("iprompt")[0]);
			if(typeof(callback) == 'function') {
				callback();
			}
		}
	};
	var ipromptFn = new iprompt();
	//confirm取消
	$("body").on("click", ".confirmCancelBtn", function() {
		ipromptFn.confirmClose();
	});
	//alert确定
	$("body").on("click", ".alertOKBtn", function() {
//		ipromptFn.alertClose();
		ipromptFn.success(i_callback);
	});
	//确认按钮
	$("body").on("click", ".confirmOKBtn", function() {
		ipromptFn.success(i_callback);
	});
	/* prompt end */

	
	/*show images start*/
	var showImg = function() {};
	showImg.prototype = {
		open: function(imgUrl) {
			//创建img节点
			var showImgImg = document.createElement("img");
			//添加图片src
			showImgImg.setAttribute("src", imgUrl);
			//创建i节点
			var showImgI = document.createElement("i");
			//给i节点添加class
			showImgI.className = "iconfont";
			//给i节点添加字体图标名称
			showImgI.innerHTML = "&#xe600;";
			//创建div
			var showImgDiv = document.createElement("div");
			//给div添加class名称
			showImgDiv.className = "showImg";
			//将i节点添加到class名称为showImg的div中
			showImgDiv.appendChild(showImgI);
			//将img节点添加到class名称为showImg的div中
			showImgDiv.appendChild(showImgImg);
			//将div节点添加到body中
			document.getElementsByTagName("body")[0].appendChild(showImgDiv);
			//关闭滚动条
			document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden;height: 100%;")
		},
		close: function() {
			document.getElementsByTagName("body")[0].removeAttribute("style", "overflow: hidden;height: 100%;");
			//清除节点
			document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("showImg")[0]);
		}
	};
	//关闭图片展示
	var showImgFn = new showImg();
	$("body").on("click", ".showImg i", function() {
		showImgFn.close();
	});
	/*show images end*/
	/*表单验证 start*/
	var verification = function() {
		this.id = "";
		// 	this.boxMessage="";
		this.Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子   
		this.ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
	};
	verification.prototype = {
		_getId: function(id) {
			return this.id = document.getElementById(id);
		},
		verModalBox: function(boxMessage) {
			var verModalBoxI = document.createElement("i");
			verModalBoxI.innerHTML = "&#xe600;";
			verModalBoxI.className = "iconfont verClose";
			var verModalBoxP = document.createElement("p");
			verModalBoxP.innerHTML = boxMessage;
			var verModalBoxSpan = document.createElement("span");
			verModalBoxSpan.innerHTML = "确定"
			verModalBoxSpan.className = "verClose";
			var verModalBoxDiv = document.createElement("div");
			verModalBoxDiv.className = "verModalBox";
			verModalBoxDiv.appendChild(verModalBoxI);
			verModalBoxDiv.appendChild(verModalBoxP);
			verModalBoxDiv.appendChild(verModalBoxSpan);
			var verModalDiv = document.createElement("div");
			verModalDiv.className = "verModal";
			verModalDiv.appendChild(verModalBoxDiv);
			document.getElementsByTagName("body")[0].appendChild(verModalDiv);
			document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden;height: 100%;")
		},
		verModalBoxClose: function() {
			document.getElementsByTagName("body")[0].removeAttribute("style", "overflow: hidden;height: 100%;");
			document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("verModal")[0]);
		},
		verMarker: function(boxMessage, sort) {
			var vermark = document.getElementsByClassName("verMark")[sort];
			vermark.style.display = "block";
			vermark.innerHTML = boxMessage;
		},
		_verMarkerClose: function(sort) {
			var vermark = document.getElementsByClassName("verMark")[sort];
			vermark.style.display = "none";
		},
		// 身份证验证位值.10代表X
		_IdCardValidate: function(idCard) {
			idCard = this._trim(idCard.replace(/ /g, "")); //去掉字符串头尾空格                     
			if(idCard.length == 15) {
				return this._isValidityBrithBy15IdCard(idCard); //进行15位身份证的验证    
			} else if(idCard.length == 18) {
				var a_idCard = idCard.split(""); // 得到身份证数组   
				if(this._isValidityBrithBy18IdCard(idCard) && this._isTrueValidateCodeBy18IdCard(a_idCard)) { //进行18位身份证的基本验证和第18位的验证
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			};
		},
		/**  
		 * 判断身份证号码为18位时最后的验证位是否正确  
		 * @param a_idCard 身份证号码数组  
		 * @return  
		 */
		_isTrueValidateCodeBy18IdCard: function(a_idCard) {
			var sum = 0; // 声明加权求和变量   
			if(a_idCard[17].toLowerCase() == 'x') {
				a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作   
			}
			for(var i = 0; i < 17; i++) {
				sum += this.Wi[i] * a_idCard[i]; // 加权求和   
			};
			valCodePosition = sum % 11; // 得到验证码所位置   
			if(a_idCard[17] == this.ValideCode[valCodePosition]) {
				return true;
			} else {
				return false;
			};
		},
		/**  
		 * 验证18位数身份证号码中的生日是否是有效生日  
		 * @param idCard 18位书身份证字符串  
		 * @return  
		 */
		_isValidityBrithBy18IdCard: function(idCard18) {
			var year = idCard18.substring(6, 10);
			var month = idCard18.substring(10, 12);
			var day = idCard18.substring(12, 14);
			var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
			// 这里用getFullYear()获取年份，避免千年虫问题   
			if(temp_date.getFullYear() != parseFloat(year) ||
				temp_date.getMonth() != parseFloat(month) - 1 ||
				temp_date.getDate() != parseFloat(day)) {
				return false;
			} else {
				return true;
			};
		},
		/**  
		 * 验证15位数身份证号码中的生日是否是有效生日  
		 * @param idCard15 15位书身份证字符串  
		 * @return  
		 */
		_isValidityBrithBy15IdCard: function(idCard15) {
			var year = idCard15.substring(6, 8);
			var month = idCard15.substring(8, 10);
			var day = idCard15.substring(10, 12);
			var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
			// 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
			if(temp_date.getYear() != parseFloat(year) ||
				temp_date.getMonth() != parseFloat(month) - 1 ||
				temp_date.getDate() != parseFloat(day)) {
				return false;
			} else {
				return true;
			};
		},
		//去掉字符串头尾空格   
		_trim: function(str) {
			return str.replace(/(^\s*)|(\s*$)/g, "");
		},
		/**  
		 * 通过身份证判断是男是女  
		 * @param idCard 15/18位身份证号码   
		 * @return 'female'-女、'male'-男  
		 */
		_maleOrFemalByIdCard: function(idCard) {
			idCard = this._trim(idCard.replace(/ /g, "")); // 对身份证号码做处理。包括字符间有空格。   
			if(idCard.length == 15) {
				if(idCard.substring(14, 15) % 2 == 0) {
					return 'female';
				} else {
					return 'male';
				}
			} else if(idCard.length == 18) {
				if(idCard.substring(14, 17) % 2 == 0) {
					return 'female';
				} else {
					return 'male';
				}
			} else {
				return null;
			}
		},
		_isVerFn: function(id, boxMessage, sort, regs) {
			this._getId(id);
			var str = this.id.value.replace(/(^\s+)|(\s+$)|(\s)/g, "");
			(sort != undefined || "") && this._verMarkerClose(sort);
			var reg = regs === "" ? "" : new RegExp(regs);
			if (reg == "" || (!reg.test(str) && str.length != 0)) {
				sort != undefined || "" ? this.verMarker(boxMessage, sort) : this.verModalBox(boxMessage);
			}
		},
		letterNum: function(id, boxMessage, sort) {
			this._isVerFn(id, boxMessage, sort, "^[0-9a-zA-Z\s]+$");
		},
		isChina: function(id, boxMessage, sort) {
			this._isVerFn(id, boxMessage, sort, "^[\u4e00-\u9fa5]{2,6}$");
		},
		isIDIdentification: function(id, boxMessage, sort) {
			this._getId(id);
			var str = this.id.value.replace(/(^\s+)|(\s+$)|(\s)/g, "");
			(sort != undefined || "") && this._verMarkerClose(sort);
			if(!this._IdCardValidate(str) && str.length != 0) {
				sort != undefined || "" ? this.verMarker(boxMessage, sort) : this.verModalBox(boxMessage);
			}
		},
		isEmpty: function(id, boxMessage, sort){
			this._isVerFn(id, boxMessage, sort, "");
		}
	};
	//关闭弹框
	var myVer = new verification();
	$("body").on("click", ".verModalBox .verClose", function() {
		myVer.verModalBoxClose();
	});
	/*表单验证 end*/

	/*点击下拉选择 start*/
	$('.inputInfo').on('click', function() {
		var isSee = $(this).find('.inputValueList').is(":hidden")
		if(isSee) {
			$(this).find('.inputValueList').show();
		} else {
			$(this).find('.inputValueList').hide();
		};
	});
	$('.inputInfo').on('mouseleave', function() {
		$(this).find('.inputValueList').hide();
	});

	$('.inputValueList ol').find('li').on('click', function() {
		var _thisHtml = $(this).html();
		var iptValue = $(this).parent().parent().siblings('.input-in');
		iptValue.html(_thisHtml);
		$('.inputValueList').hide();
	});	
	/*点击下拉选择 end*/
	//弹出框
	var Smodal = function() {};
	Smodal.prototype = {
		open: function(ele) {
			//			console.log(ele)
			$(ele).css("display", "block");
			document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden;height: 100%;")
		},
		close: function(ele) {
			$(ele).css("display", "none");
			document.getElementsByTagName("body")[0].removeAttribute("style", "overflow: hidden;height: 100%;");
		}
	};
	var mymodal = new Smodal();
	$(".closemodal").click(function() {
		mymodal.close(".smodal");
	});

	return {
		showImg: showImg,
		verification: verification,
		Smodal:Smodal,
		iprompt:iprompt
	};
});