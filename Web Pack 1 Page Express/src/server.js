const express = require("express"),
	path = require("path"),
	fs = require("fs"),
	app = express();

app.get("/", (req, res) => {
	const pathToHTMLFile = path.resolve(__dirname, "../dist/index.html");
	const contentToHTMLFile = fs.readFileSync(pathToHTMLFile, "utf-8");
	res.send(contentToHTMLFile);
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(3000, () => {
	console.log("Application is running on http://localhost:3000");
});
