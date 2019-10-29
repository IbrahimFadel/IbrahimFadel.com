const EMAIL_PASSWRD = require("./constants.js");
const nodemailer = require("nodemailer");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 7654;

app.use(express.urlencoded());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("*", (req, res) => {
	console.log(req.params);
	res.sendFile(__dirname + req.params["0"]);
});

app.post("/sendMessage", (req, res) => {
	const from = req.body.from;
	const subject = req.body.subject;
	const body = req.body.body;
	console.log(from, subject, body);
	sendEmail(from, subject, body);
	res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
	"Server listening on port: " + PORT + "";
});

async function sendEmail(from, subject, body) {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "ibrahim.fadel@ucc.on.ca",
			pass: EMAIL_PASSWRD
		}
	});

	const mailOptions = {
		from: from,
		to: "ibrahim.fadel@ucc.on.ca",
		subject: subject,
		html: "<p>" + body + "</p>"
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) console.error(err);
		else console.info(info);
	});
}
