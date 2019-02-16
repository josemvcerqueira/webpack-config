const express = require("express"),
	path = require("path"),
	fs = require("fs"),
	app = express();

app.get("/hello-world/", (req, res) => {
	const pathToHTMLFile = path.resolve(__dirname, "../dist/hello_world.html");
	const contentToHTMLFile = fs.readFileSync(pathToHTMLFile, "utf-8");
	res.send(contentToHTMLFile);
});

app.get("/trip/", (req, res) => {
	const pathToHTMLFile = path.resolve(__dirname, "../dist/img.html");
	const contentToHTMLFile = fs.readFileSync(pathToHTMLFile, "utf-8");
	res.send(contentToHTMLFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(3000, () => {
	console.log("Application is running on http://localhost:3000");
});
