document.getElementById('name').style.transform = 'translate(-120px, -120px)';

var tl = anime.timeline({
	easing: 'easeInOutExpo',
	duration: 1250,
});

tl.add({
	targets: '#name',
	translateX: 120,
	translateY: 120,
	opacity: 1,
})
	.add(
		{
			targets: '#name-underline',
			width: 240,
		},
		'-=500',
	)
	.add(
		{
			targets: '#section-1-footer',
			opacity: 1,
		},
		'-=500',
	)
	.add(
		{
			targets: '.logo',
			opacity: 1,
		},
		'-=1250',
	);

const controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
	triggerElement: '#section-3',
	triggerHook: 0.2,
	duration: '50%',
	offset: 0,
})
	.setClassToggle('#section-3-gif', 'visible')
	.addTo(controller);

const logo = document.getElementsByClassName('logo')[0];

const logoHoveredScale = 1.2;

const logoMouseEnter = () => {
	anime({
		targets: logo,
		scale: logoHoveredScale,
	});
};

const logoMouseLeave = () => {
	anime({
		targets: logo,
		scale: 1,
	});
};

logo.addEventListener('mouseenter', logoMouseEnter);
logo.addEventListener('mouseleave', logoMouseLeave);

const section2Arrow = document.getElementById("section-2-arrow");

const section2ArrowMouseEnter = () => {
	anime({
		targets: section2Arrow,
		scale: 1.1
	});
};
const section2ArrowMouseLeave = () => {
	anime({
		targets: section2Arrow,
		scale: 1
	});
};

section2Arrow.addEventListener('mouseenter', section2ArrowMouseEnter);
section2Arrow.addEventListener('mouseleave', section2ArrowMouseLeave);

const section3Panels = document.querySelectorAll('article.section-3-panel');

for (const panel of section3Panels) {
	new ScrollMagic.Scene({ triggerElement: panel, triggerHook: 0.7 })
		.setClassToggle(panel, "visible") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
}

const slideshowContainer = document.getElementById("section-5-alice-insights-slideshow");

let slideIndex = 0;
const slideIntervalTime = 5000;
setInterval(() => {
	console.log(slideIndex);
	for (let i = 0; i < slideshowContainer.children.length; i++) {
		slideshowContainer.children[i].classList.remove("slideShowActive");
	}
	slideshowContainer.children[slideIndex].classList.add("slideShowActive");

	if (slideIndex == slideshowContainer.children.length - 1)
		slideIndex = 0;
	else
		slideIndex++;
}, slideIntervalTime);
