/* eslint-disable no-param-reassign */

const path = require('path')
const webpack = require('webpack')

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
	const isProduction = configType === 'PRODUCTION'

	// Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
	storybookBaseConfig.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

	// use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
	storybookBaseConfig.module.rules[0].use[0].loader = require.resolve(
		'babel-loader'
	)

	// use @babel/preset-react for JSX and env (instead of staged presets)
	storybookBaseConfig.module.rules[0].use[0].options.presets = [
		require.resolve('@babel/preset-react'),
		require.resolve('@babel/preset-env')
	]

	// use @babel/plugin-proposal-class-properties for class arrow functions
	storybookBaseConfig.module.rules[0].use[0].options.plugins = [
		require.resolve('@babel/plugin-proposal-class-properties'),
		require.resolve('babel-plugin-remove-graphql-queries')
	]

	storybookBaseConfig.module.rules.push(
		{
			test: /\.(ttf|woff|woff2|eot|svg)$/,
			use: 'file-loader?name=[name].[ext]',
			exclude: /\.inline.svg$/
		},
		{
			test: /\.inline.svg$/,
			use: [
				{ loader: 'babel-loader' },
				{
					loader: 'react-svg-loader',
					options: {
						jsx: true
					}
				}
			]
		},
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
					loader: 'css-loader'
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
	)

	storybookBaseConfig.plugins.push(
		new webpack.DefinePlugin({
			STORYBOOK: JSON.stringify(true),
			PRODUCTION: JSON.stringify(isProduction)
		})
	)

	storybookBaseConfig.resolve.alias['@'] = path.resolve(__dirname, '../src/')

	storybookBaseConfig.resolve.mainFields = ['browser', 'module', 'main']

	return storybookBaseConfig
}
