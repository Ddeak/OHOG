const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')

const NpmInstallPlugin = require('npm-install-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

const PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, '../server/build/bundle')
}

const common = {
	entry: [
		PATHS.app
	],	
	module: {
		loaders: [
			{
				test: /\.jsx?$/, 
				exclude: /node_modules/, 
				include: PATHS.app,
				loaders: ['react-hot', 'babel']
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			},
			{ 
				test: /\.scss$/, 
				loaders: ['style', 'css', 'sass'], 
				include: PATHS.app 
			},
			{ 
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	}
}

if(TARGET === 'start' || TARGET==='production' || !TARGET) {
	module.exports = merge(common, {
		watchOptions: {
			poll: true
		},
		devtool: 'eval-source-map',
		devServer: {
			contentBase: PATHS.build,
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			stats: 'errors-only',
			host: process.env.HOST,
			port: process.env.PORT
		},
		plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new NpmInstallPlugin({
			save: true
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			jquery: 'jquery'
		}),
		new webpack.DefinePlugin({
			SOCKET_PORT: process.env.SOCKET_PORT
		})
		]
	})
}

if(TARGET === 'build') {
  module.exports = merge(common, {})
}