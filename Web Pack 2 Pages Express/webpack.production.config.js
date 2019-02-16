const path = require("path"),
	UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
	CleanWebpackPlugin = require("clean-webpack-plugin"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	HtmlMinifierPlugin = require("html-minifier-webpack-plugin");

module.exports = {
	mode: "production",
	// prettier-ignore
	entry: {
		"hello_world": "./src/hello_world.js",
		"trip": "./src/trip.js"
	},
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "./dist"),
		// when a website is deployed it needs to be changed to the name of the website - public path
		publicPath: "/static/"
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCssAssetsPlugin()
		],
		minimize: true,
		splitChunks: {
			chunks: "all",
			minSize: 10000,
			maxSize: 0,
			automaticNameDelimiter: "_"
		}
	},
	module: {
		rules: [
			{ test: /\.(png|jpg)$/, use: ["file-loader"] },
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							plugins: () => {
								return [
									require("precss"),
									require("autoprefixer")
								];
							}
						}
					},
					"sass-loader"
				]
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
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
		new CleanWebpackPlugin("dist"),
		new HtmlWebpackPlugin({
			filename: "hello_world.html",
			inject: true,
			chunks: ["hello_world", "hello_world_trip", "[id].css"],
			hash: true,
			cache: true,
			title: "Hello World",
			description: "Hello World",
			template: "./src/hello_world.html"
		}),
		new HtmlWebpackPlugin({
			filename: "img.html",
			inject: true,
			chunks: ["trip", "hello_world_trip", "[id].css"],
			hash: true,
			cache: true,
			title: "Trip",
			description: "Trip",
			template: "./src/img.html"
		}),
		new HtmlMinifierPlugin({
			html5: true,
			collapseWhitespace: true
		})
	]
};
