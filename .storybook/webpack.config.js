const path = require('path')
const webpack = require('webpack')
const PurgeCssPlugin = require('purgecss-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const generateWebpackConfig = require('../scripts/generateWebpackConfig')
const purgeConfig = require('../scripts/purge')

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
	const isProduction = configType === 'PRODUCTION'

	const rules = [
		{
			test: /\.(jpg|png|jpeg|jpg)$/,
			loader: 'file-loader',
			include: path.resolve(__dirname, '../static/')
		},
		{
			test: /\.story\.js?$/,
			loaders: [require.resolve('@storybook/addon-storysource/loader')],
			enforce: 'pre'
		},
		{
			test: /\.css$/,
			exclude: /\.module\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
				},
				'postcss-loader'
			],
			include: path.resolve(__dirname, '../src')
		},

		{
			test: /\.module\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: true,
						localIdentName: '[local]-[hash:base64:5]'
					}
				},
				'postcss-loader'
			],
			include: path.resolve(__dirname, '../src')
		}
	]

	const plugins = [
		new webpack.DefinePlugin({
			STORYBOOK: JSON.stringify(true),
			PRODUCTION: JSON.stringify(isProduction)
		})
	]

	if (isProduction) {
		console.log(isProduction)
		plugins.push(
			new PurgeCssPlugin(purgeConfig),
			new OptimizeCSSAssetsPlugin({})
		)
	}

	// Return the altered config
	return generateWebpackConfig(storybookBaseConfig, {
		rules,
		plugins
	})
}
