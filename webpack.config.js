const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'app.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /\/node_modules\//,
			use: {
				loader: 'babel-loader'
			}
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			m: 'mithril',
		}),
		new HtmlWebpackPlugin({
			inject: true,
			hash: false,
			template: './src/index.html',
			filename: 'index.html'
		})
	]
}