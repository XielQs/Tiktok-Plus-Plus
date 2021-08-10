"use strict";
$(function () {
	chrome.tabs.query({ active: true, lastFocusedWindow: true, currentWindow: true }, (tabs) => {
		const thisURL = tabs[0].url;
		if (thisURL.match(/(https?:\/\/)?(www.)?tiktok\.com/g)) {
			$("html").removeClass("ignore");
		}
		$(".tiktokplusplus-active").on("click", () => {
			if (thisURL.match(/(https?:\/\/)?(www.)?tiktok\.com/g)) {
				chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
			}
		});
	});
	function changeStatus(text, color) {
		document.querySelector(".status ul>li").innerHTML = `Durum : <span class="text text-${color}">${text}</span>`;
	}
	chrome.storage.sync.get(["active"], (result) => {
		if (!result.active) {
			chrome.storage.sync.set({ active: "yes" });
		}
		if (result.active === "yes") {
			$("#stoptiktokplusplus").show();
			changeStatus("Aktif", "success");
		} else {
			$("#starttiktokplusplus").show();
			changeStatus("DeAktif", "danger");
		}
	});
	$.post("https://www.gamerboytr.ml/TiktokPlusPlus/index.php", "version", (data) => {
		data = JSON.parse(data);
		document.querySelector(".logo b").innerHTML += " v" + data.version;
		$("body").removeAttr("hidden");
	});
	$("#options").on("click", () => {
		let logotext = $(".logo>img+span").html();
		$(".logo>img+span").html("<b>Çok Yakında :)</b>");
		setTimeout(() => {
			$(".logo>img+span").html(logotext);
		}, 1500);
	});
	$("#gototiktokbtn").on("click", () => {
		window.open("https://www.tiktok.com", "_blank");
	});
	$(".report-isuless").on("click", () => {
		let a = document.createElement("a");
		a.setAttribute("href", "mailto:offical.gamerboytr@yandex.com");
		a.style.display = "none";
		document.querySelector("html").append(a);
		a.click();
		a.remove();
	});
	$("#stoptiktokplusplus").on("click", () => {
		chrome.storage.sync.set({ active: "no" }, function () {
			let logotext = $(".logo>img+span").html();
			$(".logo>img+span").html("<b class='text text-danger'>TikTokPlusPlus DeAktif!</b>");
			$("#starttiktokplusplus").show();
			$("#stoptiktokplusplus").hide();
			changeStatus("DeAktif", "danger");
			setTimeout(() => {
				$(".logo>img+span").html(logotext);
			}, 1500);
		});
	});
	$("#starttiktokplusplus").on("click", () => {
		chrome.storage.sync.set({ active: "yes" }, function () {
			let logotext = $(".logo>img+span").html();
			$(".logo>img+span").html("<b class='text text-success'>TikTokPlusPlus Aktif!	</b>");
			$("#starttiktokplusplus").hide();
			$("#stoptiktokplusplus").show();
			changeStatus("Aktif", "success");
			setTimeout(() => {
				$(".logo>img+span").html(logotext);
			}, 1500);
		});
	});
});
