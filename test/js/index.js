function closeAlert() {
	document.getElementById("warning").style.opacity = "0";
	setTimeout(() => {
		document.getElementById("warning").style.display = "none";
	}, 500);
}
