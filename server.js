const fs = require("fs");
const http = require("http");

let server = http.createServer(function (req, res) {
	if (req.url === "/") {
		let dataFile = fs.readFileSync(__dirname + "/public/home.html");
		res.end(dataFile);
	} else if (req.url === "/about") {
		let dataFile = fs.readFileSync(__dirname + "/public/about.html");
		res.end(dataFile);
	} else if (req.url === "/contact") {
		let dataFile = fs.readFileSync(__dirname + "/public/contact.html");
		res.end(dataFile);
	} else if (req.url === "/blog") {
		let dataFile = fs.readFileSync(__dirname + "/public/blog.html");
		res.end(dataFile);
	}
	// Serve other files based on their name
	else {
		let filePath = __dirname + "/public" + req.url;
		if (fs.existsSync(filePath)) {
			let dataFile = fs.readFileSync(filePath);
			res.end(dataFile);
		} else {
			// Return 404 Not Found for files that do not exist
			res.statusCode = 404;
			res.end("404 Not Found");
		}
	}
});

server.listen(3000, function () {
	console.log("Server Connected on port: 3000");
});
