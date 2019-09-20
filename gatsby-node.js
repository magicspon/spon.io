const path = require(`path`)
const glob = require('glob')
const hash = require('string-hash')
const merge = require('webpack-merge')
const PurgeCssPlugin = require('purgecss-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const R = require('ramda')

const purgeConfig = {
	paths: glob.sync(path.join(__dirname, '/src/**/**/**/*.js'), {
		nodir: true
	}),
	extractors: [
		{
			extractor: class {
				static extract(content) {
					return content.match(/[A-Za-z0-9-_:/]+/g) || []
				}
			},
			extensions: ['js']
		}
	],
	whitelist: [''],
	whitelistPatterns: [/headroom/, /module--/]
}

exports.onCreateWebpackConfig = ({ actions, stage, getConfig, rules }) => {
	const prevConfig = getConfig()
	const imgsRule = rules.images()

	const newUrlLoaderRule = {
		...imgsRule,
		test: new RegExp(
			imgsRule.test
				.toString()
				.replace('svg|', '')
				.slice(1, -1)
		)
	}

	prevConfig.module.rules = [
		// Remove the base url-loader images rule entirely
		...prevConfig.module.rules.filter(rule => {
			if (rule.test) {
				return rule.test.toString() !== imgsRule.test.toString()
			}
			return true
		}),
		// Put it back without SVG loading
		newUrlLoaderRule
	]

	actions.replaceWebpackConfig(
		merge(prevConfig, {
			output: {
				globalObject: 'this' // required for webworkers
			},

			resolve: {
				alias: {
					'@': path.resolve(__dirname, 'src')
				},
				mainFields: ['browser', 'module', 'main']
			},

			module: {
				rules: [
					{
						test: /\.(ttf|woff|woff2|eot)$/,
						use: 'file-loader?name=[name].[ext]',
						exclude: /icons/,
						include: path.resolve(__dirname, 'static')
					},
					{
						test: /\.svg$/,
						include: path.resolve(__dirname, 'src/icons'),
						use: ({ resource }) => [
							{
								loader: ['svg-react-loader'],
								options: {
									jsx: true,
									svgo: {
										plugins: [
											{
												cleanupIDs: {
													prefix: `svg${hash(
														path.relative(__dirname, resource)
													)}`
												}
											}
										]
									}
								}
							}
						]
					}
				]
			}
		})
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

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	// https://www.npmjs.com/package/gatsby-remark-relative-images#to-convert-frontmatter-images
	fmImagesToRelative(node)

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const {
		data: {
			allMarkdownRemark: { edges }
		}
	} = await graphql(`
		query {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "work" } } }
				sort: { fields: frontmatter___date, order: DESC }
			) {
				edges {
					previous {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
					next {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
					node {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}
	`)

	const previous = R.pluck('previous')(edges)
	const next = R.pluck('next')(edges)
	const nodes = R.pluck('node')(edges)

	nodes.forEach(({ fields: { slug } }, index, { length }) => {
		const p = previous[index] ? previous[index] : next[length - 2]
		const n = next[index] ? next[index] : previous[1]

		createPage({
			path: slug,
			component: path.resolve(`./src/templates/work-post.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug,
				previous: p,
				next: n
			}
		})
	})
}
