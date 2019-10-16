$(document).ready(function() {
	$(document).on("scroll", function() {
		const top = $(this).scrollTop();

		const hiThereOpen = document.getElementById("hiThere-open");
		const ibrahimFadelOpen = document.getElementById("ibrahimFadel-open");
		const highdevOpen = document.getElementById("highdev-open");
		if (top <= 290) {
			hiThereOpen.classList.add("slideInDown");
			ibrahimFadelOpen.classList.add("slideInRight");
			highdevOpen.classList.add("slideInUp");
		} else {
			hiThereOpen.classList.remove("slideInDown");
			ibrahimFadelOpen.classList.remove("slideInRight");
			highdevOpen.classList.remove("slideInUp");
		}
	});
});
