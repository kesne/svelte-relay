const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		bundle: ['./src/index.ts'],
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
		},
		extensions: ['.mjs', '.ts', '.tsx', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{ loader: 'babel-loader' }],
			},
			{
				test: /\.svelte$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'svelte-loader',
						options: {
							emitCss: false,
							hotReload: true,
							preprocess: require('svelte-preprocess')({
								typescript: {
									transpileOnly: true,
								},
							}),
						},
					},
				],
			},
		],
	},
	mode,
	plugins: [new HtmlWebpackPlugin()],
	devtool: prod ? false : 'source-map',
};
