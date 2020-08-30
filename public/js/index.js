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

const controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
	triggerElement: '#section-3',
	triggerHook: 0.2,
	duration: '50%',
	offset: 0,
})
	.setClassToggle('#section-3-gif', 'visible')
	.addTo(controller);

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

// const cursor = document.getElementById('section-3-terminal-cursor');
// const terminalTextEl = document.getElementById('section-3-terminal-text');
// const consolePrompt = '~/sandscriptProject $ ';
// let terminalText = consolePrompt;
// const typeSpeed = 200;

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const typeChar = char => {
// 	terminalText += char;
// 	terminalTextEl.innerHTML = terminalText + '&#65372;';
// };

// const typeCommand = async command => {
// 	for (const char of command) {
// 		typeChar(char);
// 		await sleep(typeSpeed);
// 	}
// };

// const runCommand = async () => {
// 	typeChar('<br>');
// 	typeChar(consolePrompt);

// 	console.log(terminalTextEl.children[terminalTextEl.children.length - 1]);

// 	// cursor.style.top = terminalTextEl.childNodes[-1].style
// 	// for (const line of terminalTextEl.childNodes) {
// 	// 	console.log(line);
// 	// }
// };

// const commands = ['vim main.ss', 'ls'];

// const simulateConsole = async () => {
// 	for (const command of commands) {
// 		await typeCommand(command);
// 		await runCommand();
// 	}
// };

// simulateConsole();
