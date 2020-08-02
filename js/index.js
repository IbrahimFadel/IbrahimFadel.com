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
			width: 250,
		},
		'-=500',
	)
	.add(
		{
			targets: '#section-1-footer',
			opacity: 1,
		},
		'-=500',
	);
