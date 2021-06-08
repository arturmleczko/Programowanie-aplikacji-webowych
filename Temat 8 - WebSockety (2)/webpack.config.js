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
				// all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
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
				// all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
				{
					test: /\.(gif|png|jpe?g|svg)$/i,
					use: [
						'file-loader',
						{
							loader: 'image-webpack-loader',
							options: {
								bypassOnDebug: true, // webpack@1.x
								disable: true, // webpack@2.x and newer
							},
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
						// Creates `style` nodes from JS strings
						{
							loader: 'style-loader',
							// options: {
							//   // injectType: "singletonStyleTag"
							//   // injectType: "linkTag"
							// }
						},
						// Translates CSS into CommonJS
						'css-loader',
						// Compiles Sass to CSS
						'sass-loader',
					],
				},
			],
		},
	},
];
