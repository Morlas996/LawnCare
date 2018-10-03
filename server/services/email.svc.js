var sg = require("sendgrid")(process.env.SENDGRID_SECRET_KEY);

function makeRequest(from, subject, content) {
	// console.log(from);
	console.log(process.env.SENDGRID_SECRET_KEY);
	return sg.emptyRequest({
		method: 'POST',
		path: '/v3/mail/send',
		body: {
			personalizations: [{
				to: [{
					email: "dunstontc@gmail.com",
				}, ],
				subject: subject,
			}, ],
			from: {
				email: from,
			},
			content: [{
				type: 'text/plain',
				value: "You got a message from " + from + ": " + content,
			}, ],
		},
	});
};

exports.sendEmail = function (from, subject, content) {
	var request = makeRequest(from, subject, content);
	//With promise
	return sg.API(request)
		.then(response => {
			console.log(response.statusCode);
			console.log(response.body);
			console.log(response.headers);
		})
		.catch(error => {
			//error is an instance of SendGridError
			//The full response is attached to error.response
			console.log(error.response.body);
		});
}