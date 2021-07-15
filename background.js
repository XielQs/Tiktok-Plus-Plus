"use strict";
$(function () {
	let darkmode = true;
	console.log("Tiktok++ has Injected");
	if (window.location.href.match(/setting/g)) {
	}
	if (darkmode) {
		$("head").append('<link rel="stylesheet" href="https://raw.githubusercontent.com/gamerboytr/Tiktok-Plus-Plus/main/src/css/darkmode.css">');
	}
});
