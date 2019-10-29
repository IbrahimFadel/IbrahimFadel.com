window.scrollTo(0, 0);

startFadeInTimeouts();

window.addEventListener("scroll", scrolled);

function scrolled() {
	document.getElementById("hi-there").style.transition = "opacity 0.4s ease";
	if (window.scrollY == 0) {
		document.getElementById("hi-there").style.opacity = "1";
		document.getElementById("ibrahim-fadel").style.transition =
			"opacity 0.4s ease";
		document.getElementById("ibrahim-fadel").style.opacity = "1";
		document.getElementById("highschool-amateur").style.transition =
			"opacity 0.4s ease";
		document.getElementById("highschool-amateur").style.opacity = "1";
		return;
	}
	///////////////////////////////////////////////////////////
	document.getElementById("hi-there").style.opacity = String(
		0.6 - window.scrollY / 250
	);
	document.getElementById("ibrahim-fadel").style.transition =
		"opacity 0.4s ease";
	document.getElementById("ibrahim-fadel").style.opacity = String(
		0.8 - window.scrollY / 250
	);
	document.getElementById("highschool-amateur").style.transition =
		"opacity 0.4s ease";
	document.getElementById("highschool-amateur").style.opacity = String(
		1 - window.scrollY / 250
	);
	///////////////////////////////////////////////////////////
	if (window.scrollY < 1000) {
		document.getElementById("about-me").style.opacity = String(
			window.scrollY / 250 - 1
		);
		document.getElementById("about-me-text1").style.opacity = String(
			window.scrollY / 250 - 2
		);
		document.getElementById("about-me-text2").style.opacity = String(
			window.scrollY / 250 - 2.2
		);
		document.getElementById("about-me-underline").style.opacity = String(
			window.scrollY / 250 - 1
		);
	} else {
		document.getElementById("about-me").style.opacity = String(
			5 - window.scrollY / 250
		);
		document.getElementById("about-me-text1").style.opacity = String(
			5 - window.scrollY / 250
		);
		document.getElementById("about-me-text2").style.opacity = String(
			5 - window.scrollY / 250
		);
		document.getElementById("about-me-underline").style.opacity = String(
			5 - window.scrollY / 250
		);
	}
	// test
	if (window.scrollY < 2000) {
		document.getElementById("small-project-1").style.opacity = String(
			window.scrollY / 250 - 5
		);
		document.getElementById("small-project-2").style.opacity = String(
			window.scrollY / 250 - 5
		);
	} else {
		document.getElementById("small-project-1").style.opacity = String(
			7 - window.scrollY / 250
		);
		document.getElementById("small-project-2").style.opacity = String(
			7 - window.scrollY / 250
		);
	}
	if (window.scrollY < 2500) {
		document.getElementById("small-project-3").style.opacity = String(
			window.scrollY / 250 - 7
		);
		document.getElementById("small-project-4").style.opacity = String(
			window.scrollY / 250 - 7
		);
	} else {
		document.getElementById("small-project-3").style.opacity = String(
			8 - window.scrollY / 250
		);
		document.getElementById("small-project-4").style.opacity = String(
			8 - window.scrollY / 250
		);
	}
	if (window.scrollY < 3200) {
		document.getElementById("small-project-5").style.opacity = String(
			window.scrollY / 250 - 9
		);
		document.getElementById("small-project-6").style.opacity = String(
			window.scrollY / 250 - 9
		);
	} else {
		document.getElementById("small-project-5").style.opacity = String(
			9 - window.scrollY / 250
		);
		document.getElementById("small-project-6").style.opacity = String(
			9 - window.scrollY / 250
		);
	}

	if (window.scrollY < 750) {
		document.getElementById("about-me-underline").style.width = String(
			window.scrollY / 5
		);
	}
	///////////////////////////////////////////////////////////
	if (window.scrollY < 1450) {
		document.getElementById("small-projects-underline").style.width = String(
			window.scrollY / 2
		);
	}
}

function startFadeInTimeouts() {
	setTimeout(() => {
		document.getElementById("hi-there").style.opacity = "1";
		document
			.getElementById("hi-there")
			.classList.add("animateMe", "slideInDown");
	}, 1000);
	setTimeout(() => {
		document.getElementById("ibrahim-fadel").style.opacity = "1";
		document
			.getElementById("ibrahim-fadel")
			.classList.add("animateMe", "flipX");
	}, 2000);
	setTimeout(() => {
		document.getElementById("highschool-amateur").style.opacity = "1";
		document
			.getElementById("highschool-amateur")
			.classList.add("animateMe", "slideInUp");
	}, 3000);
}
