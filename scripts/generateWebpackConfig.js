const merge = require('webpack-merge')
const path = require('path')

/**
 *
 * @param {object} config
 * @param {object} overwrites
 * @return {object}
 */

const generateWebpackConfig = (config, { rules = [], plugins = [] }) => {
	const base = {
		output: {
			globalObject: 'this' // required for webworkers
		},

		resolve: {
			alias: {
				'@': path.resolve(__dirname, '../src/')
			},
			mainFields: ['browser', 'module', 'main']
		},

		module: {
			rules: [
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
				...rules
			]
		},

		plugins
	}

	return merge(config, base)
}

module.exports = generateWebpackConfig
