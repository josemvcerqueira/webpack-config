const path = require("path"),
	CleanWebpackPlugin = require("clean-webpack-plugin"),
	HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devServer: {
		contentBase: path.resolve(__dirname, "./dist"),
		index: "index.html",
		port: 3000
	},
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./dist"),
		// when a website is deployed it needs to be changed to the name of the website - public path
		publicPath: ""
	},
	module: {
		rules: [
			{ test: /\.(png|jpg)$/, use: ["file-loader"] },
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/env"],
						plugins: ["transform-class-properties"]
					}
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin("dist"),
		new HtmlWebpackPlugin({
			cache: true,
			template: "./src/index.html"
		})
	]
};
