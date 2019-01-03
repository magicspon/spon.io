const merge = require('webpack-merge')
const path = require('path')

/**
 *
 * @param {object} config
 * @param {object} overwrite
 * @return {object}
 */
const generateWebpackConfig = (config, overwrite) => {
	const base = {
		output: {
			globalObject: 'this' // required for webworkers
		},

		resolve: {
			alias: {
				'@': path.resolve(__dirname, '../src/')
			}
		},

		module: {
			rules: [
				{
					test: /\.svg$/,
					use: [
						{ loader: 'babel-loader' },
						{
							loader: 'react-svg-loader',
							options: {
								es5: true
							}
						}
					]
				},
				...overwrite.rules
			]
		}
	}

	return merge(config, base)
}

module.exports = generateWebpackConfig
