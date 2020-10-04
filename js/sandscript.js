var tl = anime.timeline({
	easing: 'easeInOutExpo',
	duration: 1250,
});

tl.add(
	{
		targets: '.logo',
		opacity: 1,
	},
	'-=0',
);

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
