if( ("onhashchange" in window) && ((typeof document.documentMode==="undefined") || document.documentMode==8)) {
    // 浏览器支持onhashchange事件
    window.onhashchange = hashChangeFire;  // TODO，对应新的hash执行的操作函数
} else {
    // 不支持则用定时器检测的办法
    setInterval(function() {
        var ischanged = isHashChanged();  // TODO，检测hash值或其中某一段是否更改的函数
        if(ischanged) {
            hashChangeFire();  // TODO，对应新的hash执行的操作函数
        }
    }, 150);
}
function hashChangeFire () {
	console.log(location.hash)
}
