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
			targets: '#logo',
			opacity: 1,
		},
		'-=1250',
	);

const logo = document.getElementById('logo');

const logoHoveredScale = 1.2;

const logoMouseEntered = () => {
	anime({
		targets: logo,
		scale: logoHoveredScale,
	});
};

const logoMouseLeft = () => {
	anime({
		targets: logo,
		scale: 1,
	});
};

logo.addEventListener('mouseenter', logoMouseEntered);
logo.addEventListener('mouseleave', logoMouseLeft);
