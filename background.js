"use strict";
$(function () {
	let darkmode = true;
	console.log("Tiktok++ has Injected");
	if (window.location.href.match(/setting/g)) {
	}
	if (darkmode) {
		$("head").append('<link rel="stylesheet" href="https://gamerboytr.github.io/Tiktok-Plus-Plus/src/css/darkmode.css">');
	}
});
