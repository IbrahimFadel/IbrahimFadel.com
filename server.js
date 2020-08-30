const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.get('/css/:file', (req, res) => {
	res.sendFile(`${__dirname}/css/${req.params.file}`);
});

app.get('/js/:file', (req, res) => {
	res.sendFile(`${__dirname}/js/${req.params.file}`);
});

app.get('/assets/:file', (req, res) => {
	res.sendFile(`${__dirname}/assets/${req.params.file}`);
});

app.get('/assets/videos/:file', (req, res) => {
	res.sendFile(`${__dirname}/assets/videos/${req.params.file}`);
});

app.get('/assets/fonts/:file', (req, res) => {
	res.sendFile(`${__dirname}/assets/fonts/${req.params.file}`);
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
