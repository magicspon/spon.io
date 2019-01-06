const path = require(`path`)
const PurgeCssPlugin = require('purgecss-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const purgeConfig = require('./scripts/purge')
const generateWebpackConfig = require('./scripts/generateWebpackConfig')

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
	const prevConfig = getConfig()

	actions.replaceWebpackConfig(
		generateWebpackConfig(prevConfig, { rules: [], plugins: [] })
	)

	// Add PurgeCSS in production
	// See: https://github.com/gatsbyjs/gatsby/issues/5778#issuecomment-402481270
	if (stage.includes('build')) {
		actions.setWebpackConfig({
			plugins: [
				new PurgeCssPlugin(purgeConfig),
				new OptimizeCSSAssetsPlugin({})
			]
		})
	}
}

exports.onCreateBabelConfig = ({ actions }) => {
	actions.setBabelPlugin({
		name: 'babel-plugin-inline-react-svg'
	})
}
