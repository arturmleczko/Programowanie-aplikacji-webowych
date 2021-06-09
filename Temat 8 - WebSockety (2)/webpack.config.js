const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = [
	{
		target: 'node',
		mode: 'development',
		entry: './src/server.ts',
		output: {
			filename: 'server.js',
			path: path.resolve(__dirname, 'dist'),
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js', '.json'],
		},
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: ['ts-loader'],
					exclude: /node_modules/,
				},
			],
		},
		externals: {
			bufferutil: 'bufferutil',
			'utf-8-validate': 'utf-8-validate',
		},
	},
	{
		mode: 'development',
		entry: './src/index.ts',
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, 'dist'),
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js', '.json'],
		},
		devtool: 'inline-source-map',
		plugins: [
			new CopyPlugin([
				{
					from: 'src/*.html',
					to: '',
					flatten: true,
				},
			]),
		],
		module: {
			rules: [
				{
					test: /\.(gif|png|jpe?g|svg)$/i,
					use: [
						'file-loader',
						{
							loader: 'image-webpack-loader',
						},
					],
				},
				{
					test: /\.tsx?$/,
					use: ['ts-loader'],
					exclude: /node_modules/,
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						{
							loader: 'style-loader',
						},
						'css-loader',
						'sass-loader',
					],
				},
			],
		},
	},
];
